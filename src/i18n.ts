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
    sourceQualityLevels: {
      high: "high",
      medium: "medium",
      low: "low",
    },
  },
  th: {
    languageToggleLabel: "เปลี่ยนภาษา",
    languageToggleHint: "ภาษา",
    kicker: "พอร์ตจำลอง $10,000",
    accountFactsAria: "ข้อมูลสรุปพอร์ต",
    asOf: "อัปเดตถึง",
    navAria: "มุมมองพอร์ต",
    dashboard: "ภาพรวม",
    ledger: "บันทึกธีสิส",
    snapshotAria: "สรุปสถานะพอร์ต",
    startingCapital: "เงินตั้งต้น",
    sinceInception: "ผลตอบแทนสะสม",
    processQuality: "วินัยการตัดสินใจ",
    outcomeQuality: "คุณภาพผลลัพธ์",
    brokerageEyebrow: "พอร์ตถือครอง",
    currentHoldings: "สถานะล่าสุดของพอร์ต",
    holdingsHint: "เลือกแถวเพื่อดูเหตุผลลงทุนและเงื่อนไขทบทวน",
    company: "บริษัท",
    ticker: "สัญลักษณ์",
    weight: "น้ำหนัก",
    status: "สถานะธีสิส",
    confidence: "ความมั่นใจ",
    action: "คำตัดสิน",
    decisionLog: "บันทึกการตัดสินใจ",
    recentDecisions: "การตัดสินใจล่าสุด",
    sourceQuality: "คุณภาพหลักฐาน",
    watchlistEyebrow: "รายชื่อที่ยังรอหลักฐาน",
    watchlist: "หุ้นที่ติดตาม",
    ledgerEyebrow: "สมุดพอร์ต",
    thesisInventory: "รวมธีสิสรายสถานะ",
    inspectorEyebrow: "อ่านธีสิส",
    currentThesis: "เหตุผลลงทุนปัจจุบัน",
    killCondition: "เงื่อนไขที่ต้องทบทวน",
    mainAssumptions: "สมมติฐานหลัก",
    quarterlyStatus: "สถานะรีวิวรายไตรมาส",
    nextFocus: "ประเด็นติดตามต่อ",
    nav: "มูลค่าพอร์ต",
    cash: "เงินสด",
    invested: "ลงทุนแล้ว",
    chart: {
      eyebrow: "บันทึกผลตอบแทนรายสัปดาห์",
      title: "เทียบดัชนีอ้างอิง",
      context: "แกน Y คือผลตอบแทนรายสัปดาห์ ส่วนมุมมองรายดัชนีจะแสดงส่วนต่างระหว่างพอร์ตกับดัชนีนั้น",
      latestWeek: "สัปดาห์ล่าสุด",
      all: "ทั้งหมด",
      ariaMode: "เลือกมุมมองดัชนีอ้างอิง",
      ariaLegend: "คำอธิบายเส้นดัชนีอ้างอิง",
      ariaChart: "กราฟผลตอบแทนรายสัปดาห์ของพอร์ตเทียบดัชนีอ้างอิง",
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
      "do nothing": "ไม่ทำรายการ",
    } satisfies Record<Action, string>,
    statuses: {
      intact: "ยังใช้ได้",
      strengthening: "แข็งแรงขึ้น",
      weakening: "อ่อนลง",
      broken: "ใช้ไม่ได้แล้ว",
      "under review": "กำลังทบทวน",
    } satisfies Record<ThesisStatus, string>,
    confidenceLevels: {
      high: "สูง",
      medium: "กลาง",
      low: "ต่ำ",
    } satisfies Record<Confidence, string>,
    sourceQualityLevels: {
      high: "สูง",
      medium: "กลาง",
      low: "ต่ำ",
    },
  },
} as const;

