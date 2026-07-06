export const latestScan = {
  en: {
    asOf:
      "2026-07-06 11:30 ET intraday market-hours scan during the U.S. regular session",
    processQuality:
      "Good: this scan started from the existing holdings and watchlist, checked company and filing sources before secondary context, ignored ordinary intraday price movement, and kept the decision trail separate from weekly performance records. No Performance Log row was created because this was not a weekly review.",
    outcomeQuality:
      "No trade. Fresh checks after the 10:30 ET checkpoint found no new source-backed development that changed business quality, moat durability, management quality, capital allocation, growth quality, thesis status, confidence, position size, kill condition, or opportunity cost. S&P Global's July 6 post-spin recast package remains the material owned-position evidence. Copart's CEO-call replay/transcript still was not surfaced on the accessible investor page by this checkpoint, so Copart remains a watchlist monitor rather than a funding candidate.",
    holdingUpdates: {
      MSFT: {
        weight: 22.9,
        value: 2313.77,
        thesis:
          "Microsoft remains hold / intact / high confidence. Fresh checks found no newer official Microsoft investor item after the July 3 Frontier Company and Copilot content-grounding items that changed thesis status, sizing, kill conditions, or opportunity cost. Copilot and Frontier Company remain useful AI workflow and trust monitors, but they still need proof of durable paid adoption, renewal quality, reliability, margin contribution, customer trust, and per-share AI returns.",
        killCondition:
          "Cloud or enterprise software durability weakens structurally, repeated enterprise AI security, reliability, disclosure, copyright, attribution, or customer-trust failures impair adoption, AI capex and power/resource commitments repeatedly fail to convert into profit, or management capital allocation becomes persistently undisciplined.",
        assumptions: [
          "Commercial cloud demand remains durable.",
          "AI products strengthen Microsoft 365 and Azure economics rather than only increasing capital intensity.",
          "Enterprise switching costs and bundled workflows remain hard to displace.",
          "Frontier Company and Copilot need proof of customer outcomes, renewal quality, and per-share returns.",
        ],
      },
      V: {
        weight: 22.23,
        value: 2245.63,
        thesis:
          "Visa remains hold / intact / high confidence. Fresh checks found no newer official Visa item after the recent AI, tokenization, stablecoin, and agentic-commerce evidence. Those items support network relevance, but they are not enough to change sizing without durable transaction economics, settlement economics, margin contribution, and issuer/acquirer adoption.",
        killCondition:
          "Structural network disintermediation, adverse regulation that permanently damages transaction economics, loss of payment-flow relevance, or capital allocation that no longer protects long-term Class A holders.",
        assumptions: [
          "Payment digitization continues globally.",
          "Visa remains relevant in AI-initiated, tokenized, stablecoin-enabled, and programmable commerce.",
          "Legal and regulatory pressure stays manageable.",
        ],
      },
      SPGI: {
        weight: 21.6,
        value: 2182.26,
        thesis:
          "S&P Global remains hold / strengthening / high confidence. The July 6 recast package remains the material owned-position evidence: SPGI now presents the retained company through Ratings, Indices, Energy, and Market Intelligence, with updated allocation methodology and pro forma financials for 2025 and Q1 2026. The Market Intelligence operating-model update organizes Kensho Data & Platforms and Enterprise Solutions around data, AI, software, and workflow growth. This improves post-spin clarity, but it is not an add signal before July 28 guidance and Q2 earnings verify forward revenue growth, margin durability, stranded-cost treatment, TSA offsets, leverage, and capital allocation.",
        killCondition:
          "Ratings credibility erodes, benchmark/data franchises lose relevance, or the Mobility Global separation damages focus, economics, leverage, tax treatment, transition execution, expense allocation, margin durability, or capital allocation discipline.",
        assumptions: [
          "The core ratings and data franchises remain trusted.",
          "The post-spin segment recast is a cleaner view of durable earnings power, not merely an accounting reshuffle.",
          "Market Intelligence can turn Kensho Data, Platforms, and Enterprise Solutions into better customer workflows and improved margins.",
          "July 28 guidance needs to confirm that retained-business economics and capital allocation remain strong after Mobility.",
        ],
      },
      GOOGL: {
        weight: 13.47,
        value: 1360.62,
        thesis:
          "Alphabet remains hold / under review / medium confidence. Fresh checks found no newer official Alphabet investor item that resolved the existing AI funding, dilution, governance, capex-return, talent-depth, or regulatory-distribution questions. The final EU Android appeal loss remains a live regulatory-distribution monitor, not a standalone kill-condition event.",
        killCondition:
          "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, AI capex fails to produce durable profit, excessive dilution damages per-share compounding, or repeated elite AI talent losses show that Alphabet can no longer retain enough technical depth to defend the moat.",
        assumptions: [
          "Search and YouTube remain resilient while AI interfaces change.",
          "Cloud growth and backlog convert into attractive returns.",
          "AI financing, stock-plan dilution, and capex do not dilute per-share compounding beyond the thesis.",
          "Regulatory remedies do not permanently damage distribution power or default access economics.",
        ],
      },
      USD: {
        weight: 19.8,
        value: 2000,
        thesis:
          "Cash remains hold / intact / high confidence. S&P Global's post-spin evidence is constructive but does not yet create a stronger use of cash. AutoZone and Copart still do not clearly outrank the funded holdings or the option value of waiting.",
        assumptions: [
          "Doing nothing remains valid when evidence is incomplete.",
          "A future funded idea must beat both cash and the existing holdings.",
          "Cash stays below the mandate's normal 40% ceiling.",
        ],
      },
    },
    decision: {
      date: "2026-07-06 11:30 ET intraday scan",
      action: "do nothing",
      subject: "No exposure-changing update after S&P Global recast and Copart post-call evidence check",
      sourceQuality: "high",
      reason:
        "Do nothing. The S&P Global July 6 recast financials and Market Intelligence operating-model update remain material and constructive, but they support the existing strengthening thesis rather than a capital add before July 28 guidance. Copart's scheduled CEO call is now a post-call evidence item, but the accessible investor page still did not surface usable replay or transcript evidence by 11:30 ET. Microsoft, Visa, Alphabet, cash, AutoZone, and Copart had no exposure-changing update at this checkpoint.",
    },
    watchlistUpdates: {
      AZO: {
        whyNotYet:
          "AutoZone remains watchlist / do nothing. Fresh checks found no newer official AutoZone evidence after the June 16 buyback authorization and May 26 fiscal Q3 materials. It still needs sustained sales, profit, free-cash-flow, commercial-profitability, balance-sheet discipline, and valuation evidence before it can beat cash or the funded holdings.",
      },
      CPRT: {
        whyNotYet:
          "Copart remains watchlist / do nothing. The July 6 call with incoming CEO Jay Adair has moved to a post-call evidence monitor, but the accessible investor page did not surface a replay or transcript by the 11:30 ET scan. Wait for source-backed evidence on execution, culture, customer relationships, growth priorities, and capital allocation before changing conviction.",
      },
    },
    quarterlyStatusUpdates: {
      "Last re-underwrite": "Q2 2026 completed 2026-07-01; latest intraday scan recorded 2026-07-06 11:30 ET",
      "Exposure change": "None. Hold Microsoft, Visa, S&P Global, Alphabet, and cash unchanged; do nothing on AutoZone and Copart.",
      "Primary open question":
        "Can S&P Global's post-spin recast translate into durable retained-business growth and margin strength, can Alphabet defend distribution while proving AI returns, and can Microsoft convert AI deployment into durable per-share economics?",
    },
    nextFocus: [
      "Read S&P Global's July 6 recast tables in detail, especially retained revenue mix, adjusted segment margins, allocation changes, stranded-cost treatment, TSA offsets, and the Market Intelligence Kensho Data & Platforms / Enterprise Solutions split.",
      "Use S&P Global's July 28 Q2 earnings and updated 2026 guidance as the next SPGI add-or-wait checkpoint.",
      "Find Copart's July 6 incoming-CEO call replay or transcript and judge whether Jay Adair's priorities protect execution, culture, customer relationships, growth quality, and capital allocation.",
      "Track Alphabet regulatory follow-through after the final EU Android appeal loss, especially Search defaults, Chrome, Android distribution, app-store practices, DMA obligations, and possible private damages claims.",
      "Require Alphabet evidence on AI infrastructure returns, dilution, financing terms, governance oversight, talent retention, and Search resilience before changing conviction.",
      "Track Microsoft Frontier Company, Copilot packaging, and content-grounding work for proof of customer outcomes, paid attach, renewal quality, reliability, customer trust, margin contribution, and per-share AI returns.",
      "Track Visa programmable-commerce, token, and stablecoin evidence for measurable transaction economics, issuer/acquirer adoption, settlement economics, and risk controls.",
      "Keep AutoZone and Copart on the watchlist until either clearly outranks cash and current funded holdings.",
    ],
  },
  th: {
    asOf: "สแกนระหว่างตลาดสหรัฐ 2026-07-06 เวลา 11:30 ET",
    processQuality:
      "ดี: เริ่มจากหุ้นที่ถือและ watchlist ชุดเดิม ตรวจแหล่งบริษัทกับ filing ก่อน ใช้ข่าวรองเป็นแค่บริบท ตัดเสียงรบกวนจากราคาหุ้นระหว่างวันออก และไม่แตะ Performance Log เพราะรอบนี้ไม่ใช่ weekly review.",
    outcomeQuality:
      "ไม่ซื้อขาย หลัง checkpoint 10:30 ET ยังไม่พบข้อมูลใหม่ที่มีหลักฐานพอจะเปลี่ยนคุณภาพธุรกิจ moat management quality capital allocation growth quality thesis status confidence sizing kill condition หรือ opportunity cost. ข่าวหลักยังเป็นชุด recast หลัง spin ของ S&P Global ส่วน replay หรือ transcript ของ call Copart ยังไม่โผล่ในหน้า investor page ที่เข้าถึงได้ตอนสแกนนี้ จึงยังเป็นแค่ watchlist monitor ไม่ใช่เหตุเพิ่มเงิน.",
    holdingUpdates: {
      MSFT: {
        weight: 22.9,
        value: 2313.77,
        thesis:
          "Microsoft ยังเป็น hold / intact / high confidence. ยังไม่พบข้อมูล investor-facing ใหม่หลัง Frontier Company และ Copilot content-grounding วันที่ 3 ก.ค. ที่เปลี่ยน thesis, sizing, kill condition หรือ opportunity cost. Copilot และ Frontier Company ยังเป็น monitor ที่ดีเรื่อง AI workflow กับ trust แต่ต้องรอหลักฐานเรื่อง paid adoption, renewal quality, reliability, margin contribution, customer trust และผลตอบแทนต่อหุ้นจาก AI.",
        killCondition:
          "ทบทวนหนักถ้า cloud หรือซอฟต์แวร์องค์กรเสียแรงส่งถาวร มีปัญหา enterprise AI ด้าน security, reliability, disclosure, copyright, attribution หรือ customer trust ซ้ำจน adoption เสีย, capex กับทรัพยากรด้าน AI ไม่เปลี่ยนเป็นกำไร หรือผู้บริหารจัดสรรทุนหลวมต่อเนื่อง.",
        assumptions: [
          "ดีมานด์ cloud จากลูกค้าองค์กรยังทน.",
          "AI ต้องทำให้ Microsoft 365 และ Azure ดีขึ้นทาง economics ไม่ใช่เพิ่มแต่ต้นทุน.",
          "workflow ของ Microsoft ยังฝังในองค์กรลึกพอให้ย้ายออกยาก.",
          "Frontier Company และ Copilot ต้องพิสูจน์ผลลัพธ์ลูกค้า renewal quality และผลตอบแทนต่อหุ้นให้ชัดขึ้น.",
        ],
      },
      V: {
        weight: 22.23,
        value: 2245.63,
        thesis:
          "Visa ยังเป็น hold / intact / high confidence. ยังไม่พบข่าวทางการใหม่หลังหลักฐานล่าสุดเรื่อง AI, tokenization, stablecoin และ agentic commerce. ทั้งหมดช่วยยืนยันว่า network ยังมีบทบาท แต่ยังไม่พอเพิ่มน้ำหนักจนกว่าจะเห็น transaction economics, settlement economics, margin contribution และ adoption จาก issuer/acquirer ชัดกว่านี้.",
        killCondition:
          "ทบทวนหนักถ้าเครือข่ายถูก disintermediate แบบถาวร กฎระเบียบทำลาย economics ของธุรกรรม บริษัทเสียความเกี่ยวข้องกับ payment flows หรือ capital allocation ไม่ช่วยปกป้องผู้ถือ Class A ในระยะยาว.",
        assumptions: [
          "การจ่ายเงินดิจิทัลยังโตทั่วโลก.",
          "Visa ยังมีที่ยืนใน AI commerce, token, stablecoin และ programmable commerce.",
          "แรงกดดันจากกฎระเบียบยังไม่ทำลาย economics หลักของเครือข่าย.",
        ],
      },
      SPGI: {
        weight: 21.6,
        value: 2182.26,
        thesis:
          "S&P Global ยังเป็น hold / strengthening / high confidence. ชุด recast วันที่ 6 ก.ค. ยังเป็นหลักฐานสำคัญของหุ้นที่ถือ: หลังแยก Mobility บริษัทจะรายงานผ่าน Ratings, Indices, Energy และ Market Intelligence พร้อมวิธี allocate ค่าใช้จ่ายใหม่และ pro forma financials สำหรับปี 2025 กับ Q1 2026. ข่าว operating model ของ Market Intelligence ก็สำคัญ เพราะจัด Kensho Data & Platforms และ Enterprise Solutions ให้ชัดตาม data, AI, software และ workflow growth. ภาพหลัง spin ชัดขึ้น แต่ยังไม่ใช่สัญญาณเพิ่มน้ำหนัก ต้องรอ guidance และงบ Q2 วันที่ 28 ก.ค. เพื่อดู growth, margin durability, stranded cost, TSA offset, leverage และ capital allocation.",
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
        weight: 13.47,
        value: 1360.62,
        thesis:
          "Alphabet ยังเป็น hold / under review / medium confidence. ยังไม่พบข้อมูล investor-facing ใหม่ที่ตอบคำถามเรื่อง AI funding, dilution, governance, capex return, talent depth หรือ regulatory-distribution risk. การแพ้อุทธรณ์คดี Android ในยุโรปยังเป็น monitor สำคัญ แต่ยังไม่ใช่ kill condition เดี่ยว ๆ.",
        killCondition:
          "ทบทวนหนักถ้า economics ของ Search เสื่อมถาวร AI กินรายได้โฆษณาโดยชดเชยไม่ได้ กฎระเบียบตัดกำลัง distribution, capex ด้าน AI ไม่สร้างกำไรที่ทนทาน dilution กระทบผลตอบแทนต่อหุ้นหนักเกินไป หรือการเสีย talent ระดับสูงซ้ำ ๆ ชี้ว่าบริษัทไม่มีความลึกพอจะป้องกัน moat.",
        assumptions: [
          "Search และ YouTube ยังทนได้แม้พฤติกรรมค้นหาผ่าน AI เปลี่ยนไป.",
          "Cloud ต้องโตแล้วแปลง backlog เป็นผลตอบแทนที่ดี.",
          "AI financing, dilution และ capex ต้องไม่กินผลตอบแทนต่อหุ้นเกิน thesis.",
          "remedy จากกฎระเบียบต้องไม่ทำลาย distribution power หรือ economics จาก default access ถาวร.",
        ],
      },
      USD: {
        weight: 19.8,
        value: 2000,
        thesis:
          "เงินสดยังเป็น hold / intact / high confidence. ข่าว S&P Global เป็นบวกต่อความชัดเจนหลัง spin แต่ยังไม่ทำให้เงินสดมีทางใช้ที่ดีกว่าทันที AutoZone และ Copart ยังไม่ชนะหุ้นที่ถืออยู่หรือความยืดหยุ่นของเงินสดได้ชัดเจน.",
        assumptions: [
          "ไม่จำเป็นต้องทำอะไรถ้าหลักฐานยังไม่ถึงเกณฑ์.",
          "ไอเดียใหม่ต้องดีกว่าทั้งเงินสดและหุ้นเดิมในพอร์ต.",
          "เงินสดยังต่ำกว่าเพดาน 40% ตาม mandate.",
        ],
      },
    },
    decision: {
      date: "สแกนระหว่างวัน 2026-07-06 11:30 ET",
      action: "do nothing",
      subject: "ยังไม่มีข้อมูลที่ต้องปรับพอร์ตหลัง S&P Global recast และการเช็กหลักฐานหลัง call ของ Copart",
      sourceQuality: "high",
      reason:
        "ไม่ทำอะไร ชุด recast และ operating model ใหม่ของ Market Intelligence จาก S&P Global วันที่ 6 ก.ค. ยังเป็นข้อมูลสำคัญและค่อนข้างบวก แต่ตอนนี้หนุน thesis เดิมที่เป็น strengthening มากกว่าจะเป็นเหตุให้เพิ่มเงินก่อน guidance วันที่ 28 ก.ค. ส่วน call ของ Copart กลายเป็นรายการที่ต้องตามหลังงาน แต่ตอน 11:30 ET หน้า investor page ที่เข้าถึงได้ยังไม่มี replay หรือ transcript ที่ใช้ตัดสินได้. Microsoft, Visa, Alphabet, เงินสด, AutoZone และ Copart ยังไม่มีข้อมูลที่ต้องเปลี่ยน exposure ใน checkpoint นี้.",
    },
    watchlistUpdates: {
      AZO: {
        whyNotYet:
          "AutoZone ยังเป็น watchlist / do nothing. ยังไม่พบข้อมูลทางการใหม่หลัง buyback วันที่ 16 มิ.ย. และงบ Q3 วันที่ 26 พ.ค. ต้องเห็นยอดขาย กำไร free cash flow commercial profitability วินัยงบดุล และ valuation ที่ชัดกว่านี้ก่อนถึงจะชนะเงินสดหรือหุ้นที่ถืออยู่.",
      },
      CPRT: {
        whyNotYet:
          "Copart ยังเป็น watchlist / do nothing. call วันที่ 6 ก.ค. กับ Jay Adair เปลี่ยนเป็น monitor หลังงานแล้ว แต่ตอนสแกน 11:30 ET หน้า investor page ที่เข้าถึงได้ยังไม่แสดง replay หรือ transcript ต้องรอฟังเรื่อง execution, culture, customer relationships, growth priorities และ capital allocation ให้ชัดก่อนเปลี่ยน conviction.",
      },
    },
    quarterlyStatusUpdates: {
      "รีวิวล่าสุด": "Q2 2026 เสร็จวันที่ 2026-07-01; intraday scan ล่าสุดบันทึก 2026-07-06 11:30 ET",
      "มีการปรับพอร์ตไหม": "ไม่มี Microsoft, Visa, S&P Global, Alphabet และเงินสดยังเหมือนเดิม; AutoZone กับ Copart ยังไม่ซื้อ.",
      "คำถามหลัก":
        "recast หลัง spin ของ S&P Global จะเปลี่ยนเป็น growth และ margin ของธุรกิจที่เหลือได้จริงไหม, Alphabet จะรักษา distribution พร้อมพิสูจน์ผลตอบแทนจาก AI ได้หรือไม่ และ Microsoft จะเปลี่ยน AI deployment เป็นผลตอบแทนต่อหุ้นที่ทนได้แค่ไหน?",
    },
    nextFocus: [
      "อ่านตาราง recast ของ S&P Global วันที่ 6 ก.ค. ให้ละเอียด โดยเฉพาะ revenue mix ของธุรกิจที่เหลือ, adjusted segment margins, allocation changes, stranded cost, TSA offset และการแยก Kensho Data & Platforms / Enterprise Solutions ใน Market Intelligence.",
      "ใช้ guidance และงบ Q2 วันที่ 28 ก.ค. ของ S&P Global เป็น checkpoint ถัดไปว่าจะเพิ่มน้ำหนักหรือรอต่อ.",
      "หา replay หรือ transcript ของ Copart call วันที่ 6 ก.ค. แล้วดูว่า Jay Adair พูดเรื่อง execution, culture, customer relationships, growth quality และ capital allocation ชัดพอหรือไม่.",
      "ตามผลต่อเนื่องจากคดี Android ของ Alphabet ในยุโรป โดยเฉพาะ Search defaults, Chrome, Android distribution, app-store practices, DMA obligations และ private damages claims.",
      "รอหลักฐานจาก Alphabet เรื่องผลตอบแทนของ AI infrastructure, dilution, financing terms, governance, การรักษา talent และความแข็งแรงของ Search ก่อนเปลี่ยน conviction.",
      "ตาม Microsoft Frontier Company, Copilot packaging และ content-grounding ว่ามีหลักฐานจริงเรื่อง customer outcomes, paid attach, renewal quality, reliability, customer trust, margin contribution และผลตอบแทนต่อหุ้นจาก AI หรือไม่.",
      "ตาม Visa เรื่อง programmable commerce, token และ stablecoin ว่ามี economics จริงผ่าน transaction, issuer/acquirer adoption, settlement economics และ risk controls หรือไม่.",
      "เก็บ AutoZone กับ Copart ไว้ใน watchlist จนกว่าบริษัทใดบริษัทหนึ่งจะชนะเงินสดและหุ้นที่ถืออยู่ได้ชัดเจน.",
    ],
  },
} as const;
