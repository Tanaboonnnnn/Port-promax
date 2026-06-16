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
    kicker: "พอร์ตจำลองแบบ blind",
    accountFactsAria: "ข้อมูลบัญชีพอร์ต",
    asOf: "ข้อมูล ณ",
    navAria: "มุมมองแดชบอร์ด",
    dashboard: "แดชบอร์ด",
    ledger: "บันทึกพอร์ต",
    snapshotAria: "ภาพรวมพอร์ต",
    startingCapital: "เงินตั้งต้น",
    sinceInception: "ผลตอบแทนสะสม",
    processQuality: "คุณภาพกระบวนการ",
    outcomeQuality: "คุณภาพผลลัพธ์",
    brokerageEyebrow: "มุมมองพอร์ตลงทุน",
    currentHoldings: "สถานะการถือครอง",
    holdingsHint: "เลือกแถวเพื่อดู thesis ของสถานะนั้น",
    company: "บริษัท",
    ticker: "Ticker",
    weight: "สัดส่วน",
    status: "สถานะ thesis",
    confidence: "ความเชื่อมั่น",
    action: "การตัดสินใจ",
    decisionLog: "บันทึกการตัดสินใจ",
    recentDecisions: "การตัดสินใจล่าสุด",
    sourceQuality: "คุณภาพแหล่งข้อมูล",
    watchlistEyebrow: "รายชื่อที่ยังไม่ต้องทำอะไร",
    watchlist: "Watchlist",
    ledgerEyebrow: "ทะเบียนพอร์ต",
    thesisInventory: "คลัง thesis",
    inspectorEyebrow: "ตรวจสอบ thesis",
    currentThesis: "Thesis ปัจจุบัน",
    killCondition: "เงื่อนไขที่ทำให้ thesis ใช้ไม่ได้",
    mainAssumptions: "สมมติฐานหลัก",
    quarterlyStatus: "สถานะการทบทวนรายไตรมาส",
    nextFocus: "สิ่งที่ต้องติดตามต่อ",
    nav: "NAV",
    cash: "เงินสด",
    invested: "ลงทุนแล้ว",
    chart: {
      eyebrow: "บันทึกผลตอบแทนรายสัปดาห์",
      title: "เทียบกับ benchmark",
      context: "แกน Y แสดงผลตอบแทนรายสัปดาห์ %. มุมมองแบบคู่จะแรเงาช่องว่างระหว่างพอร์ตกับ benchmark.",
      latestWeek: "สัปดาห์ล่าสุด",
      all: "ทั้งหมด",
      ariaMode: "โหมดเปรียบเทียบ benchmark",
      ariaLegend: "คำอธิบาย benchmark",
      ariaChart: "กราฟผลตอบแทนรายสัปดาห์ของพอร์ตและ benchmark",
      axisTitle: "ผลตอบแทนรายสัปดาห์ %",
      week: "สัปดาห์",
      portfolio: "พอร์ต",
      pending: "รอข้อมูล",
      vsPrefix: "เทียบกับ",
    },
    actions: {
      buy: "ซื้อ",
      hold: "ถือ",
      trim: "ลดสัดส่วน",
      exit: "ขายออก",
      "do nothing": "ไม่ทำอะไร",
    } satisfies Record<Action, string>,
    statuses: {
      intact: "ยังสมบูรณ์",
      strengthening: "แข็งแรงขึ้น",
      weakening: "อ่อนลง",
      broken: "ใช้ไม่ได้แล้ว",
      "under review": "อยู่ระหว่างทบทวน",
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
      "Microsoft เป็น compounder ที่ชัดที่สุดของพอร์ตจากซอฟต์แวร์องค์กร, Azure, ความต้องการโครงสร้างพื้นฐาน AI, ช่องทางกระจายสินค้า และกระแสเงินสดที่แข็งแรง.",
    killCondition:
      "cloud หรือซอฟต์แวร์องค์กรอ่อนลงเชิงโครงสร้าง, capex ด้าน AI ไม่แปลงเป็นกำไรซ้ำ ๆ, หรือฝ่ายบริหารจัดสรรทุนอย่างขาดวินัยต่อเนื่อง.",
    assumptions: [
      "ความต้องการ commercial cloud ยังทนทาน.",
      "การใช้จ่าย AI เสริม distribution โดยไม่ทำลายคุณภาพ free cash flow.",
      "switching cost และ workflow แบบ bundle ในองค์กรยังถูกแทนที่ได้ยาก.",
    ],
  },
  V: {
    thesis:
      "Visa เป็นเครือข่ายชำระเงินแบบ asset-light ที่มี acceptance ทั่วโลก และยังสำคัญต่อ tokenization, authorization และ fraud control.",
    killCondition:
      "เศรษฐศาสตร์ของ network เสื่อมลง, กฎระเบียบบีบ pricing power อย่างมีนัยสำคัญ, หรือ payment rails ใหม่เลี่ยง Visa ได้ในวงกว้าง.",
    assumptions: [
      "การชำระเงินดิจิทัลยังขยายตัวทั่วโลก.",
      "Visa ยังมีบทบาทใน commerce ที่เริ่มจาก AI และ tokenized commerce.",
      "แรงกดดันด้านกฎหมายและกฎระเบียบยังจัดการได้.",
    ],
  },
  SPGI: {
    thesis:
      "Ratings, indices, benchmarks และข้อมูลการเงินคือโครงสร้างพื้นฐานของตลาด การแยก Mobility Global อาจทำให้ธุรกิจคมชัดขึ้นถ้าดำเนินการเรียบร้อย.",
    killCondition:
      "ความน่าเชื่อถือของ ratings เสื่อมลง, benchmark/data franchise สูญเสียความสำคัญ, หรือการแยก Mobility ทำลาย economics และวินัยจัดสรรทุน.",
    assumptions: [
      "franchise หลักด้าน ratings และ data ยังได้รับความเชื่อถือ.",
      "การแยก Mobility จบได้โดยไม่กระทบฐานธุรกิจ.",
      "ผลิตภัณฑ์ data recurring margin สูงยัง compound ต่อได้.",
    ],
  },
  GOOGL: {
    thesis:
      "Search, YouTube, Cloud และการสร้างเงินสดของ Alphabet ยังยอดเยี่ยม แต่แผน funding โครงสร้างพื้นฐาน AI ทำให้ภาระพิสูจน์ผลตอบแทนต่อหุ้นสูงขึ้น.",
    killCondition:
      "เศรษฐศาสตร์ Search เสื่อมลงเชิงโครงสร้าง, AI substitutes กระทบ monetization ถาวร, กฎระเบียบทำลาย distribution power, หรือ AI capex ไม่สร้างกำไรทนทาน.",
    assumptions: [
      "Search และ YouTube ยังยืดหยุ่นได้เมื่อ interface แบบ AI เปลี่ยนพฤติกรรมผู้ใช้.",
      "การเติบโตและ backlog ของ Cloud แปลงเป็นผลตอบแทนที่ดี.",
      "หนี้, preferred/common issuance และ capex ไม่ dilute การ compound ต่อหุ้นเกิน thesis.",
    ],
  },
  USD: {
    company: "เงินสด",
    thesis:
      "เงินสดเป็นสถานะที่ตั้งใจถือ เพราะไอเดียลำดับที่ห้ายังไม่ผ่านเกณฑ์ความเชื่อมั่นแบบเขียนเป็น thesis ได้.",
    killCondition:
      "มีธุรกิจที่ความทนทาน, valuation support และคุณภาพ thesis ชัดเจนกว่า optionality ของเงินสด.",
    assumptions: [
      "การไม่ทำอะไรยังถูกต้องเมื่อหลักฐานไม่ครบ.",
      "ไอเดียที่จะใช้เงินสดต้องดีกว่าทั้งเงินสดและ holdings ปัจจุบัน.",
      "เงินสดยังต่ำกว่าเพดานปกติ 40% ของ mandate.",
    ],
  },
};

