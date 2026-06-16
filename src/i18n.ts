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
    asOf: "ข้อมูลถึง",
    navAria: "มุมมองพอร์ต",
    dashboard: "ภาพรวมพอร์ต",
    ledger: "สมุดเหตุผล",
    snapshotAria: "สรุปพอร์ตโดยย่อ",
    startingCapital: "เงินตั้งต้น",
    sinceInception: "ผลตอบแทนตั้งแต่เริ่ม",
    processQuality: "วินัยการลงทุน",
    outcomeQuality: "ผลลัพธ์ล่าสุด",
    brokerageEyebrow: "รายการถือครอง",
    currentHoldings: "พอร์ตตอนนี้ถืออะไรอยู่",
    holdingsHint: "กดชื่อหุ้นเพื่ออ่านเหตุผลที่ยังถือ",
    company: "ชื่อบริษัท",
    ticker: "ตัวย่อ",
    weight: "น้ำหนักพอร์ต",
    status: "มุมมอง",
    confidence: "ระดับมั่นใจ",
    action: "ทำอย่างไรต่อ",
    decisionLog: "บันทึกการตัดสินใจ",
    recentDecisions: "ตัดสินใจล่าสุด",
    sourceQuality: "น้ำหนักหลักฐาน",
    watchlistEyebrow: "หุ้นที่น่าสนใจ แต่ยังไม่พอให้ซื้อ",
    watchlist: "หุ้นที่รอดู",
    ledgerEyebrow: "บันทึกประจำพอร์ต",
    thesisInventory: "เหตุผลที่ยังถือแต่ละสถานะ",
    inspectorEyebrow: "รายละเอียดสถานะ",
    currentThesis: "เหตุผลที่ยังถือ",
    killCondition: "สัญญาณที่ต้องทบทวน",
    mainAssumptions: "สิ่งที่ต้องเป็นจริง",
    quarterlyStatus: "รีวิวไตรมาสล่าสุด",
    nextFocus: "เรื่องที่ต้องตามต่อ",
    nav: "มูลค่าพอร์ต",
    cash: "เงินสด",
    invested: "ลงหุ้นแล้ว",
    chart: {
      eyebrow: "ผลตอบแทนรายสัปดาห์",
      title: "พอร์ตเทียบดัชนีหลัก",
      context: "กราฟนี้ดูผลตอบแทนรายสัปดาห์ จุดสำคัญคือพอร์ตชนะหรือแพ้ดัชนีไหน และแพ้ชนะด้วยระยะห่างเท่าไร",
      latestWeek: "สัปดาห์ล่าสุด",
      all: "ดูทั้งหมด",
      ariaMode: "เลือกดัชนีสำหรับเปรียบเทียบ",
      ariaLegend: "คำอธิบายเส้นผลตอบแทน",
      ariaChart: "กราฟผลตอบแทนรายสัปดาห์ของพอร์ตเทียบกับดัชนีหลัก",
      axisTitle: "ผลตอบแทนต่อสัปดาห์ %",
      week: "สัปดาห์",
      portfolio: "พอร์ตนี้",
      pending: "ยังไม่มีข้อมูล",
      vsPrefix: "เทียบกับ",
    },
    actions: {
      buy: "ซื้อเพิ่ม",
      hold: "ถือต่อ",
      trim: "ลดลงบ้าง",
      exit: "ขายออก",
      "do nothing": "ยังไม่ทำอะไร",
    } satisfies Record<Action, string>,
    statuses: {
      intact: "ยังตรงตามเหตุผลเดิม",
      strengthening: "เหตุผลดีขึ้น",
      weakening: "เหตุผลอ่อนลง",
      broken: "เหตุผลใช้ไม่ได้แล้ว",
      "under review": "ต้องติดตามใกล้ชิด",
    } satisfies Record<ThesisStatus, string>,
    confidenceLevels: {
      high: "สูง",
      medium: "ปานกลาง",
      low: "ต่ำ",
    } satisfies Record<Confidence, string>,
    sourceQualityLevels: {
      high: "สูง",
      medium: "ปานกลาง",
      low: "ต่ำ",
    },
  },
} as const;

