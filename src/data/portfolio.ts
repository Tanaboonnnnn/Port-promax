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
  asOf: "Q2 2026 re-underwrite run 2026-07-01 09:12 ICT / 2026-06-30 22:12 ET; latest complete weekly benchmark record remains Week of 2026-06-22",
  localContext: "America/New_York",
  startingCapital: 10000,
  latestValue: 9709.21,
  cashWeight: 20.6,
  inceptionReturn: -2.91,
  processQuality:
    "Good: the quarterly review started from prior theses, used official earnings/releases/filing-style evidence first, separated operating facts from interpretation, and did not create a weekly Performance Log row outside a weekly review.",
  outcomeQuality:
    "Still too early to judge skill. The latest market snapshot is below inception, while the latest complete weekly record showed the portfolio beating S&P 500, Nasdaq-100, SMH, and VT mostly because cash and Visa reduced drawdown.",
};

export const holdings: Holding[] = [
  {
    company: "Microsoft",
    ticker: "MSFT",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 22.76,
    shares: 5.925294,
    entryPrice: 421.92,
    value: 2210.25,
    thesis:
      "Microsoft remains the portfolio's clearest quality-growth compounder. Enterprise software distribution, Azure scale, Microsoft 365, GitHub, security, and AI workflow depth still justify core ownership. FY26 Q3 showed durable cloud demand, and Copilot SMB packaging makes monetization more tangible, but per-share AI returns still need proof.",
    killCondition:
      "Cloud or enterprise software durability weakens structurally, repeated enterprise AI security, reliability, or disclosure failures impair trust, AI capex and power/resource commitments repeatedly fail to convert into profit, or management capital allocation becomes persistently undisciplined.",
    assumptions: [
      "Commercial cloud demand remains durable.",
      "AI products strengthen Microsoft 365 and Azure economics rather than only increasing capital intensity.",
      "Enterprise switching costs and bundled workflows remain hard to displace.",
      "Power, water, reliability, and datacenter execution stay manageable enough to protect per-share compounding.",
    ],
  },
  {
    company: "Visa",
    ticker: "V",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 21.91,
    shares: 6.201166,
    entryPrice: 322.52,
    value: 2127.56,
    thesis:
      "Visa remains an asset-light payment network with durable acceptance, authorization, tokenization, fraud-control, and trust advantages. Fiscal Q2 volume and cross-border evidence keep the thesis intact. AI, token, and stablecoin work extends network relevance, but it still needs transaction-economic proof before sizing changes.",
    killCondition:
      "Structural network disintermediation, adverse regulation that permanently damages transaction economics, loss of payment-flow relevance, or capital allocation that no longer protects long-term Class A holders.",
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
    weight: 20.81,
    shares: 4.960933,
    entryPrice: 403.15,
    value: 2020.39,
    thesis:
      "S&P Global remains embedded market infrastructure through ratings, indices, benchmarks, commodities/market intelligence, and financial data. Q1 results and the pending Mobility Global separation keep the thesis strengthening if the distribution mechanics complete cleanly.",
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
    weight: 13.91,
    shares: 3.780432,
    entryPrice: 396.78,
    value: 1351.01,
    thesis:
      "Alphabet still owns exceptional assets in Search, YouTube, Cloud, subscriptions, AI talent, and cash generation. Q1 Search and Cloud evidence support holding, but the stock remains under review because AI infrastructure funding, dilution, governance, capital intensity, talent depth, and per-share returns are still unresolved.",
    killCondition:
      "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, AI capex fails to produce durable profit, excessive dilution damages per-share compounding, or repeated elite AI talent losses show that Alphabet can no longer retain enough technical depth to defend the moat.",
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
    weight: 20.6,
    value: 2000,
    thesis:
      "Cash remains deliberate optionality because no fifth idea clearly beats the funded holdings plus the option value of waiting. It also keeps the portfolio from forcing activity while Alphabet is under review.",
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
  { label: "Jun 22", portfolio: -1.15, sp500: -2.38, nasdaq100: -4.5, smh: -7.31, vt: -2.43, note: "Latest complete weekly record: Thursday 2026-06-18 close to Friday 2026-06-26 close, using SPY for S&P 500 and QQQ for Nasdaq-100." },
];

export const recentDecisions: Decision[] = [
  {
    date: "2026-07-01 quarterly re-underwrite",
    action: "do nothing",
    subject: "Q2 2026 re-underwrite",
    sourceQuality: "high",
    reason:
      "Full quarterly review completed for Microsoft, Visa, S&P Global, Alphabet, cash, AutoZone, and Copart. No kill condition was triggered. Microsoft and Visa remain intact/high, S&P Global remains strengthening/high, Alphabet remains under review/medium, and cash remains intact/high. AutoZone and Copart remain watchlist/do-nothing candidates.",
  },
  {
    date: "2026-06-28 weekly journal",
    action: "do nothing",
    subject: "Week of 2026-06-22",
    sourceQuality: "high",
    reason:
      "Portfolio -1.15% beat S&P 500/SPY -2.38%, Nasdaq-100/QQQ -4.50%, SMH -7.31%, and VT -2.43% for the same full close-to-close period. The outcome was helped by cash and Visa, not by a better business thesis. No kill condition was triggered, and no holding earned a size change.",
  },
  {
    date: "2026-06-30 15:30 ET",
    action: "do nothing",
    subject: "Intraday market-hours scan",
    sourceQuality: "high",
    reason:
      "Fresh checks found no official tracked-company evidence that changed thesis status, confidence, sizing, kill conditions, or watchlist stance. Microsoft Copilot SMB SKU packaging was added as monetization evidence, not proof of durable adoption economics.",
  },
];

export const watchlist: WatchlistItem[] = [
  {
    company: "AutoZone",
    ticker: "AZO",
    stance: "do nothing",
    whyInteresting:
      "Resilient repair demand, a strong parts distribution model, disciplined repurchases, and a long record of per-share compounding. Fiscal Q3 repaired some prior softness, and the June 16 $1.5B repurchase authorization remains constructive capital-allocation evidence.",
    whyNotYet:
      "One better quarter plus a buyback authorization still does not clearly outrank cash, Microsoft, Visa, or S&P Global. Nick needs sustained sales, profit, free-cash-flow, commercial-profitability, and valuation evidence before funding it.",
  },
  {
    company: "Copart",
    ticker: "CPRT",
    stance: "do nothing",
    whyInteresting:
      "Unique salvage-auction network, global buyer liquidity, insurer relationships, and marketplace economics make Copart a business worth watching closely.",
    whyNotYet:
      "Fiscal Q3 improvement was modest, not decisive. The June 29 CEO transition keeps management continuity on the checklist, so Copart needs proof on execution, culture, customer relationships, and capital allocation before it can outrank cash or a funded holding.",
  },
];

export const quarterlyStatus = [
  { label: "Last re-underwrite", value: "Q2 2026, completed 2026-07-01 09:12 ICT / 2026-06-30 22:12 ET" },
  { label: "Exposure change", value: "None. Hold Microsoft, Visa, S&P Global, Alphabet, and cash unchanged; do nothing on AutoZone and Copart." },
  { label: "Primary open question", value: "Can Alphabet prove durable per-share AI returns, and can S&P Global complete Mobility Global cleanly after this run's pre-distribution checkpoint?" },
];

export const nextFocus = [
  "Verify S&P Global's Mobility Global distribution after the expected 12:01 a.m. New York City time July 1 effective time and monitor regular-way MBGL trading.",
  "Require Alphabet evidence on AI infrastructure returns, dilution, financing terms, governance oversight, talent retention, and Search resilience before changing conviction.",
  "Track Microsoft Copilot paid attach, renewal quality, reliability, governance, pricing acceptance, workflow depth, and per-share AI returns.",
  "Track Visa programmable-commerce, token, and stablecoin evidence for measurable transaction economics, issuer/acquirer adoption, settlement economics, and risk controls.",
  "Keep AutoZone and Copart on the watchlist until either clearly outranks cash and current funded holdings.",
  "Keep weekly benchmark discipline tight: quarterly reviews may discuss benchmark context, but Performance Log rows are updated only during weekly reviews.",
];