const thaiDecisions: Record<string, { subject: string; reason: string }> = {
  "Daily scan": {
    subject: "สแกนรายวัน",
    reason:
      "ยังไม่มีข้อมูลใหม่ที่เปลี่ยนคุณภาพธุรกิจ, moat, คุณภาพผู้บริหาร, ความทนทานทางการเงิน, ขนาดสถานะ, ความเชื่อมั่น หรือ kill condition มากพอให้ต้องทำอะไร.",
  },
  "Weekly journal": {
    subject: "บันทึกรายสัปดาห์",
    reason:
      "พาร์ตเนอร์ OpenAI ของ Visa เป็นสัญญาณสนับสนุนเชิงกลยุทธ์, การแยกธุรกิจของ S&P Global ยังเป็นเรื่อง execution ที่ต้องติดตาม และ Alphabet ยังอยู่ระหว่างทบทวนโดย thesis ยังไม่พัง.",
  },
  "Alphabet status change": {
    subject: "ปรับสถานะ Alphabet",
    reason:
      "เอกสารทางการเกี่ยวกับ funding โครงสร้างพื้นฐาน AI ทำให้ภาระพิสูจน์ผลตอบแทนต่อหุ้นของ Alphabet สำคัญขึ้น จึงปรับเป็นอยู่ระหว่างทบทวนโดยยังไม่เปลี่ยนสัดส่วน.",
  },
};