const thaiHoldingText: Record<string, Partial<(typeof holdings)[number]>> = {
  MSFT: {
    thesis:
      "Microsoft ยังเป็นหุ้นแกนของพอร์ต ธุรกิจซอฟต์แวร์องค์กรเหนียวแน่น Azure ยังมีทางโต และการลงทุนด้าน AI มีโอกาสต่อยอดฐานลูกค้าเดิมได้ดี จุดแข็งสำคัญคือรายได้ประจำและกระแสเงินสดที่ไว้ใจได้.",
    killCondition:
      "ต้องกลับมาทบทวนทันทีถ้าธุรกิจ cloud หรือซอฟต์แวร์องค์กรเริ่มเสียแรงส่งแบบถาวร เงินลงทุน AI ไม่เริ่มเห็นผลในกำไร หรือผู้บริหารใช้เงินผิดจังหวะซ้ำ ๆ.",
    assumptions: [
      "ลูกค้าองค์กรยังใช้ cloud เพิ่มขึ้นต่อเนื่อง.",
      "เงินลงทุนด้าน AI ต้องช่วยเพิ่มคุณค่าของสินค้า ไม่ใช่แค่เพิ่มต้นทุน.",
      "ระบบงานของ Microsoft ยังผูกกับ workflow ลูกค้าแน่นพอให้ย้ายออกยาก.",
    ],
  },
  V: {
    thesis:
      "Visa เป็นธุรกิจเครือข่ายชำระเงินที่ใช้เงินลงทุนน้อย แต่ได้ประโยชน์จากการใช้จ่ายดิจิทัลทั่วโลก ยิ่งการชำระเงินซับซ้อนขึ้น บทบาทด้านความปลอดภัย การอนุมัติธุรกรรม และ tokenization ยิ่งมีค่า.",
    killCondition:
      "ต้องลดน้ำหนักความเชื่อมั่นถ้าค่าธรรมเนียมถูกกดหนักกว่าที่คาด กฎระเบียบกระทบอำนาจต่อรองจริงจัง หรือระบบชำระเงินใหม่เริ่มเลี่ยง Visa ได้ในวงกว้าง.",
    assumptions: [
      "เงินสดยังถูกแทนที่ด้วยการชำระเงินดิจิทัลมากขึ้นเรื่อย ๆ.",
      "Visa ยังมีที่ยืนในโลก commerce ที่ใช้ AI และ token มากขึ้น.",
      "แรงกดดันจากกฎระเบียบยังไม่ทำลาย economics ของธุรกิจ.",
    ],
  },
  SPGI: {
    thesis:
      "S&P Global เป็นธุรกิจโครงสร้างพื้นฐานของตลาดทุน รายได้มาจากเรตติ้ง ดัชนี และข้อมูลที่ลูกค้าต้องใช้ซ้ำ การแยก Mobility Global ถ้าทำได้เรียบร้อย น่าจะทำให้ภาพธุรกิจหลักสะอาดขึ้น.",
    killCondition:
      "ต้องทบทวนถ้าความน่าเชื่อถือของเรตติ้งเริ่มเสีย ธุรกิจดัชนีหรือข้อมูลถูกลดความสำคัญ หรือดีลแยก Mobility ทำให้คุณภาพกำไรและวินัยจัดสรรทุนแย่ลง.",
    assumptions: [
      "ตลาดยังเชื่อถือเรตติ้ง ดัชนี และข้อมูลของบริษัท.",
      "การแยก Mobility ไม่ทำให้ธุรกิจหลักเสียสมาธิหรือเสียฐานกำไร.",
      "รายได้ข้อมูลแบบใช้ซ้ำยังโตพร้อม margin ที่ดี.",
    ],
  },
  GOOGL: {
    thesis:
      "Alphabet ยังเป็นธุรกิจคุณภาพสูงจาก Search, YouTube, Cloud และเงินสดมหาศาล แต่ตอนนี้ประเด็นหลักคือเงินลงทุน AI จะสร้างผลตอบแทนต่อหุ้นได้คุ้มจริงหรือไม่ จึงควรถือแต่ติดตามเข้มขึ้น.",
    killCondition:
      "ต้องทบทวนหนักถ้า Search เริ่มเสีย economics ระยะยาว AI กินรายได้โฆษณาโดยชดเชยไม่ได้ กฎระเบียบกระทบช่องทางเข้าถึงผู้ใช้ หรือ capex ด้าน AI ไม่สร้างกำไรที่จับต้องได้.",
    assumptions: [
      "Search และ YouTube ยังปรับตัวได้ แม้ผู้ใช้เริ่มค้นหาผ่าน AI มากขึ้น.",
      "Cloud ต้องโตพร้อมคุณภาพกำไรที่ดีขึ้น ไม่ใช่โตจากการใช้เงินอย่างเดียว.",
      "การกู้เงิน ออกหุ้น หรือใช้ preferred ต้องไม่ลดคุณค่าต่อหุ้นมากเกินไป.",
    ],
  },
  USD: {
    company: "เงินสด",
    thesis:
      "เงินสดไม่ใช่ช่องว่างในพอร์ต แต่เป็นการรออย่างมีวินัย ตอนนี้ยังไม่มีไอเดียใหม่ที่ชนะทั้งหุ้นเดิมและความยืดหยุ่นของเงินสดได้ชัดพอ.",
    killCondition:
      "เงินสดควรถูกนำไปใช้เมื่อเจอธุรกิจที่คุณภาพดีพอ ราคาไม่ต้องสมบูรณ์แบบ และเหตุผลลงทุนชัดกว่าการรอต่อ.",
    assumptions: [
      "ไม่จำเป็นต้องซื้อหุ้นเพิ่มถ้าหลักฐานยังไม่พอ.",
      "ไอเดียใหม่ต้องดีกว่าทั้งเงินสดและหุ้นที่ถืออยู่.",
      "สัดส่วนเงินสดยังอยู่ในกรอบที่ mandate รับได้.",
    ],
  },
};

