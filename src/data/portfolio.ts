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
  asOf: "Week of 2026-07-06, recorded 2026-07-12; close-to-close period 2026-07-02 to 2026-07-10 because U.S. markets were closed on Friday 2026-07-03",
  localContext: "America/New_York",
  startingCapital: 10000,
  latestValue: 9931.83,
  cashWeight: 20.14,
  inceptionReturn: -0.68,
  processQuality:
    "Good: the weekly review used the same full close-to-close period for the portfolio and every benchmark, kept the Performance Log weekly-only, separated price action from business evidence, and did not force a trade after a weak outcome week.",
  outcomeQuality:
    "Weak but not thesis-breaking: the portfolio declined -1.69% for the week and trailed S&P 500/SPY, Nasdaq-100/QQQ, SMH, and VT. The underperformance is outcome data, not proof that any business thesis broke.",
};

export const holdings: Holding[] = [
  {
    company: "Microsoft",
    ticker: "MSFT",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 22.97,
    shares: 5.925294,
    entryPrice: 421.92,
    value: 2281.83,
    thesis:
      "Microsoft remains a core quality-growth holding. Enterprise software distribution, Azure scale, Microsoft 365, GitHub, security, and AI workflow depth still justify ownership. This week did not weaken the thesis, but the active burden of proof remains AI monetization, capex discipline, sustainability/resource management, operational resilience, and durable per-share returns.",
    killCondition:
      "Cloud or enterprise software durability weakens structurally, repeated enterprise AI security, reliability, disclosure, copyright, attribution, customer-trust, sustainability, community, or operational-resilience failures impair adoption, AI capex and power/resource commitments repeatedly fail to convert into profit, or management capital allocation becomes persistently undisciplined.",
    assumptions: [
      "Commercial cloud demand remains durable.",
      "AI products strengthen Microsoft 365 and Azure economics rather than only increasing capital intensity.",
      "Enterprise switching costs and bundled workflows remain hard to displace.",
      "Energy, emissions, water, local-community, and operational-resilience obligations stay manageable enough for Microsoft to keep building AI capacity.",
    ],
  },
  {
    company: "Visa",
    ticker: "V",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 21.79,
    shares: 6.201166,
    entryPrice: 322.52,
    value: 2164.02,
    thesis:
      "Visa remains an asset-light payment network with durable acceptance, authorization, tokenization, fraud-control, and trust advantages. The stock underperformed this week, but no evidence changed the payment-flow, value-added-services, cross-border, or capital-allocation thesis. July 28 earnings is the next real checkpoint.",
    killCondition:
      "Structural network disintermediation, adverse regulation that permanently damages transaction economics, loss of payment-flow relevance, or capital allocation that no longer protects long-term Class A holders.",
    assumptions: [
      "Payment digitization continues globally.",
      "Visa remains relevant in AI-initiated, tokenized, stablecoin-enabled, and programmable commerce.",
      "Legal and regulatory pressure stays manageable.",
    ],
  },
  {
    company: "S&P Global",
    ticker: "SPGI",
    action: "hold",
    status: "strengthening",
    confidence: "high",
    weight: 21.5,
    shares: 4.960933,
    entryPrice: 403.15,
    value: 2135.68,
    thesis:
      "S&P Global remains embedded market infrastructure through ratings, indices, benchmarks, commodities/market intelligence, and financial data. The July 6 post-spin pro forma/recast package improved clarity and keeps the thesis strengthening, but it is still not an add signal before July 28 guidance and Q2 earnings verify retained-business growth, margins, stranded costs, TSA offsets, leverage, and capital allocation.",
    killCondition:
      "Ratings credibility erodes, benchmark/data franchises lose relevance, or the Mobility Global separation damages focus, economics, leverage, tax treatment, transition execution, expense allocation, margin durability, or capital allocation discipline.",
    assumptions: [
      "The core ratings and data franchises remain trusted.",
      "The post-spin recast is a cleaner view of durable earnings power, not merely accounting reshuffling.",
      "Market Intelligence can turn Kensho Data, Platforms, and Enterprise Solutions into better customer workflows and improved margins.",
    ],
  },
  {
    company: "Alphabet",
    ticker: "GOOGL",
    action: "hold",
    status: "under review",
    confidence: "medium",
    weight: 13.6,
    shares: 3.780432,
    entryPrice: 396.78,
    value: 1350.29,
    thesis:
      "Alphabet still owns exceptional assets in Search, YouTube, Cloud, subscriptions, AI talent, and cash generation. It remains held at smaller size, but the position stays under review until July 22 earnings and related evidence clarify AI returns, Cloud economics, Search durability, capital intensity, resource access, dilution, governance, and regulatory-distribution risk.",
    killCondition:
      "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, Google Cloud operational-resilience failures damage enterprise trust, AI capex fails to produce durable profit, excessive dilution damages per-share compounding, resource constraints slow AI execution, or repeated elite AI talent losses show that Alphabet can no longer retain enough technical depth to defend the moat.",
    assumptions: [
      "Search and YouTube remain resilient while AI interfaces change.",
      "Cloud growth and backlog convert into attractive returns.",
      "AI financing, dilution, capex, and resource needs do not dilute per-share compounding beyond the thesis.",
      "Regulatory remedies do not permanently damage distribution power or default access economics.",
    ],
  },
  {
    company: "Cash",
    ticker: "USD",
    action: "hold",
    status: "intact",
    confidence: "high",
    weight: 20.14,
    value: 2000,
    thesis:
      "Cash remains deliberate optionality because no fifth idea clearly beats the funded holdings plus the option value of waiting. Cash cushioned less than benchmark exposure during a rising benchmark week, but that is not a process error while Alphabet is under review and AutoZone/Copart have not cleared the funding bar.",
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
  { label: "Jun 29", portfolio: 5.28, sp500: 2.17, nasdaq100: 0.86, smh: -3.16, vt: 1.44, note: "Independence Day-shortened weekly comparison from Friday 2026-06-26 close to Thursday 2026-07-02 close, using SPY for S&P 500 and QQQ for Nasdaq-100." },
  { label: "Jul 06", portfolio: -1.69, sp500: 1.37, nasdaq100: 1.81, smh: 3.16, vt: 0.86, note: "Holiday-adjusted weekly comparison from Thursday 2026-07-02 close to Friday 2026-07-10 close, using SPY for S&P 500, QQQ for Nasdaq-100, SMH, and VT." },
];

export const recentDecisions: Decision[] = [
  {
    date: "2026-07-12 weekly journal",
    action: "do nothing",
    subject: "Week of 2026-07-06",
    sourceQuality: "high",
    reason:
      "Portfolio -1.69% trailed S&P 500/SPY +1.37%, Nasdaq-100/QQQ +1.81%, SMH +3.16%, and VT +0.86% for the same 2026-07-02 to 2026-07-10 close-to-close period. No kill condition was triggered. Microsoft and Visa remain intact/high, S&P Global remains strengthening/high but awaits July 28 guidance, Alphabet remains under review/medium, and cash remains valid. Do nothing remains the correct action.",
  },
  {
    date: "2026-07-05 weekly journal",
    action: "do nothing",
    subject: "Week of 2026-06-29",
    sourceQuality: "high",
    reason:
      "Portfolio +5.28% beat S&P 500/SPY +2.17%, Nasdaq-100/QQQ +0.86%, SMH -3.16%, and VT +1.44% for the same 2026-06-26 to 2026-07-02 close-to-close period. No kill condition was triggered. S&P Global strengthened on completed spin execution but still needs post-spin verification, and Alphabet remains under review after the final EU Android appeal loss. Do nothing remains the correct action.",
  },
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
];

export const watchlist: WatchlistItem[] = [
  {
    company: "AutoZone",
    ticker: "AZO",
    stance: "do nothing",
    whyInteresting:
      "Resilient repair demand, a strong parts distribution model, disciplined repurchases, and a long record of per-share compounding. Fiscal Q3 repaired some prior softness, the June 16 $1.5B repurchase authorization remains constructive, and the July 2031 notes sharpen the capital-structure monitor.",
    whyNotYet:
      "The final $850M 4.950% senior notes due 2031 clarify the debt monitor, but actual use of proceeds, leverage effect, debt repayment, buyback funding, sustained operating proof, and valuation still need to show that AutoZone beats cash and the current funded holdings.",
  },
  {
    company: "Copart",
    ticker: "CPRT",
    stance: "do nothing",
    whyInteresting:
      "Unique salvage-auction network, global buyer liquidity, insurer relationships, and marketplace economics make Copart a business worth watching closely. Jane Pocock's promotion to President adds management-continuity context.",
    whyNotYet:
      "Fiscal Q3 improvement was modest, not decisive. The CEO transition still needs complete source-backed Jay Adair call evidence plus proof on execution, culture, customer relationships, growth quality, margins, and capital allocation before Copart can outrank cash or a funded holding.",
  },
];

export const quarterlyStatus = [
  { label: "Last re-underwrite", value: "Q2 2026, completed 2026-07-01 09:12 ICT / 2026-06-30 22:12 ET" },
  { label: "Exposure change", value: "None. Hold Microsoft, Visa, S&P Global, Alphabet, and cash unchanged; do nothing on AutoZone and Copart." },
  { label: "Primary open question", value: "Can late-July earnings prove Microsoft AI economics, Visa network durability, S&P Global retained-business quality, and Alphabet AI returns while infrastructure, resource, and regulatory burdens stay manageable?" },
];

export const nextFocus = [
  "Track the UK Critical Third Party regime starting July 13 for Microsoft and Google Cloud as an operational-resilience monitor, not a thesis break.",
  "Watch AutoZone's July 14 note settlement and later filings for actual use of proceeds, leverage effect, debt repayment, buyback funding, and whether capital allocation improves per-share compounding.",
  "Use Alphabet's July 22 Q2 earnings as the next checkpoint for AI capex, dilution, governance, Search resilience, Cloud returns, resource burden, and regulatory distribution.",
  "Use Visa's July 28 Q3 earnings as the next payment-volume, cross-border, value-added services, AI/token/stablecoin economics, and capital-return checkpoint.",
  "Use S&P Global's July 28 Q2 earnings and updated 2026 guidance as the next SPGI add-or-wait checkpoint after the Mobility Global spin.",
  "Use Microsoft's July 29 Q4 earnings as the next cloud, AI monetization, pricing, margin, capex, sustainability burden, resilience, and per-share-return checkpoint.",
  "Review Copart's official replay or complete transcript before treating Jay Adair's CEO return and Jane Pocock's President promotion as enough evidence of improved execution or growth quality.",
  "Keep weekly benchmark discipline tight: all performance rows must remain full-week, period-matched records versus S&P 500, Nasdaq-100, SMH, and VT.",
];
