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

export const uiCopy = {
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
    actions: {
      buy: "buy",
      hold: "hold",
      trim: "trim",
      exit: "exit",
      "do nothing": "do nothing",
    } satisfies Record<Action, string>,
    statuses: {
      intact: "intact",
      strengthening: "strengthening",
      weakening: "weakening",
      broken: "broken",
      "under review": "under review",
    } satisfies Record<ThesisStatus, string>,
    confidenceLevels: {
      high: "high",
      medium: "medium",
      low: "low",
    } satisfies Record<Confidence, string>,
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
    watchlistEyebrow: "คิวรอดู ไม่ต้องรีบซื้อ",
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
    actions: {
      buy: "ซื้อ",
      hold: "ถือ",
      trim: "ลดน้ำหนัก",
      exit: "ขายออก",
      "do nothing": "ไม่ทำอะไร",
    } satisfies Record<Action, string>,
    statuses: {
      intact: "thesis ยังใช้ได้",
      strengthening: "thesis แข็งขึ้น",
      weakening: "thesis อ่อนลง",
      broken: "thesis เสียแล้ว",
      "under review": "อยู่ระหว่างรีวิว",
    } satisfies Record<ThesisStatus, string>,
    confidenceLevels: {
      high: "สูง",
      medium: "กลาง",
      low: "ต่ำ",
    } satisfies Record<Confidence, string>,
    sourceQualityLevels: { high: "สูง", medium: "กลาง", low: "ต่ำ" },
  },
} as const;