const thaiDecisions: Record<string, { subject: string; reason: string }> = {
  "Daily scan": {
    subject: "สแกนรายวัน",
    reason:
      "ยังไม่พบข่าวหรือเอกสารใหม่ที่เปลี่ยนคุณภาพธุรกิจ ความได้เปรียบ ผู้บริหาร ฐานะการเงิน น้ำหนักพอร์ต หรือสัญญาณขายมากพอให้ต้องขยับพอร์ต.",
  },
  "Weekly journal": {
    subject: "บันทึกประจำสัปดาห์",
    reason:
      "ดีล OpenAI ของ Visa เป็นสัญญาณบวก แต่ยังต้องรอดูตัวเลขจริง ฝั่ง S&P Global ยังต้องตามการแยกธุรกิจ ส่วน Alphabet ยังถือไว้แต่ต้องพิสูจน์ผลตอบแทนจาก AI ชัดขึ้น.",
  },
  "Alphabet status change": {
    subject: "ปรับมุมมอง Alphabet",
    reason:
      "เอกสารทางการเรื่องเงินลงทุนโครงสร้างพื้นฐาน AI ทำให้คำถามเรื่องผลตอบแทนต่อหุ้นสำคัญขึ้น จึงเปลี่ยนเป็นสถานะต้องติดตามใกล้ชิด โดยยังไม่ลดน้ำหนักตอนนี้.",
  },
};