const thaiHoldingText: Record<string, Partial<(typeof holdings)[number]>> = {
  MSFT: {
    thesis:
      "Microsoft เป็นแกน compounder ของพอร์ต เพราะมีซอฟต์แวร์องค์กรที่เหนียวแน่น, Azure ที่โตต่อได้, แรงหนุนจากโครงสร้างพื้นฐาน AI และกระแสเงินสดที่ยังแข็งแรง.",
    killCondition:
      "ต้องทบทวนทันทีถ้าความทนทานของ cloud หรือซอฟต์แวร์องค์กรเสื่อมลง, เงินลงทุน AI ไม่แปลงเป็นกำไรซ้ำ ๆ, หรือผู้บริหารเริ่มจัดสรรทุนขาดวินัยต่อเนื่อง.",
    assumptions: [
      "ความต้องการ commercial cloud ยังแข็งแรงพอให้โตต่อหลายปี.",
      "การลงทุน AI ช่วยเสริมช่องทางขายและผลิตภัณฑ์ โดยไม่บั่นทอนคุณภาพกระแสเงินสดอิสระ.",
      "switching cost และ workflow แบบ bundle ในองค์กรยังทำให้คู่แข่งแย่งลูกค้าได้ยาก.",
    ],
  },
  V: {
    thesis:
      "Visa เป็นเครือข่ายชำระเงิน asset-light ที่กินส่วนแบ่งจากการใช้จ่ายดิจิทัลทั่วโลก และยังมีบทบาทใน tokenization, authorization และการจัดการ fraud.",
    killCondition:
      "ต้องลดความเชื่อมั่นถ้าเศรษฐศาสตร์ของเครือข่ายอ่อนลง, กฎระเบียบบีบ pricing power อย่างมีนัยสำคัญ, หรือ payment rails ใหม่เลี่ยง Visa ได้ในวงกว้าง.",
    assumptions: [
      "การชำระเงินดิจิทัลยังเพิ่ม penetration ได้ทั่วโลก.",
      "Visa ยังมีตำแหน่งใน commerce ที่ขับเคลื่อนด้วย AI และ tokenized commerce.",
      "แรงกดดันด้านกฎหมายและกฎระเบียบยังอยู่ในระดับที่บริหารจัดการได้.",
    ],
  },
  SPGI: {
    thesis:
      "S&P Global เป็นโครงสร้างพื้นฐานของตลาดทุนผ่านเรตติ้ง, ดัชนีอ้างอิง และข้อมูลการเงิน การแยก Mobility Global อาจทำให้ธุรกิจหลักชัดและคมขึ้นถ้าทำได้เรียบร้อย.",
    killCondition:
      "ต้องทบทวนถ้าความน่าเชื่อถือของเรตติ้งเสื่อม, ธุรกิจดัชนีหรือข้อมูลเสียความสำคัญ, หรือการแยก Mobility ทำลาย economics และวินัยจัดสรรทุน.",
    assumptions: [
      "franchise หลักด้านเรตติ้งและข้อมูลยังได้รับความเชื่อถือจากตลาด.",
      "การแยก Mobility เดินหน้าได้โดยไม่กระทบฐานกำไรของธุรกิจหลัก.",
      "ผลิตภัณฑ์ข้อมูลแบบ recurring และ margin สูงยัง compound ได้ต่อ.",
    ],
  },
  GOOGL: {
    thesis:
      "Alphabet ยังมี Search, YouTube, Cloud และฐานกระแสเงินสดที่ยอดเยี่ยม แต่แผนลงทุนโครงสร้างพื้นฐาน AI ทำให้ต้องพิสูจน์ชัดขึ้นว่าผลตอบแทนต่อหุ้นยังคุ้มค่า.",
    killCondition:
      "ต้องทบทวนหนักถ้าเศรษฐศาสตร์ของ Search เสื่อมถาวร, AI substitutes กด monetization ระยะยาว, กฎระเบียบทำลาย distribution power, หรือ AI capex ไม่สร้างกำไรที่ทนทาน.",
    assumptions: [
      "Search และ YouTube ยังปรับตัวได้เมื่อ interface แบบ AI เปลี่ยนพฤติกรรมผู้ใช้.",
      "การเติบโตและ backlog ของ Cloud แปลงเป็นผลตอบแทนที่น่าพอใจ.",
      "หนี้, preferred/common issuance และ capex ไม่ dilute การ compound ต่อหุ้นเกินกรอบ thesis.",
    ],
  },
  USD: {
    company: "เงินสด",
    thesis:
      "เงินสดเป็นสถานะที่ตั้งใจถือ เพราะไอเดียลำดับถัดไปยังไม่ผ่านเกณฑ์ความมั่นใจพอให้เขียนธีสิสและจัดสรรทุนได้.",
    killCondition:
      "เงินสดควรถูกใช้เมื่อเจอธุรกิจที่ความทนทาน, ราคา, และคุณภาพของธีสิสชัดเจนกว่าค่า optionality ของการรอ.",
    assumptions: [
      "การไม่ทำรายการยังถูกต้องเมื่อหลักฐานยังไม่ครบ.",
      "ไอเดียใหม่ต้องดีกว่าทั้งเงินสดและสถานะที่ถืออยู่เดิม.",
      "น้ำหนักเงินสดยังต่ำกว่าเพดานปกติ 40% ตาม mandate.",
    ],
  },
};

const thaiDecisions: Record<string, { subject: string; reason: string }> = {
  "Daily scan": {
    subject: "สแกนรายวัน",
    reason:
      "ยังไม่มีข้อมูลใหม่ที่เปลี่ยนคุณภาพธุรกิจ, moat, ผู้บริหาร, ความทนทานทางการเงิน, ขนาดสถานะ, ความมั่นใจ หรือเงื่อนไขทบทวนมากพอให้ต้องทำรายการ.",
  },
  "Weekly journal": {
    subject: "บันทึกรายสัปดาห์",
    reason:
      "ความร่วมมือ OpenAI ของ Visa เป็นสัญญาณเชิงกลยุทธ์ที่ดี, การแยกธุรกิจของ S&P Global ยังเป็นประเด็น execution ที่ต้องตามต่อ และ Alphabet ยังอยู่ในช่วงทบทวนโดยธีสิสยังไม่พัง.",
  },
  "Alphabet status change": {
    subject: "ปรับสถานะ Alphabet",
    reason:
      "เอกสารทางการเรื่องการระดมทุนโครงสร้างพื้นฐาน AI ทำให้ภาระพิสูจน์ผลตอบแทนต่อหุ้นของ Alphabet สูงขึ้น จึงปรับสถานะเป็นกำลังทบทวนโดยยังไม่เปลี่ยนน้ำหนัก.",
  },
};