const thaiHoldingText: Record<string, Partial<(typeof holdings)[number]>> = {
  MSFT: {
    thesis:
      "Microsoft ยังเป็นแกนพอร์ตที่อธิบายได้ง่าย: ซอฟต์แวร์องค์กรเหนียวแน่น Azure ยังมี runway และ AI มีโอกาสเพิ่มมูลค่าให้ฐานลูกค้าเดิม Copilot Cowork เป็นหลักฐานเชิงสินค้า ส่วน SearchLeak / CVE-2026-42824 เป็นประเด็นด้านความปลอดภัยที่ต้องตาม เพราะกระทบความเชื่อมั่นต่อ enterprise AI คดี securities complaint ที่ยื่นเมื่อ 12 มิ.ย. เป็นประเด็นด้านกฎหมายและคุณภาพ disclosure ที่ต้องตามเช่นกัน แต่ข้อกล่าวหายังไม่พิสูจน์ และยังไม่ใช่เหตุผลเพิ่มหรือลดน้ำหนักทันที.",
    killCondition:
      "ลดความมั่นใจทันทีถ้า cloud หรือซอฟต์แวร์องค์กรเสียแรงส่งถาวร มีปัญหาความปลอดภัยหรือ disclosure ด้าน enterprise AI ซ้ำจนลูกค้าหรือนักลงทุนเสียความเชื่อมั่น capex ด้าน AI ไม่แปลงเป็นกำไร หรือผู้บริหารจัดสรรทุนพลาดซ้ำจนกระทบผลตอบแทนต่อหุ้น.",
    assumptions: [
      "ลูกค้าองค์กรยังย้ายงานขึ้น cloud ต่อเนื่อง.",
      "AI ต้องเพิ่มคุณค่าของสินค้า ไม่ใช่เพิ่มแค่ต้นทุนโครงสร้างพื้นฐาน.",
      "workflow ของ Microsoft ยังฝังอยู่ในองค์กรลึกพอให้ย้ายออกยาก.",
      "Microsoft ต้องรักษาความปลอดภัยและคุณภาพ disclosure ของ Copilot ได้ดีพอจนไม่ทำให้ความเชื่อมั่นเสียหายถาวร.",
    ],
  },
  V: {
    thesis:
      "Visa เป็นเครือข่ายชำระเงินที่ใช้ทุนไม่หนัก แต่ได้ประโยชน์จากเงินสดที่ค่อย ๆ ถูกแทนด้วยดิจิทัล งาน OpenAI, token, stablecoin และ agentic commerce เป็นบวกเชิงกลยุทธ์ แต่ยังไม่ใช่หลักฐานกำไรที่ใช้เพิ่มน้ำหนักได้.",
    killCondition:
      "ลดน้ำหนัก thesis ถ้าค่าธรรมเนียมถูกกดแรงกว่าที่คิด กฎระเบียบทำลายอำนาจต่อรอง หรือรางชำระเงินใหม่เลี่ยง Visa ได้กว้างโดยบริษัทไม่ได้มีส่วนร่วมทดแทน.",
    assumptions: [
      "การชำระเงินดิจิทัลยังโตต่อทั้งในสหรัฐฯ และต่างประเทศ.",
      "Visa ยังมีบทบาทใน commerce ที่ใช้ AI, token และระบบยืนยันตัวตนมากขึ้น.",
      "แรงกดดันจากกฎระเบียบยังไม่ทำลาย economics ของเครือข่าย.",
    ],
  },
  SPGI: {
    thesis:
      "S&P Global คือ infrastructure ของตลาดทุนผ่าน ratings, indices, benchmarks และข้อมูลการเงินที่ลูกค้าต้องใช้ซ้ำ Mobility Global ยังเป็นงาน execution ที่ต้องตาม โดยเฉพาะหนี้ senior notes $2.0B และวงเงิน revolver $500M ของบริษัทที่จะถูกแยกออก เพราะเงินส่วนหนึ่งจะจ่ายกลับให้ S&P Global เมื่อเงื่อนไขการแยกสำเร็จ จุดต่อไปคือ Form 10, when-issued trading และกลไกกระจายหุ้นวันที่ 1 กรกฎาคม.",
    killCondition:
      "ต้องทบทวนถ้าความน่าเชื่อถือของ ratings เสีย ธุรกิจดัชนีหรือข้อมูลถูกลดความสำคัญ หรือการแยก Mobility ทำให้ economics, leverage, โฟกัส หรือวินัยจัดสรรทุนแย่ลง.",
    assumptions: [
      "ตลาดยังไว้ใจ ratings, indices และข้อมูลของบริษัท.",
      "การแยก Mobility และโครงสร้างเงินทุนของบริษัทใหม่ไม่ทำให้ฐานกำไรหลักเสียหาย.",
      "ผลิตภัณฑ์ข้อมูลรายได้ประจำยังโตได้พร้อม margin ที่ดี.",
    ],
  },
  GOOGL: {
    thesis:
      "Alphabet ยังมีสินทรัพย์ชั้นดีอย่าง Search, YouTube, Cloud และเงินสด แต่ตอนนี้คำถามใหญ่คือ capex และโครงสร้างเงินทุนด้าน AI จะคืนกลับมาเป็นมูลค่าต่อหุ้นได้แค่ไหน จึงยังถือ แต่ต้องรีวิวใกล้กว่าหุ้นแกนอื่น.",
    killCondition:
      "ทบทวนหนักถ้า economics ของ Search เสื่อมถาวร AI กินรายได้โฆษณาโดยชดเชยไม่ได้ กฎระเบียบตัดกำลัง distribution หรือ capex ด้าน AI ไม่เริ่มสร้างกำไรที่จับต้องได้.",
    assumptions: [
      "Search และ YouTube ยังรักษาความแข็งแรงได้ แม้พฤติกรรมค้นหาผ่าน AI จะเพิ่มขึ้น.",
      "Cloud ต้องโตพร้อมคุณภาพกำไร ไม่ใช่โตเพราะใช้เงินลงทุนมากขึ้นอย่างเดียว.",
      "โครงสร้างเงินทุนสำหรับ AI ต้องไม่ลดผลตอบแทนต่อหุ้นจน thesis เปลี่ยน.",
    ],
  },
  USD: {
    company: "เงินสด",
    thesis:
      "เงินสดเป็นตำแหน่งที่ตั้งใจถือ ไม่ใช่ช่องว่างในพอร์ต ตอนนี้ยังไม่มีไอเดียใหม่ที่ชนะทั้งหุ้นเดิมและความยืดหยุ่นของเงินสดได้ชัดพอ.",
    killCondition:
      "เงินสดควรถูกใช้เมื่อเจอธุรกิจคุณภาพสูงที่ thesis ชัด ราคาไม่ต้องสมบูรณ์แบบ และคาดหวังผลตอบแทนดีกว่าการรออย่างมีเหตุผล.",
    assumptions: [
      "ไม่จำเป็นต้องซื้อเพิ่มถ้าหลักฐานยังไม่ถึงเกณฑ์.",
      "ไอเดียใหม่ต้องดีกว่าทั้งเงินสดและหุ้นที่ถืออยู่.",
      "สัดส่วนเงินสดยังอยู่ในกรอบที่ mandate รับได้.",
    ],
  },
};