const thaiWatchlist: Record<string, { whyInteresting: string; whyNotYet: string }> = {
  AZO: {
    whyInteresting: "ธุรกิจอะไหล่รถมี demand ค่อนข้างทน ระบบกระจายสินค้าทำได้ดี และบริษัทมีประวัติซื้อหุ้นคืนต่อเนื่อง.",
    whyNotYet: "ตัวเลขที่ดีขึ้นหนึ่งไตรมาสยังไม่พอให้แย่งเงินจากหุ้นเดิมหรือเงินสดในพอร์ต.",
  },
  CPRT: {
    whyInteresting: "เครือข่ายประมูลซากรถมีตำแหน่งเฉพาะตัว ฐานผู้ซื้อกว้าง และโมเดล marketplace มีความทนทาน.",
    whyNotYet: "สัญญาณฟื้นตัวยังไม่ชัดพอเมื่อเทียบกับโอกาสที่ถืออยู่แล้วในพอร์ต.",
  },
};

export function getPortfolioContent(locale: Locale) {
  if (locale === "th") {
    return {
      portfolioSnapshot: {
        ...portfolioSnapshot,
        mandate:
          "พอร์ตจำลอง $10,000 เน้นถือธุรกิจดีให้นานพอ เขียนเหตุผลให้ชัด และยอมถือเงินสดเมื่อยังไม่มีโอกาสที่ดีพอ.",
        processQuality: "ดี: พอร์ตกระจุกตัวแบบมีเหตุผล ใช้หลักฐานชั้นต้น และไม่ซื้อขายเพื่อให้ดูมีความเคลื่อนไหว.",
        outcomeQuality: "ยังเร็วเกินไปที่จะสรุปผล ระยะสั้นบันทึกไว้เพื่อเรียนรู้ ไม่ใช่เพื่อไล่เทรด.",
      },
      holdings: holdings.map((holding) => ({ ...holding, ...thaiHoldingText[holding.ticker] })),
      benchmarkPoints: benchmarkPoints.map((point) => ({ ...point, note: translateBenchmarkNote(point.label, point.note) })),
      recentDecisions: recentDecisions.map((decision) => ({ ...decision, ...thaiDecisions[decision.subject] })),
      watchlist: watchlist.map((item) => ({ ...item, ...thaiWatchlist[item.ticker] })),
      quarterlyStatus: [
        { label: "รีวิวล่าสุด", value: "รีวิวไตรมาส 2 ปี 2026 เสร็จเมื่อ 2026-06-01" },
        { label: "พอร์ตเปลี่ยนไหม", value: "ยังไม่เปลี่ยน น้ำหนักของ Microsoft, Visa, S&P Global, Alphabet และเงินสดคงเดิม." },
        { label: "คำถามที่ต้องตอบให้ได้", value: "เงินลงทุน AI ของ Alphabet จะสร้างมูลค่าต่อหุ้นได้คุ้มกับเงินที่ลงไปหรือไม่?" },
      ],
      nextFocus: [
        "ตามรายละเอียดการแยก Mobility Global ของ S&P Global จนถึงวันคาดว่าจะกระจายหุ้น 1 กรกฎาคม.",
        "รอดูหลักฐานจาก Alphabet เรื่องผลตอบแทนของโครงสร้างพื้นฐาน AI การลดสัดส่วนผู้ถือหุ้น เงื่อนไข preferred ระดับหนี้ และความแข็งแรงของ Search.",
        "มองงาน OpenAI ของ Visa เป็นสัญญาณบวก แต่ยังไม่ให้ค่าน้ำหนักมากจนกว่าจะเห็น economics ของธุรกรรมจริง.",
        "ยังไม่รีบจัดเงินให้ AutoZone หรือ Copart จนกว่าจะเห็นการฟื้นตัวที่ชัดและยืนได้มากกว่าหนึ่งไตรมาส.",
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
      Baseline: "จุดเริ่มต้นของการวัดผลตอบแทนรายสัปดาห์.",
      "May 18": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-15 ถึง 2026-05-22.",
      "May 25": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-22 ถึง 2026-05-29.",
      "Jun 01": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-05-29 ถึง 2026-06-05.",
      "Jun 08": "ผลตอบแทนเต็มสัปดาห์ คำนวณจากราคาปิดวันศุกร์ 2026-06-05 ถึง 2026-06-12.",
    }[label] ?? fallback
  );
}
