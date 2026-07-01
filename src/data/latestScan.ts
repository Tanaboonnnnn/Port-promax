export const latestScan = {
  en: {
    asOf: "2026-07-01 09:30 ET intraday market-hours scan; latest complete weekly benchmark record remains Week of 2026-06-22",
    processQuality:
      "Good: the scan started from the written theses, checked official company, investor-relations, and SEC filing sources first, separated execution evidence from price noise, and left the weekly-only Performance Log untouched.",
    outcomeQuality:
      "Intraday price movement was ignored. The portfolio decision is based on business evidence: S&P Global moved from pending distribution to post-spin verification, while the other holdings and watchlist names produced no exposure-changing official evidence.",
    holdingUpdates: {
      MSFT: {
        thesis:
          "Microsoft remains hold / intact / high confidence. No newer official item changed the cloud, enterprise software, or AI infrastructure thesis after the late-June Copilot and datacenter evidence. Copilot packaging, workflow depth, and customer examples are constructive, but the thesis still needs proof that AI capex, reliability, power, water, and capacity translate into durable per-share returns.",
        killCondition:
          "Cloud or enterprise software durability weakens structurally, repeated enterprise AI security, reliability, or disclosure failures impair trust, AI capex and power/resource commitments repeatedly fail to convert into profit, or management capital allocation becomes persistently undisciplined.",
      },
      V: {
        thesis:
          "Visa remains hold / intact / high confidence. The June 30 newsroom item is constructive digital-commerce and AI context, and the June 26 8-K remains capital-structure and litigation-risk plumbing. Neither changes Visa's network moat, growth quality, thesis status, sizing, or kill condition.",
        killCondition:
          "Structural network disintermediation, adverse regulation that permanently damages transaction economics, loss of payment-flow relevance, or capital allocation that no longer protects long-term Class A holders.",
      },
      SPGI: {
        thesis:
          "S&P Global remains hold / strengthening / high confidence. Mobility Global reached the expected July 1 distribution window, moving the monitor from pending spin mechanics to post-spin verification. That supports management execution, but it is not enough by itself to increase sizing; the next evidence needs to show clean settlement, regular-way MBGL trading, retained-business focus, leverage discipline, and capital-allocation quality.",
        killCondition:
          "Ratings credibility erodes, benchmark/data franchises lose relevance, or the Mobility Global separation damages focus, economics, leverage, or capital allocation discipline.",
      },
      GOOGL: {
        thesis:
          "Alphabet remains hold / under review / medium confidence. No newer official investor evidence resolved the AI infrastructure return, dilution, governance, talent-depth, or Search-resilience questions raised by the June financing and capex plan. The position stays smaller than Microsoft, Visa, and S&P Global.",
        killCondition:
          "Search economics structurally deteriorate, AI substitutes permanently impair monetization, regulation breaks distribution power, AI capex fails to produce durable profit, excessive dilution damages per-share compounding, or repeated elite AI talent losses show that Alphabet can no longer retain enough technical depth to defend the moat.",
      },
      USD: {
        thesis:
          "Cash remains hold / intact / high confidence. It remains valid because AutoZone and Copart still do not clearly outrank the funded holdings or the option value of waiting.",
      },
    },
    decision: {
      date: "2026-07-01 09:30 ET",
      action: "do nothing",
      subject: "Intraday market-open scan",
      sourceQuality: "high",
      reason:
        "Do nothing. S&P Global's Mobility Global separation reached the expected July 1 effective window, which is material execution evidence, but it does not justify increasing exposure before post-spin settlement, MBGL regular-way trading, leverage, focus, and capital allocation are verified. Microsoft, Visa, Alphabet, cash, AutoZone, and Copart produced no newer official evidence that changed thesis status, confidence, sizing, kill conditions, or opportunity cost. No Weekly Journal or Performance Log row was created because this was an intraday scan.",
    },
    watchlistUpdates: {
      AZO: {
        whyNotYet:
          "AutoZone remains a credible watchlist compounder, but fiscal Q3 improvement and the $1.5B buyback authorization still are not enough to beat cash or the funded holdings. Nick still needs sustained growth, commercial-profitability proof, free-cash-flow durability, and valuation support.",
      },
      CPRT: {
        whyNotYet:
          "Copart remains a high-quality watchlist business, but fiscal Q3 growth was modest and the June 29 CEO transition is still a management-continuity monitor. It needs evidence on execution, culture, customer relationships, and capital allocation after the transition before it deserves capital.",
      },
    },
    quarterlyStatusUpdates: {
      "Last re-underwrite": "Q2 2026 completed 2026-07-01; latest intraday scan completed 2026-07-01 09:30 ET",
      "Exposure change": "None. Hold Microsoft, Visa, S&P Global, Alphabet, and cash unchanged; do nothing on AutoZone and Copart.",
      "Primary open question":
        "Can S&P Global settle cleanly into its post-Mobility profile, can Alphabet prove durable per-share AI returns, and can Microsoft/Visa turn AI-related product evidence into measurable economics?",
    },
    nextFocus: [
      "Verify S&P Global's post-spin settlement, regular-way MBGL trading, retained-business focus, leverage discipline, and capital allocation after the July 1 Mobility Global distribution window.",
      "Require Alphabet evidence on AI infrastructure returns, dilution, financing terms, governance oversight, talent retention, and Search resilience before changing conviction.",
      "Track Microsoft Copilot paid attach, renewal quality, reliability, governance, pricing acceptance, workflow depth, and per-share AI returns.",
      "Track Visa programmable-commerce, token, and stablecoin evidence for measurable transaction economics, issuer/acquirer adoption, settlement economics, and risk controls.",
      "Keep AutoZone and Copart on the watchlist until either clearly outranks cash and current funded holdings.",
      "Keep weekly benchmark discipline tight: intraday scans may update evidence, but Performance Log rows are updated only during weekly reviews.",
    ],
  },
  th: {
    asOf: "สแกนช่วงเปิดตลาดสหรัฐ 2026-07-01 09:30 ET; ข้อมูล benchmark รายสัปดาห์ล่าสุดยังเป็นสัปดาห์ 2026-06-22",
    processQuality:
      "ดี: รอบนี้เริ่มจาก thesis เดิม ตรวจแหล่งทางการก่อน ทั้งข่าวบริษัท investor relations และ SEC filing แยกหลักฐานด้านธุรกิจออกจากเสียงรบกวนของราคา และไม่แตะ Performance Log เพราะไม่ใช่รอบ weekly review.",
    outcomeQuality:
      "ไม่ใช้ราคาผันผวนระหว่างวันเป็นเหตุผลตัดสินใจ ประเด็นธุรกิจที่เปลี่ยนจริงมีแค่ S&P Global: จากเดิมรอ distribution ตอนนี้ต้องตาม post-spin settlement ส่วนหุ้นอื่นและ watchlist ยังไม่มีหลักฐานทางการใหม่ที่ต้องเปลี่ยนน้ำหนัก.",
    holdingUpdates: {
      MSFT: {
        thesis:
          "Microsoft ยังเป็น hold / intact / high confidence. หลังหลักฐานปลายเดือนมิ.ย. เรื่อง Copilot และดาต้าเซ็นเตอร์ ยังไม่มีรายการทางการใหม่ที่เปลี่ยน thesis ของ cloud, ซอฟต์แวร์องค์กร หรือ AI infrastructure. ภาพ Copilot ด้านแพ็กเกจ ราคา workflow และเคสลูกค้ายังดูดี แต่ยังต้องพิสูจน์ว่า AI capex, reliability, พลังงาน, น้ำ และ capacity จะกลับมาเป็นผลตอบแทนต่อหุ้นที่ทนจริง.",
        killCondition:
          "ทบทวนหนักถ้า cloud หรือซอฟต์แวร์องค์กรเสียแรงส่งถาวร มีปัญหา enterprise AI ด้าน security, reliability หรือ disclosure ซ้ำจน trust เสีย, capex กับภาระด้านพลังงาน/ทรัพยากรไม่เปลี่ยนเป็นกำไร หรือผู้บริหารจัดสรรทุนหลวมต่อเนื่อง.",
        assumptions: [
          "ลูกค้าองค์กรยังใช้ cloud และ Microsoft 365 ต่อเนื่อง.",
          "AI ต้องเพิ่มมูลค่าของ Microsoft 365 และ Azure ไม่ใช่เพิ่มแต่ต้นทุนโครงสร้างพื้นฐาน.",
          "workflow ของ Microsoft ยังฝังลึกพอให้ลูกค้าย้ายออกยาก.",
          "การจัดการพลังงาน น้ำ reliability และดาต้าเซ็นเตอร์ต้องไม่ทำให้ผลตอบแทนต่อหุ้นเสียหาย.",
        ],
      },
      V: {
        thesis:
          "Visa ยังเป็น hold / intact / high confidence. ข่าววันที่ 30 มิ.ย. เป็นข้อมูลบวกต่อภาพ digital commerce และ AI ส่วน 8-K วันที่ 26 มิ.ย. ยังเป็นเรื่องโครงสร้างทุนกับ litigation-risk plumbing ไม่ใช่การเปลี่ยน moat ของเครือข่าย คุณภาพการเติบโต น้ำหนักลงทุน หรือ kill condition.",
        killCondition:
          "ทบทวนหนักถ้าเครือข่ายถูก disintermediate แบบถาวร กฎระเบียบทำลาย economics ของธุรกรรม บริษัทเสียความเกี่ยวข้องกับ payment flows หรือ capital allocation ไม่ช่วยปกป้องผู้ถือ Class A ในระยะยาว.",
        assumptions: [
          "การชำระเงินดิจิทัลยังโตต่อทั่วโลก.",
          "Visa ยังมีบทบาทใน AI commerce, tokenized payment และ programmable money.",
          "แรงกดดันด้านกฎระเบียบและคดีความยังไม่ทำลาย economics ของเครือข่ายถาวร.",
        ],
      },
      SPGI: {
        thesis:
          "S&P Global ยังเป็น hold / strengthening / high confidence. Mobility Global เข้าสู่กรอบ distribution วันที่ 1 ก.ค. ตามที่บริษัทเคยระบุไว้แล้ว จุดติดตามจึงเปลี่ยนจากรอ spin mechanics เป็นการตรวจ post-spin ว่า settle เรียบร้อยไหม MBGL เทรดแบบ regular-way ได้ปกติไหม และ S&P Global หลังแยกธุรกิจยังรักษาโฟกัส leverage และวินัยจัดสรรทุนได้ดีหรือไม่. เป็นหลักฐานบวกด้าน execution แต่ยังไม่พอให้เพิ่มน้ำหนัก.",
        killCondition:
          "ทบทวนหนักถ้าความน่าเชื่อถือของ ratings เสีย ธุรกิจดัชนีหรือข้อมูลถูกลดความสำคัญ หรือการแยก Mobility ทำให้ economics, leverage, โฟกัส หรือวินัยจัดสรรทุนแย่ลง.",
        assumptions: [
          "ลูกค้ายังพึ่งพา ratings, indices, benchmarks และข้อมูลของ S&P Global.",
          "การแยก Mobility Global ต้องไม่ทำให้ฐานกำไรหลักหรือวินัยจัดสรรทุนเสียหาย.",
          "ธุรกิจข้อมูลรายได้ประจำยังโตได้พร้อม margin ที่ดี.",
        ],
      },
      GOOGL: {
        thesis:
          "Alphabet ยังเป็น hold / under review / medium confidence. ยังไม่มีหลักฐาน investor-facing ใหม่ที่ตอบคำถามเรื่องผลตอบแทนจาก AI infrastructure, dilution, governance, ความลึกของ talent หรือความทนของ Search หลังแผน financing และ capex เดือนมิ.ย. น้ำหนักจึงยังเล็กกว่า Microsoft, Visa และ S&P Global.",
        killCondition:
          "ทบทวนหนักถ้า economics ของ Search เสื่อมถาวร AI กินรายได้โฆษณาโดยชดเชยไม่ได้ กฎระเบียบตัดกำลัง distribution, capex ด้าน AI ไม่สร้างกำไรที่ทนทาน dilution กระทบผลตอบแทนต่อหุ้นหนักเกินไป หรือการเสีย talent ระดับสูงซ้ำ ๆ ชี้ว่าบริษัทไม่มีความลึกพอจะป้องกัน moat.",
        assumptions: [
          "Search และ YouTube ยังรักษาความแข็งแรงได้แม้พฤติกรรมค้นหาผ่าน AI เพิ่มขึ้น.",
          "Cloud ต้องโตพร้อมคุณภาพกำไร ไม่ใช่โตเพราะใช้เงินลงทุนมากขึ้นอย่างเดียว.",
          "AI capex, financing และ dilution ต้องไม่ลด per-share compounding จน thesis เปลี่ยน.",
        ],
      },
      USD: {
        thesis:
          "เงินสดยังเป็น hold / intact / high confidence. ยังมีเหตุผล เพราะ AutoZone กับ Copart ยังไม่ชนะทั้งหุ้นที่ถืออยู่และความยืดหยุ่นของเงินสดได้ชัดเจน.",
        assumptions: [
          "ไม่ต้องซื้อเพิ่มถ้าหลักฐานยังไม่ถึงเกณฑ์.",
          "ไอเดียใหม่ต้องดีกว่าเงินสดและหุ้นที่ถืออยู่.",
          "เงินสดยังอยู่ในกรอบ mandate และช่วยลดการตัดสินใจแบบฝืน ๆ.",
        ],
      },
    },
    decision: {
      date: "2026-07-01 09:30 ET",
      action: "do nothing",
      subject: "สแกนช่วงเปิดตลาด",
      sourceQuality: "high",
      reason:
        "ไม่ทำอะไร Mobility Global ของ S&P Global เข้าสู่กรอบมีผลวันที่ 1 ก.ค. ตามแผน ซึ่งเป็นหลักฐานด้าน execution ที่สำคัญ แต่ยังไม่ใช่เหตุผลให้เพิ่มน้ำหนักก่อนเห็น post-spin settlement, การเทรด MBGL แบบ regular-way, leverage, โฟกัส และวินัยจัดสรรทุนหลังแยกธุรกิจ. Microsoft, Visa, Alphabet, เงินสด, AutoZone และ Copart ยังไม่มีหลักฐานทางการใหม่ที่เปลี่ยน thesis, confidence, sizing, kill condition หรือ opportunity cost. ไม่สร้าง Weekly Journal หรือ Performance Log เพราะรอบนี้เป็น intraday scan.",
    },
    watchlistUpdates: {
      AZO: {
        whyNotYet:
          "AutoZone ยังเป็น watchlist ที่น่าสนใจ แต่ Q3 ที่ดีขึ้นกับวงเงินซื้อคืน $1.5B ยังไม่พอให้ชนะเงินสดหรือหุ้นแกนพอร์ต ต้องเห็นการเติบโตที่ต่อเนื่อง กำไรจาก commercial ที่ชัด กระแสเงินสดที่ทน และ valuation ที่คุ้มกว่านี้ก่อน.",
      },
      CPRT: {
        whyNotYet:
          "Copart ยังเป็นธุรกิจคุณภาพที่ควรตาม แต่ Q3 โตไม่แรงพอ และการเปลี่ยน CEO วันที่ 29 มิ.ย. ยังเป็นเรื่อง continuity ที่ต้องดูต่อ ต้องเห็น execution, culture, ลูกค้า และวินัยจัดสรรทุนหลังเปลี่ยนผ่านก่อนให้เงินทุน.",
      },
    },
    quarterlyStatusUpdates: {
      "รีวิวล่าสุด": "รีวิวไตรมาส 2 ปี 2026 เสร็จแล้ว; สแกน intraday ล่าสุด 2026-07-01 09:30 ET",
      "มีการปรับพอร์ตไหม": "ไม่มี Microsoft, Visa, S&P Global, Alphabet และเงินสดยังน้ำหนักเดิม; AutoZone กับ Copart ยังไม่ซื้อ.",
      "คำถามหลัก":
        "S&P Global หลังแยก Mobility จะ settle ได้เรียบร้อยแค่ไหน, Alphabet จะพิสูจน์ผลตอบแทนต่อหุ้นจาก AI ได้หรือไม่ และ Microsoft/Visa จะเปลี่ยนหลักฐานด้าน AI ให้เป็น economics จริงได้เมื่อไร?",
    },
    nextFocus: [
      "ตรวจ post-spin settlement ของ S&P Global, การเทรด MBGL แบบ regular-way, โฟกัสของธุรกิจที่เหลือ, leverage และวินัยจัดสรรทุนหลังกรอบ distribution วันที่ 1 ก.ค.",
      "รอหลักฐานจาก Alphabet เรื่องผลตอบแทนของ AI infrastructure, dilution, เงื่อนไข financing, governance, การรักษา talent และความแข็งแรงของ Search ก่อนเปลี่ยน conviction.",
      "ตาม Microsoft Copilot โดยดู paid attach, renewal quality, reliability, governance, การยอมรับราคา, ความลึกของ workflow และผลตอบแทนต่อหุ้นจาก AI.",
      "ตาม Visa เรื่อง programmable commerce, token และ stablecoin ว่ามี economics จริงผ่าน transaction, issuer/acquirer adoption, settlement economics และ risk controls หรือไม่.",
      "เก็บ AutoZone กับ Copart ไว้ใน watchlist จนกว่าบริษัทใดบริษัทหนึ่งจะชนะเงินสดและหุ้นที่ถืออยู่ได้ชัดเจน.",
      "รักษาวินัย benchmark: intraday scan อัปเดตหลักฐานได้ แต่ Performance Log จะอัปเดตเฉพาะรอบ weekly review.",
    ],
  },
} as const;
