import {
  benchmarkPoints,
  holdings,
  nextFocus,
  portfolioSnapshot,
  quarterlyStatus,
  recentDecisions,
  watchlist,
} from "./data/portfolio";
import type { Action, Confidence, ThesisStatus } from "./data/portfolio";

export type Locale = "en" | "th";

export const languageLabels: Record<Locale, { short: string; label: string }> = {
  en: { short: "EN", label: "English" },
  th: { short: "TH", label: "ไทย" },
};

type CopyBundle = {
  languageToggleLabel: string;
  languageToggleHint: string;
  kicker: string;
  accountFactsAria: string;
  asOf: string;
  navAria: string;
  dashboard: string;
  ledger: string;
  snapshotAria: string;
  startingCapital: string;
  sinceInception: string;
  processQuality: string;
  outcomeQuality: string;
  brokerageEyebrow: string;
  currentHoldings: string;
  holdingsHint: string;
  company: string;
  ticker: string;
  weight: string;
  status: string;
  confidence: string;
  action: string;
  decisionLog: string;
  recentDecisions: string;
  sourceQuality: string;
  watchlistEyebrow: string;
  watchlist: string;
  ledgerEyebrow: string;
  thesisInventory: string;
  inspectorEyebrow: string;
  currentThesis: string;
  killCondition: string;
  mainAssumptions: string;
  quarterlyStatus: string;
  nextFocus: string;
  nav: string;
  cash: string;
  invested: string;
  chart: {
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
  };
  actions: Record<Action, string>;
  statuses: Record<ThesisStatus, string>;
  confidenceLevels: Record<Confidence, string>;
  sourceQualityLevels: Record<"high" | "medium" | "low", string>;
};

