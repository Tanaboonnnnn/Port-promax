import type { BenchmarkPoint } from "../data/portfolio";

interface PerformanceChartProps {
  points: BenchmarkPoint[];
}

const series = [
  { key: "portfolio", label: "Portfolio", color: "#263426" },
  { key: "sp500", label: "S&P 500", color: "#8f6f2a" },
  { key: "nasdaq100", label: "Nasdaq-100", color: "#4f6f73" },
  { key: "smh", label: "SMH", color: "#a75533" },
  { key: "vt", label: "VT", color: "#697c43" },
] as const;

function getPointPath(points: BenchmarkPoint[], key: (typeof series)[number]["key"], width: number, height: number) {
  const values = points
    .map((point, index) => ({ index, value: point[key] }))
    .filter((point): point is { index: number; value: number } => typeof point.value === "number");

  if (values.length < 2) {
    return "";
  }

  const allValues = points.flatMap((point) =>
    series
      .map(({ key: seriesKey }) => point[seriesKey])
      .filter((value): value is number => typeof value === "number"),
  );
  const min = Math.min(-3, ...allValues);
  const max = Math.max(9, ...allValues);
  const range = max - min || 1;

  return values
    .map(({ index, value }, pathIndex) => {
      const x = 42 + (index / Math.max(points.length - 1, 1)) * (width - 72);
      const y = 18 + ((max - value) / range) * (height - 46);
      return `${pathIndex === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function PerformanceChart({ points }: PerformanceChartProps) {
  const width = 760;
  const height = 292;
  const latest = points[points.length - 1];

  return (
    <section className="performance-panel" aria-labelledby="performance-title">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Weekly performance log</p>
          <h2 id="performance-title">Benchmark comparison</h2>
        </div>
        <div className="chart-summary">
          <span>Latest week</span>
          <strong>{latest.portfolio.toFixed(2)}%</strong>
        </div>
      </div>

      <div className="legend" aria-label="Benchmark legend">
        {series.map((item) => (
          <span key={item.key}>
            <i style={{ backgroundColor: item.color }} />
            {item.label}
          </span>
        ))}
      </div>

      <div className="chart-frame">
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Weekly portfolio and benchmark return chart">
          {[0, 1, 2, 3].map((line) => {
            const y = 24 + line * 64;
            return <line key={line} x1="34" x2="734" y1={y} y2={y} className="grid-line" />;
          })}
          <line x1="34" x2="734" y1="244" y2="244" className="axis-line" />
          {series.map((item) => (
            <path
              key={item.key}
              d={getPointPath(points, item.key, width, height)}
              fill="none"
              stroke={item.color}
              strokeWidth={item.key === "portfolio" ? 4 : 2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {points.map((point, index) => {
            const x = 42 + (index / Math.max(points.length - 1, 1)) * (width - 72);
            return (
              <g key={point.label}>
                <line x1={x} x2={x} y1="18" y2="250" className="tick-line" />
                <text x={x} y="274" textAnchor="middle" className="tick-label">
                  {point.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="benchmark-table">
        <div className="benchmark-row benchmark-row--head">
          <span>Week</span>
          <span>Portfolio</span>
          <span>S&P 500</span>
          <span>Nasdaq-100</span>
          <span>SMH</span>
          <span>VT</span>
        </div>
        {points.map((point) => (
          <div className="benchmark-row" key={point.label} title={point.note}>
            <span>{point.label}</span>
            <span>{point.portfolio.toFixed(2)}%</span>
            <span>{formatValue(point.sp500)}</span>
            <span>{formatValue(point.nasdaq100)}</span>
            <span>{formatValue(point.smh)}</span>
            <span>{formatValue(point.vt)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function formatValue(value: number | null) {
  return typeof value === "number" ? `${value.toFixed(2)}%` : "pending";
}
