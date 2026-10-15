/**
 * 怨좊옒?? 留덊듃 ?꾨줈紐⑥뀡 ?듯빀 愿由???쒕낫??- 怨듦컻???붿빟 ?곗씠?곗뀑
 * Source: PRD.md (v1.1) 湲곕컲 ?뺣? 吏묎퀎 ?곗씠?? * 二쇱쓽: 媛쒖씤?뺣낫, ?대? ?곸꽭 ?먭?, 誘멸났媛?嫄곕옒 ?먯쿇 ?뺣낫???쇱껜 ?ы븿?섏? ?딆븯?듬땲??
 */
const DASHBOARD_DATA = {
  metadata: {
    title: "怨좊옒?? 留덊듃 ?꾨줈紐⑥뀡 ?듯빀 愿由???쒕낫??,
    version: "v1.1",
    baselinePeriod: "2026.08.01 ~ 2026.09.24 (55?쇨컙)",
    promotionPeriod: "2026.11.02 ~ 2026.11.29 (4二쇨컙)",
    targetStores: ["?쇳듃?댁젏", "?뚰겕??, "由щ쾭??],
    updatedAt: "2026-10-15"
  },

  // 1. ?먰룷蹂?怨쇨굅 ?ㅼ쟻 ?붿빟 (Baseline: 2026.08.01 ~ 09.24)
  storeSummary: {
    all: {
      name: "?꾩껜 ?먰룷",
      totalSales: 524552540,
      dailyAvgSales: 9537319,
      totalVisitors: 36057,
      totalOrders: 16010,
      cvr: 44.40,
      aov: 32764,
      desc: "3媛??먰룷 ?⑹궛 ?ㅼ쟻 湲곗???
    },
    central: {
      name: "?쇳듃?댁젏",
      totalSales: 223843230,
      dailyAvgSales: 4069877,
      totalVisitors: 14691,
      totalOrders: 6823,
      cvr: 46.44,
      aov: 32807,
      desc: "?듭빱 ???留ㅼ옣 (理쒓퀬 留ㅼ텧, 二쇰쭚 ?⑤?由?怨좉컼 吏묒쨷)"
    },
    park: {
      name: "?뚰겕??,
      totalSales: 164589350,
      dailyAvgSales: 2992534,
      totalVisitors: 11434,
      totalOrders: 5024,
      cvr: 43.94,
      aov: 32761,
      desc: "二쇨굅 ?곴텒 留ㅼ옣 (二쇱쨷 媛꾪렪??諛??좎꽑?앺뭹 ?덉젙???섏슂)"
    },
    river: {
      name: "由щ쾭??,
      totalSales: 136119960,
      dailyAvgSales: 2474908,
      totalVisitors: 9932,
      totalOrders: 4163,
      cvr: 41.92,
      aov: 32698,
      desc: "媛쒖꽑 ???留ㅼ옣 (?좊룞?멸뎄 ?鍮?援щℓ?꾪솚???議? ????닿렐湲?吏곸옣???源?"
    }
  },

  // 2. ?붿씪蹂?留ㅼ텧 諛?媛앹닔 ?⑦꽩 (??????
  dayOfWeekSummary: [
    { day: "??, sales: 64407820, orders: 1987, aov: 32415 },
    { day: "??, sales: 61095670, orders: 1882, aov: 32463, isLow: true },
    { day: "??, sales: 66415060, orders: 2018, aov: 32911 },
    { day: "紐?, sales: 71135150, orders: 2155, aov: 33009 },
    { day: "湲?, sales: 78934300, orders: 2407, aov: 32794 },
    { day: "??, sales: 98204210, orders: 2985, aov: 32899, isPeak: true },
    { day: "??, sales: 84360330, orders: 2576, aov: 32749 }
  ],

  // 3. 移댄뀒怨좊━蹂?二쇨컙 ?ш퀬?뚯쟾??諛??먮ℓ??(05_?곹뭹蹂?二쇨컙_?ш퀬?낆텧怨?csv)
  categoryTurnover: [
    { category: "?좎꽑?앺뭹", turnover: 2.56, sellRate: 72.3, grade: "怨좏쉶??, role: "援먯감援щℓ ?좎씤 ?듭빱" },
    { category: "?좎젣??, turnover: 2.15, sellRate: 68.8, grade: "怨좏쉶??, role: "肄ㅻ낫 蹂댁“ ?쇱씤?? },
    { category: "?뚮즺", turnover: 1.45, sellRate: 59.6, grade: "以묓쉶??, role: "留덉쭊???곗닔 肄ㅻ낫 寃고빀" },
    { category: "?됱옣 媛꾪렪??, turnover: 1.32, sellRate: 57.4, grade: "以묓쉶??, role: "?됱씪 ?앹궗 & ?닿렐湲??듭떖" },
    { category: "媛怨듭떇??, turnover: 1.07, sellRate: 51.8, grade: "以묒??뚯쟾", role: "15% ?좎씤 援먯감 ?뚯쭊 ??? },
    { category: "?앺솢?⑺뭹", turnover: 0.79, sellRate: 44.0, grade: "理쒖??뚯쟾", role: "?ш퀬 ?뺤껜 ?댁냼 怨쇱젣" }
  ],

  // 4. 55?쇨컙 ?쇰퀎 ?쒓퀎???곗씠??  dailySales: [{"date":"2026-08-01","day":"토","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-02","day":"일","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-03","day":"월","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-04","day":"화","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-05","day":"수","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-06","day":"목","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-07","day":"금","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-08","day":"토","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-09","day":"일","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-10","day":"월","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-11","day":"화","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-12","day":"수","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-13","day":"목","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-14","day":"금","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-15","day":"토","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-16","day":"일","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-17","day":"월","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-18","day":"화","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-19","day":"수","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-20","day":"목","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-21","day":"금","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-22","day":"토","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-23","day":"일","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-24","day":"월","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-25","day":"화","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-26","day":"수","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-27","day":"목","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-28","day":"금","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-29","day":"토","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-30","day":"일","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-08-31","day":"월","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-01","day":"화","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-02","day":"수","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-03","day":"목","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-04","day":"금","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-05","day":"토","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-06","day":"일","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-07","day":"월","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-08","day":"화","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-09","day":"수","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-10","day":"목","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-11","day":"금","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-12","day":"토","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-13","day":"일","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-14","day":"월","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-15","day":"화","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-16","day":"수","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-17","day":"목","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-18","day":"금","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-19","day":"토","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-20","day":"일","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-21","day":"월","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-22","day":"화","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-23","day":"수","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0},{"date":"2026-09-24","day":"목","totalSales":0,"totalCust":0,"centralSales":0,"centralCust":0,"parkSales":0,"parkCust":0,"riverSales":0,"riverCust":0}],

  // 5. 4? ?꾨줈紐⑥뀡 ?꾨왂 ?곸꽭 紐낆꽭
  promotions: [
    {
      id: "promo1",
      number: "?꾨왂 1",
      title: "?됱씪 ?앹궗 肄ㅻ낫 15% ?좎씤",
      targetPeriod: "留ㅼ＜ ??紐?(珥?16??",
      targetTime: "11:30~13:30 (?곗튂) / 17:30~19:30 (?붾꼫)",
      targetStore: "?쇳듃?댁젏 쨌 ?뚰겕??쨌 由щ쾭??(???먰룷)",
      targetProducts: "?됱옣 媛꾪렪??RM-101~106) 1醫?+ 吏???뚮즺(BV-501~503) ?먮뒗 ?좎젣??DR-301~303) 1醫?,
      discountRule: "?뺤긽 ?먮ℓ媛 ?⑷퀎??15% ?좎씤 (1?곸닔利앸떦 1?명듃 ?쒖젙)",
      intent: "?붿슂?????됱씪 留ㅼ텧 怨듬갚 ?댁냼 諛?吏곸옣??1?멸?援?媛꾪렪???숇컲 寃곗젣 ?좊룄",
      image: "assets/images/promo1-combo.png",
      keyNotes: [
        "媛꾪렪?????좏샇 ?뚮즺 ?숇컲 吏꾩뿴 (?뺤긽媛/?좎씤媛/?덉빟???숈떆 ?쒖떆)",
        "?됱궗 30遺????ш퀬 諛?POS ?쒖꽦 ?뺤씤, ?쇳겕 以?30遺?媛꾧꺽 蹂댁땐",
        "? 荑좏룿 諛?湲곗〈 ?섎웾 ?좎씤怨?以묐났 遺덇?"
      ]
    },
    {
      id: "promo2",
      number: "?꾨왂 2",
      title: "二쇰쭚 35,000???댁긽 利됱떆 2,000???좎씤",
      targetPeriod: "留ㅼ＜ 湲????곸뾽?쒓컙 以?(珥?12??",
      targetTime: "?곸뾽?쒓컙 ?꾩씪",
      targetStore: "?쇳듃?댁젏 쨌 ?뚰겕??쨌 由щ쾭??(???먰룷)",
      targetProducts: "?됱궗 ????곹뭹 ?꾩껜 (??꾩꽭???곹뭹 ???ъ쟾 怨좎? ?쒖쇅???쒖쇅)",
      discountRule: "?곹뭹蹂??됱궗 ?좎씤 ?곸슜 ???λ컮援щ땲 ?⑷퀎媛 35,000???댁긽?????꾩옣 2,000??利됱떆 李④컧",
      intent: "32,700?먯뿉 ?뺤껜???λ컮援щ땲 媛앸떒媛瑜?35,000???댁긽?쇰줈 ?④퀎???곹뼢 寃ъ씤",
      image: "assets/images/promo2-stepup.png",
      keyNotes: [
        "1?곸닔利?1???곸슜, ?곸닔利??⑹궛 諛?遺꾪븷寃곗젣 遺덇?",
        "?ㅺ껐?쒖븸? 33,000?먯씠 ?섎?濡?湲곗?湲덉븸(35,000??怨??ㅼ젣 媛앸떒媛瑜?遺꾨━ 痢≪젙",
        "?쇳듃?댁젏? 李몄튂罹?利앹젙 ?ъ? ?듭뀡 3二쇱감 寃??
      ]
    },
    {
      id: "promo3",
      number: "?꾨왂 3",
      title: "?앹궗 ?곌퀎 援먯감援щℓ (?좎꽑 1留뚯썝+媛怨?15% ?좎씤)",
      targetPeriod: "?됱궗 湲곌컙 留ㅼ씪 (珥?28??",
      targetTime: "?곸뾽?쒓컙 ?꾩씪",
      targetStore: "?쇳듃?댁젏 쨌 ?뚰겕??쨌 由щ쾭??(???먰룷)",
      targetProducts: "?좎꽑?앺뭹(FR-201~203) 10,000???댁긽 + 吏??媛怨듭떇??PR-401~403 利됱꽍諛? 李몄튂罹? 硫몄튂 ?? 理쒕? 2媛?,
      discountRule: "吏??媛怨듭떇??理쒕? 2媛쒖뿉 ???媛?15% ?좎씤 ?곸슜",
      intent: "怨좏쉶???좎꽑?앺뭹(?뚯쟾??2.56)???좎씤梨??쇱븘 ??뚯쟾 媛怨??앸즺???뚯쭊 珥됱쭊",
      image: "assets/images/promo3-cross.png",
      keyNotes: [
        "?ㅻЦ 寃곌낵(10% ?좎씤 ?좎씤 遺議? 47.4%媛 15~20% ?붽뎄)瑜?諛섏쁺?섏뿬 15% ?좎씤?쇰줈 ?곹뼢",
        "?앺솢?⑺뭹 ????앹궗 ?곌퀎?깆씠 ?믪? 媛怨듭떇??利됱꽍諛? 李몄튂 ?? ?곗꽑 ?곌퀎",
        "?꾨낫 ?곹뭹??3媛??댁긽??寃쎌슦 ?좎씤湲덉븸?????곸쐞 2媛??먮룞 ?곸슜"
      ]
    },
    {
      id: "promo4",
      number: "?꾨왂 4",
      title: "由щ쾭???⑤룆 ?닿렐湲?諛붾줈 癒밸뒗 ?λ낫湲?(20% ??꾩꽭??",
      targetPeriod: "?됱궗 湲곌컙 留ㅼ씪 (珥?28??",
      targetTime: "留ㅼ씪 17:00 ~ 20:00 (以鍮?16:30 媛쒖떆)",
      targetStore: "由щ쾭???⑤룆",
      targetProducts: "?뱀씪 ?됱궗 ?좎꽑?앺뭹 諛????됱옣 媛꾪렪???뱀씤 留덇컧 SKU",
      discountRule: "?먮ℓ 媛???곹깭 ?뱀씪 留덇컧 愿由?????뱀씤 SKU 20% 留덇컧?좎씤 (?섎웾 ?뚯쭊 ??議곌린 醫낅즺)",
      intent: "由щ쾭???議고븳 援щℓ??41.92%) 洹밸났 諛?吏곸옣???닿렐 ?숈꽑 ?λ낫湲??꾪솚 洹밸???,
      image: "assets/images/promo4-river.png",
      keyNotes: [
        "?댄깉 ?먯씤 1?꾩씤 寃고뭹 諛⑹?瑜??꾪빐 16:30 2李?蹂댁땐 吏꾩뿴 ?꾩닔 ?쒗뻾",
        "媛꾪렪????踰좎씠而ㅻ━/?붿??????좎꽑?앺뭹 ???꾨㈃ 吏꾩뿴",
        "??꾩꽭???덈ぉ? 肄ㅻ낫쨌?ㅽ뀦?끒룰탳李④뎄留ㅼ? 以묐났 ?좎씤 遺덇?"
      ]
    }
  ],

  // 6. 怨좉컼 ?ъ쟾 ?ㅻЦ議곗궗 寃곌낵 諛?媛??寃利?(N=19)
  survey: {
    sampleSize: 19,
    warning: "蹂??ㅻЦ議곗궗???묐떟??珥?19紐?20? 78.9%)???뚰몴蹂??뺤꽦 議곗궗濡? 紐⑥쭛???꾩껜瑜???쒗븯湲곗뿉 ?듦퀎???쒓퀎媛 議댁옱?⑸땲?? 紐⑤뱺 寃곌낵???먯씤 ?뺤젙???꾨땶 '?먯깋??媛??諛?異붽? 寃利??좏샇'濡??쒖슜?⑸땲??",
    demographics: {
      gender: [
        { label: "?⑥꽦", count: 10, pct: 52.6 },
        { label: "?ъ꽦", count: 9, pct: 47.4 }
      ],
      age: [
        { label: "20?", count: 15, pct: 78.9 },
        { label: "30?", count: 3, pct: 15.8 },
        { label: "湲고?", count: 1, pct: 5.3 }
      ],
      store: [
        { label: "由щ쾭??, count: 7, pct: 36.8 },
        { label: "?쇳듃?댁젏", count: 6, pct: 31.6 },
        { label: "?뚰겕??, count: 6, pct: 31.6 }
      ]
    },
    // 臾명빆 1: 誘멸뎄留?鍮덉넀 ?댁옣 ?붿씤 (?꾩껜 諛??먰룷蹂?
    exitReasons: {
      overall: [
        { reason: "?곹뭹 媛寃?遺??/ ?좎씤 ?쒗깮 遺議?, count: 7, pct: 36.8 },
        { reason: "?먰븯???곹뭹 ?덉젅 / ?섎웾 遺議?, count: 4, pct: 21.1 },
        { reason: "李얜뒗 ?곹뭹 移댄뀒怨좊━ / 援ъ깋 遺議?, count: 4, pct: 21.1 },
        { reason: "?⑥닚 援ш꼍 諛??숉뻾 紐⑹쟻", count: 3, pct: 15.8 },
        { reason: "?④퍡 ???곌? ?곹뭹 遺議?, count: 1, pct: 5.3 }
      ],
      byStore: [
        { store: "由щ쾭??(N=7)", top1: "?덉젅/?ш퀬 遺議?(28.6%, 2紐?", top2: "?⑥닚 援ш꼍 (28.6%, 2紐?", note: "媛寃⑸낫??寃고뭹???댄깉??二쇱슂 ?붿씤??媛?μ꽦 ?쒖궗 (媛??" },
        { store: "?쇳듃?댁젏 (N=6)", top1: "媛寃?遺??/ ?좎씤 遺議?(50.0%, 3紐?", top2: "?곹뭹 援ъ깋 遺議?(33.3%, 2紐?", note: "?좊룞?멸뎄 ?鍮?媛寃?泥닿컧??誘쇨컧" },
        { store: "?뚰겕??(N=6)", top1: "媛寃?遺??/ ?좎씤 遺議?(50.0%, 3紐?", top2: "?덉젅/援ъ깋/援ш꼍 (媛?16.7%, 1紐?", note: "二쇨굅 ?곴텒 二쇰?痢듭쓽 ?ㅼ냽 吏?? }
      ]
    },
    // ?꾨왂蹂?媛??寃利?寃곌낵
    strategyFeedback: {
      combo: {
        score: "3.89 / 5.0",
        positivePct: 78.9,
        drinks: [
          { name: "?꾩궛?뚮즺 / 怨쇱씪二쇱뒪", count: 8, pct: 42.1 },
          { name: "RTD 而ㅽ뵾 / ?됱감", count: 5, pct: 26.3 },
          { name: "?⑤갚吏?/ 湲곕뒫???뚮즺", count: 3, pct: 15.8 },
          { name: "留덉떆???붽굅??/ ?곗쑀", count: 2, pct: 10.5 },
          { name: "?뚮즺 援щℓ ????, count: 1, pct: 5.3 }
        ]
      },
      stepUp: [
        { type: "?꾩옣 利됱떆 2,000???좎씤", pct: 57.9, count: 11 },
        { type: "?멸린 ?앸즺???ㅻЪ ?ъ???李몄튂罹?", pct: 21.1, count: 4 },
        { type: "?щ갑臾?3,000???좎씤荑좏룿", pct: 10.5, count: 2 },
        { type: "援щℓ ?섑뼢 ?놁쓬", pct: 10.5, count: 2 }
      ],
      crossBundle: [
        { feedback: "?좎씤??15~20% ?댁긽?댁뼱??援щℓ", pct: 47.4, count: 9 },
        { feedback: "??뺣쭏???⑤씪??援щℓ 愿?깆쑝濡?臾닿???, pct: 21.1, count: 4 },
        { feedback: "?⑥씪 ?덈ぉ留?鍮좊Ⅴ寃?援щℓ (?λ컮援щ땲 ???", pct: 15.8, count: 3 },
        { feedback: "?꾩슂 ???곴레 ?④퍡 援щℓ (利됱떆 ?섏슜)", pct: 15.8, count: 3 }
      ],
      riverEvening: [
        { item: "?뱀씪 利됱꽍議곕━ / 媛꾪렪??(?꾩떆?승룹깘?щ뱶)", pct: 57.1, count: 4 },
        { item: "?닿렐 ???붿???/ 媛꾩떇 / ?뚮즺", pct: 28.6, count: 2 },
        { item: "???議곕━???좎꽑?앺뭹 (?뺤쑁쨌梨꾩냼)", pct: 28.6, count: 2 },
        { item: "媛怨듭떇??(?쇰㈃쨌?듭“由?", pct: 14.3, count: 1 }
      ]
    }
  },

  // 7. ?꾨줈紐⑥뀡 ?댁쁺 ?쇱젙 諛?16? ?ㅽ뻾 泥댄겕由ъ뒪??  timeline: [
    { period: "10/15 ~ 11/01", phase: "?ъ쟾 以鍮??④퀎", focus: "媛???⑹쓽, SKU ?뺤젙, POS ?ㅼ젙 諛??뚯뒪?? 由ы뿀??10/30), 理쒖쥌 ?먭?(11/01)" },
    { period: "11/02 ~ 11/08 (1二쇱감)", phase: "?덉젙 媛??, focus: "泥?3??媛寃??ㅻ쪟쨌寃고뭹 ?곗꽑 ?섏젙, 怨좉컼 臾몄쓽 ?섏쭛" },
    { period: "11/09 ~ 11/15 (2二쇱감)", phase: "?섏슂쨌?댁씡 寃利?, focus: "?덈ぉ蹂??숇컲援щℓ쨌?좎씤鍮꽷룸?湲걔룻룓湲??뺤씤" },
    { period: "11/16 (D+15)", phase: "以묎컙 ?섏궗寃곗젙", focus: "以묒븰 4???먯옣 3???뚯쓽: ?좎?/?덈ぉ 援먯껜/諛쒖＜ 異뺤냼/?됱궗 以묐떒 ?먮떒" },
    { period: "11/16 ~ 11/22 (3二쇱감)", phase: "寃利??덈ぉ 吏묒쨷", focus: "寃利앸맂 ?덈ぉ 吏묒쨷 諛?POP/POS ?숈떆 ?섏젙 ?곸슜" },
    { period: "11/23 ~ 11/29 (4二쇱감)", phase: "?ш퀬쨌鍮꾩슜 ?듭젣", focus: "怨쇰떎 諛쒖＜ 諛⑹?, 醫낅즺 ?덈궡, 11/29 ?먯젏 ??議곌굔 ?먮룞 ?댁젣" },
    { period: "11/30 ~ 12/04", phase: "?뺤궛 諛?理쒖쥌 ?됯?", focus: "?좎씤鍮꽷룻룓湲??議? ?곸떆 ?댁쁺 ?꾪솚/醫낅즺 ?щ? 理쒖쥌 寃곗젙" }
  ],

  checklist: [
    { id: 1, timing: "10/20", task: "SKU ?덈챸쨌?먭?쨌蹂닿?議곌굔쨌怨듦툒 寃利?, owner: "?ㅼ듅?댟룹뾼?곗꽍", time: "60遺?, proof: "?뺤젙 ?곹뭹?? },
    { id: 2, timing: "10/22", task: "?좎씤 議곌굔쨌?쒖쇅쨌諛섑뭹쨌珥앹삁???뱀씤", owner: "?꾩슦?씲룰껐?ш텒??, time: "30遺?, proof: "?뱀씤蹂? },
    { id: 3, timing: "10/26", task: "?뺤긽媛쨌?됱궗媛쨌POP 臾멸뎄 ?쇱튂 寃??, owner: "?ㅼ콈誘셋룸갚以??, time: "30遺?, proof: "媛寃⑺몴쨌POP ?뚯씪" },
    { id: 4, timing: "10/28", task: "?먰룷蹂?洹쇰Т쨌?닿쾶쨌吏?먃룸?泥댁옄 ?뺤젙", owner: "?먯옣", time: "?먰룷??30遺?, proof: "洹쇰Т?? },
    { id: 5, timing: "10/28", task: "諛쒖＜?됀룸궔湲걔룻뭹???泥댄뭹 ?뺤씤", owner: "?ㅼ듅?댟룹젏??, time: "?먰룷??20遺?, proof: "諛쒖＜쨌?⑷린 ?뺤씤" },
    { id: 6, timing: "10/29", task: "援먯쑁 李몄꽍 諛?寃곗젣 ?덉떆 ?ㅻ챸 媛???뺤씤", owner: "?꾩슦?씲룹젏??, time: "60遺?, proof: "李몄꽍쨌?댁쫰 湲곕줉" },
    { id: 7, timing: "10/30", task: "8媛?POS ?뚯뒪??諛??ㅻ쪟 ?섏젙", owner: "?먯옣쨌POS ?대떦", time: "?먰룷??40遺?, proof: "?뚯뒪???곸닔利? },
    { id: 8, timing: "10/30", task: "怨좉컼 ?숈꽑쨌?됱옣蹂닿?쨌?쇱옟 由ы뿀??, owner: "?먯옣", time: "?먰룷??20遺?, proof: "諛곗튂 ?ъ쭊" },
    { id: 9, timing: "10/31", task: "?낃퀬 ?섎웾쨌湲고븳쨌?쇰꺼쨌吏묎린 ?먭?", owner: "吏꾩뿴 ?대떦", time: "?먰룷??60遺?, proof: "寃?섑몴" },
    { id: 10, timing: "11/01", task: "以묐? 誘명빐寃???ぉ 0嫄??뺤씤 諛?媛쒖떆 ?쒕챸", owner: "?먯옣", time: "?먰룷??30遺?, proof: "媛쒖떆 ?쒕챸" },
    { id: 11, timing: "留ㅼ씪 媛쒖젏 ??, task: "?ш퀬쨌媛寃㈑텾OS쨌蹂닿??곹깭 ?뺤씤", owner: "?먯옣쨌吏꾩뿴 2紐?, time: "媛?15遺?, proof: "?쇱씪 ?먭??? },
    { id: 12, timing: "?쇳겕 30遺꾨쭏??, task: "寃고뭹쨌?湲걔룹텛媛 蹂댁땐 ?먭?", owner: "吏??吏꾩뿴", time: "?뚮떦 3遺?, proof: "?쒓컙? 湲곕줉" },
    { id: 13, timing: "由щ쾭 16:30", task: "留덇컧 ??겶룹닔?됀룹뒪?곗빱쨌?좎씤 ?뺤씤", owner: "2紐?, time: "媛?30遺?, proof: "?뱀씤 ?섎웾?? },
    { id: 14, timing: "?됱궗 醫낅즺 ??, task: "?좎씤 醫낅즺쨌?쇰꺼 ?쒓굅쨌?붾웾 泥섎━", owner: "吏꾩뿴 ?대떦", time: "30遺?, proof: "留덇컧 ?ъ쭊쨌?붾웾" },
    { id: 15, timing: "留ㅼ씪 留덇컧 ??, task: "?좎씤?≤룹삤瑜샕룸컲?댟룻룓湲??議?, owner: "?먯옣", time: "15遺?, proof: "?쇰쭏媛?蹂닿퀬" },
    { id: 16, timing: "11/16", task: "?좎?쨌蹂寃승룹쨷?④낵 梨낆엫??寃곗젙", owner: "以묒븰 4???먯옣", time: "45遺?, proof: "以묎컙 寃곗젙?? }
  ],

  // 8. KPI 紐⑤땲?곕쭅 泥닿퀎 (怨쇨굅 ?ㅼ쟻 Baseline vs 11???꾨줈紐⑥뀡 Target)
  kpis: [
    {
      id: "aov",
      name: "?꾩궗 ?됯퇏 媛앸떒媛",
      baselineVal: "32,764??,
      baselineNum: 32764,
      targetVal: "35,200??,
      targetNum: 35200,
      gap: "+2,436??(+7.4%)",
      currentStatus: "誘몄륫??(?댁쁺 ??吏묎퀎 ?덉젙)",
      unit: "??,
      calcRule: "?됱궗 湲곌컙 ?쒕ℓ異쒖븸 / 珥?援щℓ嫄댁닔"
    },
    {
      id: "river_cvr",
      name: "由щ쾭??援щℓ?꾪솚??,
      baselineVal: "41.92%",
      baselineNum: 41.92,
      targetVal: "45.00%",
      targetNum: 45.00,
      gap: "+3.08%p 媛쒖꽑",
      currentStatus: "誘몄륫??(?댁쁺 ??吏묎퀎 ?덉젙)",
      unit: "%",
      calcRule: "由щ쾭??援щℓ嫄댁닔 / 諛⑸Ц?먯닔 횞 100"
    },
    {
      id: "weekday_orders",
      name: "?됱씪 寃곗젣嫄댁닔",
      baselineVal: "?쇳룊洹???285嫄?,
      baselineNum: 285,
      targetVal: "?쇳룊洹?328嫄??댁긽",
      targetNum: 328,
      gap: "+15% 利앸?",
      currentStatus: "誘몄륫??(?댁쁺 ??吏묎퀎 ?덉젙)",
      unit: "嫄?,
      calcRule: "??紐?援щℓ嫄댁닔 / ?대떦 ?곸뾽?쇱닔"
    },
    {
      id: "inventory_turnover",
      name: "??뚯쟾 ?ш퀬?뚯쟾??,
      baselineVal: "?앺솢 0.79??/ 媛怨?1.07??,
      baselineNum: 0.79,
      targetVal: "1.30???댁긽",
      targetNum: 1.30,
      gap: "+0.51???댁긽 ?뚯쟾 媛??,
      currentStatus: "誘몄륫??(?댁쁺 ??吏묎퀎 ?덉젙)",
      unit: "??,
      calcRule: "二쇨컙 ?먮ℓ?먭? / ?됯퇏 ?ш퀬?먭?"
    },
    {
      id: "stockout_rate",
      name: "寃고뭹 ?먭?瑜?,
      baselineVal: "由щ쾭??誘멸뎄留??붿씤??28.6%",
      baselineNum: 0,
      targetVal: "5.0% ?댄븯 ?듭젣",
      targetNum: 5.0,
      gap: "?쇳겕 ?쒓컙 ?덉젅 理쒖냼??,
      currentStatus: "誘몄륫??(?댁쁺 ??吏묎퀎 ?덉젙)",
      unit: "%",
      calcRule: "?덉젅 SKU ?먭? 嫄?/ ?먮ℓ ?덉젙 SKU ?먭? 嫄?
    }
  ]
};

// ?꾩뿭 媛앹껜濡??대낫?닿린 (?뺤쟻 ???명솚)
if (typeof window !== "undefined") {
  window.DASHBOARD_DATA = DASHBOARD_DATA;
}