export const uiCopy: Record<Locale, CopyBundle> = {
  en: {
    languageToggleLabel: "Switch language",
    languageToggleHint: "Language",
    kicker: "Blind paper portfolio",
    accountFactsAria: "Portfolio account facts",
    asOf: "As of",
    navAria: "Dashboard views",
    dashboard: "Dashboard",
    ledger: "Ledger",
    snapshotAria: "Portfolio snapshot",
    startingCapital: "Starting capital",
    sinceInception: "Since inception",
    processQuality: "Process quality",
    outcomeQuality: "Outcome quality",
    brokerageEyebrow: "Brokerage view",
    currentHoldings: "Current holdings",
    holdingsHint: "Click a row to inspect the thesis.",
    company: "Company",
    ticker: "Ticker",
    weight: "Weight",
    status: "Status",
    confidence: "Confidence",
    action: "Action",
    decisionLog: "Decision log",
    recentDecisions: "Recent decisions",
    sourceQuality: "source quality",
    watchlistEyebrow: "Do nothing queue",
    watchlist: "Watchlist",
    ledgerEyebrow: "Portfolio ledger",
    thesisInventory: "Thesis inventory",
    inspectorEyebrow: "Thesis inspector",
    currentThesis: "Current thesis",
    killCondition: "Kill condition",
    mainAssumptions: "Main assumptions",
    quarterlyStatus: "Quarterly status",
    nextFocus: "Next focus",
    nav: "NAV",
    cash: "Cash",
    invested: "Invested",
    chart: {
      eyebrow: "Weekly performance log",
      title: "Benchmark comparison",
      context: "Y-axis shows weekly return %. Pair view shades the gap between portfolio and benchmark.",
      latestWeek: "Latest week",
      all: "All",
      ariaMode: "Benchmark comparison mode",
      ariaLegend: "Benchmark legend",
      ariaChart: "Weekly portfolio and benchmark return chart",
      axisTitle: "Weekly return %",
      week: "Week",
      portfolio: "Portfolio",
      pending: "pending",
      vsPrefix: "Vs",
    },
    actions: { buy: "buy", hold: "hold", trim: "trim", exit: "exit", "do nothing": "do nothing" },
    statuses: { intact: "intact", strengthening: "strengthening", weakening: "weakening", broken: "broken", "under review": "under review" },
    confidenceLevels: { high: "high", medium: "medium", low: "low" },
    sourceQualityLevels: { high: "high", medium: "medium", low: "low" },
  },
  th: {
    languageToggleLabel: "สลับภาษา",
    languageToggleHint: "ภาษา",
    kicker: "พอร์ตจำลอง $10,000",
    accountFactsAria: "ข้อมูลบัญชีพอร์ต",
    asOf: "อัปเดตล่าสุด",
    navAria: "มุมมองแดชบอร์ด",
    dashboard: "แดชบอร์ด",
    ledger: "บันทึก thesis",
    snapshotAria: "ภาพรวมพอร์ต",
    startingCapital: "เงินตั้งต้น",
    sinceInception: "ผลตอบแทนสะสม",
    processQuality: "คุณภาพกระบวนการ",
    outcomeQuality: "ผลลัพธ์ล่าสุด",
    brokerageEyebrow: "มุมมองถือครอง",
    currentHoldings: "หุ้นและเงินสดในพอร์ต",
    holdingsHint: "คลิกแถวเพื่อดู thesis และ kill condition.",
    company: "บริษัท",
    ticker: "Ticker",
    weight: "น้ำหนัก",
    status: "สถานะ thesis",
    confidence: "ความมั่นใจ",
    action: "มติ",
    decisionLog: "บันทึกการตัดสินใจ",
    recentDecisions: "การตัดสินใจล่าสุด",
    sourceQuality: "หลักฐาน",
    watchlistEyebrow: "คิวรอดู ยังไม่ต้องซื้อ",
    watchlist: "รายชื่อเฝ้าดู",
    ledgerEyebrow: "สมุดพอร์ต",
    thesisInventory: "Thesis รายตัว",
    inspectorEyebrow: "เจาะ thesis",
    currentThesis: "Thesis ปัจจุบัน",
    killCondition: "เงื่อนไขลดหรือขาย",
    mainAssumptions: "สมมติฐานสำคัญ",
    quarterlyStatus: "รีวิวไตรมาส",
    nextFocus: "ประเด็นที่ต้องตาม",
    nav: "มูลค่าพอร์ต",
    cash: "เงินสด",
    invested: "ลงทุนแล้ว",
    chart: {
      eyebrow: "บันทึกผลตอบแทนรายสัปดาห์",
      title: "พอร์ตเทียบ benchmark",
      context: "แกน Y คือผลตอบแทนรายสัปดาห์ (%) โหมดรายดัชนีจะแรเงาช่องว่างระหว่างพอร์ตกับ benchmark ที่เลือก.",
      latestWeek: "สัปดาห์ล่าสุด",
      all: "ทั้งหมด",
      ariaMode: "เลือกมุมมอง benchmark",
      ariaLegend: "คำอธิบายเส้น benchmark",
      ariaChart: "กราฟผลตอบแทนรายสัปดาห์ของพอร์ตเทียบกับ benchmark",
      axisTitle: "ผลตอบแทนรายสัปดาห์ %",
      week: "สัปดาห์",
      portfolio: "พอร์ต",
      pending: "รอข้อมูล",
      vsPrefix: "เทียบ",
    },
    actions: { buy: "ซื้อ", hold: "ถือ", trim: "ลดน้ำหนัก", exit: "ขายออก", "do nothing": "ไม่ทำอะไร" },
    statuses: { intact: "thesis ยังใช้ได้", strengthening: "thesis แข็งขึ้น", weakening: "thesis อ่อนลง", broken: "thesis เสียแล้ว", "under review": "อยู่ระหว่างรีวิว" },
    confidenceLevels: { high: "สูง", medium: "กลาง", low: "ต่ำ" },
    sourceQualityLevels: { high: "สูง", medium: "กลาง", low: "ต่ำ" },
  },
};

