export type ThesisStatus = "intact" | "strengthening" | "weakening" | "broken" | "under review";
export type Confidence = "high" | "medium" | "low";
export type Action = "buy" | "hold" | "trim" | "exit" | "do nothing";

export interface Holding {
  company: string;
  ticker: string;
  action: Action;
  status: ThesisStatus;
  confidence: Confidence;
  weight: number;
  shares?: number;
  entryPrice?: number;
  value: number;
  thesis: string;
  killCondition: string;
  assumptions: string[];
}

export interface BenchmarkPoint {
  label: string;
  portfolio: number;
  sp500: number | null;
  nasdaq100: number | null;
  smh: number | null;
  vt: number | null;
  note?: string;
}

export interface Decision {
  date: string;
  action: Action;
  subject: string;
  reason: string;
  sourceQuality: "high" | "medium" | "low";
}

export interface WatchlistItem {
  company: string;
  ticker: string;
  stance: Action;
  whyInteresting: string;
  whyNotYet: string;
}

export const portfolioSnapshot = {
  name: "Nick Portfolio Diary",
  mandate: "Blind $10,000 paper portfolio. Patient ownership, written theses, and cash when conviction is unclear.",
  asOf: "Week of 2026-06-22, recorded 2026-06-28; close-to-close period 2026-06-18 to 2026-06-26",
  localContext: "America/New_York",
  startingCapital: 10000,
  latestValue: 9595.31,
  cashWeight: 20.84,
  inceptionReturn: -4.05,
  processQuality:
    "Good: the weekly review used one close-to-close period for the portfolio and every benchmark, separated business evidence from price action, and kept the weekly-only performance log discipline.",
  outcomeQuality:
    "Mixed but acceptable: the portfolio declined 1.15% for the week, but it held up better than S&P 500/SPY, Nasdaq-100/QQQ, SMH, and VT because cash and Visa offset part of the Alphabet and Microsoft drawdown.",
};

export const holdings: Holding[] = [
  {
    company: "Microsoft",
    ticker: "MSFT",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 23.03,
    shares: 5.925294,
    entryPrice: 421.92,
    value: 2209.96,
    thesis:
      "Microsoft remains the portfolio's clearest quality-growth compounder. Enterprise software distribution, Azure scale, AI infrastructure demand, and cash generation still justify ownership. This week added useful product and infrastructure monitors, including Mount Pleasant datacenter execution, Copilot workflow depth, and water/resource execution, but none proves per-share AI returns yet.",
    killCondition:
      "Cloud or enterprise software durability weakens structurally, repeated enterprise AI security or disclosure failures impair trust, AI capex and power/resource commitments repeatedly fail to convert into profit, or management capital allocation becomes persistently undisciplined.",
    assumptions: [
      "Commercial cloud demand remains durable.",
      "AI products strengthen Microsoft 365 and Azure economics rather than only increasing capital intensity.",
      "Enterprise switching costs and bundled workflows remain hard to displace.",
      "Power, water, and datacenter execution stay manageable enough to protect per-share compounding.",
    ],
  },
  {
    company: "Visa",
    ticker: "V",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 21.73,
    shares: 6.201166,
    entryPrice: 322.52,
    value: 2085.02,
    thesis:
      "Visa remains an asset-light payment network with durable acceptance, authorization, tokenization, and fraud-control relevance. Visa Destinations is strategically useful for travel engagement and partner depth, but the week did not provide evidence of transaction economics strong enough to change sizing.",
    killCondition:
      "Network economics deteriorate, regulation materially compresses pricing power, or new payment rails bypass Visa at scale without offsetting participation.",
    assumptions: [
      "Payment digitization continues globally.",
      "Visa remains relevant in AI-initiated, tokenized, and programmable commerce.",
      "Legal and regulatory pressure stays manageable.",
    ],
  },
  {
    company: "S&P Global",
    ticker: "SPGI",
    action: "hold",
    status: "strengthening",
    confidence: "high",
    weight: 21.10,
    shares: 4.960933,
    entryPrice: 403.15,
    value: 2024.85,
    thesis:
      "S&P Global remains embedded market infrastructure through ratings, indices, benchmarks, and financial data. The Mobility Global separation moved into its expected when-issued trading window, keeping the thesis in strengthening status so long as the distribution mechanics remain clean.",
    killCondition:
      "Ratings credibility erodes, benchmark/data franchises lose relevance, or the Mobility separation damages focus, economics, leverage, or capital allocation discipline.",
    assumptions: [
      "The core ratings and data franchises remain trusted.",
      "Mobility Global separation mechanics complete without damaging the operating base.",
      "High-margin recurring data products continue compounding.",
    ],
  },
  {
    company: "Alphabet",
    ticker: "GOOGL",
    action: "hold",
    status: "under review",
    confidence: "medium",
    weight: 13.29,
    shares: 3.780432,
    entryPrice: 396.78,
    value: 1275.48,
    thesis:
      "Alphabet still owns exceptional assets in Search, YouTube, Cloud, and cash generation, but the stock remains under review. The week reinforced the same burden of proof: AI infrastructure funding, dilution, governance, talent depth, and per-share returns must improve before the position can deserve more capital.",
    killCondition:
      "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, AI capex fails to produce durable profit, or repeated elite AI talent losses show that Alphabet can no longer retain enough technical depth to defend the moat.",
    assumptions: [
      "Search and YouTube remain resilient while AI interfaces change.",
      "Cloud growth and backlog convert into attractive returns.",
      "AI financing, stock-plan dilution, and capex do not dilute per-share compounding beyond the thesis.",
    ],
  },
  {
    company: "Cash",
    ticker: "USD",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 20.84,
    value: 2000,
    thesis:
      "Cash remains a deliberate position because no fifth idea has cleared the written-conviction bar. It reduced the portfolio's downside this week and still preserves optionality without violating the mandate.",
    killCondition:
      "A business with clearer durability, valuation support, and written thesis quality outranks the optionality of cash.",
    assumptions: [
      "Doing nothing remains valid when evidence is incomplete.",
      "A future funded idea must beat both cash and the existing holdings.",
      "Cash stays below the mandate's normal 40% ceiling.",
    ],
  },
];

