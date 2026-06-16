import { useMemo, useState } from "react";
import type { BenchmarkPoint } from "../data/portfolio";
import { formatPointLabel } from "../i18n";
import type { Locale } from "../i18n";

interface ChartCopy {
  eyebrow: string;
  title: string;
  context: string;
  latestWeek: string;
  all: string;
  ariaMode: string;
  ariaLegend: string;
  ariaChart: string;
  axisTitle: string;
  week: string;
  portfolio: string;
  pending: string;
  vsPrefix: string;
}

interface PerformanceChartProps {
  points: BenchmarkPoint[];
  copy: ChartCopy;
  locale: Locale;
}

type BenchmarkKey = "portfolio" | "voo" | "nasdaq100" | "smh" | "vt";
type ComparisonKey = Exclude<BenchmarkKey, "portfolio">;
type ChartMode = "all" | ComparisonKey;

const benchmarkSeries: { key: ComparisonKey; label: string; color: string }[] = [
  { key: "voo", label: "VOO", color: "#9a7d3b" },
  { key: "nasdaq100", label: "Nasdaq-100", color: "#4f6f73" },
  { key: "smh", label: "SMH", color: "#a75533" },
  { key: "vt", label: "VT", color: "#697c43" },
];

const chart = {
  width: 760,
  height: 316,
  left: 58,
  right: 24,
  top: 20,
  bottom: 48,
};

interface Scale {
  min: number;
  max: number;
  ticks: number[];
}

function getScale(points: BenchmarkPoint[], visibleKeys: BenchmarkKey[]): Scale {
  const values = points.flatMap((point) =>
    visibleKeys.map((key) => point[key]).filter((value): value is number => typeof value === "number"),
  );
  const rawMin = Math.min(0, ...values);
  const rawMax = Math.max(0, ...values);
  const min = Math.floor((rawMin - 1) / 2) * 2;
  const max = Math.ceil((rawMax + 1) / 2) * 2;
  const step = (max - min) / 4 || 1;

  return {
    min,
    max,
    ticks: Array.from({ length: 5 }, (_, index) => min + step * index),
  };
}

function getPoint(index: number, value: number, points: BenchmarkPoint[], scale: Scale) {
  const plotWidth = chart.width - chart.left - chart.right;
  const plotHeight = chart.height - chart.top - chart.bottom;
  const x = chart.left + (index / Math.max(points.length - 1, 1)) * plotWidth;
  const y = chart.top + ((scale.max - value) / (scale.max - scale.min || 1)) * plotHeight;

  return { x, y };
}

