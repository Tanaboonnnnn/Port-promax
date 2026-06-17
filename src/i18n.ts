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
      "Microsoft ยังเป็นแกนพอร์ตที่อธิบายได้ง่าย: ซอฟต์แวร์องค์กรเหนียวแน่น Azure ยังมี runway และ AI มีโอกาสเพิ่มมูลค่าให้ฐานลูกค้าเดิม จุดที่ทำให้ถือไหวคือรายได้ประจำกับกระแสเงินสดที่แข็งแรง.",
    killCondition:
      "ลดความมั่นใจทันทีถ้า cloud หรือซอฟต์แวร์องค์กรเสียแรงส่งถาวร capex ด้าน AI ไม่แปลงเป็นกำไร หรือผู้บริหารจัดสรรทุนพลาดซ้ำจนกระทบผลตอบแทนต่อหุ้น.",
    assumptions: [
      "ลูกค้าองค์กรยังย้ายงานขึ้น cloud ต่อเนื่อง.",
      "AI ต้องเพิ่มคุณค่าของสินค้า ไม่ใช่เพิ่มแค่ต้นทุนโครงสร้างพื้นฐาน.",
      "workflow ของ Microsoft ยังฝังอยู่ในองค์กรลึกพอให้ย้ายออกยาก.",
    ],
  },
  V: {
    thesis:
      "Visa เป็นเครือข่ายชำระเงินที่ใช้ทุนไม่หนัก แต่ได้ประโยชน์จากเงินสดที่ค่อย ๆ ถูกแทนด้วยดิจิทัล ยิ่ง commerce ซับซ้อนขึ้น บทบาทด้าน token, authorization และ fraud control ยิ่งสำคัญ.",
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
      "S&P Global คือ infrastructure ของตลาดทุนผ่าน ratings, indices, benchmarks และข้อมูลการเงินที่ลูกค้าต้องใช้ซ้ำ ถ้าแยก Mobility Global ได้เรียบร้อย ธุรกิจหลักน่าจะชัดและโฟกัสขึ้น.",
    killCondition:
      "ต้องทบทวนถ้าความน่าเชื่อถือของ ratings เสีย ธุรกิจดัชนีหรือข้อมูลถูกลดความสำคัญ หรือการแยก Mobility ทำให้ economics, โฟกัส หรือวินัยจัดสรรทุนแย่ลง.",
    assumptions: [
      "ตลาดยังไว้ใจ ratings, indices และข้อมูลของบริษัท.",
      "การแยก Mobility ไม่ทำให้ฐานกำไรหลักเสียหาย.",
      "ผลิตภัณฑ์ข้อมูลรายได้ประจำยังโตได้พร้อม margin ที่ดี.",
    ],
  },
  GOOGL: {
    thesis:
      "Alphabet ยังมีสินทรัพย์ชั้นดีอย่าง Search, YouTube, Cloud และเงินสด แต่ตอนนี้คำถามใหญ่คือ capex ด้าน AI จะคืนกลับมาเป็นมูลค่าต่อหุ้นได้แค่ไหน จึงยังถือ แต่ต้องรีวิวใกล้กว่าหุ้นแกนอื่น.",
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

const thaiDecisions: Record<string, { subject: string; reason: string }> = {
  "Daily scan": {
    subject: "สแกนรายวัน",
    reason:
      "หลัง checkpoint 12:30 ET ยังไม่มีหลักฐานใหม่ที่เปลี่ยน thesis หรือขนาดสถานะ หุ้นหลักยังถือได้เหมือนเดิม ส่วน AutoZone เป็นข่าวบวกด้านวินัยซื้อหุ้นคืน แต่ยังไม่แรงพอให้ใช้เงินสดแทนหุ้นแกนพอร์ตตอนนี้.",
  },
  "Weekly journal": {
    subject: "บันทึกประจำสัปดาห์",
    reason:
      "งานร่วมกับ OpenAI ของ Visa เป็นสัญญาณบวกแต่ยังต้องรอตัวเลขจริง S&P Global ยังต้องตาม execution ของการแยกธุรกิจ ส่วน Alphabet ยังถือไว้ แต่ภาระพิสูจน์เรื่องผลตอบแทนจาก AI สูงขึ้น.",
  },
  "Alphabet status change": {
    subject: "ปรับสถานะ Alphabet",
    reason:
      "เอกสารทางการเรื่องเงินลงทุนโครงสร้างพื้นฐาน AI ทำให้คำถามเรื่องผลตอบแทนต่อหุ้นสำคัญขึ้น จึงย้ายเป็นสถานะอยู่ระหว่างรีวิว โดยยังไม่ลดน้ำหนักในตอนนี้.",
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
        asOf: "สแกน 2026-06-17 13:30 ET; NAV ยืนยันล่าสุดจากราคาปิด 2026-06-12",
        mandate:
          "พอร์ตจำลอง $10,000 เน้นถือธุรกิจดีให้นานพอ เขียน thesis ให้ชัด และถือเงินสดได้เมื่อ conviction ยังไม่ถึง.",
        processQuality: "ดี: พอร์ตกระจุกตัวแบบมีเหตุผล ใช้หลักฐานชั้นต้น และไม่ซื้อขายเพื่อให้ดูยุ่ง.",
        outcomeQuality: "มูลค่าล่าสุดยังอิงราคาปิด 12 มิ.ย. สแกน 13:30 ET ยังไม่เจอหลักฐานที่ต้องปรับพอร์ต และยังไม่ใช้ผลประชุม Fed ที่รอ 14:00 ET เป็นสัญญาณซื้อขาย.",
      },
      holdings: holdings.map((holding) => ({ ...holding, ...thaiHoldingText[holding.ticker] })),
      benchmarkPoints: benchmarkPoints.map((point) => ({ ...point, note: translateBenchmarkNote(point.label, point.note) })),
      recentDecisions: recentDecisions.map((decision) => ({ ...decision, ...thaiDecisions[decision.subject] })),
      watchlist: watchlist.map((item) => ({ ...item, ...thaiWatchlist[item.ticker] })),
      quarterlyStatus: [
        { label: "รีวิวล่าสุด", value: "รีวิวไตรมาส 2 ปี 2026 เสร็จเมื่อ 2026-06-01" },
        { label: "มีการปรับพอร์ตไหม", value: "ไม่มี หลังสแกน 13:30 ET Microsoft, Visa, S&P Global, Alphabet และเงินสดยังน้ำหนักเดิม." },
        { label: "คำถามหลัก", value: "capex ด้าน AI ของ Alphabet จะสร้างมูลค่าต่อหุ้นคุ้มกับเงินที่ลงไปหรือไม่?" },
      ],
      nextFocus: [
        "ตาม execution ของการแยก Mobility Global ของ S&P Global จนถึงวันกระจายหุ้นที่คาดไว้ 1 กรกฎาคม.",
        "รอหลักฐานจาก Alphabet เรื่องผลตอบแทนของโครงสร้างพื้นฐาน AI dilution เงื่อนไข preferred ระดับหนี้ และความแข็งแรงของ Search.",
        "มองงาน OpenAI ของ Visa เป็นบวกเชิงกลยุทธ์ แต่ยังไม่เพิ่มน้ำหนักจนกว่าจะเห็น economics ของธุรกรรมจริง.",
        "เก็บข่าวซื้อหุ้นคืนใหม่ของ AutoZone ไว้เป็นหลักฐานด้าน capital allocation แต่ยังไม่ใช้เงินสดจนกว่าผลประกอบการและ valuation จะหนุนชัดกว่านี้.",
        "รอดูผลประชุม Fed 14:00 ET และแถลง 14:30 ET เป็นบริบทตลาดเท่านั้น เว้นแต่มีผลต่อคุณภาพธุรกิจโดยตรง.",
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