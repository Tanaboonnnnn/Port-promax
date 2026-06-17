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
  asOf: "Week ended 2026-06-12",
  localContext: "Asia/Bangkok",
  startingCapital: 10000,
  latestValue: 9752.37,
  cashWeight: 20,
  inceptionReturn: -2.48,
  processQuality: "Good: concentrated, thesis-led, primary-source discipline, no forced activity.",
  outcomeQuality: "Too early to judge. Short-window underperformance is recorded, not traded on.",
};

export const holdings: Holding[] = [
  {
    company: "Microsoft",
    ticker: "MSFT",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 25,
    shares: 5.925294,
    entryPrice: 421.92,
    value: 2500,
    thesis:
      "Core enterprise software, Azure scale, AI infrastructure demand, distribution, and cash generation make Microsoft the portfolio's clearest compounder.",
    killCondition:
      "Cloud or enterprise software durability weakens structurally, AI capex repeatedly fails to convert into profit, or management capital allocation becomes persistently undisciplined.",
    assumptions: [
      "Commercial cloud demand remains durable.",
      "AI spending strengthens distribution instead of eroding free cash flow quality.",
      "Enterprise switching costs and bundled workflows remain hard to displace.",
    ],
  },
  {
    company: "Visa",
    ticker: "V",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 20,
    shares: 6.201166,
    entryPrice: 322.52,
    value: 2000,
    thesis:
      "Visa is an asset-light payment network with global acceptance, tokenization, authorization, and fraud-control relevance as commerce evolves.",
    killCondition:
      "Network economics deteriorate, regulation materially compresses pricing power, or new payment rails bypass Visa at scale without offsetting participation.",
    assumptions: [
      "Payment digitization continues globally.",
      "Visa remains useful in AI-initiated and tokenized commerce.",
      "Legal and regulatory pressure stays manageable.",
    ],
  },
  {
    company: "S&P Global",
    ticker: "SPGI",
    action: "hold",
    status: "strengthening",
    confidence: "high",
    weight: 20,
    shares: 4.960933,
    entryPrice: 403.15,
    value: 2000,
    thesis:
      "Ratings, indices, benchmarks, and financial data are embedded infrastructure. The Mobility Global separation may sharpen focus if executed cleanly.",
    killCondition:
      "Ratings credibility erodes, benchmark/data franchises lose relevance, or the Mobility separation damages focus, economics, or capital allocation discipline.",
    assumptions: [
      "The core ratings and data franchises remain trusted.",
      "Mobility separation mechanics complete without damaging the operating base.",
      "High-margin recurring data products continue compounding.",
    ],
  },
  {
    company: "Alphabet",
    ticker: "GOOGL",
    action: "hold",
    status: "under review",
    confidence: "medium",
    weight: 15,
    shares: 3.780432,
    entryPrice: 396.78,
    value: 1500,
    thesis:
      "Search, YouTube, Cloud, and cash generation remain exceptional, but the AI infrastructure funding plan raises the burden of proof for per-share returns.",
    killCondition:
      "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, or AI capex fails to produce durable profit.",
    assumptions: [
      "Search and YouTube remain resilient while AI interfaces change.",
      "Cloud growth and backlog convert into attractive returns.",
      "Debt, preferred/common issuance, and capex do not dilute per-share compounding beyond the thesis.",
    ],
  },
  {
    company: "Cash",
    ticker: "USD",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 20,
    value: 2000,
    thesis:
      "Cash is a deliberate position because the fifth idea did not clear the written-conviction bar.",
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
  {
    label: "Baseline",
    portfolio: 0,
    sp500: 0,
    nasdaq100: 0,
    smh: 0,
    vt: 0,
    note: "Inception baseline for the weekly benchmark series.",
  },
  {
    label: "May 18",
    portfolio: 0.19,
    sp500: 0.88,
    nasdaq100: 1.22,
    smh: 3.59,
    vt: 1.34,
    note: "Backfilled close-to-close weekly return from Friday 2026-05-15 to Friday 2026-05-22, using SPY as the S&P 500 proxy.",
  },
  {
    label: "May 25",
    portfolio: 1.62,
    sp500: 1.45,
    nasdaq100: 2.89,
    smh: 3.92,
    vt: 1.64,
    note: "Backfilled close-to-close weekly return from Friday 2026-05-22 to Friday 2026-05-29, using SPY as the S&P 500 proxy.",
  },
  {
    label: "Jun 01",
    portfolio: -2.23,
    sp500: -2.50,
    nasdaq100: -4.54,
    smh: -4.88,
    vt: -2.81,
    note: "Backfilled close-to-close weekly return from Friday 2026-05-29 to Friday 2026-06-05, using SPY as the S&P 500 proxy.",
  },
  {
    label: "Jun 08",
    portfolio: -2.22,
    sp500: 0.57,
    nasdaq100: 2.31,
    smh: 8.82,
    vt: 1.70,
    note: "Full weekly comparison from Friday 2026-06-05 close to Friday 2026-06-12 close, using SPY as the S&P 500 proxy.",
  },
];

export const recentDecisions: Decision[] = [
  {
    date: "2026-06-15",
    action: "do nothing",
    subject: "Daily scan",
    sourceQuality: "high",
    reason:
      "No new item changed business quality, moat, management quality, financial durability, position size, confidence, or kill condition enough to justify action.",
  },
  {
    date: "2026-06-14",
    action: "do nothing",
    subject: "Weekly journal",
    sourceQuality: "high",
    reason:
      "Visa's OpenAI partnership was strategically supportive, S&P Global's separation remained execution-relevant, and Alphabet stayed under review without a broken thesis.",
  },
  {
    date: "2026-06-04",
    action: "hold",
    subject: "Alphabet status change",
    sourceQuality: "high",
    reason:
      "Official AI infrastructure funding materials made Alphabet's per-share return burden more important, moving the status from strengthening to under review without changing exposure.",
  },
];

export const watchlist: WatchlistItem[] = [
  {
    company: "AutoZone",
    ticker: "AZO",
    stance: "do nothing",
    whyInteresting:
      "Strong parts distribution model, resilient repair demand, and long buyback history.",
    whyNotYet:
      "Fiscal Q3 repaired some weakness, but one stronger quarter is not enough to outrank cash or funded holdings.",
  },
  {
    company: "Copart",
    ticker: "CPRT",
    stance: "do nothing",
    whyInteresting:
      "Unique salvage-auction network, global buyer base, and durable marketplace characteristics.",
    whyNotYet:
      "Fiscal Q3 improvement was modest and still below the funding bar versus cash and current holdings.",
  },
];

export const quarterlyStatus = [
  {
    label: "Last re-underwrite",
    value: "Q2 2026, completed 2026-06-01",
  },
  {
    label: "Exposure change",
    value: "None. Microsoft, Visa, S&P Global, Alphabet, and cash remain unchanged.",
  },
  {
    label: "Primary open question",
    value: "Can Alphabet's AI capex and financing still produce durable per-share value?",
  },
];

export const nextFocus = [
  "Monitor S&P Global Mobility Global separation mechanics through the July 1 expected distribution.",
  "Require Alphabet evidence on AI infrastructure returns, dilution, preferred terms, debt load, and Search resilience.",
  "Keep Visa's OpenAI work in the supportive-but-unproven bucket until transaction economics appear.",
  "Avoid funding AutoZone or Copart until improvement is durable across more than one quarter.",
];