const thaiWatchlist: Record<string, { whyInteresting: string; whyNotYet: string }> = {
  AZO: {
    whyInteresting: "โมเดลกระจายอะไหล่แข็งแรง, demand งานซ่อมทนทาน และมีวินัย buyback ระยะยาว.",
    whyNotYet: "ไตรมาสที่ดีขึ้นเพียงครั้งเดียวยังไม่พอให้ชนะเงินสดหรือหุ้นที่พอร์ตจัดสรรทุนไว้แล้ว.",
  },
  CPRT: {
    whyInteresting: "เครือข่ายประมูลซากรถมีความเฉพาะตัว, ฐานผู้ซื้อกระจายทั่วโลก และมีลักษณะ marketplace ที่ทนทาน.",
    whyNotYet: "สัญญาณฟื้นตัวยังไม่หนักแน่นพอให้ผ่านเกณฑ์จัดสรรทุนเมื่อเทียบกับเงินสดและ holdings ปัจจุบัน.",
  },
};

export function getPortfolioContent(locale: Locale) {
  if (locale === "th") {
    return {
      portfolioSnapshot: {
        ...portfolioSnapshot,
        mandate:
          "พอร์ตจำลอง $10,000 ที่เน้นการเป็นเจ้าของธุรกิจอย่างอดทน เขียนเหตุผลลงทุนให้ชัด และถือเงินสดเมื่อความมั่นใจยังไม่พอ.",
        processQuality: "ดี: กระจุกตัวอย่างมีเหตุผล, ตัดสินใจจากธีสิส, ใช้หลักฐานชั้นต้น และไม่ฝืนทำรายการ.",
        outcomeQuality: "ยังเร็วเกินไปที่จะตัดสิน ผลตอบแทนระยะสั้นถูกบันทึกไว้ แต่ไม่ใช่เหตุผลให้เทรด.",
      },
      holdings: holdings.map((holding) => ({ ...holding, ...thaiHoldingText[holding.ticker] })),
      benchmarkPoints: benchmarkPoints.map((point) => ({ ...point, note: translateBenchmarkNote(point.label, point.note) })),
      recentDecisions: recentDecisions.map((decision) => ({ ...decision, ...thaiDecisions[decision.subject] })),
      watchlist: watchlist.map((item) => ({ ...item, ...thaiWatchlist[item.ticker] })),
      quarterlyStatus: [
        { label: "รีวิวเชิงลึกล่าสุด", value: "ไตรมาส 2 ปี 2026, เสร็จเมื่อ 2026-06-01" },
        { label: "การเปลี่ยนน้ำหนัก", value: "ไม่มีการเปลี่ยนแปลง Microsoft, Visa, S&P Global, Alphabet และเงินสดยังคงน้ำหนักเดิม." },
        { label: "คำถามหลักที่ยังเปิดอยู่", value: "AI capex และ financing ของ Alphabet ยังสร้างมูลค่าต่อหุ้นได้ทนทานจริงหรือไม่?" },
      ],
      nextFocus: [
        "ติดตาม mechanics การแยก Mobility Global ของ S&P Global จนถึง expected distribution วันที่ 1 กรกฎาคม.",
        "รอหลักฐานจาก Alphabet เรื่องผลตอบแทนโครงสร้างพื้นฐาน AI, dilution, preferred terms, ระดับหนี้ และความทนทานของ Search.",
        "เก็บงาน OpenAI ของ Visa ไว้เป็นสัญญาณสนับสนุน แต่ยังไม่ถือว่าพิสูจน์แล้วจนกว่าจะเห็น economics ของธุรกรรม.",
        "ยังไม่จัดสรรทุนให้ AutoZone หรือ Copart จนกว่าการฟื้นตัวจะชัดและทนทานเกินหนึ่งไตรมาส.",
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
      Baseline: "จุดเริ่มต้นของชุดข้อมูลผลตอบแทนรายสัปดาห์.",
      "May 18": "ผลตอบแทนเต็มสัปดาห์ที่ backfill จากราคาปิดวันศุกร์ 2026-05-15 ถึง 2026-05-22.",
      "May 25": "ผลตอบแทนเต็มสัปดาห์ที่ backfill จากราคาปิดวันศุกร์ 2026-05-22 ถึง 2026-05-29.",
      "Jun 01": "ผลตอบแทนเต็มสัปดาห์ที่ backfill จากราคาปิดวันศุกร์ 2026-05-29 ถึง 2026-06-05.",
      "Jun 08": "การเปรียบเทียบเต็มสัปดาห์จากราคาปิดวันศุกร์ 2026-06-05 ถึง 2026-06-12.",
    }[label] ?? fallback
  );
}
