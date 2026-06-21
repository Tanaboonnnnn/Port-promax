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
  asOf: "2026-06-21 weekly journal; full week measured from 2026-06-12 close to 2026-06-18 close",
  localContext: "America/New_York",
  startingCapital: 10000,
  latestValue: 9707.19,
  cashWeight: 20,
  inceptionReturn: -2.93,
  processQuality: "Good: full-week benchmark discipline, written thesis checks, and no forced activity after underperformance.",
  outcomeQuality:
    "Weak short-term outcome: the portfolio returned -0.46% for the Juneteenth-shortened week and trailed S&P 500/SPY, Nasdaq-100/QQQ, SMH, and VT. The outcome does not by itself change business conviction or trigger a trade.",
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
    value: 2248.06,
    thesis:
      "Core enterprise software, Azure scale, AI infrastructure demand, distribution, and cash generation make Microsoft the portfolio's clearest compounder. Copilot Cowork general availability remains supportive product evidence. SearchLeak / CVE-2026-42824 and the June 12 securities complaint remain security and disclosure-quality monitor items, not thesis breaks. The weekly review found price weakness but no company-specific evidence that changed the thesis.",
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
    value: 2029.27,
    thesis:
      "Visa is an asset-light payment network with global acceptance, tokenization, authorization, and fraud-control relevance as commerce evolves. OpenAI, Intelligent Commerce, token, stablecoin, and agentic-commerce work remains strategically supportive but still economically unproven. The weekly review found no company-specific evidence that changed the thesis.",
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
    value: 2038.55,
    thesis:
      "Ratings, indices, benchmarks, and financial data are embedded market infrastructure. Mobility Global remains a separation execution monitor: the spin vehicle priced $2.0B of senior notes and entered a $500M revolver, with proceeds intended to fund a cash payment to S&P Global after separation conditions are satisfied. Next evidence remains Form 10 effectiveness, expected when-issued trading around June 26, and July 1 distribution mechanics. The weekly review found price weakness but no thesis break.",
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
    value: 1391.31,
    thesis:
      "Search, YouTube, Cloud, and cash generation remain exceptional, but AI infrastructure funding, dilution, the larger Class C stock-plan reserve, and rejected AI oversight proposals keep the burden of proof high for per-share returns. Alphabet rose during the reviewed week, but price improvement does not remove the under-review status.",
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
      "Cash is a deliberate position because the fifth idea has not cleared the written-conviction bar. AutoZone's buyback authorization improved the watchlist discussion, but neither AutoZone nor Copart clearly outranks cash or the funded holdings today.",
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
  { label: "Jun 15", portfolio: -0.46, sp500: 0.67, nasdaq100: 2.67, smh: 6.44, vt: 0.88, note: "Full Juneteenth-shortened weekly comparison from Friday 2026-06-12 close to Thursday 2026-06-18 close, using SPY for S&P 500 and QQQ for Nasdaq-100." },
];

export const recentDecisions: Decision[] = [
  {
    date: "2026-06-21 weekly journal",
    action: "do nothing",
    subject: "Week of 2026-06-15",
    sourceQuality: "high",
    reason:
      "Portfolio -0.46% trailed S&P 500/SPY +0.67%, Nasdaq-100/QQQ +2.67%, SMH +6.44%, and VT +0.88% for the full shortened week from the 2026-06-12 close to the 2026-06-18 close. No active holding triggered a kill condition. Microsoft and S&P Global price weakness did not change the business theses; Visa and Alphabet rose but did not justify sizing changes; Alphabet remains under review; cash remains deliberate. AutoZone's $1.5B buyback authorization improved the watchlist case but did not clear the funding bar.",
  },
  {
    date: "2026-06-19 15:30 ET",
    action: "do nothing",
    subject: "Market-closed scan",
    sourceQuality: "high",
    reason:
      "The scheduled scan landed on Juneteenth, when U.S. equity markets were closed, so it was recorded as a market-closed checkpoint rather than a regular-session intraday scan. No exposure-changing company-specific evidence was found after the 2026-06-19 14:30 ET checkpoint. Microsoft security/disclosure items remain monitors; Visa's OpenAI commerce work remains supportive but economically unproven; S&P Global Mobility financing and separation mechanics remain execution monitors; Alphabet remains under review; AutoZone and Copart remain below the funding bar.",
  },
  {
    date: "2026-06-18 15:30 ET",
    action: "do nothing",
    subject: "Intraday scan",
    sourceQuality: "high",
    reason:
      "Microsoft securities litigation and SearchLeak remained monitor items, not thesis breaks. S&P Global Mobility financing clarified separation mechanics without changing the embedded-infrastructure thesis. Visa remained intact, Alphabet remained under review, and cash stayed valid.",
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
      "The buyback authorization is constructive, but the weekly review still does not make AutoZone outrank cash or current funded holdings without more durable operating evidence, valuation support, and continued balance-sheet discipline.",
  },
  {
    company: "Copart",
    ticker: "CPRT",
    stance: "do nothing",
    whyInteresting: "Unique salvage-auction network, global buyer base, and durable marketplace characteristics.",
    whyNotYet:
      "Fiscal Q3 improvement was modest, and the weekly review found no new evidence that lifted it above the funding bar versus cash and current holdings.",
  },
];

export const quarterlyStatus = [
  { label: "Last re-underwrite", value: "Q2 2026, completed 2026-06-01" },
  { label: "Exposure change", value: "None. Microsoft, Visa, S&P Global, Alphabet, and cash remain unchanged after the Week of 2026-06-15 journal." },
  { label: "Primary open question", value: "Can Alphabet's AI capex, financing, dilution, and governance setup still produce durable per-share value?" },
];

export const nextFocus = [
  "Monitor S&P Global Mobility Global separation mechanics, including the $2.0B notes, $500M revolver, Form 10 effectiveness, expected when-issued trading around June 26, and the July 1 expected distribution.",
  "Require Alphabet evidence on AI infrastructure returns, dilution, preferred terms, debt load, stock-plan usage, governance oversight, and Search resilience.",
  "Keep Visa's OpenAI and Intelligent Commerce work in the supportive-but-unproven bucket until transaction economics appear.",
  "Treat Microsoft Copilot Cowork, SearchLeak remediation, and the securities complaint as monitor items until adoption, margins, security trust, and disclosure quality show up in operating evidence.",
  "Treat AutoZone's June 16 buyback authorization as watchlist capital-allocation evidence, not a funding trigger; require sustained operating improvement and valuation support before replacing cash.",
  "Keep benchmark discipline tight: every weekly comparison should use one shared period for the portfolio, S&P 500, Nasdaq-100, SMH, and VT.",
];