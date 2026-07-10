export const latestScan = {
  en: {
    asOf:
      "2026-07-10 12:30 ET regular-session intraday scan during the U.S. regular session",
    processQuality:
      "Good: the scan prioritized company investor-relations pages, official company releases, SEC/filing surfaces, GOV.UK, the Bank of England, and current watchlist company filings. It treated secondary sources as leads only, ignored ordinary price movement, and left weekly benchmark records untouched because this was not a weekly review.",
    outcomeQuality:
      "No trade. Fresh checks after the 11:30 ET checkpoint found no owned-position evidence that changed business quality, moat durability, management quality, capital allocation, growth quality, thesis status, confidence, sizing, kill condition, or opportunity cost. The useful incremental watchlist item is Copart's July 8 promotion of Jane Pocock to President effective August 1, 2026, which adds management-continuity context but still does not complete the Jay Adair CEO-transition underwriting work. AutoZone's final debt documents remain a capital-structure monitor, not a funding trigger. Microsoft, Visa, S&P Global, Alphabet, and cash remain unchanged; AutoZone and Copart remain watchlist-only.",
    holdingUpdates: {
      MSFT: {
        weight: 22.9,
        value: 2313.77,
        thesis:
          "Microsoft remains hold / intact / high confidence. Fresh checks after 11:30 ET found no new Microsoft-specific evidence that changed the thesis. The UK Critical Third Party designation for Microsoft Ireland Operations Limited remains an operational-resilience and regulatory monitor beginning July 13, 2026, not a kill-condition event. Prior monitor evidence still stands: annual January local-currency Commercial Cloud pricing updates beginning FY2026 and the Commonwealth Bank AI deployment support enterprise AI workflow depth and pricing discipline, but do not yet prove durable companywide AI margins or per-share returns.",
        killCondition:
          "Cloud or enterprise software durability weakens structurally, repeated enterprise AI security, reliability, disclosure, copyright, attribution, customer-trust, or operational-resilience failures impair adoption, AI capex and power/resource commitments repeatedly fail to convert into profit, or management capital allocation becomes persistently undisciplined.",
        assumptions: [
          "Commercial cloud demand remains durable.",
          "AI products strengthen Microsoft 365 and Azure economics rather than only increasing capital intensity.",
          "Enterprise switching costs and bundled workflows remain hard to displace.",
          "UK CTP oversight remains manageable and does not impair financial-sector cloud adoption.",
          "The July 29 earnings call needs cleaner evidence on cloud demand, AI monetization, margin pressure, capital intensity, and operational-resilience obligations.",
        ],
      },
      V: {
        weight: 22.23,
        value: 2245.63,
        thesis:
          "Visa remains hold / intact / high confidence. Fresh checks after 11:30 ET found no new Visa-specific evidence that changed the thesis. Visa's July 8 VBEI wealth-transfer research remains useful demand-context work, but Visa explicitly frames it as informational rather than actual or forecasted Visa operating performance. The July 7 investor-relations notice still sets fiscal Q3 2026 results for July 28 after market close and confirms the quiet period. No change to the network, programmable-commerce, tokenization, stablecoin, regulation, or capital-allocation thesis.",
        killCondition:
          "Structural network disintermediation, adverse regulation that permanently damages transaction economics, loss of payment-flow relevance, or capital allocation that no longer protects long-term Class A holders.",
        assumptions: [
          "Payment digitization continues globally.",
          "Visa remains relevant in AI-initiated, tokenized, stablecoin-enabled, and programmable commerce.",
          "Legal and regulatory pressure stays manageable.",
          "The July 28 earnings materials need to show durable payment volume, cross-border, value-added services, and capital-return discipline.",
        ],
      },
      SPGI: {
        weight: 21.6,
        value: 2182.26,
        thesis:
          "S&P Global remains hold / strengthening / high confidence. Fresh checks after 11:30 ET did not find a new SPGI-specific item that changed the thesis. The July 6 pro forma/recast package, updated segment information, and July 28 Q2 earnings schedule remain the main owned-position evidence. They support post-spin clarity, but they are not enough to add before July 28 earnings and 2026 guidance verify retained-business growth, margin durability, stranded-cost treatment, TSA offsets, leverage, and capital allocation.",
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
        weight: 13.47,
        value: 1360.62,
        thesis:
          "Alphabet remains hold / under review / medium confidence. Fresh checks after 11:30 ET found no new Alphabet-specific evidence that resolved the active questions. The UK Critical Third Party designation for Google Cloud EMEA Limited remains a cloud operational-resilience and regulatory monitor beginning July 13, 2026, but not a thesis break. Alphabet's July 22 Q2 earnings remains the next near-term checkpoint for AI infrastructure returns, dilution, governance, talent depth, Search resilience, Cloud returns, and regulatory distribution.",
        killCondition:
          "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, Google Cloud operational-resilience failures damage enterprise trust, AI capex fails to produce durable profit, excessive dilution damages per-share compounding, or repeated elite AI talent losses show that Alphabet can no longer retain enough technical depth to defend the moat.",
        assumptions: [
          "Search and YouTube remain resilient while AI interfaces change.",
          "Cloud growth and backlog convert into attractive returns.",
          "AI financing, dilution, and capex do not dilute per-share compounding beyond the thesis.",
          "UK CTP oversight remains manageable and does not impair Google Cloud's enterprise runway.",
          "Regulatory remedies do not permanently damage distribution power or default access economics.",
        ],
      },
      USD: {
        weight: 19.8,
        value: 2000,
        thesis:
          "Cash remains hold / intact / high confidence. This scan produced watchlist monitor evidence, not a new funded idea. AutoZone's note terms and Copart's expanded leadership-transition context still do not beat cash or the current holdings on evidence quality and opportunity cost.",
        assumptions: [
          "Doing nothing remains valid when evidence is incomplete.",
          "A future funded idea must beat both cash and the existing holdings.",
          "Cash stays below the mandate's normal 40% ceiling.",
        ],
      },
    },
    decision: {
      date: "2026-07-10 12:30 ET intraday scan",
      action: "do nothing",
      subject: "No exposure change; Jul 10 12:30 ET checkpoint refreshed",
      sourceQuality: "high",
      reason:
        "Do nothing. No owned holding produced new evidence that changed the thesis, kill condition, confidence, or opportunity cost after the 11:30 ET checkpoint. Copart's July 8 promotion of Jane Pocock to President is relevant management-continuity evidence because she led Copart UK and Ireland through growth and expansion, but it is not enough to upgrade the watchlist case without full Jay Adair call remarks and operating proof. AutoZone's final note documentation clarifies debt terms and use-of-proceeds flexibility, but it remains a leverage and per-share-compounding monitor rather than a buy signal.",
    },
    watchlistUpdates: {
      AZO: {
        whyNotYet:
          "AutoZone remains watchlist / do nothing. The July 9 8-K confirms the July 7 underwriting agreement for $850M of 4.950% senior notes due 2031. The final 424(b)(2) prospectus shows the notes mature July 15, 2031, are senior unsecured, rank equally with other senior unsecured debt, price at 99.908%, and are expected to provide about $841.7M of net proceeds for broad corporate purposes. That sharpens the capital-structure monitor, but AZO still needs sustained operating proof, leverage discipline, clear use of proceeds after settlement, and evidence that buybacks or reinvestment improve per-share compounding.",
      },
      CPRT: {
        whyNotYet:
          "Copart remains watchlist / do nothing. The July 8 official release says Jane Pocock will become President effective August 1, 2026 after leading Copart UK and Ireland through growth, capacity expansion, and customer-journey improvements. That adds useful management-continuity context beside Jay Adair's CEO return, but it does not replace the need for the official replay or complete transcript of Adair's July 6 call and hard evidence on execution, culture, customer relationships, growth quality, margins, and capital allocation.",
      },
    },
    quarterlyStatusUpdates: {
      "Last re-underwrite": "Q2 2026 completed 2026-07-01; latest intraday scan recorded 2026-07-10 12:30 ET",
      "Exposure change": "None. Hold Microsoft, Visa, S&P Global, Alphabet, and cash unchanged; do nothing on AutoZone and Copart.",
      "Primary open question":
        "Can late-July earnings prove Microsoft AI economics, Visa network durability, S&P Global retained-business quality, and Alphabet AI returns while cloud operational-resilience oversight and watchlist management transitions remain manageable?",
    },
    nextFocus: [
      "Track the UK Critical Third Party regime starting July 13 for Microsoft and Google Cloud: resilience obligations, incident reporting, regulator communication, and any evidence of adoption friction in financial services.",
      "Use Alphabet's July 22 Q2 earnings as the next AI capex, dilution, governance, Search resilience, Cloud return, and regulatory-distribution checkpoint.",
      "Use Visa's July 28 Q3 earnings as the next payment-volume, cross-border, value-added services, AI/token/stablecoin economics, and capital-return checkpoint.",
      "Use S&P Global's July 28 Q2 earnings and updated 2026 guidance as the next SPGI add-or-wait checkpoint after the Mobility Global spin.",
      "Use Microsoft's July 29 Q4 earnings as the next cloud, AI monetization, pricing, margin, capex, resilience, and per-share-return checkpoint.",
      "Watch AutoZone's July 14 note settlement and later filings for actual use of proceeds, leverage effect, debt repayment, buyback funding, and whether capital allocation improves per-share compounding.",
      "Review Copart's official replay or complete transcript before treating Jay Adair's CEO return and Jane Pocock's President promotion as enough evidence of improved execution or growth quality.",
      "Keep weekly benchmark records untouched until the next weekly review.",
    ],
  },
  th: {
    asOf: "สแกนระหว่างตลาดสหรัฐ 2026-07-10 เวลา 12:30 ET",
    processQuality:
      "ดี: รอบนี้ให้ priority กับหน้า investor relations, ข่าวทางการของบริษัท, SEC/filing surface, GOV.UK, Bank of England และ filing ล่าสุดของ watchlist ใช้แหล่งรองแค่เป็นตัวชี้ทาง ไม่ใช้ราคาช่วงสั้นเป็นเหตุผล และไม่แตะ weekly benchmark เพราะนี่ไม่ใช่ weekly review.",
    outcomeQuality:
      "ไม่ซื้อขาย หลังเช็กต่อจาก 11:30 ET ยังไม่เจอข้อมูลของหุ้นที่ถือซึ่งเปลี่ยนคุณภาพธุรกิจ moat, management, capital allocation, growth quality, thesis status, confidence, sizing, kill condition หรือ opportunity cost. ข้อมูลใหม่ที่มีประโยชน์อยู่ฝั่ง watchlist: Copart ประกาศวันที่ 8 ก.ค. ให้ Jane Pocock เป็น President มีผล 1 ส.ค. 2026 ซึ่งช่วยเพิ่มบริบทเรื่อง management continuity แต่ยังไม่พอแทนการ underwrite คำพูดของ Jay Adair ใน call. เอกสารหนี้สุดท้ายของ AutoZone ยังเป็น monitor ด้าน capital structure ไม่ใช่สัญญาณซื้อ. พอร์ตยังถือ Microsoft, Visa, S&P Global, Alphabet และเงินสดเหมือนเดิม ส่วน AutoZone กับ Copart ยังเป็น watchlist.",
    holdingUpdates: {
      MSFT: {
        weight: 22.9,
        value: 2313.77,
        thesis:
          "Microsoft ยังเป็น hold / intact / high confidence. หลัง 11:30 ET ยังไม่เจอข้อมูลใหม่เฉพาะ Microsoft ที่เปลี่ยน thesis. การถูกสหราชอาณาจักรจัดให้ Microsoft Ireland Operations Limited เป็น Critical Third Party ยังเป็น monitor ด้าน operational resilience และ regulation ตั้งแต่ 13 ก.ค. 2026 ไม่ใช่ kill condition. ข้อมูลเดิมยังใช้ได้: cadence การปรับราคา Commercial Cloud ตามสกุลเงินท้องถิ่นแบบปีละครั้งทุกเดือนมกราคมตั้งแต่ FY2026 และเคส Commonwealth Bank ช่วยยืนยันความลึกของ enterprise AI workflow กับ pricing discipline แต่ยังไม่พิสูจน์ AI margin หรือผลตอบแทนต่อหุ้นของทั้งบริษัท.",
        killCondition:
          "ทบทวนหนักถ้า cloud หรือซอฟต์แวร์องค์กรเสียแรงส่งถาวร มีปัญหา enterprise AI ด้าน security, reliability, disclosure, copyright, attribution, customer trust หรือ operational resilience ซ้ำจน adoption เสีย, capex กับทรัพยากรด้าน AI ไม่เปลี่ยนเป็นกำไร หรือผู้บริหารจัดสรรทุนหลวมต่อเนื่อง.",
        assumptions: [
          "ดีมานด์ commercial cloud ยังทน.",
          "AI ต้องทำให้ economics ของ Microsoft 365 และ Azure ดีขึ้น ไม่ใช่เพิ่มแต่ต้นทุน.",
          "workflow ของ Microsoft ยังฝังลึกพอให้ลูกค้าองค์กรย้ายออกยาก.",
          "การกำกับดูแลแบบ CTP ในอังกฤษต้องยังจัดการได้ และไม่ทำให้ลูกค้าการเงินชะลอการใช้ cloud.",
          "งบวันที่ 29 ก.ค. ควรให้ภาพชัดขึ้นเรื่อง cloud demand, AI monetization, margin pressure, capital intensity และภาระด้าน resilience.",
        ],
      },
      V: {
        weight: 22.23,
        value: 2245.63,
        thesis:
          "Visa ยังเป็น hold / intact / high confidence. หลัง 11:30 ET ยังไม่เจอข้อมูลใหม่เฉพาะ Visa ที่เปลี่ยน thesis. รายงาน VBEI วันที่ 8 ก.ค. เรื่อง wealth transfer ยังเป็นบริบท demand ที่มีประโยชน์ แต่ Visa ระบุเองว่าเป็นข้อมูลประกอบ ไม่ใช่ actual หรือ forecasted operating performance ของบริษัท. ประกาศ IR วันที่ 7 ก.ค. ยังเป็น checkpoint เดิม: งบ Q3 FY2026 ออกหลังตลาดปิดวันที่ 28 ก.ค. และผู้บริหารอยู่ใน quiet period. Thesis เรื่อง network, programmable commerce, tokenization, stablecoin, regulation และ capital allocation ยังไม่เปลี่ยน.",
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
        weight: 21.6,
        value: 2182.26,
        thesis:
          "S&P Global ยังเป็น hold / strengthening / high confidence. หลัง 11:30 ET ยังไม่เจอข้อมูล SPGI-specific ใหม่ที่เปลี่ยน thesis. ชุด pro forma/recast วันที่ 6 ก.ค., segment information และกำหนดงบ Q2 วันที่ 28 ก.ค. ยังเป็นหลักฐานหลักของหุ้นที่ถือ ช่วยให้ภาพหลัง spin ชัดขึ้น แต่ยังไม่พอให้เพิ่มน้ำหนักก่อนงบและ guidance ยืนยัน growth, margin durability, stranded cost, TSA offset, leverage และ capital allocation ของธุรกิจที่เหลือ.",
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
          "Alphabet ยังเป็น hold / under review / medium confidence. หลัง 11:30 ET ยังไม่เจอข้อมูลใหม่เฉพาะ Alphabet ที่ตอบคำถามสำคัญได้. การที่ Google Cloud EMEA Limited ถูกจัดเป็น Critical Third Party ในอังกฤษยังเป็น monitor ด้าน cloud operational resilience และ regulation ตั้งแต่ 13 ก.ค. 2026 แต่ยังไม่ใช่ thesis break. งบ Q2 วันที่ 22 ก.ค. ยังเป็น checkpoint ใกล้สุดเรื่อง AI infrastructure returns, dilution, governance, talent depth, Search resilience, Cloud returns และ regulatory distribution.",
        killCondition:
          "ทบทวนหนักถ้า economics ของ Search เสื่อมถาวร AI กินรายได้โฆษณาโดยชดเชยไม่ได้ กฎระเบียบตัดกำลัง distribution, Google Cloud มีปัญหา operational resilience จนเสีย enterprise trust, capex ด้าน AI ไม่สร้างกำไรที่ทนทาน, dilution กระทบผลตอบแทนต่อหุ้นหนักเกินไป หรือการเสีย talent ระดับสูงซ้ำ ๆ ชี้ว่าบริษัทไม่มีความลึกพอจะป้องกัน moat.",
        assumptions: [
          "Search และ YouTube ยังทนได้แม้พฤติกรรมค้นหาผ่าน AI เปลี่ยนไป.",
          "Cloud ต้องโตแล้วแปลง backlog เป็นผลตอบแทนที่ดี.",
          "AI financing, dilution และ capex ต้องไม่กินผลตอบแทนต่อหุ้นเกิน thesis.",
          "การกำกับดูแลแบบ CTP ในอังกฤษต้องยังจัดการได้ และไม่ทำลาย runway ของ Google Cloud ในลูกค้าองค์กร.",
          "remedy จากกฎระเบียบต้องไม่ทำลาย distribution power หรือ economics จาก default access ถาวร.",
        ],
      },
      USD: {
        weight: 19.8,
        value: 2000,
        thesis:
          "เงินสดยังเป็น hold / intact / high confidence. รอบนี้มีแต่ monitor ฝั่ง watchlist ไม่ใช่ไอเดียใหม่ที่ควรเอาเงินไปลง AutoZone มี terms หนี้ชัดขึ้น และ Copart มีบริบท leadership transition เพิ่มขึ้น แต่ทั้งคู่ยังไม่ชนะเงินสดหรือหุ้นที่ถืออยู่ในด้านคุณภาพหลักฐานและ opportunity cost.",
        assumptions: [
          "ไม่จำเป็นต้องทำอะไรถ้าหลักฐานยังไม่ถึงเกณฑ์.",
          "ไอเดียใหม่ต้องดีกว่าทั้งเงินสดและหุ้นเดิมในพอร์ต.",
          "เงินสดยังต่ำกว่าเพดาน 40% ตาม mandate.",
        ],
      },
    },
    decision: {
      date: "สแกนระหว่างวัน 2026-07-10 12:30 ET",
      action: "do nothing",
      subject: "ไม่ปรับพอร์ต; อัปเดต checkpoint 12:30 ET วันที่ 10 ก.ค.",
      sourceQuality: "high",
      reason:
        "ไม่ทำอะไร หลัง 11:30 ET ไม่มีหุ้นที่ถืออยู่ตัวไหนมีข้อมูลใหม่ที่เปลี่ยน thesis, kill condition, confidence หรือ opportunity cost. การแต่งตั้ง Jane Pocock เป็น President ของ Copart วันที่ 8 ก.ค. เป็นข้อมูล management-continuity ที่มีความหมาย เพราะเธอนำ Copart UK and Ireland ช่วงที่ธุรกิจโตและขยาย capacity แต่ยังไม่พอ upgrade watchlist ถ้ายังไม่มีคำพูดเต็มจาก call ของ Jay Adair และหลักฐาน operating ที่ชัดขึ้น. เอกสารหนี้สุดท้ายของ AutoZone ทำให้ debt terms กับ use-of-proceeds flexibility ชัดขึ้น แต่ยังเป็น monitor ด้าน leverage และ per-share compounding ไม่ใช่สัญญาณซื้อ.",
    },
    watchlistUpdates: {
      AZO: {
        whyNotYet:
          "AutoZone ยังเป็น watchlist / do nothing. 8-K วันที่ 9 ก.ค. ยืนยัน underwriting agreement วันที่ 7 ก.ค. สำหรับ $850M 4.950% senior notes due 2031. 424(b)(2) ฉบับสุดท้ายระบุว่าหนี้ครบกำหนด 15 ก.ค. 2031, เป็น senior unsecured, rank เท่ากับ senior unsecured debt อื่น, ราคา 99.908% และคาดว่า net proceeds ราว $841.7M สำหรับ corporate purposes ที่เปิดกว้าง ข้อมูลนี้ทำให้ capital-structure monitor ชัดขึ้น แต่ AZO ยังต้องพิสูจน์ operating trend, leverage discipline, use of proceeds หลัง settlement และผลตอบแทนต่อหุ้นจาก buyback หรือ reinvestment.",
      },
      CPRT: {
        whyNotYet:
          "Copart ยังเป็น watchlist / do nothing. ข่าวทางการวันที่ 8 ก.ค. ระบุว่า Jane Pocock จะเป็น President ตั้งแต่ 1 ส.ค. 2026 หลังนำ Copart UK and Ireland ผ่านช่วงเติบโต ขยาย capacity และยกระดับ customer journey. นี่เป็นบริบท management-continuity ที่ดีขึ้นข้างการกลับมาของ Jay Adair แต่ยังแทน official replay หรือ transcript เต็มของ call วันที่ 6 ก.ค. ไม่ได้ และยังต้องมีหลักฐานเรื่อง execution, culture, customer relationships, growth quality, margin และ capital allocation.",
      },
    },
    quarterlyStatusUpdates: {
      "รีวิวล่าสุด": "Q2 2026 เสร็จวันที่ 2026-07-01; intraday scan ล่าสุดบันทึก 2026-07-10 12:30 ET",
      "มีการปรับพอร์ตไหม": "ไม่มี Microsoft, Visa, S&P Global, Alphabet และเงินสดยังเหมือนเดิม; AutoZone กับ Copart ยังไม่ซื้อ.",
      "คำถามหลัก":
        "งบปลายเดือน ก.ค. จะพิสูจน์ AI economics ของ Microsoft, ความทนของเครือข่าย Visa, คุณภาพธุรกิจที่เหลือของ S&P Global และ AI returns ของ Alphabet ได้แค่ไหน ในขณะที่ oversight ด้าน cloud resilience และ leadership transition ของ watchlist ยังต้องตามต่อ.",
    },
    nextFocus: [
      "ตาม UK Critical Third Party regime ตั้งแต่ 13 ก.ค. สำหรับ Microsoft และ Google Cloud: resilience obligation, incident reporting, การสื่อสารกับ regulator และสัญญาณว่าลูกค้าการเงินชะลอ adoption หรือไม่.",
      "ใช้งบ Alphabet วันที่ 22 ก.ค. เป็น checkpoint เรื่อง AI capex, dilution, governance, Search resilience, Cloud return และ regulatory distribution.",
      "ใช้งบ Visa วันที่ 28 ก.ค. เป็น checkpoint เรื่อง payment volume, cross-border, value-added services, AI/token/stablecoin economics และ capital return.",
      "ใช้งบ Q2 และ guidance วันที่ 28 ก.ค. ของ S&P Global เป็น checkpoint ว่าจะเพิ่มน้ำหนักหรือรอต่อหลังแยก Mobility Global.",
      "ใช้งบ Microsoft วันที่ 29 ก.ค. เป็น checkpoint เรื่อง cloud, AI monetization, pricing, margin, capex, resilience และผลตอบแทนต่อหุ้น.",
      "ตาม settlement ของหนี้ AutoZone วันที่ 14 ก.ค. และ filing ถัดไปเพื่อดู use of proceeds, leverage effect, debt repayment, buyback funding และผลต่อ per-share compounding.",
      "ทบทวน replay ทางการหรือ transcript เต็มของ Copart ก่อนตีความว่าการกลับมาของ Jay Adair และการแต่งตั้ง Jane Pocock ดีพอจะเพิ่ม conviction เรื่อง execution หรือ growth quality.",
      "ไม่แตะ weekly benchmark record จนกว่าจะถึง weekly review รอบถัดไป.",
    ],
  },
} as const;