const thaiWatchlist: Record<string, { whyInteresting: string; whyNotYet: string }> = {
  AZO: {
    whyInteresting: "โมเดลกระจายอะไหล่แข็งแรง, demand งานซ่อมทนทาน และมีประวัติ buyback ระยะยาว.",
    whyNotYet: "ไตรมาสที่ดีเพียงครั้งเดียวยังไม่พอให้ชนะเงินสดหรือ holdings ที่มีทุนอยู่แล้ว.",
  },
  CPRT: {
    whyInteresting: "เครือข่ายประมูลซากรถที่แตกต่าง, ฐานผู้ซื้อทั่วโลก และลักษณะ marketplace ที่ทนทาน.",
    whyNotYet: "การฟื้นตัวยังไม่มากพอให้ผ่านเกณฑ์จัดสรรทุนเมื่อเทียบกับเงินสดและ holdings ปัจจุบัน.",
  },
};

export function getPortfolioContent(locale: Locale) {
  if (locale === "th") {
    return {
      portfolioSnapshot: {
        ...portfolioSnapshot,
        mandate:
          "พอร์ตจำลอง $10,000 แบบ blind เน้นการเป็นเจ้าของอย่างอดทน, thesis ที่เขียนชัดเจน และถือเงินสดเมื่อความเชื่อมั่นยังไม่พอ.",
        processQuality: "ดี: กระจุกตัวอย่างมีเหตุผล, ขับเคลื่อนด้วย thesis, ใช้แหล่งข้อมูลชั้นต้น และไม่ฝืนทำธุรกรรม.",
        outcomeQuality: "ยังเร็วเกินไปที่จะตัดสิน ผลตอบแทนช่วงสั้นถูกบันทึกไว้ แต่ไม่ใช่เหตุผลให้เทรด.",
      },
      holdings: holdings.map((holding) => ({ ...holding, ...thaiHoldingText[holding.ticker] })),
      benchmarkPoints: benchmarkPoints.map((point) => ({ ...point, note: translateBenchmarkNote(point.label, point.note) })),
      recentDecisions: recentDecisions.map((decision) => ({ ...decision, ...thaiDecisions[decision.subject] })),
      watchlist: watchlist.map((item) => ({ ...item, ...thaiWatchlist[item.ticker] })),
      quarterlyStatus: [
        { label: "การ re-underwrite ล่าสุด", value: "ไตรมาส 2 ปี 2026, เสร็จเมื่อ 2026-06-01" },
        { label: "การเปลี่ยน exposure", value: "ไม่มี Microsoft, Visa, S&P Global, Alphabet และเงินสดยังคงเดิม." },
        { label: "คำถามสำคัญที่ยังเปิดอยู่", value: "AI capex และ financing ของ Alphabet ยังสร้างมูลค่าต่อหุ้นที่ทนทานได้หรือไม่?" },
      ],
      nextFocus: [
        "ติดตาม mechanics การแยก Mobility Global ของ S&P Global ผ่านวัน expected distribution วันที่ 1 กรกฎาคม.",
        "ต้องการหลักฐานจาก Alphabet เรื่องผลตอบแทนโครงสร้างพื้นฐาน AI, dilution, preferred terms, ระดับหนี้ และความทนทานของ Search.",
        "เก็บงาน OpenAI ของ Visa ไว้ในกลุ่มสนับสนุนแต่ยังไม่พิสูจน์ จนกว่าจะเห็น economics ของธุรกรรม.",
        "ยังไม่จัดสรรทุนให้ AutoZone หรือ Copart จนกว่าการฟื้นตัวจะทนทานเกินหนึ่งไตรมาส.",
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
      Baseline: "จุดเริ่มต้นของชุดข้อมูล benchmark รายสัปดาห์.",
      "May 18": "ผลตอบแทนรายสัปดาห์ที่ backfill จากราคาปิดวันศุกร์ 2026-05-15 ถึง 2026-05-22.",
      "May 25": "ผลตอบแทนรายสัปดาห์ที่ backfill จากราคาปิดวันศุกร์ 2026-05-22 ถึง 2026-05-29.",
      "Jun 01": "ผลตอบแทนรายสัปดาห์ที่ backfill จากราคาปิดวันศุกร์ 2026-05-29 ถึง 2026-06-05.",
      "Jun 08": "การเปรียบเทียบเต็มสัปดาห์จากราคาปิดวันศุกร์ 2026-06-05 ถึง 2026-06-12.",
    }[label] ?? fallback
  );
}