const thaiHoldingText: Record<string, Partial<(typeof holdings)[number]>> = {
  MSFT: {
    thesis:
      "Microsoft ยังเป็นแกนพอร์ตที่อธิบายได้ง่าย: ซอฟต์แวร์องค์กรเหนียวแน่น Azure ยังมี runway และ AI มีโอกาสเพิ่มมูลค่าให้ฐานลูกค้าเดิม ข้อตกลงไฟฟ้า 20 ปีของ Chevron/Project Kilby สำหรับดาต้าเซ็นเตอร์ใน West Texas เป็นหลักฐานว่าบริษัทจริงจังกับการล็อกกำลังผลิตไฟฟ้าสำหรับ AI แต่ก็ทำให้ต้องตามเรื่อง capex พลังงาน และผลตอบแทนต่อหุ้นใกล้ขึ้น Copilot Cowork เป็นหลักฐานเชิงสินค้า ส่วน SearchLeak / CVE-2026-42824 และคดี securities complaint ยังเป็นประเด็นด้านความปลอดภัย กฎหมาย และคุณภาพ disclosure ไม่ใช่เหตุผลเพิ่มหรือลดน้ำหนัก.",
    killCondition:
      "ลดความมั่นใจทันทีถ้า cloud หรือซอฟต์แวร์องค์กรเสียแรงส่งถาวร มีปัญหาความปลอดภัยหรือ disclosure ด้าน enterprise AI ซ้ำจนลูกค้าหรือนักลงทุนเสียความเชื่อมั่น capex และสัญญาพลังงานด้าน AI ไม่แปลงเป็นกำไร หรือผู้บริหารจัดสรรทุนพลาดซ้ำจนกระทบผลตอบแทนต่อหุ้น.",
    assumptions: [
      "ลูกค้าองค์กรยังย้ายงานขึ้น cloud ต่อเนื่อง.",
      "AI ต้องเพิ่มคุณค่าของสินค้า ไม่ใช่เพิ่มแค่ต้นทุนโครงสร้างพื้นฐาน.",
      "workflow ของ Microsoft ยังฝังอยู่ในองค์กรลึกพอให้ย้ายออกยาก.",
      "Microsoft ต้องล็อกกำลังไฟและดาต้าเซ็นเตอร์ได้โดยไม่ทำให้ผลตอบแทนต่อหุ้นเจือจางเกินควร.",
      "Microsoft ต้องรักษาความปลอดภัยและคุณภาพ disclosure ของ Copilot ได้ดีพอจนไม่ทำให้ความเชื่อมั่นเสียหายถาวร.",
    ],
  },
  V: {
    thesis:
      "Visa เป็นเครือข่ายชำระเงินที่ใช้ทุนไม่หนัก แต่ได้ประโยชน์จากเงินสดที่ค่อย ๆ ถูกแทนด้วยดิจิทัล งาน OpenAI, token, stablecoin และ agentic commerce เป็นบวกเชิงกลยุทธ์ แต่ยังไม่ใช่หลักฐานกำไรที่ใช้เพิ่มน้ำหนักได้ รอบสแกน 10:30 ET ยังไม่พบข้อมูลใหม่ที่กระทบคุณภาพเครือข่ายหรือ economics ของธุรกิจ.",
    killCondition: "ลดน้ำหนัก thesis ถ้าค่าธรรมเนียมถูกกดแรงกว่าที่คิด กฎระเบียบทำลายอำนาจต่อรอง หรือรางชำระเงินใหม่เลี่ยง Visa ได้กว้างโดยบริษัทไม่ได้มีส่วนร่วมทดแทน.",
    assumptions: ["การชำระเงินดิจิทัลยังโตต่อทั้งในสหรัฐฯ และต่างประเทศ.", "Visa ยังมีบทบาทใน commerce ที่ใช้ AI, token และระบบยืนยันตัวตนมากขึ้น.", "แรงกดดันจากกฎระเบียบยังไม่ทำลาย economics ของเครือข่าย."],
  },
  SPGI: {
    thesis:
      "S&P Global คือ infrastructure ของตลาดทุนผ่าน ratings, indices, benchmarks และข้อมูลการเงินที่ลูกค้าต้องใช้ซ้ำ Mobility Global ยังเป็นงาน execution ที่ต้องตาม โดยเฉพาะหนี้ senior notes $2.0B และวงเงิน revolver $500M ของบริษัทที่จะถูกแยกออก รอบสแกน 10:30 ET ยังไม่พบข้อมูลใหม่ที่เปลี่ยนตารางเวลา จุดต่อไปคือ Form 10, when-issued trading และกลไกกระจายหุ้นวันที่ 1 กรกฎาคม.",
    killCondition: "ต้องทบทวนถ้าความน่าเชื่อถือของ ratings เสีย ธุรกิจดัชนีหรือข้อมูลถูกลดความสำคัญ หรือการแยก Mobility ทำให้ economics, leverage, โฟกัส หรือวินัยจัดสรรทุนแย่ลง.",
    assumptions: ["ตลาดยังไว้ใจ ratings, indices และข้อมูลของบริษัท.", "การแยก Mobility และโครงสร้างเงินทุนของบริษัทใหม่ไม่ทำให้ฐานกำไรหลักเสียหาย.", "ผลิตภัณฑ์ข้อมูลรายได้ประจำยังโตได้พร้อม margin ที่ดี."],
  },
  GOOGL: {
    thesis:
      "Alphabet ยังมีสินทรัพย์ชั้นดีอย่าง Search, YouTube, Cloud และเงินสด แต่คำถามใหญ่ยังเหมือนเดิม: capex และโครงสร้างเงินทุนด้าน AI จะคืนกลับมาเป็นมูลค่าต่อหุ้นได้แค่ไหน รอบสแกน 10:30 ET ยังไม่พอถอดสถานะ under review เพราะภาระลงทุน AI และ dilution ยังเป็นคำถามหลัก.",
    killCondition: "ทบทวนหนักถ้า economics ของ Search เสื่อมถาวร AI กินรายได้โฆษณาโดยชดเชยไม่ได้ กฎระเบียบตัดกำลัง distribution หรือ capex ด้าน AI ไม่เริ่มสร้างกำไรที่จับต้องได้.",
    assumptions: ["Search และ YouTube ยังรักษาความแข็งแรงได้ แม้พฤติกรรมค้นหาผ่าน AI จะเพิ่มขึ้น.", "Cloud ต้องโตพร้อมคุณภาพกำไร ไม่ใช่โตเพราะใช้เงินลงทุนมากขึ้นอย่างเดียว.", "โครงสร้างเงินทุนสำหรับ AI ต้องไม่ลดผลตอบแทนต่อหุ้นจน thesis เปลี่ยน."],
  },
  USD: {
    company: "เงินสด",
    thesis: "เงินสดเป็นตำแหน่งที่ตั้งใจถือ ไม่ใช่ช่องว่างในพอร์ต AutoZone มีข่าวซื้อคืนหุ้นที่ช่วยให้กรณีน่าดูขึ้น แต่รอบสแกน 10:30 ET ยังไม่มีไอเดียใหม่ที่ชนะทั้งหุ้นเดิมและความยืดหยุ่นของเงินสดได้ชัดพอ.",
    killCondition: "เงินสดควรถูกใช้เมื่อเจอธุรกิจคุณภาพสูงที่ thesis ชัด ราคาไม่ต้องสมบูรณ์แบบ และคาดหวังผลตอบแทนดีกว่าการรออย่างมีเหตุผล.",
    assumptions: ["ไม่จำเป็นต้องซื้อเพิ่มถ้าหลักฐานยังไม่ถึงเกณฑ์.", "ไอเดียใหม่ต้องดีกว่าทั้งเงินสดและหุ้นที่ถืออยู่.", "สัดส่วนเงินสดยังอยู่ในกรอบที่ mandate รับได้."],
  },
};

