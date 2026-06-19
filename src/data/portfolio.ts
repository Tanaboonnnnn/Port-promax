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
  asOf: "2026-06-19 13:30 ET market-closed checkpoint; NAV last verified 2026-06-12 close",
  localContext: "America/New_York",
  startingCapital: 10000,
  latestValue: 9752.37,
  cashWeight: 20,
  inceptionReturn: -2.48,
  processQuality: "Good: thesis-led scan, primary-source discipline, and no forced activity.",
  outcomeQuality:
    "Latest verified mark remains the week ended 2026-06-12. The 2026-06-19 13:30 ET scheduled scan landed on Juneteenth while U.S. equity markets were closed, so no regular-session price action was reviewed. No exposure-changing company-specific evidence was found after the 2026-06-19 12:30 ET checkpoint.",
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
      "Core enterprise software, Azure scale, AI infrastructure demand, distribution, and cash generation make Microsoft the portfolio's clearest compounder. Copilot Cowork general availability, usage-based billing, model choice, partner plugins, and enterprise controls remain supportive product evidence. CVE-2026-42824 / SearchLeak remains a product-security monitor item after NVD recorded an M365 Copilot information-disclosure vulnerability and Varonis said Microsoft remediated it. A June 12, 2026 securities complaint alleging Microsoft misled investors about Copilot and Azure remains a legal/disclosure-quality monitor item; allegations are unproven and do not change the thesis without evidence of durable customer, economics, or governance damage. The 2026-06-19 13:30 ET checkpoint found no new company-specific evidence that changed this view.",
    killCondition:
      "Cloud or enterprise software durability weakens structurally, repeated enterprise AI security or disclosure failures impair customer and investor trust, AI capex repeatedly fails to convert into profit, or management capital allocation becomes persistently undisciplined.",
    assumptions: [
      "Commercial cloud demand remains durable.",
      "AI products strengthen distribution and monetization instead of eroding free cash flow quality.",
      "Enterprise switching costs and bundled workflows remain hard to displace.",
      "Microsoft can keep enterprise AI security and disclosure quality tight enough that Copilot trust is not structurally impaired.",
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
      "Visa is an asset-light payment network with global acceptance, tokenization, authorization, and fraud-control relevance as commerce evolves. OpenAI, Intelligent Commerce, token, stablecoin, and agentic-commerce work remains strategically supportive but still economically unproven. The 2026-06-19 13:30 ET checkpoint found no new company-specific evidence that changed the thesis.",
    killCondition:
      "Network economics deteriorate, regulation materially compresses pricing power, or new payment rails bypass Visa at scale without offsetting participation.",
    assumptions: [
      "Payment digitization continues globally.",
      "Visa remains useful in AI-initiated, tokenized, and programmable commerce.",
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
      "Ratings, indices, benchmarks, and financial data are embedded infrastructure. Mobility Global remains a separation execution monitor: the spin vehicle priced $2.0B of senior notes and entered a $500M revolver, with proceeds intended to fund a cash payment to S&P Global after the separation conditions are satisfied. Next evidence remains Form 10 effectiveness, expected when-issued trading around June 26, and July 1 distribution mechanics. The 2026-06-19 13:30 ET checkpoint found no new company-specific evidence that changed this view.",
    killCondition:
      "Ratings credibility erodes, benchmark/data franchises lose relevance, or the Mobility separation damages focus, economics, leverage, or capital allocation discipline.",
    assumptions: [
      "The core ratings and data franchises remain trusted.",
      "Mobility separation financing and mechanics complete without damaging the operating base.",
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
      "Search, YouTube, Cloud, and cash generation remain exceptional, but AI infrastructure funding, dilution, the approved larger Class C stock-plan reserve, and rejected AI oversight proposals keep the burden of proof high for per-share returns. The 2026-06-19 13:30 ET checkpoint found no new company-specific evidence that broke the thesis or removed the under-review status.",
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
      "Cash is a deliberate position because the fifth idea did not clear the written-conviction bar. No 2026-06-19 13:30 ET market-closed checkpoint evidence makes a watchlist name clearly superior to cash or the funded holdings.",
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
  { label: "May 18", portfolio: 0.19, sp500: 0.88, nasdaq100: 1.22, smh: 3.59, vt: 1.34, note: "Backfilled close-to-close weekly return from Friday 2026-05-15 to Friday 2026-05-22, using SPY as the S&P 500 proxy." },
  { label: "May 25", portfolio: 1.62, sp500: 1.45, nasdaq100: 2.89, smh: 3.92, vt: 1.64, note: "Backfilled close-to-close weekly return from Friday 2026-05-22 to Friday 2026-05-29, using SPY as the S&P 500 proxy." },
  { label: "Jun 01", portfolio: -2.23, sp500: -2.5, nasdaq100: -4.54, smh: -4.88, vt: -2.81, note: "Backfilled close-to-close weekly return from Friday 2026-05-29 to Friday 2026-06-05, using SPY as the S&P 500 proxy." },
  { label: "Jun 08", portfolio: -2.22, sp500: 0.57, nasdaq100: 2.31, smh: 8.82, vt: 1.7, note: "Full weekly comparison from Friday 2026-06-05 close to Friday 2026-06-12 close, using SPY as the S&P 500 proxy." },
];

export const recentDecisions: Decision[] = [
  {
    date: "2026-06-19 13:30 ET",
    action: "do nothing",
    subject: "Market-closed scan",
    sourceQuality: "high",
    reason:
      "The scheduled scan landed on Juneteenth, when U.S. equity markets are closed, so it was recorded as a market-closed checkpoint rather than a regular-session intraday scan. No exposure-changing company-specific evidence was found after the 2026-06-19 12:30 ET checkpoint. Microsoft Copilot Cowork, SearchLeak/CVE-2026-42824, and the securities complaint remain monitor items; Visa's OpenAI commerce work remains supportive but economically unproven; S&P Global Mobility financing and separation mechanics remain execution monitors; Alphabet remains under review; AutoZone and Copart remain below the funding bar. No weekly performance row was created.",
  },
  {
    date: "2026-06-19 12:30 ET",
    action: "do nothing",
    subject: "Market-closed scan",
    sourceQuality: "high",
    reason:
      "The scheduled scan landed on Juneteenth, when U.S. equity markets are closed, so it was recorded as a market-closed checkpoint rather than a regular-session intraday scan. No exposure-changing company-specific evidence was found after the 2026-06-19 11:30 ET checkpoint. Microsoft Copilot Cowork, SearchLeak/CVE-2026-42824, and the securities complaint remain monitor items; Visa's OpenAI commerce work remains supportive but economically unproven; S&P Global Mobility financing and separation mechanics remain execution monitors; Alphabet remains under review; AutoZone and Copart remain below the funding bar. No weekly performance row was created.",
  },
  {
    date: "2026-06-19 11:30 ET",
    action: "do nothing",
    subject: "Market-closed scan",
    sourceQuality: "high",
    reason:
      "The scheduled scan landed on Juneteenth, when U.S. equity markets are closed, so it was recorded as a market-closed checkpoint rather than a regular-session intraday scan. No exposure-changing company-specific evidence was found after the 2026-06-19 10:30 ET checkpoint. Microsoft Copilot Cowork, SearchLeak/CVE-2026-42824, and the securities complaint remain monitor items; Visa's OpenAI commerce work remains supportive but economically unproven; S&P Global Mobility financing and separation mechanics remain execution monitors; Alphabet remains under review; AutoZone and Copart remain below the funding bar. No weekly performance row was created.",
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
      "Fiscal Q3 repaired some weakness and the new authorization is constructive, but no 2026-06-19 13:30 ET market-closed checkpoint evidence makes AutoZone outrank cash or current funded holdings without more durable operating evidence, valuation support, and continued balance-sheet discipline.",
  },
  {
    company: "Copart",
    ticker: "CPRT",
    stance: "do nothing",
    whyInteresting: "Unique salvage-auction network, global buyer base, and durable marketplace characteristics.",
    whyNotYet:
      "Fiscal Q3 improvement was modest, and no 2026-06-19 13:30 ET market-closed checkpoint item lifted it above the funding bar versus cash and current holdings.",
  },
];

export const quarterlyStatus = [
  { label: "Last re-underwrite", value: "Q2 2026, completed 2026-06-01" },
  { label: "Exposure change", value: "None. Microsoft, Visa, S&P Global, Alphabet, and cash remain unchanged after the 2026-06-19 13:30 ET market-closed checkpoint." },
  { label: "Primary open question", value: "Can Alphabet's AI capex, financing, dilution, and governance setup still produce durable per-share value?" },
];

export const nextFocus = [
  "Monitor S&P Global Mobility Global separation mechanics, including the $2.0B notes, $500M revolver, Form 10 effectiveness, expected when-issued trading around June 26, and the July 1 expected distribution.",
  "Require Alphabet evidence on AI infrastructure returns, dilution, preferred terms, debt load, stock-plan usage, governance oversight, and Search resilience.",
  "Keep Visa's OpenAI and Intelligent Commerce work in the supportive-but-unproven bucket until transaction economics appear.",
  "Treat Microsoft Copilot Cowork GA, usage-based billing, model choice, partner plugins, enterprise controls, SearchLeak remediation, and the securities complaint as monitor items until adoption, margins, security trust, and disclosure quality show up in operating evidence.",
  "Treat AutoZone's June 16 buyback authorization as watchlist capital-allocation evidence, not a funding trigger; require sustained operating improvement and valuation support before replacing cash.",
  "Treat the Juneteenth market closure as a process check only: no intraday benchmark move, no weekly performance row, and no trade without company-specific evidence.",
];
