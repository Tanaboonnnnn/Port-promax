export const latestScan = {
  en: {
    asOf:
      "Week of 2026-07-06 weekly journal, recorded 2026-07-12; full close-to-close period 2026-07-02 to 2026-07-10",
    processQuality:
      "Good: the weekly review used one period for the portfolio and every benchmark, kept the Performance Log weekly-only, filled every required S&P 500, Nasdaq-100, SMH, and VT field, and treated price movement as outcome context rather than thesis evidence.",
    outcomeQuality:
      "Weak weekly outcome. The portfolio returned -1.69% and ended at about $9,931.83, trailing S&P 500/SPY +1.37%, Nasdaq-100/QQQ +1.81%, SMH +3.16%, and VT +0.86%. No benchmark fallback was needed. Underperformance does not by itself trigger action because no business thesis broke.",
    holdingUpdates: {
      MSFT: {
        thesis:
          "Microsoft remains hold / intact / high confidence. The stock declined during a benchmark-positive week, but no new evidence changed the enterprise software, Azure, Microsoft 365, GitHub, security, or AI workflow thesis. The active monitors are AI monetization, margin pressure, capex intensity, sustainability/resource burden, UK operational-resilience oversight, and July 29 earnings.",
        killCondition:
          "Cloud or enterprise software durability weakens structurally, repeated enterprise AI security, reliability, disclosure, copyright, attribution, customer-trust, sustainability, community, or operational-resilience failures impair adoption, AI capex and power/resource commitments repeatedly fail to convert into profit, or management capital allocation becomes persistently undisciplined.",
        assumptions: [
          "Commercial cloud demand remains durable.",
          "AI products strengthen Microsoft 365 and Azure economics rather than only increasing capital intensity.",
          "Enterprise switching costs and bundled workflows remain hard to displace.",
          "Energy, emissions, water, local-community, and operational-resilience obligations stay manageable enough for Microsoft to keep building AI capacity.",
          "July 29 earnings must show clearer evidence on cloud demand, AI monetization, margin pressure, capex, resilience, and per-share returns.",
        ],
      },
      V: {
        thesis:
          "Visa remains hold / intact / high confidence. Visa underperformed this week, but price weakness did not change the network-quality thesis. The next real evidence is July 28 earnings, especially payment volume, cross-border activity, value-added services, token/AI/stablecoin relevance, and capital return.",
        killCondition:
          "Structural network disintermediation, adverse regulation that permanently damages transaction economics, loss of payment-flow relevance, or capital allocation that no longer protects long-term Class A holders.",
        assumptions: [
          "Payment digitization continues globally.",
          "Visa remains relevant in AI-initiated, tokenized, stablecoin-enabled, and programmable commerce.",
          "Legal and regulatory pressure stays manageable.",
          "July 28 earnings should confirm payment volume, cross-border resilience, value-added services, and disciplined capital return.",
        ],
      },
      SPGI: {
        thesis:
          "S&P Global remains hold / strengthening / high confidence. July 6 post-spin pro forma/recast evidence improved clarity, but it is still not an add signal before July 28 guidance and Q2 earnings verify retained-business growth, margin durability, stranded-cost treatment, TSA offsets, leverage, and capital allocation.",
        killCondition:
          "Ratings credibility erodes, benchmark/data franchises lose relevance, or the Mobility Global separation damages focus, economics, leverage, tax treatment, transition execution, expense allocation, margin durability, or capital allocation discipline.",
        assumptions: [
          "The core ratings and data franchises remain trusted.",
          "The post-spin recast is a cleaner view of durable earnings power, not merely accounting reshuffling.",
          "Market Intelligence can turn Kensho Data, Platforms, and Enterprise Solutions into better customer workflows and improved margins.",
          "July 28 guidance needs to confirm that retained-business economics and capital allocation remain strong after Mobility.",
        ],
      },
      GOOGL: {
        thesis:
          "Alphabet remains hold / under review / medium confidence. The business quality in Search, YouTube, Cloud, subscriptions, AI talent, and cash generation still justifies holding at smaller size. July 22 earnings remains the next checkpoint for AI returns, Cloud economics, Search durability, capital intensity, resource access, dilution, governance, and regulatory-distribution risk.",
        killCondition:
          "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, Google Cloud operational-resilience failures damage enterprise trust, AI capex fails to produce durable profit, excessive dilution damages per-share compounding, resource constraints slow AI execution, or repeated elite AI talent losses show that Alphabet can no longer retain enough technical depth to defend the moat.",
        assumptions: [
          "Search and YouTube remain resilient while AI interfaces change.",
          "Cloud growth and backlog convert into attractive returns.",
          "AI financing, dilution, capex, and resource needs do not dilute per-share compounding beyond the thesis.",
          "Regulatory remedies do not permanently damage distribution power or default access economics.",
          "July 22 earnings needs clearer evidence on AI returns, Cloud economics, Search durability, capital intensity, and regulatory distribution risk.",
        ],
      },
      USD: {
        thesis:
          "Cash remains hold / intact / high confidence. Cash is still deliberate optionality, not indecision. No watchlist idea clearly beat cash and the current funded holdings this week, and Alphabet still needs a cleaner evidence read before redeploying optionality.",
        assumptions: [
          "Doing nothing remains valid when evidence is incomplete.",
          "A future funded idea must beat both cash and the existing holdings.",
          "Cash stays below the mandate's normal 40% ceiling.",
        ],
      },
    },
    decision: {
      date: "2026-07-12 weekly journal",
      action: "do nothing",
      subject: "Week of 2026-07-06; no exposure change",
      sourceQuality: "high",
      reason:
        "Do nothing. The portfolio returned -1.69% and trailed S&P 500/SPY +1.37%, Nasdaq-100/QQQ +1.81%, SMH +3.16%, and VT +0.86% for the same 2026-07-02 to 2026-07-10 close-to-close period. No kill condition was triggered. Microsoft and Visa remain intact/high, S&P Global remains strengthening/high but awaits July 28 guidance, Alphabet remains under review/medium pending July 22 earnings, and cash remains valid because AutoZone and Copart still do not clear the funding bar.",
    },
    watchlistUpdates: {
      AZO: {
        whyNotYet:
          "AutoZone remains watchlist / do nothing. Final $850M 4.950% senior notes due 2031 sharpen the capital-structure monitor, but actual use of proceeds, leverage effect, debt repayment, buyback funding, operating durability, and per-share compounding proof are still needed before AZO can beat cash or current funded holdings.",
      },
      CPRT: {
        whyNotYet:
          "Copart remains watchlist / do nothing. Jane Pocock's promotion to President improves management-continuity context, but Copart still needs official complete Jay Adair call evidence plus operating proof on execution, culture, customer relationships, growth quality, margins, and capital allocation.",
      },
    },
    quarterlyStatusUpdates: {
      "Last re-underwrite": "Q2 2026 completed 2026-07-01; latest weekly journal recorded 2026-07-12 for Week of 2026-07-06",
      "Exposure change": "None. Hold Microsoft, Visa, S&P Global, Alphabet, and cash unchanged; do nothing on AutoZone and Copart.",
      "Primary open question":
        "Can late-July earnings prove Microsoft AI economics, Visa network durability, S&P Global retained-business quality, and Alphabet AI returns while infrastructure, resource, and regulatory burdens stay manageable?",
    },
    nextFocus: [
      "Track the UK Critical Third Party regime starting July 13 for Microsoft and Google Cloud as an operational-resilience monitor.",
      "Watch AutoZone's July 14 note settlement and later filings for actual use of proceeds, leverage effect, debt repayment, buyback funding, and per-share compounding quality.",
      "Use Alphabet's July 22 Q2 earnings as the next checkpoint for AI capex, dilution, governance, Search resilience, Cloud returns, resource burden, and regulatory distribution.",
      "Use Visa's July 28 Q3 earnings as the next payment-volume, cross-border, value-added services, AI/token/stablecoin economics, and capital-return checkpoint.",
      "Use S&P Global's July 28 Q2 earnings and updated 2026 guidance as the next SPGI add-or-wait checkpoint after the Mobility Global spin.",
      "Use Microsoft's July 29 Q4 earnings as the next cloud, AI monetization, pricing, margin, capex, sustainability burden, resilience, and per-share-return checkpoint.",
      "Review Copart's official replay or complete transcript before treating Jay Adair's CEO return and Jane Pocock's President promotion as enough evidence of improved execution or growth quality.",
      "Keep weekly benchmark discipline tight: all performance rows must remain full-week, period-matched records versus S&P 500, Nasdaq-100, SMH, and VT.",
    ],
  },
  th: {
    asOf: "บันทึกรายสัปดาห์ Week of 2026-07-06 ลงวันที่ 2026-07-12; ช่วงวัดผลเต็มสัปดาห์ 2026-07-02 ถึง 2026-07-10",
    processQuality:
      "ดี: ใช้ช่วงเวลาเดียวกันกับพอร์ตและ benchmark ทุกตัว, บันทึก Performance Log เฉพาะรายสัปดาห์, เติมครบทั้ง S&P 500, Nasdaq-100, SMH และ VT และแยกราคาหุ้นระยะสั้นออกจากหลักฐานเชิงธุรกิจ.",
    outcomeQuality:
      "ผลลัพธ์สัปดาห์นี้อ่อน พอร์ต -1.69% เหลือประมาณ $9,931.83 และแพ้ S&P 500/SPY +1.37%, Nasdaq-100/QQQ +1.81%, SMH +3.16% และ VT +0.86%. ไม่มี benchmark ไหนที่ต้องใช้ fallback. การแพ้รายสัปดาห์ยังไม่ใช่เหตุผลให้ซื้อขาย เพราะ thesis ธุรกิจยังไม่พัง.",
    holdingUpdates: {
      MSFT: {
        thesis:
          "Microsoft ยังเป็น hold / intact / high confidence. ราคาหุ้นลงในสัปดาห์ที่ benchmark ส่วนใหญ่ขึ้น แต่ยังไม่มีหลักฐานที่เปลี่ยน thesis ของ enterprise software, Azure, Microsoft 365, GitHub, security หรือ AI workflow. สิ่งที่ต้องตามคือ AI monetization, margin pressure, capex intensity, ภาระด้านพลังงานและ sustainability, UK operational-resilience oversight และงบวันที่ 29 ก.ค.",
        killCondition:
          "ทบทวนหนักถ้า cloud หรือซอฟต์แวร์องค์กรเสียแรงส่งถาวร มีปัญหา enterprise AI ด้าน security, reliability, disclosure, copyright, attribution, customer trust, sustainability, community หรือ operational resilience ซ้ำจน adoption เสีย, capex กับทรัพยากรด้าน AI ไม่เปลี่ยนเป็นกำไร หรือผู้บริหารจัดสรรทุนหลวมต่อเนื่อง.",
        assumptions: [
          "ดีมานด์ commercial cloud ยังทน.",
          "AI ต้องทำให้ economics ของ Microsoft 365 และ Azure ดีขึ้น ไม่ใช่เพิ่มแต่ต้นทุน.",
          "workflow ของ Microsoft ยังฝังลึกพอให้ลูกค้าองค์กรย้ายออกยาก.",
          "ภาระด้านพลังงาน emissions น้ำ ชุมชน และ operational resilience ยังจัดการได้พอให้บริษัทสร้าง AI capacity ต่อได้.",
          "งบวันที่ 29 ก.ค. ต้องให้ภาพชัดขึ้นเรื่อง cloud demand, AI monetization, margin pressure, capex, resilience และผลตอบแทนต่อหุ้น.",
        ],
      },
      V: {
        thesis:
          "Visa ยังเป็น hold / intact / high confidence. ราคาหุ้นอ่อนกว่าสัปดาห์นี้ แต่ไม่ได้เปลี่ยนคุณภาพของ payment network. หลักฐานถัดไปคืองบวันที่ 28 ก.ค. โดยเฉพาะ payment volume, cross-border, value-added services, ความเกี่ยวข้องกับ token/AI/stablecoin และ capital return.",
        killCondition:
          "ทบทวนหนักถ้าเครือข่ายถูก disintermediate แบบถาวร กฎระเบียบทำลาย economics ของธุรกรรม บริษัทเสียความเกี่ยวข้องกับ payment flows หรือ capital allocation ไม่ช่วยปกป้องผู้ถือ Class A ในระยะยาว.",
        assumptions: [
          "การจ่ายเงินดิจิทัลยังโตทั่วโลก.",
          "Visa ยังมีที่ยืนใน AI commerce, token, stablecoin และ programmable commerce.",
          "แรงกดดันจากกฎระเบียบยังไม่ทำลาย economics หลักของเครือข่าย.",
          "งบวันที่ 28 ก.ค. ต้องยืนยัน payment volume, cross-border, value-added services และวินัย capital return.",
        ],
      },
      SPGI: {
        thesis:
          "S&P Global ยังเป็น hold / strengthening / high confidence. ชุด pro forma/recast หลัง spin วันที่ 6 ก.ค. ช่วยให้ภาพชัดขึ้น แต่ยังไม่พอให้เพิ่มน้ำหนักก่อนงบและ guidance วันที่ 28 ก.ค. ยืนยัน retained-business growth, margin durability, stranded cost, TSA offset, leverage และ capital allocation.",
        killCondition:
          "ทบทวนหนักถ้าความน่าเชื่อถือของ ratings เสีย ธุรกิจดัชนีหรือข้อมูลถูกลดความสำคัญ หรือการแยก Mobility Global ทำให้ focus, economics, leverage, tax treatment, transition execution, expense allocation, margin durability หรือวินัยจัดสรรทุนแย่ลง.",
        assumptions: [
          "ratings และ data franchise หลักยังถูกตลาดไว้วางใจ.",
          "recast หลัง spin ต้องเป็นภาพ earnings power ที่สะอาดขึ้น ไม่ใช่แค่การจัดบัญชีใหม่.",
          "Market Intelligence ต้องเปลี่ยน Kensho Data, Platforms และ Enterprise Solutions ให้เป็น workflow ที่ลูกค้าใช้จริงและ margin ดีขึ้น.",
          "guidance วันที่ 28 ก.ค. ต้องยืนยันว่า economics และ capital allocation ของธุรกิจที่เหลือยังแข็งแรง.",
        ],
      },
      GOOGL: {
        thesis:
          "Alphabet ยังเป็น hold / under review / medium confidence. คุณภาพของ Search, YouTube, Cloud, subscriptions, AI talent และ cash generation ยังพอให้ถือในน้ำหนักเล็กกว่าได้ แต่ต้องรอหลักฐานจากงบวันที่ 22 ก.ค. เรื่อง AI returns, Cloud economics, Search durability, capital intensity, resource access, dilution, governance และ regulatory-distribution risk.",
        killCondition:
          "ทบทวนหนักถ้า economics ของ Search เสื่อมถาวร AI กินรายได้โฆษณาโดยชดเชยไม่ได้ กฎระเบียบตัดกำลัง distribution, Google Cloud มีปัญหา operational resilience จนเสีย enterprise trust, capex ด้าน AI ไม่สร้างกำไรที่ทนทาน, dilution กระทบผลตอบแทนต่อหุ้นหนักเกินไป, ข้อจำกัดด้านทรัพยากรทำให้ execution ช้าลง หรือการเสีย talent ระดับสูงซ้ำ ๆ ชี้ว่าบริษัทไม่มีความลึกพอจะป้องกัน moat.",
        assumptions: [
          "Search และ YouTube ยังทนได้แม้พฤติกรรมค้นหาผ่าน AI เปลี่ยนไป.",
          "Cloud ต้องโตแล้วแปลง backlog เป็นผลตอบแทนที่ดี.",
          "AI financing, dilution, capex และ resource needs ต้องไม่กินผลตอบแทนต่อหุ้นเกิน thesis.",
          "มาตรการกฎระเบียบต้องไม่ทำลาย distribution power หรือ default access economics แบบถาวร.",
          "งบวันที่ 22 ก.ค. ต้องให้หลักฐานชัดขึ้นเรื่อง AI returns, Cloud economics, Search durability, capital intensity และ regulatory distribution risk.",
        ],
      },
      USD: {
        thesis:
          "เงินสดยังเป็น hold / intact / high confidence. เงินสดคือ optionality ที่ตั้งใจถือ ไม่ใช่ความลังเล สัปดาห์นี้ยังไม่มี watchlist idea ที่ดีกว่าเงินสดและหุ้นที่ถืออยู่ชัดพอ และ Alphabet ยังต้องรอหลักฐานที่สะอาดกว่านี้ก่อนเอาเงินสดไปเพิ่มความเสี่ยง.",
        assumptions: [
          "ไม่จำเป็นต้องทำอะไรถ้าหลักฐานยังไม่ถึงเกณฑ์.",
          "ไอเดียใหม่ต้องดีกว่าทั้งเงินสดและหุ้นเดิมในพอร์ต.",
          "เงินสดยังต่ำกว่าเพดาน 40% ตาม mandate.",
        ],
      },
    },
    decision: {
      date: "บันทึกรายสัปดาห์ 2026-07-12",
      action: "do nothing",
      subject: "Week of 2026-07-06; ไม่ปรับพอร์ต",
      sourceQuality: "high",
      reason:
        "ไม่ทำอะไร พอร์ต -1.69% และแพ้ S&P 500/SPY +1.37%, Nasdaq-100/QQQ +1.81%, SMH +3.16% และ VT +0.86% ในช่วงเดียวกัน 2026-07-02 ถึง 2026-07-10 แต่ไม่มี kill condition ใดถูกกระทบ Microsoft และ Visa ยัง intact/high, S&P Global ยัง strengthening/high แต่ต้องรอ guidance วันที่ 28 ก.ค., Alphabet ยัง under review/medium รอวันที่ 22 ก.ค. และเงินสดยังมีเหตุผล เพราะ AutoZone กับ Copart ยังไม่ถึงเกณฑ์ใช้เงิน.",
    },
    watchlistUpdates: {
      AZO: {
        whyNotYet:
          "AutoZone ยังเป็น watchlist / do nothing. หนี้ $850M 4.950% senior notes due 2031 ทำให้ capital-structure monitor ชัดขึ้น แต่ยังต้องดู use of proceeds, leverage effect, debt repayment, buyback funding, operating durability และ per-share compounding ก่อนจะดีกว่าเงินสดหรือหุ้นที่ถืออยู่.",
      },
      CPRT: {
        whyNotYet:
          "Copart ยังเป็น watchlist / do nothing. การเลื่อน Jane Pocock เป็น President ช่วยเรื่อง management-continuity แต่ยังต้องมีหลักฐานเต็มจาก call ของ Jay Adair และ operating proof เรื่อง execution, culture, customer relationships, growth quality, margins และ capital allocation.",
      },
    },
    quarterlyStatusUpdates: {
      "รีวิวล่าสุด": "Q2 2026 เสร็จวันที่ 2026-07-01; weekly journal ล่าสุดบันทึก 2026-07-12 สำหรับ Week of 2026-07-06",
      "มีการปรับพอร์ตไหม": "ไม่มี Microsoft, Visa, S&P Global, Alphabet และเงินสดยังเหมือนเดิม; AutoZone กับ Copart ยังไม่ซื้อ.",
      "คำถามหลัก":
        "งบปลายเดือน ก.ค. จะพิสูจน์ AI economics ของ Microsoft, ความทนของเครือข่าย Visa, คุณภาพธุรกิจที่เหลือของ S&P Global และ AI returns ของ Alphabet ได้แค่ไหน ในขณะที่ภาระโครงสร้างพื้นฐาน ทรัพยากร และกฎระเบียบยังต้องจัดการได้.",
    },
    nextFocus: [
      "ตาม UK Critical Third Party regime ตั้งแต่ 13 ก.ค. สำหรับ Microsoft และ Google Cloud ในฐานะ operational-resilience monitor.",
      "ตาม settlement ของหนี้ AutoZone วันที่ 14 ก.ค. และ filing ถัดไปเพื่อดู use of proceeds, leverage effect, debt repayment, buyback funding และ per-share compounding.",
      "ใช้งบ Alphabet วันที่ 22 ก.ค. เป็น checkpoint เรื่อง AI capex, dilution, governance, Search resilience, Cloud returns, resource burden และ regulatory distribution.",
      "ใช้งบ Visa วันที่ 28 ก.ค. เป็น checkpoint เรื่อง payment volume, cross-border, value-added services, AI/token/stablecoin economics และ capital return.",
      "ใช้งบ Q2 และ guidance วันที่ 28 ก.ค. ของ S&P Global เป็น checkpoint ว่าจะเพิ่มน้ำหนักหรือรอต่อหลังแยก Mobility Global.",
      "ใช้งบ Microsoft วันที่ 29 ก.ค. เป็น checkpoint เรื่อง cloud, AI monetization, pricing, margin, capex, sustainability burden, resilience และผลตอบแทนต่อหุ้น.",
      "ทบทวน replay ทางการหรือ transcript เต็มของ Copart ก่อนตีความว่าการกลับมาของ Jay Adair และการแต่งตั้ง Jane Pocock ดีพอจะเพิ่ม conviction เรื่อง execution หรือ growth quality.",
      "รักษาวินัย benchmark: ทุก Performance Log ต้องเป็นข้อมูลเต็มสัปดาห์เทียบ S&P 500, Nasdaq-100, SMH และ VT ในช่วงเดียวกัน.",
    ],
  },
} as const;