const thaiDecisionText: Record<string, { subject: string; reason: string }> = {
  "2026-06-18 15:30 ET": {
    subject: "สแกนระหว่างวัน",
    reason:
      "สแกน 15:30 ET ยังไม่พบหลักฐานที่ต้องปรับพอร์ต คดี securities complaint ของ Microsoft ถูกเพิ่มเป็นประเด็นด้านกฎหมายและคุณภาพ disclosure ที่ต้องตาม แต่ข้อกล่าวหายังไม่พิสูจน์ และยังไม่มีหลักฐานว่าลูกค้า economics หรือธรรมาภิบาลเสียหายถาวร ส่วน S&P Global ต้องตามโครงสร้างเงินทุนของ Mobility Global หลังมี senior notes $2.0B และ revolver $500M เพราะเกี่ยวกับ execution ของการแยกธุรกิจ แต่ยังไม่ทำให้ thesis หลักอ่อนลง Visa ยังแข็งแรงแต่ agentic commerce ยังเป็นเรื่องระยะยาว Alphabet ยังอยู่ระหว่างรีวิว และเงินสดยังสมเหตุสมผล.",
  },
  "2026-06-18 14:30 ET": {
    subject: "สแกนระหว่างวัน",
    reason:
      "สแกน 14:30 ET ยังไม่พบหลักฐานรายบริษัทที่ต้องเปลี่ยน thesis หรือน้ำหนักพอร์ต ประเด็น SearchLeak / CVE-2026-42824 ของ Microsoft ถูกเพิ่มเป็นเรื่องที่ต้องตามด้านความเชื่อมั่นต่อ enterprise AI แต่ยังไม่ใช่ thesis break เพราะเป็นช่องโหว่ที่ Microsoft แก้ไขแล้วตามรายงานของ Varonis. Visa, S&P Global และเงินสดยังถือได้เหมือนเดิม Alphabet ยังอยู่ระหว่างรีวิว AutoZone ยังเป็น watchlist ด้าน capital allocation ส่วน Copart ยังต่ำกว่าเกณฑ์ซื้อ.",
  },
  "2026-06-18 13:30 ET": {
    subject: "สแกนระหว่างวัน",
    reason:
      "สแกน 13:30 ET ยังไม่พบหลักฐานรายบริษัทที่ต้องเปลี่ยน thesis หรือน้ำหนักพอร์ต Microsoft, Visa และ S&P Global ยังถือได้เหมือนเดิม Alphabet ยังอยู่ระหว่างรีวิว AutoZone เป็นหลักฐานบวกด้านวินัยซื้อหุ้นคืนแต่ยังไม่พอให้แย่งเงินจากเงินสดหรือหุ้นแกน ส่วน Copart ยังต่ำกว่าเกณฑ์ซื้อ. การเคลื่อนไหวระหว่างวันของ benchmark เป็นแค่บริบทตลาด.",
  },
  "2026-06-18 12:30 ET": {
    subject: "สแกนระหว่างวัน",
    reason:
      "สแกน 12:30 ET ยังไม่พบหลักฐานรายบริษัทที่ต้องเปลี่ยน thesis หรือน้ำหนักพอร์ต Microsoft, Visa และ S&P Global ยังถือได้เหมือนเดิม Alphabet ยังอยู่ระหว่างรีวิว AutoZone เป็นข่าวบวกด้านวินัยซื้อหุ้นคืนแต่ยังไม่แรงพอให้ใช้เงินสดแทนหุ้นแกนพอร์ต ส่วน Copart ยังต่ำกว่าเกณฑ์ซื้อ. การเคลื่อนไหวระหว่างวันของ benchmark เป็นแค่บริบทตลาด.",
  },
  "2026-06-18 11:30 ET": {
    subject: "สแกนระหว่างวัน",
    reason:
      "สแกน 11:30 ET ยังไม่เจอหลักฐานรายบริษัทที่ต้องเปลี่ยน thesis หรือขนาดสถานะ ข่าวสินค้า AI ของ Microsoft และงาน commerce ของ Visa ยังเป็นเรื่องที่ต้องตาม ไม่ใช่เหตุผลเพิ่มน้ำหนักทันที.",
  },
  "2026-06-18 10:30 ET": {
    subject: "สแกนระหว่างวัน",
    reason:
      "สแกน 10:30 ET ไม่พบหลักฐานใหม่ที่เปลี่ยนคุณภาพธุรกิจหรือ kill condition ของหุ้นที่ถืออยู่.",
  },
};

const thaiWatchlist: Record<string, { whyInteresting: string; whyNotYet: string }> = {
  AZO: {
    whyInteresting:
      "อะไหล่รถเป็นตลาดที่ demand ทนพอสมควร AutoZone กระจายสินค้าเก่ง และมีวินัยซื้อหุ้นคืนมายาวนาน วงเงินซื้อคืนใหม่ $1.5B ช่วยย้ำว่าเรื่องนี้ยังเป็นส่วนสำคัญของ capital allocation.",
    whyNotYet:
      "ข่าวซื้อคืนเป็นบวก แต่ยังต้องดูว่ากำไร กระแสเงินสด leverage และราคาที่ซื้อคืนสมเหตุสมผลพอหรือไม่ ก่อนจะให้แย่งเงินจากเงินสดหรือหุ้นที่ถืออยู่.",
  },
  CPRT: {
    whyInteresting: "Copart มีเครือข่ายประมูลซากรถที่เฉพาะทาง ฐานผู้ซื้อกว้าง และโมเดล marketplace ที่ทนกว่าธุรกิจรถทั่วไป.",
    whyNotYet: "สัญญาณฟื้นตัวยังไม่ชัดพอเมื่อเทียบกับโอกาสที่พอร์ตถืออยู่แล้ว.",
  },
};