function getPointPath(points: BenchmarkPoint[], key: BenchmarkKey, scale: Scale) {
  const values = points
    .map((point, index) => ({ index, value: point[key] }))
    .filter((point): point is { index: number; value: number } => typeof point.value === "number");

  if (values.length < 2) {
    return "";
  }

  return values
    .map(({ index, value }, pathIndex) => {
      const { x, y } = getPoint(index, value, points, scale);
      return `${pathIndex === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function getComparisonAreaPath(points: BenchmarkPoint[], benchmarkKey: ComparisonKey, scale: Scale) {
  const pairs = points
    .map((point, index) => ({
      index,
      portfolio: point.portfolio,
      benchmark: point[benchmarkKey],
    }))
    .filter((point): point is { index: number; portfolio: number; benchmark: number } => typeof point.benchmark === "number");

  if (pairs.length < 2) {
    return "";
  }

  const portfolioPath = pairs.map(({ index, portfolio }) => getPoint(index, portfolio, points, scale));
  const benchmarkPath = pairs.map(({ index, benchmark }) => getPoint(index, benchmark, points, scale)).reverse();
  const polygon = [...portfolioPath, ...benchmarkPath];

  return polygon
    .map(({ x, y }, index) => `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ") + " Z";
}

export function PerformanceChart({ points, copy, locale }: PerformanceChartProps) {
  const [mode, setMode] = useState<ChartMode>("all");
  const latest = points[points.length - 1];
  const series = useMemo(
    () => [{ key: "portfolio" as const, label: copy.portfolio, color: "#263426" }, ...benchmarkSeries],
    [copy.portfolio],
  );
  const visibleSeries = useMemo(
    () => (mode === "all" ? series : series.filter((item) => item.key === "portfolio" || item.key === mode)),
    [mode, series],
  );
  const visibleKeys = visibleSeries.map((item) => item.key);
  const scale = useMemo(() => getScale(points, visibleKeys), [points, visibleKeys]);
  const selectedBenchmark = mode === "all" ? null : benchmarkSeries.find((item) => item.key === mode) ?? null;
  const zero = getPoint(0, 0, points, scale).y;
  const latestBenchmarkValue = selectedBenchmark ? latest[selectedBenchmark.key] : null;
  const latestSpread = typeof latestBenchmarkValue === "number" ? latest.portfolio - latestBenchmarkValue : null;

  return (
    <section className="performance-panel" aria-labelledby="performance-title">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="performance-title">{copy.title}</h2>
          <p className="chart-context">{copy.context}</p>
        </div>
        <div className="chart-summary">
          <span>{selectedBenchmark ? `${copy.vsPrefix} ${selectedBenchmark.label}` : copy.latestWeek}</span>
          <strong>{selectedBenchmark && latestSpread !== null ? formatValue(latestSpread, copy.pending) : formatValue(latest.portfolio, copy.pending)}</strong>
        </div>
      </div>

      <div className="benchmark-controls" aria-label={copy.ariaMode}>
        <button className={mode === "all" ? "active" : ""} onClick={() => setMode("all")}>
          {copy.all}
        </button>
        {benchmarkSeries.map((item) => (
          <button key={item.key} className={mode === item.key ? "active" : ""} onClick={() => setMode(item.key)}>
            {item.label}
          </button>
        ))}
      </div>

      <div className="legend" aria-label={copy.ariaLegend}>
        {visibleSeries.map((item) => (
          <span key={item.key}>
            <i style={{ backgroundColor: item.color }} />
            {item.label}
          </span>
        ))}
      </div>

      <div className="chart-frame">
        <svg viewBox={`0 0 ${chart.width} ${chart.height}`} role="img" aria-label={copy.ariaChart}>
          {scale.ticks.map((tick) => {
            const y = getPoint(0, tick, points, scale).y;
            return (
              <g key={tick.toFixed(2)}>
                <line x1={chart.left} x2={chart.width - chart.right} y1={y} y2={y} className="grid-line" />
                <text x={chart.left - 12} y={y + 4} textAnchor="end" className="axis-label">
                  {formatValue(tick, copy.pending)}
                </text>
              </g>
            );
          })}
          <text x={chart.left} y="13" className="axis-title">
            {copy.axisTitle}
          </text>
          <line x1={chart.left} x2={chart.width - chart.right} y1={zero} y2={zero} className="zero-line" />
          {selectedBenchmark ? <path d={getComparisonAreaPath(points, selectedBenchmark.key, scale)} className="comparison-area" /> : null}
          {visibleSeries.map((item) => (
            <path
              key={item.key}
              d={getPointPath(points, item.key, scale)}
              fill="none"
              stroke={item.color}
              strokeWidth={item.key === "portfolio" ? 4 : 2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {points.map((point, index) => {
            const x = getPoint(index, 0, points, scale).x;
            return (
              <g key={point.label}>
                <line x1={x} x2={x} y1={chart.top} y2={chart.height - chart.bottom} className="tick-line" />
                <text x={x} y={chart.height - 16} textAnchor="middle" className="tick-label">
                  {formatPointLabel(point.label, locale)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="benchmark-table">
        <div className="benchmark-row benchmark-row--head">
          <span>{copy.week}</span>
          <span>{copy.portfolio}</span>
          <span>VOO</span>
          <span>Nasdaq-100</span>
          <span>SMH</span>
          <span>VT</span>
        </div>
        {points.map((point) => (
          <div className="benchmark-row" key={point.label} title={point.note}>
            <span>{formatPointLabel(point.label, locale)}</span>
            <span>{formatValue(point.portfolio, copy.pending)}</span>
            <span>{formatValue(point.voo, copy.pending)}</span>
            <span>{formatValue(point.nasdaq100, copy.pending)}</span>
            <span>{formatValue(point.smh, copy.pending)}</span>
            <span>{formatValue(point.vt, copy.pending)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function formatValue(value: number | null, pendingLabel: string) {
  return typeof value === "number" ? `${value.toFixed(2)}%` : pendingLabel;
}