const thaiWatchlist: Record<string, { whyInteresting: string; whyNotYet: string }> = {
  AZO: {
    whyInteresting: "อะไหล่รถเป็นตลาดที่ demand ทนพอสมควร AutoZone กระจายสินค้าเก่ง และมีวินัยซื้อหุ้นคืนมายาวนาน วงเงินซื้อคืนใหม่ $1.5B ช่วยย้ำว่า capital allocation ยังเป็นจุดแข็งที่ต้องตาม.",
    whyNotYet: "ข่าวซื้อคืนเป็นบวก แต่รอบสแกน 10:30 ET ยังไม่พอให้ AutoZone ดีกว่าเงินสดหรือหุ้นแกนพอร์ต ต้องเห็นกำไร กระแสเงินสด leverage และ valuation หนุนชัดกว่านี้ก่อน.",
  },
  CPRT: {
    whyInteresting: "Copart มีเครือข่ายประมูลซากรถที่เฉพาะทาง ฐานผู้ซื้อกว้าง และโมเดล marketplace ที่ทนกว่าธุรกิจรถทั่วไป.",
    whyNotYet: "สัญญาณฟื้นตัวยังไม่ชัดพอเมื่อเทียบกับโอกาสที่พอร์ตถืออยู่แล้ว รอบสแกน 10:30 ET จึงยังเป็น watchlist ไม่ใช่ตำแหน่งลงทุน.",
  },
};