export const benchmarkPoints: BenchmarkPoint[] = [
  { label: "Baseline", portfolio: 0, sp500: 0, nasdaq100: 0, smh: 0, vt: 0, note: "Inception baseline for the weekly benchmark series." },
  { label: "May 18", portfolio: 0.19, sp500: 0.88, nasdaq100: 1.22, smh: 3.59, vt: 1.34, note: "Backfilled close-to-close weekly return from Friday 2026-05-15 to Friday 2026-05-22." },
  { label: "May 25", portfolio: 1.62, sp500: 1.45, nasdaq100: 2.89, smh: 3.92, vt: 1.64, note: "Backfilled close-to-close weekly return from Friday 2026-05-22 to Friday 2026-05-29." },
  { label: "Jun 01", portfolio: -2.23, sp500: -2.5, nasdaq100: -4.54, smh: -4.88, vt: -2.81, note: "Backfilled close-to-close weekly return from Friday 2026-05-29 to Friday 2026-06-05." },
  { label: "Jun 08", portfolio: -2.22, sp500: 0.57, nasdaq100: 2.31, smh: 8.82, vt: 1.7, note: "Full weekly comparison from Friday 2026-06-05 close to Friday 2026-06-12 close." },
  { label: "Jun 15", portfolio: -0.46, sp500: 0.67, nasdaq100: 2.67, smh: 6.44, vt: 0.88, note: "Juneteenth-shortened weekly comparison from Friday 2026-06-12 close to Thursday 2026-06-18 close." },
  { label: "Jun 22", portfolio: -1.15, sp500: -2.38, nasdaq100: -4.5, smh: -7.31, vt: -2.43, note: "Full weekly comparison from Thursday 2026-06-18 close to Friday 2026-06-26 close, using SPY for S&P 500 and QQQ for Nasdaq-100." },
];

export const recentDecisions: Decision[] = [
  {
    date: "2026-06-28 weekly journal",
    action: "do nothing",
    subject: "Week of 2026-06-22",
    sourceQuality: "high",
    reason:
      "Portfolio -1.15% beat S&P 500/SPY -2.38%, Nasdaq-100/QQQ -4.50%, SMH -7.31%, and VT -2.43% for the same full close-to-close period. The outcome was helped by cash and Visa, not by a better business thesis. No kill condition was triggered, and no holding earned a size change.",
  },
  {
    date: "2026-06-26 15:30 ET",
    action: "do nothing",
    subject: "Intraday market-hours scan",
    sourceQuality: "high",
    reason:
      "Fresh regular-session checks found no additional tracked-company official release, filing, earnings item, or management commentary that changed thesis status, confidence, sizing, kill conditions, or watchlist stance. No weekly benchmark point was added during the intraday scan.",
  },
  {
    date: "2026-06-21 weekly journal",
    action: "do nothing",
    subject: "Week of 2026-06-15",
    sourceQuality: "high",
    reason:
      "Portfolio -0.46% trailed S&P 500/SPY +0.67%, Nasdaq-100/QQQ +2.67%, SMH +6.44%, and VT +0.88% for the shortened week. No active holding triggered a kill condition.",
  },
];

export const watchlist: WatchlistItem[] = [
  {
    company: "AutoZone",
    ticker: "AZO",
    stance: "do nothing",
    whyInteresting:
      "Strong parts distribution model, resilient repair demand, and long buyback history. The June 16 authorization for another $1.5B of repurchases remains constructive capital-allocation evidence.",
    whyNotYet:
      "A buyback authorization alone does not outrank cash or the funded holdings. Nick still needs stronger operating durability, valuation support, and evidence that AutoZone can compound faster than the portfolio average.",
  },
  {
    company: "Copart",
    ticker: "CPRT",
    stance: "do nothing",
    whyInteresting: "Unique salvage-auction network, global buyer base, and durable marketplace characteristics.",
    whyNotYet:
      "The latest improvement remains too modest to beat cash or the current holdings. It stays on the watchlist rather than receiving capital.",
  },
];

export const quarterlyStatus = [
  { label: "Last re-underwrite", value: "Q2 2026, completed 2026-06-01" },
  { label: "Exposure change", value: "None. Microsoft, Visa, S&P Global, Alphabet, and cash remain unchanged after the week of 2026-06-22." },
  { label: "Primary open question", value: "Can Alphabet's AI capex, financing, dilution, governance, talent depth, and infrastructure returns still produce durable per-share value?" },
];

export const nextFocus = [
  "Monitor S&P Global Mobility Global separation mechanics through the expected July 1 distribution.",
  "Require Alphabet evidence on AI infrastructure returns, dilution, preferred/common financing terms, governance oversight, and Search resilience.",
  "Monitor Microsoft AI infrastructure execution, water/resource intensity, enterprise Copilot adoption, and whether AI capacity converts into durable per-share returns.",
  "Monitor Visa Destinations for real economics: cross-border volume, issuer or merchant adoption, premium-card engagement, or measurable transaction contribution.",
  "Keep AutoZone and Copart on the watchlist until either clearly outranks cash and current funded holdings.",
  "Keep weekly benchmark discipline tight: every return should use one shared period for the portfolio, S&P 500, Nasdaq-100, SMH, and VT.",
];
