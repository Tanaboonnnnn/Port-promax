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
  asOf: "2026-06-18 09:30 ET market-open scan; NAV last verified 2026-06-12 close",
  localContext: "America/New_York",
  startingCapital: 10000,
  latestValue: 9752.37,
  cashWeight: 20,
  inceptionReturn: -2.48,
  processQuality: "Good: thesis-led scan, primary-source discipline, and no forced activity.",
  outcomeQuality:
    "Latest verified mark remains the week ended 2026-06-12. The 09:30 ET market-open scan found no exposure-changing company-specific evidence since the 2026-06-17 15:30 ET checkpoint; Fed context remains market context only.",
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
      "Core enterprise software, Azure scale, AI infrastructure demand, distribution, and cash generation make Microsoft the portfolio's clearest compounder. Copilot Cowork general availability, usage-based billing, model choice, and enterprise controls remain supportive product evidence, but not a sizing event yet.",
    killCondition:
      "Cloud or enterprise software durability weakens structurally, AI capex repeatedly fails to convert into profit, or management capital allocation becomes persistently undisciplined.",
    assumptions: [
      "Commercial cloud demand remains durable.",
      "AI products strengthen distribution and monetization instead of eroding free cash flow quality.",
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
      "Visa is an asset-light payment network with global acceptance, tokenization, authorization, and fraud-control relevance as commerce evolves. OpenAI and Intelligent Commerce work remains strategically supportive but still economically unproven.",
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
      "Ratings, indices, benchmarks, and financial data are embedded infrastructure. The Mobility Global record date has passed, and the next evidence is execution quality through Form 10 effectiveness, expected when-issued trading around June 26, and July 1 distribution mechanics.",
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
      "Search, YouTube, Cloud, and cash generation remain exceptional, but AI infrastructure funding, dilution, the approved larger Class C stock-plan reserve, and rejected AI oversight proposals keep the burden of proof high for per-share returns.",
    killCondition:
      "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, or AI capex fails to produce durable profit.",
    assumptions: [
      "Search and YouTube remain resilient while AI interfaces change.",
      "Cloud growth and backlog convert into attractive returns.",
      "Debt, preferred/common issuance, stock-plan dilution, and capex do not dilute per-share compounding beyond the thesis.",
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
      "Cash is a deliberate position because the fifth idea did not clear the written-conviction bar. No 09:30 ET market-open evidence makes a watchlist name clearly superior to cash or the funded holdings.",
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
    sp500: -2.5,
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
    vt: 1.7,
    note: "Full weekly comparison from Friday 2026-06-05 close to Friday 2026-06-12 close, using SPY as the S&P 500 proxy.",
  },
];

export const recentDecisions: Decision[] = [
  {
    date: "2026-06-18 09:30 ET",
    action: "do nothing",
    subject: "Daily scan",
    sourceQuality: "high",
    reason:
      "No exposure-changing company-specific evidence appeared since the 2026-06-17 15:30 ET checkpoint. Microsoft Copilot Cowork GA remains a supportive product monitor item, Visa's OpenAI and Intelligent Commerce work remains supportive but economically unproven, S&P Global remains in Mobility Global execution monitoring, Alphabet remains under review, AutoZone's buyback remains watchlist capital-allocation evidence rather than a funding trigger, Copart remains below the funding bar, and cash remains valid. No weekly performance row was created.",
  },
  {
    date: "2026-06-17 15:30 ET",
    action: "do nothing",
    subject: "Daily scan",
    sourceQuality: "high",
    reason:
      "No exposure-changing company-specific evidence appeared after the 14:30 ET checkpoint. The Fed statement and press context reinforce discount-rate and inflation context, not a business-quality signal. Microsoft, Visa, and S&P Global remain high-confidence holds, Alphabet remains under review, AutoZone's buyback remains watchlist evidence rather than a funding trigger, Copart remains below the funding bar, and cash remains valid.",
  },
  {
    date: "2026-06-17 14:30 ET",
    action: "do nothing",
    subject: "Daily scan",
    sourceQuality: "high",
    reason:
      "No exposure-changing evidence appeared after the 13:30 ET checkpoint. The official Fed hold at 3.50%-3.75% is market context only. Microsoft, Visa, and S&P Global remain high-confidence holds, Alphabet remains under review, AutoZone's buyback remains watchlist evidence rather than a funding trigger, Copart remains below the funding bar, and cash remains valid.",
  },
];

export const watchlist: WatchlistItem[] = [
  {
    company: "AutoZone",
    ticker: "AZO",
    stance: "do nothing",
    whyInteresting:
      "Strong parts distribution model, resilient repair demand, and long buyback history. The June 16 authorization for another $1.5B of repurchases reinforces capital-allocation discipline if cash flow and leverage remain healthy.",
    whyNotYet:
      "Fiscal Q3 repaired some weakness and the new authorization is constructive, but no 09:30 ET market-open evidence makes AutoZone outrank cash or the current funded holdings without more durable operating evidence, valuation support, and continued balance-sheet discipline.",
  },
  {
    company: "Copart",
    ticker: "CPRT",
    stance: "do nothing",
    whyInteresting:
      "Unique salvage-auction network, global buyer base, and durable marketplace characteristics.",
    whyNotYet:
      "Fiscal Q3 improvement was modest, and no new material item at the 09:30 ET market-open checkpoint lifted it above the funding bar versus cash and current holdings.",
  },
];

export const quarterlyStatus = [
  {
    label: "Last re-underwrite",
    value: "Q2 2026, completed 2026-06-01",
  },
  {
    label: "Exposure change",
    value: "None. Microsoft, Visa, S&P Global, Alphabet, and cash remain unchanged after the 2026-06-18 09:30 ET market-open scan.",
  },
  {
    label: "Primary open question",
    value: "Can Alphabet's AI capex, financing, dilution, and governance setup still produce durable per-share value?",
  },
];

export const nextFocus = [
  "Monitor S&P Global Mobility Global separation mechanics through Form 10 effectiveness, expected when-issued trading, and the July 1 expected distribution.",
  "Require Alphabet evidence on AI infrastructure returns, dilution, preferred terms, debt load, stock-plan usage, governance oversight, and Search resilience.",
  "Keep Visa's OpenAI and Intelligent Commerce work in the supportive-but-unproven bucket until transaction economics appear.",
  "Treat Microsoft Copilot Cowork GA, usage-based billing, model choice, and enterprise controls as product-thesis evidence, not a sizing event, until adoption and margins show up in operating results.",
  "Treat AutoZone's June 16 buyback authorization as watchlist capital-allocation evidence, not a funding trigger; require sustained operating improvement and valuation support before replacing cash.",
  "Treat the Fed hold and press context as market context only unless it reveals company-specific business-quality evidence.",
];