export function getPortfolioContent(locale: Locale) {
  if (locale === "th") {
    return {
      portfolioSnapshot: {
        ...portfolioSnapshot,
        mandate: "พอร์ตจำลอง $10,000 เน้นถือธุรกิจดีให้นานพอ เขียน thesis ให้ชัด และถือเงินสดได้เมื่อ conviction ยังไม่ถึง.",
        processQuality: "ดี: เช็กแหล่งข้อมูลหลักก่อน บันทึกประเด็นโครงสร้างพื้นฐานของ Microsoft ไม่บังคับให้ซื้อขาย และยังรักษาวินัยว่า benchmark ต้องอัปเดตเฉพาะรอบรายสัปดาห์.",
        outcomeQuality: "รอบสแกนระหว่างวันไม่ได้เพิ่มจุดผลตอบแทนใหม่ ข้อตกลงไฟฟ้า Chevron/Project Kilby เป็นรายการติดตามด้าน AI infrastructure ของ Microsoft ไม่ใช่เหตุผลปรับน้ำหนัก.",
      },
      holdings: holdings.map((holding) => ({ ...holding, ...thaiHoldingText[holding.ticker] })),
      benchmarkPoints: benchmarkPoints.map((point) => ({ ...point, note: translateBenchmarkNote(point.label, point.note) })),
      recentDecisions: recentDecisions.map((decision) => ({ ...decision, ...translateDecision(decision.date) })),
      watchlist: watchlist.map((item) => ({ ...item, ...thaiWatchlist[item.ticker] })),
      quarterlyStatus: [
        { label: "รีวิวล่าสุด", value: "รีวิวไตรมาส 2 ปี 2026 เสร็จเมื่อ 2026-06-01" },
        { label: "มีการปรับพอร์ตไหม", value: "ไม่มี หลังสแกน 2026-06-22 10:30 ET Microsoft, Visa, S&P Global, Alphabet และเงินสดยังน้ำหนักเดิม." },
        { label: "คำถามหลัก", value: "capex ด้าน AI ของ Alphabet และ Microsoft จะสร้างมูลค่าต่อหุ้นคุ้มกับเงินที่ลงไปหรือไม่?" },
      ],
      nextFocus: [
        "ตามข้อตกลงไฟฟ้า Chevron/Project Kilby ของ Microsoft: กำหนดเริ่มจ่ายไฟ ความเสี่ยง execution, capex, แหล่งพลังงาน และผลตอบแทนจาก AI capacity.",
        "ตาม execution ของการแยก Mobility Global ของ S&P Global รวมถึง notes $2.0B, revolver $500M, Form 10, when-issued trading และวันกระจายหุ้นที่คาดไว้ 1 กรกฎาคม.",
        "รอหลักฐานจาก Alphabet เรื่องผลตอบแทนของโครงสร้างพื้นฐาน AI dilution เงื่อนไข preferred ระดับหนี้ และความแข็งแรงของ Search.",
        "มองงาน OpenAI และ Intelligent Commerce ของ Visa เป็นบวกเชิงกลยุทธ์ แต่ยังไม่เพิ่มน้ำหนักจนกว่าจะเห็น economics ของธุรกรรมจริง.",
        "มอง Copilot Cowork, การแก้ SearchLeak และคดี securities complaint ของ Microsoft เป็นเรื่องที่ต้องตาม ทั้งด้าน adoption, margin, security trust และคุณภาพ disclosure.",
        "เก็บข่าวซื้อหุ้นคืนใหม่ของ AutoZone ไว้เป็นหลักฐานด้าน capital allocation แต่ยังไม่ใช้เงินสดจนกว่าผลประกอบการและ valuation จะหนุนชัดกว่านี้.",
        "มองประเด็นตลาด 22 มิ.ย. เช่น เจรจาอิหร่าน ตัวเลข PCE ที่จะออก และงบ Micron เป็นบริบทโอกาสลงทุน ไม่ใช่สัญญาณซื้อขาย จนกว่าจะกระทบคุณภาพธุรกิจจริง.",
        "รักษาวินัย benchmark: ทุกสัปดาห์ต้องใช้ช่วงเวลาเดียวกันสำหรับพอร์ต, S&P 500, Nasdaq-100, SMH และ VT.",
      ],
    };
  }

  return { portfolioSnapshot, holdings, benchmarkPoints, recentDecisions, watchlist, quarterlyStatus, nextFocus };
}

export function formatPointLabel(label: string, locale: Locale) {
  if (locale === "en") {
    return label;
  }

  return (
    {
      Baseline: "เริ่มต้น",
      "May 18": "18 พ.ค.",
      "May 25": "25 พ.ค.",
      "Jun 01": "1 มิ.ย.",
      "Jun 08": "8 มิ.ย.",
      "Jun 15": "15 มิ.ย.",
    }[label] ?? label
  );
}