export function getPortfolioContent(locale: Locale) {
  if (locale === "th") {
    return {
      portfolioSnapshot: {
        ...portfolioSnapshot,
        asOf: "สแกนระหว่างวัน 2026-06-18 15:30 ET; NAV ยืนยันล่าสุดจากราคาปิด 2026-06-12",
        mandate:
          "พอร์ตจำลอง $10,000 เน้นถือธุรกิจดีให้นานพอ เขียน thesis ให้ชัด และถือเงินสดได้เมื่อ conviction ยังไม่ถึง.",
        processQuality: "ดี: พอร์ตกระจุกตัวแบบมีเหตุผล ใช้หลักฐานชั้นต้น และไม่ซื้อขายเพื่อให้ดูยุ่ง.",
        outcomeQuality:
          "มูลค่าล่าสุดยังอิงราคาปิด 12 มิ.ย. สแกน 15:30 ET ยังไม่เจอหลักฐานที่ต้องปรับพอร์ต คดี Microsoft และโครงสร้างเงินทุนของ Mobility Global เป็นเรื่องที่ต้องตาม ไม่ใช่สัญญาณซื้อขาย.",
      },
      holdings: holdings.map((holding) => ({ ...holding, ...thaiHoldingText[holding.ticker] })),
      benchmarkPoints: benchmarkPoints.map((point) => ({ ...point, note: translateBenchmarkNote(point.label, point.note) })),
      recentDecisions: recentDecisions.map((decision) => ({
        ...decision,
        ...(thaiDecisionText[decision.date] ?? {}),
      })),
      watchlist: watchlist.map((item) => ({ ...item, ...thaiWatchlist[item.ticker] })),
      quarterlyStatus: [
        { label: "รีวิวล่าสุด", value: "รีวิวไตรมาส 2 ปี 2026 เสร็จเมื่อ 2026-06-01" },
        { label: "มีการปรับพอร์ตไหม", value: "ไม่มี หลังสแกน 15:30 ET Microsoft, Visa, S&P Global, Alphabet และเงินสดยังน้ำหนักเดิม." },
        { label: "คำถามหลัก", value: "capex ด้าน AI ของ Alphabet จะสร้างมูลค่าต่อหุ้นคุ้มกับเงินที่ลงไปหรือไม่?" },
      ],
      nextFocus: [
        "ตาม execution ของการแยก Mobility Global ของ S&P Global รวมถึง notes $2.0B, revolver $500M, Form 10, when-issued trading และวันกระจายหุ้นที่คาดไว้ 1 กรกฎาคม.",
        "รอหลักฐานจาก Alphabet เรื่องผลตอบแทนของโครงสร้างพื้นฐาน AI dilution เงื่อนไข preferred ระดับหนี้ และความแข็งแรงของ Search.",
        "มองงาน OpenAI และ Intelligent Commerce ของ Visa เป็นบวกเชิงกลยุทธ์ แต่ยังไม่เพิ่มน้ำหนักจนกว่าจะเห็น economics ของธุรกรรมจริง.",
        "มอง Copilot Cowork, การแก้ SearchLeak และคดี securities complaint ของ Microsoft เป็นเรื่องที่ต้องตาม ทั้งด้าน adoption, margin, security trust และคุณภาพ disclosure.",
        "เก็บข่าวซื้อหุ้นคืนใหม่ของ AutoZone ไว้เป็นหลักฐานด้าน capital allocation แต่ยังไม่ใช้เงินสดจนกว่าผลประกอบการและ valuation จะหนุนชัดกว่านี้.",
        "มองการเคลื่อนไหวระหว่างวันของ benchmark และข่าว macro เป็นแค่สภาพตลาด เว้นแต่จะกระทบคุณภาพธุรกิจโดยตรง.",
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
    }[label] ?? label
  );
}

function translateBenchmarkNote(label: string, fallback?: string) {
  return (
    {
      Baseline: "จุดตั้งต้นของชุดข้อมูลผลตอบแทนรายสัปดาห์.",
      "May 18": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-15 ถึง 2026-05-22.",
      "May 25": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-22 ถึง 2026-05-29.",
      "Jun 01": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-29 ถึง 2026-06-05.",
      "Jun 08": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-06-05 ถึง 2026-06-12.",
    }[label] ?? fallback
  );
}