function translateDecision(date: string) {
  if (date === "2026-06-22 10:30 ET") {
    return {
      subject: "สแกนระหว่างตลาด",
      reason:
        "รอบสแกน 10:30 ET บันทึกประเด็นใหม่ของ Microsoft: ข้อตกลงไฟฟ้า 20 ปีของ Chevron/Project Kilby สำหรับดาต้าเซ็นเตอร์ใน West Texas เรื่องนี้ช่วยยืนยันว่า Microsoft กำลังล็อกทรัพยากรสำคัญสำหรับ AI แต่ก็ทำให้ต้องตาม capex, พลังงาน และผลตอบแทนจาก capacity ใกล้ขึ้น ยังไม่ใช่สัญญาณซื้อขายหรือเหตุผลเปลี่ยนน้ำหนัก Visa, S&P Global, Alphabet, AutoZone, Copart และเงินสดไม่มีหลักฐานใหม่ที่เปลี่ยน thesis และไม่มีการเพิ่มจุด benchmark ระหว่างวัน.",
    };
  }

  if (date === "2026-06-22 09:30 ET") {
    return {
      subject: "สแกนระหว่างตลาด",
      reason:
        "รอบสแกนช่วงเปิดตลาดไม่พบหลักฐานรายบริษัทใหม่หลังบันทึกสัปดาห์ 2026-06-21 ที่เปลี่ยน thesis, conviction, kill condition หรือ opportunity cost. Microsoft ยังมีประเด็นความปลอดภัยและ disclosure เป็นรายการติดตาม Visa ยังเป็นบวกเชิงกลยุทธ์แต่ยังไม่พิสูจน์ economics S&P Global ยังต้องตาม execution การแยก Mobility Alphabet ยัง under review เพราะ capex และ dilution ด้าน AI ยังไม่เคลียร์ AutoZone กับ Copart ยังไม่ผ่านเกณฑ์ใช้เงินสด และไม่มีการเพิ่มจุด benchmark ระหว่างวัน.",
    };
  }

  if (date === "2026-06-21 weekly journal") {
    return {
      subject: "บันทึกสัปดาห์ 15 มิ.ย.",
      reason:
        "พอร์ต -0.46% สำหรับสัปดาห์สั้นจากราคาปิด 12 มิ.ย. ถึง 18 มิ.ย. และแพ้ S&P 500/SPY +0.67%, Nasdaq-100/QQQ +2.67%, SMH +6.44% และ VT +0.88%. แต่ยังไม่มี kill condition รายตัวถูกกระทบ Microsoft กับ S&P Global อ่อนจากราคา ไม่ใช่ thesis เสีย Visa กับ Alphabet บวกแต่ไม่พอให้ปรับน้ำหนัก Alphabet ยังอยู่ระหว่างรีวิว เงินสดยังมีเหตุผล และ AutoZone ยังเป็น watchlist แม้ข่าวซื้อคืนหุ้นทำให้กรณีน่าดูขึ้น.",
    };
  }

  return {
    subject: "สแกนวันตลาดปิด",
    reason:
      "รอบนี้เป็นเช็กพอยต์วันตลาดปิด ไม่ใช่สแกนระหว่างชั่วโมงซื้อขายจริง หลังเช็กพอยต์ก่อนหน้า ยังไม่พบหลักฐานรายบริษัทที่ต้องปรับพอร์ต Microsoft, Visa และ S&P Global ยังถือได้เหมือนเดิม Alphabet ยังอยู่ระหว่างรีวิว และ AutoZone กับ Copart ยังต่ำกว่าเกณฑ์ซื้อ.",
  };
}

function translateBenchmarkNote(label: string, fallback?: string) {
  return (
    {
      Baseline: "จุดตั้งต้นของชุดข้อมูลผลตอบแทนรายสัปดาห์.",
      "May 18": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-15 ถึง 2026-05-22.",
      "May 25": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-22 ถึง 2026-05-29.",
      "Jun 01": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-29 ถึง 2026-06-05.",
      "Jun 08": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-06-05 ถึง 2026-06-12.",
      "Jun 15": "ผลตอบแทนสัปดาห์สั้นเพราะ Juneteenth คำนวณจากราคาปิด 2026-06-12 ถึง 2026-06-18.",
    }[label] ?? fallback
  );
}
