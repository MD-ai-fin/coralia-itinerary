const ITINERARY = {
  meta: {
    title: { en: "Panda Adventure", zh: "熊猫川渝行" },
    iconShortName: { en: "Panda Tour", zh: "熊猫川渝行" },
    description: {
      en: "A 10-day custom panda-themed trip through Sichuan and Chongqing",
      zh: "10 天 9 晚川渝熊猫主题定制旅行行程",
    },
    subtitle: {
      en: "10 Days · 9 Nights · Custom Trip",
      zh: "10 天 9 晚 · 定制行程",
    },
    greeting: {
      en: "Welcome! Your trip starts here.",
      zh: "欢迎开启一段难忘的旅程！",
    },
    greetingLead: { en: "Welcome!", zh: "欢迎" },
    greetingRest: { en: "Your trip starts here.", zh: "开启一段难忘的旅程！" },
    traveler: {
      en: "Two travelers · Easy on spice · Relaxed pace · Oct 15–30",
      zh: "两个人的难忘旅程 · 清淡少辣 · 轻松慢行 · 10 月 15–30 日",
    },
    exchangeRate: "1 CNY = 0.1477 USD",
    siteUrl: "https://md-ai-fin.github.io/coralia-itinerary/",
    build: "2026-07-31l",
    budget: {
      total: { cny: 7951, usd: 1174.36 },
      cap: { cny: 9820, usd: 1449.41 },
      remaining: { cny: 1869, usd: 275.05 },
    },
  },

  /** Replace formspreeFormId after creating a form at https://formspree.io */
  contact: {
    formspreeFormId: "mdaqydwv",
  },

  overseasAccess: {
    title: {
      en: "Using U.S. Apps in China (No VPN)",
      zh: "在中国使用境外应用（无需 VPN）",
    },
    desc: {
      en: "Mainland China blocks many U.S. apps on local Wi‑Fi and SIM cards. Before you leave, choose one option below—both are legal:",
      zh: "中国内地网络无法直接访问多数境外应用。出发前请选择以下任一合法方式：",
    },
    options: [
      {
        en: "Enable international roaming with your U.S. carrier—your phone will route Google, Instagram, Gmail, and similar apps through your home network",
        zh: "开通美国运营商国际漫游，落地后通过母网使用 Google、Instagram、Gmail 等",
      },
      {
        en: "Buy an international travel eSIM (e.g. Holafly, Airalo)—keeps a separate data line for global apps without unauthorized VPNs",
        zh: "购买国际旅行 eSIM（如 Holafly、Airalo 等），独立数据线路合法访问境外平台，勿使用翻墙 VPN",
      },
    ],
  },

  apps: [
    {
      id: "wechat",
      name: { en: "WeChat", zh: "微信 WeChat" },
      tag: { en: "Pay & translate", zh: "支付 + 翻译" },
      desc: {
        en: "Link a Visa or Mastercard for WeChat Pay. Photo and voice translation help with menus and street signs.",
        zh: "绑定 Visa/Mastercard 用于微信支付；拍照与语音翻译可读懂菜单和路牌。",
      },
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e4/4f/16/e44f16cb-0a64-464e-13f2-05091f930c79/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/512x512bb.jpg",
      links: {
        ios: "https://apps.apple.com/app/wechat/id414478124",
        android: "https://play.google.com/store/apps/details?id=com.tencent.mm",
      },
    },
    {
      id: "alipay",
      name: { en: "Alipay", zh: "支付宝 Alipay" },
      tag: { en: "Main payment app", zh: "主力支付" },
      desc: {
        en: "Foreign cards are straightforward to link. Buy e-tickets for Sanxingdui, Jiuzhaigou, and Wulong via TourPass.",
        zh: "外卡绑定简便；可通过 TourPass 购买三星堆、九寨沟、武隆等电子门票。",
      },
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/36/f1/85/36f185b3-29e5-37a1-9c1d-07ea18a67949/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
      links: {
        ios: "https://apps.apple.com/app/alipay/id333206289",
        android: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone",
      },
    },
    {
      id: "didi",
      name: { en: "DiDi China", zh: "滴滴出行 DiDi" },
      tag: { en: "Ride-hailing backup", zh: "备用打车" },
      desc: {
        en: "English-language ride-hailing for mainland China. Good backup when Amap's taxi booking is slow.",
        zh: "中国内地英文叫车应用；高德叫车不便时可作备用。",
      },
      icon: "images/didi.png",
      links: {
        ios: "https://apps.apple.com/cn/app/id554499054",
        android: "https://play.google.com/store/apps/details?id=com.sdu.didi.psnger",
      },
    },
    {
      id: "amap",
      name: { en: "Amap Global", zh: "高德地图 Amap Global" },
      tag: { en: "Best for navigation", zh: "首选导航" },
      desc: {
        en: "Full English maps and turn-by-turn voice guidance. Download offline maps before Jiuzhaigou. Sign up with a U.S. phone number.",
        zh: "完整英文地图与语音导航；前往九寨沟前建议下载离线地图；可用美国手机号注册。",
      },
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6f/a8/17/6fa81731-26bd-3e94-9e6e-d3b466426c3a/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      links: {
        ios: "https://apps.apple.com/us/app/amap-global/id461703208",
        android: "https://play.google.com/store/apps/details?id=com.autonavi.minimap",
      },
    },
    {
      id: "applemaps",
      name: { en: "Apple Maps", zh: "Apple 地图" },
      tag: { en: "iPhone backup", zh: "自带备用" },
      desc: {
        en: "Built into iPhone and powered by Amap data—useful when you already know the route.",
        zh: "iPhone 自带，底层高德数据；熟悉路线时可作备用。",
      },
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/05/f8/6705f876-0db2-711d-0d42-524ef6432165/maps-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      links: {
        ios: "https://apps.apple.com/app/apple-maps/id915056765",
        android: null,
      },
    },
    {
      id: "translate",
      name: { en: "Baidu Translate", zh: "百度翻译" },
      tag: { en: "Camera translate", zh: "拍照翻译" },
      desc: {
        en: "Works on China's network—no VPN needed. Point your camera at a menu or museum label for instant translation.",
        zh: "国内网络可用，无需 VPN；对准菜单或展品说明即可拍照翻译。",
      },
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2d/f8/0c/2df80ca3-1677-0811-86f6-e08c9c2155d1/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg",
      links: {
        ios: "https://apps.apple.com/cn/app/id605670941",
        android: "https://fanyi.baidu.com/appdownload/download.html",
        androidLabel: { en: "Official Download", zh: "官网下载" },
      },
    },
  ],

  hotels: [
    {
      id: "panda-sleepy",
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Panda Sleepy Hotel", zh: "熊猫很困酒店" },
      location: { en: "Chunxi Road Taikoo Li", zh: "春熙路太古里店" },
      stars: 4,
      nights: 3,
      pricePerNight: { cny: 300, usd: 44.31 },
      total: { cny: 900, usd: 132.93 },
      perks: {
        en: "Panda-themed rooms · 24-hour laundry and gym · Free luggage storage · Breakfast not included (¥38/person/day)",
        zh: "熊猫主题客房 · 24 小时洗衣与健身房 · 免费行李寄存 · 不含早餐（38 元/人/天）",
      },
      image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
      website: "https://www.booking.com/hotel/cn/cheng-du-xiong-mao-hen-kun-jiu-dian.html",
    },
    {
      id: "xingyu",
      city: { en: "Jiuzhaigou", zh: "九寨沟" },
      name: { en: "Xingyu International Hotel", zh: "星宇国际大酒店" },
      location: { en: "Near the park gate · Government-rated 4-star (international guests welcome)", zh: "挂牌 4 星涉外酒店" },
      stars: 4,
      nights: 2,
      pricePerNight: { cny: 329, usd: 48.59 },
      total: { cny: 658, usd: 97.19 },
      perks: {
        en: "Mountain-view king room · Breakfast for two · Complimentary Tibetan costume photos · Oxygen available · Free shuttle to the park gate",
        zh: "山景大床 · 含双人早餐 · 免费藏服拍照 · 全屋供氧 · 免费景区接驳",
      },
      image: "https://ak-d.tripcdn.com/images/1mc1012000seytq7cA1F4_R_960_660_R5_D.jpg",
      website: "https://www.trip.com/hotels/jiuzhaigou-hotel-detail-436645/sanroyal-international-hotel/?locale=en-US&curr=USD",
    },
    {
      id: "kaiyuan",
      city: { en: "Chongqing", zh: "重庆" },
      name: { en: "Maison Lee Kaiyuan Mingting Hotel", zh: "开元名庭酒店（解放碑）" },
      location: { en: "1 Minzu Road, Jiefangbei · 3-minute walk to Hongyadong", zh: "渝中区民族路1号 · 解放碑核心 · 步行3分钟至洪崖洞" },
      stars: 4,
      nights: 5,
      pricePerNight: { cny: 388, usd: 57.31 },
      total: { cny: 1940, usd: 286.54 },
      perks: {
        en: "Breakfast for two daily · Tang-dynasty (618–907 CE) inspired décor · Xiaoshizi Metro within 100 m · Laundry and fitness center",
        zh: "每日双人早餐 · 唐风国潮设计（唐代 618–907 年）· 小什字地铁口 · 自助洗衣与健身房",
      },
      image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
      website: "https://www.trip.com/hotels/chongqing-hotel-detail-132460794/chongqing-jiefangbei-maison-new-century-hotel/?locale=en-US&curr=USD",
    },
  ],

  destinationPrimer: {
    disclaimer: {
      en: "Scale notes for U.S. readers—these are rough comparisons, not exact matches. In China, a province is similar to a U.S. state; Chengdu is a city; Chongqing is a province-level municipality (a major city plus surrounding counties—not one city in the American sense). Population figures are approximate.",
      zh: "人口与类比均为约数，便于建立尺度感。中国：省≈美国州；成都为地级市；重庆为直辖市（省级，含城区与郊县）。并非学术精确对比。",
    },
    places: [
      {
        id: "sichuan",
        name: { en: "Sichuan Province", zh: "四川省" },
        stats: {
          en: "Province · ~83 million people · 3,000+ years of recorded history",
          zh: "省级 · 约 8300 万人口 · 有文字记载的历史 3000 年以上",
        },
        geoNote: {
          en: "Administrative level: province (similar to a U.S. state). The population figure covers the entire province—not a single city.",
          zh: "行政级别：省（类似美国的一个州）。下述人口为全省，不是单一城市。",
        },
        usScale: {
          en: "About 2.5 times the population of Texas",
          zh: "省对州：人口约为德州的 2.5 倍",
        },
        analogy: {
          en: "A regional identity as distinct as Texas or Louisiana—its food, dialect, and pace of life are recognized nationwide.",
          zh: "在中国，巴蜀认同之强，类似美国人对德州或路易斯安那的区域印象——饮食、方言、生活节奏都极具辨识度。",
        },
        status: {
          en: "Southwest China's most populous province, long known as the Land of Abundance (天府之国). A cultural and economic heartland of the upper Yangtze.",
          zh: "中国西南人口第一大省，素有「天府之国」之称，是长江上游的文化与经济重镇。",
        },
        honors: [
          {
            en: "5 UNESCO World Heritage sites—among the most of any Chinese province (tied with Fujian, Henan, and Yunnan; Beijing has more as a municipality)",
            zh: "5 处联合国教科文组织世界遗产 — 全国省份中最多之一（与福建、河南、云南并列；北京市作为直辖市更多）",
          },
          {
            segments: [
              {
                t: {
                  en: "Including Jiuzhaigou, Huanglong, Mount Emei–Leshan Giant Buddha, Qingcheng–Dujiangyan, and the Sichuan Giant Panda Sanctuaries—this trip includes ",
                  zh: "含九寨沟、黄龙、峨眉山—乐山大佛、青城山—都江堰、大熊猫栖息地；本行程含 ",
                },
              },
              { t: { en: "Jiuzhaigou", zh: "九寨沟" }, day: 5, actIndex: 0 },
            ],
          },
          {
            en: "Land of Abundance (天府之国)—a title used for more than 2,000 years",
            zh: "「天府之国」— 沿用两千余年的美誉",
          },
          {
            en: "Birthplace of Sichuan cuisine—one of China's four great regional cuisines",
            zh: "川菜发源地 — 中国四大菜系之一",
          },
          {
            en: "Heartland of the giant panda—home to the world's largest panda habitat network",
            zh: "大熊猫故乡 — 全球最大熊猫栖息地网络",
          },
        ],
        history: {
          en: "Ancient Ba and Shu kingdoms (c. 11th century–316 BCE); the Three Kingdoms state of Shu Han (221–263 CE); a major WWII rear base (1937–1945). The Dujiangyan irrigation system, built in 256 BCE, still waters the Chengdu Plain.",
          zh: "古巴蜀王国（约公元前 11 世纪–前 316 年）、三国蜀汉（221–263 年）、抗战大后方（1937–1945 年）；公元前 256 年建成的都江堰至今仍在灌溉成都平原。",
        },
        inventions: [
          {
            en: "Jiaozi (交子)—often cited as the world's first paper money, issued by Chengdu merchants in the Northern Song dynasty (960–1127 CE)",
            zh: "交子 — 常被视作世界最早纸币，北宋（960–1127 年）由成都商人发行",
          },
          {
            en: "Dujiangyan—an ancient irrigation system still operating after more than 2,200 years",
            zh: "都江堰 — 古代水利杰作，2200 余年来持续运转",
          },
          {
            en: "Sichuan cuisine—birthplace of mapo tofu, kung pao chicken, and hot-pot traditions that spread nationwide",
            zh: "川菜 — 麻婆豆腐、宫保鸡丁、火锅等饮食传统的发源与传播中心",
          },
          {
            en: "Shu brocade (蜀锦)—prized silk weaving traded along the Silk Road since the Han dynasty (206 BCE–220 CE)",
            zh: "蜀锦 — 自汉代（公元前 206 年–公元 220 年）丝路贸易以来闻名的丝织工艺",
          },
          {
            en: "Shu embroidery (蜀绣)—one of China's four great embroidery traditions, centered in the Chengdu Plain",
            zh: "蜀绣 — 中国四大名绣之一，成都平原为核心的刺绣传统",
          },
          {
            en: "Zigong well salt (自贡井盐)—more than 2,000 years of brine-well drilling; early pioneers of deep-well salt mining and natural-gas use",
            zh: "自贡井盐 — 2000 余年井盐开采史，深井采盐与早期天然气利用的重要发源地",
          },
        ],
        trip: {
          segments: [
            { t: { en: "This trip: ", zh: "本行程：" } },
            { t: { en: "Chengdu base", zh: "成都大本营" }, day: 1 },
            { t: { en: " (Days 1–3, 6), ", zh: "（第 1–3、6 天），" } },
            { t: { en: "Jiuzhaigou", zh: "九寨沟" }, day: 5, actIndex: 0 },
            { t: { en: " (Days 4–5), ", zh: "（第 4–5 天），" } },
            { t: { en: "Sichuan Museum", zh: "四川博物院" }, day: 7, actIndex: 1 },
            { t: { en: " en route to Chongqing (Day 7).", zh: "，赴渝（第 7 天）。" } },
          ],
        },
      },
      {
        id: "chengdu",
        name: { en: "Chengdu City", zh: "成都市" },
        stats: {
          en: "City · ~21 million (greater metro area) · 2,300+ years at the same city site",
          zh: "地级市 · 约 2100 万（都市圈）· 同一城址 2300 余年未迁",
        },
        geoNote: {
          en: "Administrative level: prefecture-level city. The ~21 million figure is the greater Chengdu metro area—a city region, not a U.S. state.",
          zh: "行政级别：地级市。约 2100 万指成都都市圈，是美国意义上的「城市区域」，不是全州人口。",
        },
        usScale: {
          en: "Metro area roughly the size of New York City plus Philadelphia combined (two U.S. cities—not a state)",
          zh: "都市区规模 ≈ 纽约都会区 + 费城都会区（两座城市对比，非州级）",
        },
        analogy: {
          en: "A lifestyle capital of western China—less corporate rush, more food, tea houses, and pandas. Think Portland or Austin: quality of life over speed.",
          zh: "中国西部的「生活型都会」——少些商务节奏，多些美食、茶馆与熊猫；类似波特兰或奥斯汀那种「会生活」气质。",
        },
        status: {
          en: "Southwest China's hub for tech, trade, and leisure—one of the most visited inland cities in China. Nicknamed the City of Hibiscus (蓉城).",
          zh: "西南科技、商贸与休闲中心，中国最受欢迎的内陆城市之一，别称「蓉城」。",
        },
        honors: [
          {
            en: "Asia's first UNESCO City of Gastronomy (2010)—part of UNESCO's Creative Cities Network",
            zh: "亚洲首个联合国教科文组织「美食之都」（2010）—「创意城市网络」成员（美食之都类别）",
          },
          {
            en: "Cradle of Sichuan cuisine—recognized by UNESCO for its living food culture",
            zh: "川菜摇篮 — 联合国教科文组织认可的美食文化活态传承",
          },
          {
            en: "A leading city in western China (西部地区重要的中心城市)—a major hub for China's west",
            zh: "西部地区重要的中心城市 — 中国西部核心枢纽",
          },
          {
            en: "Named a Best Tourist City in China by the UN World Tourism Organization and the former China National Tourism Administration",
            zh: "联合国世界旅游组织与中国国家旅游局授予「中国最佳旅游城市」",
          },
          {
            en: "Certified by the World Centers of Excellence for Destinations (CED, 2010)—an international destination quality program",
            zh: "旅游目的地质量认证成员（CED，2010）— 国际旅游目的地的第三方质量测评体系",
          },
        ],
        history: {
          en: "From the Jinsha (c. 1200–650 BCE) and Sanxingdui (c. 1200–1000 BCE) cultures to the Tang–Song \"Brocade City\" (Tang 618–907 CE; Song 960–1279 CE). In the Tang dynasty (618–907 CE), the saying \"Yangzhou first, Yi second\" (扬一益二) ranked Yi (益州—ancient Chengdu) as the empire's second-richest city after Yangzhou. One of the few major cities in the world that has never moved its urban core.",
          zh: "从金沙（约公元前 1200–650 年）、三星堆（约公元前 1200–1000 年）到唐宋「锦官城」（唐 618–907 年；宋 960–1279 年）；唐代（618–907 年）有「扬一益二」之说，益州（成都）为全国第二繁华都会，仅次于扬州；是世界上少数数千年未迁城址的大都会之一。",
        },
        inventions: [
          {
            en: "Birthplace of jiaozi paper money and a Song-dynasty (960–1279 CE) center of printing and commerce",
            zh: "交子纸币诞生地，宋代（960–1279 年）商贸与印刷重镇",
          },
          {
            segments: [
              { t: { en: "Sichuan opera ", zh: "川剧" } },
              { t: { en: "face-changing (变脸)", zh: "变脸" }, day: 2, actIndex: 9 },
              { t: { en: " — a signature performing-arts tradition", zh: " — 标志性表演艺术创新" } },
            ],
          },
          {
            segments: [
              { t: { en: "World center for ", zh: "世界" } },
              { t: { en: "giant panda breeding", zh: "大熊猫繁育" }, day: 1, actIndex: 1 },
              { t: { en: " and conservation", zh: "与科研中心" } },
            ],
          },
          {
            en: "Tea-house culture—a slow-paced urban lifestyle that defines daily life in Chengdu",
            zh: "茶馆文化 — 塑造成都日常节奏的「慢生活」城市风格",
          },
          {
            en: "Shu embroidery (蜀绣)—a living craft in Chengdu workshops; one of China's four great embroidery traditions",
            zh: "蜀绣 — 成都工坊传承至今，中国四大名绣之一",
          },
        ],
        trip: {
          segments: [
            { t: { en: "This trip: ", zh: "本行程：" } },
            { t: { en: "Panda Base", zh: "熊猫基地" }, day: 1, actIndex: 1 },
            { t: { en: " & ", zh: "、" } },
            { t: { en: "Jinli", zh: "锦里" }, day: 1, actIndex: 8 },
            { t: { en: " (Day 1), ", zh: "（第 1 天），" } },
            { t: { en: "Kuanzhai Alley", zh: "宽窄巷子" }, day: 2, actIndex: 2 },
            { t: { en: " / ", zh: " / " } },
            { t: { en: "Jinsha", zh: "金沙" }, day: 2, actIndex: 7 },
            { t: { en: " / ", zh: " / " } },
            { t: { en: "Sichuan Opera", zh: "川剧" }, day: 2, actIndex: 9 },
            { t: { en: " (Day 2), ", zh: "（第 2 天），" } },
            { t: { en: "Sanxingdui", zh: "三星堆" }, day: 3, actIndex: 1 },
            { t: { en: " (Day 3), ", zh: "（第 3 天），" } },
            { t: { en: "Sichuan Museum", zh: "四川博物院" }, day: 7, actIndex: 1 },
            { t: { en: " (Day 7), ", zh: "（第 7 天），" } },
            { t: { en: "return to Chengdu", zh: "返程成都" }, day: 6 },
            { t: { en: ".", zh: "。" } },
          ],
        },
      },
      {
        id: "chongqing",
        name: { en: "Chongqing Municipality", zh: "重庆市（直辖市）" },
        stats: {
          en: "Province-level municipality · ~32 million (entire region) · 3,000+ years of settlement",
          zh: "省级直辖市 · 约 3200 万（全市域）· 建城历史 3000 年以上",
        },
        geoNote: {
          en: "Administrative level: direct-controlled municipality (province-level, like Beijing or Shanghai). The ~32 million figure covers the entire region—urban core plus rural counties—not one city in the American sense.",
          zh: "行政级别：直辖市（省级，与北京、上海同级）。约 3200 万含城区与郊县，常与美国「州」人口对比，但并非美国意义上的单一城市。",
        },
        usScale: {
          en: "More people than any U.S. state except California",
          zh: "全市域对州：人口超过美国除加州外的任一州",
        },
        analogy: {
          en: "A province-sized region of steep hills where the Yangtze and Jialing Rivers meet—San Francisco terrain meets Pittsburgh riverfront, at megacity scale.",
          zh: "一个省级规模的江岸丘陵地带——有点像旧金山的地形 + 匹兹堡的江岸，却是超大城市群规模。",
        },
        status: {
          en: "One of China's four direct-controlled municipalities (province-level, like Beijing and Shanghai). A major Yangtze port, bridge city, and industrial center.",
          zh: "中国四大直辖市之一（与北京、上海同级），长江航运枢纽、桥梁之城与工业重镇。",
        },
        honors: [
          {
            en: "China's wartime capital (1937–1945)—known as the 战时陪都; Allied headquarters in China during World War II",
            zh: "1937–1945 战时陪都 — 二战时期中国大后方与盟军在华中枢",
          },
          {
            en: "UNESCO World Heritage: Dazu Rock Carvings (1999)—among the finest examples of Chinese cliff sculpture",
            zh: "世界遗产：大足石刻（1999）— 中国石窟艺术巅峰之作",
          },
          {
            segments: [
              {
                t: {
                  en: "UNESCO World Heritage: Wulong Karst (2007)—part of the South China Karst series; this trip includes ",
                  zh: "世界遗产：武隆喀斯特（2007）— 南方喀斯特组成部分；本行程含 ",
                },
              },
              { t: { en: "Wulong", zh: "武隆" }, day: 8, actIndex: 1 },
            ],
          },
          {
            en: "Mountain City (山城), Fog City (雾都), Bridge City (桥都)—well-known nicknames",
            zh: "「山城」「雾都」「桥都」— 家喻户晓的城市名片",
          },
          {
            en: "One of China's five national central cities (with Beijing, Shanghai, Guangzhou, and Tianjin)",
            zh: "国家中心城市（全国仅 5 座：北京、上海、广州、重庆、天津）",
          },
        ],
        history: {
          en: "China's wartime capital (1937–1945), heavily bombed during World War II; gateway to the Three Gorges. Known as the Mountain City (山城) and Fog City (雾都).",
          zh: "1937–1945 战时陪都，经历大轰炸；三峡门户，别称「山城」「雾都」。",
        },
        inventions: [
          {
            en: "Chongqing hot pot (火锅)—the mala (numbing-spicy) broth culture that spread across China",
            zh: "重庆火锅 — 麻辣锅底文化风靡全国",
          },
          {
            segments: [
              { t: { en: "Chongqing noodles (小面)", zh: "重庆小面" }, day: 7, actIndex: 4 },
              { t: { en: " — on this trip at Huashi Wanza Noodles", zh: " — 本行程花市豌杂面" } },
            ],
          },
          {
            segments: [
              { t: { en: "Mountain-city transit—", zh: "山城交通设计 — " } },
              { t: { en: "light rail through buildings (Liziba)", zh: "穿楼轻轨（李子坝）" }, day: 9, actIndex: 1 },
              { t: { en: ", and stacked river bridges", zh: "与层叠江桥" } },
            ],
          },
          {
            en: "Wartime publishing and industrial relocation hub—a major rear base for news and manufacturing during World War II",
            zh: "战时出版与工业内迁中心 — 抗战时期重要的新闻与产业后方",
          },
        ],
        trip: {
          segments: [
            { t: { en: "This trip: ", zh: "本行程：" } },
            { t: { en: "Train from Chengdu", zh: "成都高铁赴渝" }, day: 7, actIndex: 2 },
            { t: { en: " (Day 7), ", zh: "（第 7 天），" } },
            { t: { en: "Huashi noodles", zh: "花市豌杂面" }, day: 7, actIndex: 4 },
            { t: { en: " (Day 7), ", zh: "（第 7 天），" } },
            { t: { en: "Hongyadong", zh: "洪崖洞" }, day: 9, actIndex: 6 },
            { t: { en: ", ", zh: "、" } },
            { t: { en: "Liziba", zh: "李子坝" }, day: 9, actIndex: 1 },
            { t: { en: ", ", zh: "、" } },
            { t: { en: "Wulong Karst", zh: "武隆喀斯特" }, day: 8, actIndex: 1 },
            { t: { en: " (Day 8), ", zh: "（第 8 天），" } },
            { t: { en: "Dazu Rock Carvings", zh: "大足石刻" }, day: 10, actIndex: 4 },
            { t: { en: " (Day 10).", zh: "（第 10 天）。" } },
          ],
        },
      },
    ],
  },

  preDeparture48h: {
    title: { en: "48 Hours Before Departure", zh: "行前 48 小时" },
    subtitle: {
      en: "Last-minute checklist — visa, connectivity, train tickets, and museum bookings",
      zh: "出发前最后核对：签证、网络、高铁票务与博物馆预约",
    },
    items: [
      {
        id: "oct-timing",
        icon: "📅",
        title: { en: "Oct 15–30 travel window", zh: "10 月 15–30 日出行提醒" },
        desc: {
          en: "Your dates avoid National Day Golden Week (Oct 1–7), but Jiuzhaigou is still peak season—book valley tickets, hotels, and HSR early. Oct 15–30 falls in the visa guide’s “apply 4–8 weeks before departure” window; if you have not started yet, do so immediately.",
          zh: "本行程 10 月 15–30 日已避开国庆黄金周（10/1–7），但九寨沟仍为旺季，门票与酒店建议提前预订。该时段落在签证指南「出发前 4–8 周申请」窗口内，若尚未办签请尽快办理。",
        },
        tipTarget: "visa",
      },
      {
        id: "visa",
        icon: "🛂",
        title: { en: "China L visa", zh: "中国旅游 L 签证" },
        desc: {
          en: "Confirm your visa is approved and your passport is back in hand. If you have not applied yet, start on COVA now.",
          zh: "确认签证已通过、护照已取回；若尚未申请，请尽快通过 COVA 提交。",
        },
        link: { label: { en: "COVA application", zh: "COVA 在线申请" }, url: "https://cova.mfa.gov.cn" },
        tipTarget: "visa",
      },
      {
        id: "roaming",
        icon: "📶",
        title: { en: "Roaming or travel eSIM", zh: "国际漫游或旅行 eSIM" },
        desc: {
          en: "Enable U.S. carrier roaming or buy an international eSIM (Holafly, Airalo) before you board your flight.",
          zh: "起飞前开通美国运营商漫游，或购买 Holafly、Airalo 等国际 eSIM。",
        },
        tipTarget: "overseas",
      },
      {
        id: "apps",
        icon: "📱",
        title: { en: "WeChat Pay, Alipay & maps", zh: "微信、支付宝与导航" },
        desc: {
          en: "Link your Visa/Mastercard and install Amap Global + DiDi while you are still at home.",
          zh: "绑定 Visa/Mastercard，并在出发前安装高德国际版与滴滴。",
        },
        tipTarget: "apps",
      },
      {
        id: "trains",
        icon: "🚄",
        title: { en: "High-speed rail tickets", zh: "高铁票务" },
        desc: {
          en: "Book Chengdu–Jiuzhaigou, Chengdu–Chongqing, and Chongqing–Dazu trains. For Jiuzhaigou, select Huanglongjiuzhai (黄龙九寨) station—not Jiuzhaigou town. Trip.com accepts foreign cards; the 12306 app needs a Chinese phone number.",
          zh: "预订成都↔九寨沟、成都↔重庆、重庆↔大足高铁。九寨沟方向请在「黄龙九寨」站（Huanglongjiuzhai）上下车，而非九寨沟县城。Trip.com 支持外卡；12306 需中国手机号。",
        },
        link: { label: { en: "Book on Trip.com", zh: "Trip.com 购票" }, url: "https://www.trip.com/trains/" },
      },
      {
        id: "sichuan-museum",
        icon: "🏛️",
        title: { en: "Sichuan Museum reservation", zh: "四川博物院预约" },
        desc: {
          en: "Free entry on Day 7 — reserve your visit slot ahead of time via Trip.com or the WeChat mini program.",
          zh: "D7 免费参观 — 请提前在 Trip.com 或微信「四川博物院」小程序预约入馆时段。",
        },
        link: {
          label: { en: "Sichuan Museum on Trip.com", zh: "Trip.com 四川博物院" },
          url: "https://us.trip.com/travel-guide/attraction/chengdu/sichuan-museum-90391/?allianceid=1306174&sid=51684809&utm_source=google&utm_medium=cpc&utm_campaign=22258600078&ppcid=adid-733518331198_akid-dsa-1718401323482_adgid-172046832701&gad_source=1&gad_campaignid=22258600078&gbraid=0AAAAABn2eFLEWQ2imSPdT7XkC3h-S3F0Q&gclid=CjwKCAjwpqHTBhAcEiwAj2AfuqVFh0HM4eduZKwXlionFIeEmVsoFv57lFuUrTJeYRXVyszOP_siTBoCbI8QAvD_BwE",
        },
      },
    ],
  },

  highlights: [
    {
      id: "panda-base",
      day: 1,
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Chengdu Panda Breeding Base", zh: "成都大熊猫繁育研究基地" },
      tagline: { en: "Moon cub nursery & giant pandas up close", zh: "月亮产房 · 近距离看国宝" },
      image: "https://vega.enanyang.my/sites/default/files/2024-01/heye2.jpg",
      reviewKey: "Chengdu Panda Breeding Base",
      ticket: { cny: 85, usd: 12.55, note: { en: "ticket + shuttle / person", zh: "门票+观光车/人" } },
    },
    {
      id: "sanxingdui",
      day: 3,
      city: { en: "Guanghan", zh: "广汉" },
      name: { en: "Sanxingdui Museum", zh: "三星堆博物馆" },
      tagline: { en: "Bronze masks & ancient Shu kingdom (c. 1200–1000 BCE)", zh: "青铜面具 · 古蜀王国（约公元前 1200–1000 年）" },
      heritage: { kind: "cultural", year: 2024 },
      image: "images/sanxingdui-museum.jpg",
      reviewKey: "Sanxingdui Museum",
      ticket: { cny: 102, usd: 15.06, note: { en: "ticket 72 + audio guide / person", zh: "门票72+讲解器/人" } },
    },
    {
      id: "jiuzhaigou",
      day: 5,
      city: { en: "Jiuzhaigou", zh: "九寨沟" },
      name: { en: "Jiuzhaigou Valley", zh: "九寨沟风景区" },
      tagline: { en: "Peak autumn foliage & shuttle-friendly boardwalks", zh: "彩林高峰 · 观光车全覆盖" },
      heritage: { kind: "natural", year: 1992 },
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/960px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg",
      reviewKey: "Jiuzhaigou Valley",
      ticket: { cny: 280, usd: 41.36, note: { en: "ticket + shuttle / person", zh: "门票+观光车/人" } },
    },
    {
      id: "wulong-bridges",
      day: 8,
      city: { en: "Wulong", zh: "武隆" },
      name: { en: "Three Natural Bridges", zh: "武隆天生三桥" },
      tagline: { en: "Karst stone bridges · elevator access", zh: "喀斯特天生三桥 · 电梯直达" },
      heritage: { kind: "natural", year: 2007, series: { en: "South China Karst", zh: "南方喀斯特" } },
      image: "images/wulong-bridges.jpg",
      reviewKey: "Three Natural Bridges",
      ticket: { cny: 155, usd: 22.89, note: { en: "combo ticket / person", zh: "套票/人" } },
    },
    {
      id: "dazu",
      day: 10,
      city: { en: "Dazu", zh: "大足" },
      name: { en: "Dazu Rock Carvings", zh: "大足石刻" },
      tagline: { en: "Tang–Song cliff Buddhas (9th–13th c.) · Baodingshan grottoes", zh: "唐至宋代（9–13 世纪）摩崖造像 · 宝顶山石窟" },
      heritage: { kind: "cultural", year: 1999 },
      image: "images/dazu-rock-carvings.png",
      reviewKey: "Dazu Rock Carvings",
      ticket: { cny: 115, usd: 16.99, note: { en: "Baodingshan / person", zh: "宝顶山/人" } },
    },
    {
      id: "jinsha",
      day: 2,
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Jinsha Site Museum", zh: "金沙遗址博物馆" },
      tagline: { en: "Shu civilization site (c. 1200–650 BCE) & golden sunbird", zh: "古蜀文明（约公元前 1200–650 年）· 太阳神鸟" },
      heritage: { kind: "cultural", year: 2024 },
      image: "images/jinsha-museum.jpg",
      reviewKey: "Jinsha Site Museum",
      ticket: { cny: 100, usd: 14.77, note: { en: "ticket 70 + audio guide / person", zh: "门票70+讲解器/人" } },
    },
    {
      id: "jinli",
      day: 1,
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Jinli Ancient Street", zh: "锦里古街" },
      tagline: { en: "Lantern-lit historic street & night snacks", zh: "红灯笼古街 · 夜游小吃" },
      image: "https://ak-d.tripcdn.com/images/0105r12000jfr27ub5C2A.jpg",
      reviewKey: "Jinli Ancient Street",
      ticket: { free: true },
    },
    {
      id: "kuanzhai",
      day: 2,
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Wide & Narrow Alleys", zh: "宽窄巷子" },
      tagline: { en: "Qing-dynasty lanes (1644–1912) & panda-themed dining", zh: "清代巷弄（1644–1912 年）· 熊猫主题餐饮" },
      image: "https://p2.itc.cn/q_70/images03/20200723/c69a20b5eced4eff88e6d285b26ae104.jpeg",
      reviewKey: "Wide & Narrow Alleys",
      ticket: { free: true },
    },
    {
      id: "sichuan-museum",
      day: 7,
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Sichuan Museum", zh: "四川博物院" },
      tagline: { en: "Free entry · top provincial relic collection", zh: "免费预约 · 省级文物精品" },
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sichuan_Provincial_Museum_-_Chengdu%2C_China_-_DSC04119.jpg/960px-Sichuan_Provincial_Museum_-_Chengdu%2C_China_-_DSC04119.jpg",
      reviewKey: "Sichuan Museum",
      ticket: { free: true },
    },
    {
      id: "hongyadong",
      day: 9,
      city: { en: "Chongqing", zh: "重庆" },
      name: { en: "Hongyadong Night View", zh: "洪崖洞夜景" },
      tagline: { en: "Stilt-house light show above the Jialing River", zh: "吊脚楼亮灯 · 嘉陵江夜景" },
      image: "https://ak-d.tripcdn.com/images/10020s000000hqkwh48D9.jpg",
      reviewKey: "Hongyadong Night View",
      ticket: { free: true },
    },
    {
      id: "liziba",
      day: 9,
      city: { en: "Chongqing", zh: "重庆" },
      name: { en: "Liziba Light Rail Through Building", zh: "李子坝轻轨穿楼" },
      tagline: { en: "Panda-painted metro & train-through-building view", zh: "熊猫涂装轻轨 · 穿楼观景台" },
      image: "images/liziba.jpg",
      reviewKey: "Liziba Station",
      ticket: { free: true },
    },
    {
      id: "xiahaoli",
      day: 9,
      city: { en: "Chongqing", zh: "重庆" },
      name: { en: "Xiahaoli Old Street", zh: "下浩里" },
      tagline: { en: "Literary hillside lanes & Yuzhong sunset views", zh: "文艺老街 · 渝中半岛日落" },
      image: "images/xiahaoli.jpg",
      reviewKey: "Xiahaoli Old Street",
      ticket: { free: true },
    },
  ],

  days: [
    {
      day: 1,
      city: { en: "Chengdu", zh: "成都" },
      theme: { en: "Panda Day in Chengdu", zh: "全天熊猫主题游览" },
      intensity: "compact",
      hotel: "panda-sleepy",
      subtotal: { cny: 1208, usd: 178.42 },
      summary: {
        en: "Panda Base → IFS tea → Jinli → Hotel (Jiuyan bar optional)",
        zh: "熊猫基地 → IFS 下午茶 → 锦里 → 回酒店（可选：九眼桥）",
      },
      activities: [
        {
          time: "08:00",
          type: "transport",
          title: { en: "IFS → Panda Base Shuttle", zh: "IFS 直通车 → 熊猫基地" },
          desc: {
            en: "iPanda shuttle from IFS Square (IMAX Plaza), 40 min ride.",
            zh: "IFS 古迹广场 iPanda 直通车前往大熊猫繁育基地，车程 40 分钟",
          },
          cost: { cny: 10, usd: 1.48, note: { en: "one-way, per person", zh: "单人单程" } },
          image: "images/shuttle-bus.svg",
        },
        {
          time: "08:40–12:00",
          type: "attraction",
          title: { en: "Chengdu Panda Breeding Base", zh: "成都大熊猫繁育研究基地" },
          desc: { en: "", zh: "" },
          cost: { cny: 85, usd: 12.55, note: { en: "55 ticket + shuttle / person", zh: "55 门票+观光车/人" } },
          image: "https://vega.enanyang.my/sites/default/files/2024-01/heye2.jpg",
        },
        {
          time: "12:00–13:10",
          type: "food",
          title: { en: "Panda Panoramic Restaurant", zh: "熊猫全景餐厅" },
          desc: { en: "", zh: "" },
          cost: { cny: 60, usd: 8.86, note: { en: "per person", zh: "人均" } },
          image: "images/panda-panoramic-restaurant.jpg",
        },
        {
          time: "13:30",
          type: "transport",
          title: { en: "Return Shuttle to IFS", zh: "直通车返回 IFS" },
          desc: {
            en: "Return to IFS by the same shuttle bus.",
            zh: "原车直通车返回 IFS",
          },
          cost: { cny: 10, usd: 1.48, note: { en: "one-way, per person", zh: "单人单程" } },
          image: "images/shuttle-bus.svg",
        },
        {
          time: "14:00",
          type: "food",
          title: { en: "IFS Sunset Bistro Panda Afternoon Tea", zh: "落日餐吧熊猫下午茶" },
          desc: { en: "", zh: "" },
          cost: { cny: 260, usd: 38.4, note: { en: "set menu for two", zh: "双人套餐" } },
          image: "images/sunset-bistro.jpg",
        },
        {
          time: "16:00",
          type: "attraction",
          title: { en: "Times Square Block A Panda Souvenirs", zh: "时代广场A座熊猫文创" },
          desc: {
            en: "At your own expense.\nDirections: From the giant panda on the IFS façade, enter Block A via the side alley opposite Bosideng. Low-rise and high-rise elevators are separate.\n1) 15F · Pop Panda Factory (low-rise elevator)\nBudget gifts: ¥1.2 panda headbands, ¥1.5 fridge magnets, knit pouches, panda stationery, 60+ free commemorative stamps — good for small souvenirs.\n2) 28F · Yichuan Ershu Panda Specialties (high-rise elevator)\nLargest shop: licensed Huahua plush, blind boxes, figurines, plus Sichuan specialties (mild beef, pastries, tea).\n3) 30F · Fufu / Guyü Panda (high-rise elevator)\nAffordable blind boxes, Sanxingdui collab merch, commemorative coins; free shipping within China on qualifying orders.\n• Tips: Roughly one-third of tourist-street prices; seating to rest; WeChat Pay and Alipay accepted.",
            zh: "伴手礼自费。\n导航：IFS 外墙巨型熊猫屁股，斜对面波司登侧边小巷进入时代广场 A 座，电梯分低层 / 高层分开乘坐。\n1）15 楼｜泡泡熊猫工厂（低层电梯）\n主打平价小文创：1.2 元熊猫发箍、1.5 元冰箱贴、针织小包、全套熊猫文具，60 + 款免费纪念印章，小件伴手礼首选。\n2）28 楼｜一川二蜀熊猫特产（高层电梯）\n店面最大，正版花花公仔、熊猫盲盒、摆件齐全，同时售卖四川本地特产（无辣牛肉、糕点、茶叶），一站式买文创 + 美食伴手礼。\n3）30 楼｜福福 / 故屿熊猫（高层电梯）\n低价盲盒、三星堆联名熊猫周边、纪念币，满额可免费邮寄回国，适合大量采购送人。\n• 核心优势：街边景区同款价格仅 1/3，一件也按批发价；店内有座椅可歇脚，明码标价无宰客，支持微信 / 支付宝。",
          },
          cost: null,
          image: "images/ifs-chengdu.jpg",
        },
        {
          time: "18:00",
          type: "hotel",
          title: { en: "Panda Sleepy Hotel Check-in", zh: "熊猫很困酒店入住" },
          desc: {
            en: "Walk back to Panda Sleepy Hotel to check in and rest.",
            zh: "步行回熊猫很困酒店办理入住休整。",
          },
          cost: { cny: 600, usd: 88.62, note: { en: "2 nights (your share)", zh: "两晚分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
        {
          time: "19:00",
          type: "transport",
          title: { en: "Taxi: Hotel → Jinli", zh: "打车：酒店 → 锦里" },
          desc: {
            en: "Taxi from hotel to Jinli Ancient Street.",
            zh: "打车：酒店 → 锦里古街。",
          },
          cost: { cny: 9, usd: 1.33, note: { en: "one-way", zh: "单程" } },
          image: "https://ak-d.tripcdn.com/images/0105r12000jfr27ub5C2A.jpg",
        },
        {
          time: "19:20–20:30",
          type: "attraction",
          title: { en: "Jinli Ancient Street", zh: "锦里古街" },
          desc: {
            en: "Snacks and shopping at your own expense.",
            zh: "小吃与购物自费。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/0105r12000jfr27ub5C2A.jpg",
        },
        {
          time: "20:40",
          type: "transport",
          title: { en: "Taxi: Jinli → Hotel", zh: "打车：锦里 → 酒店" },
          desc: {
            en: "Return to the hotel after Jinli—a quiet first night is recommended.",
            zh: "锦里结束后返回熊猫很困酒店，首日建议早点休息。",
          },
          cost: { cny: 9, usd: 1.33, note: { en: "one-way", zh: "单程" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
        {
          time: "Optional · 20:40+",
          optional: true,
          type: "transport",
          title: { en: "Taxi: Jinli → Jiuyan Bridge", zh: "打车：锦里 → 九眼桥（可选）" },
          desc: {
            en: "Optional if you still have energy—otherwise take the taxi back to the hotel above.",
            zh: "体力允许时可延长晚间；若跳过，请改乘上方锦里→酒店打车。",
          },
          cost: { cny: 10, usd: 1.48, note: { en: "one-way", zh: "单程" } },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anshun_Bridge_Chengdu.jpg/960px-Anshun_Bridge_Chengdu.jpg",
        },
        {
          time: "Optional · 20:50+",
          optional: true,
          type: "attraction",
          title: { en: "Jiuyan Bridge Riverside Bar", zh: "九眼桥安顺廊桥清吧（可选）" },
          desc: {
            en: "Not included in the required budget.",
            zh: "不计入固定花费。",
          },
          cost: { cny: 80, usd: 11.82, note: { en: "per person (cover charge)", zh: "清吧人均" } },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anshun_Bridge_Chengdu.jpg/960px-Anshun_Bridge_Chengdu.jpg",
        },
        {
          time: "Optional · 22:40+",
          optional: true,
          type: "transport",
          title: { en: "Taxi: Jiuyan → Hotel", zh: "打车：九眼桥 → 酒店（可选）" },
          desc: {
            en: "Only if you visit Jiuyan Bridge above.",
            zh: "仅在选择九眼桥清吧时需要。",
          },
          cost: { cny: 9, usd: 1.33, note: { en: "one-way", zh: "单程" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 2,
      city: { en: "Chengdu", zh: "成都" },
      theme: { en: "Alleys, Jinsha & Sichuan Opera", zh: "宽窄巷子 + 金沙 + 川剧变脸" },
      intensity: "standard",
      hotel: "panda-sleepy",
      subtotal: { cny: 873, usd: 128.93 },
      summary: {
        en: "Wide & Narrow Alleys → Jinsha → Face-changing opera",
        zh: "宽窄巷子 → 金沙遗址 → 川剧变脸",
      },
      activities: [
        {
          time: "09:00",
          type: "transport",
          title: { en: "Metro Line 2 to People's Park", zh: "地铁 2 号线至人民公园" },
          desc: {
            en: "Metro Line 2 from Chunxi Road to People's Park.",
            zh: "地铁 2 号线春熙路 → 人民公园",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "per person", zh: "单人" } },
          image: "images/chengdu-metro.png",
        },
        {
          time: "09:30–10:30",
          type: "attraction",
          title: { en: "People's Park", zh: "人民公园" },
          desc: {
            en: "Free entry.",
            zh: "免费入园。",
          },
          cost: null,
          image: "images/peoples-park.jpg",
        },
        {
          time: "10:30",
          type: "transport",
          title: { en: "Walk to Wide & Narrow Alleys", zh: "步行至宽窄巷子" },
          desc: {
            en: "5-minute walk from People's Park.",
            zh: "10:30 步行至宽窄巷子。",
          },
          reviews: [
            {
              label: { en: "TripAdvisor Reviews", zh: "TripAdvisor 评价" },
              url: "https://www.tripadvisor.com/Attraction_Review-g297463-d1832089-Reviews-Kuanzhai_Alley-Chengdu_Sichuan.html",
            },
          ],
          cost: null,
          image: "https://p2.itc.cn/q_70/images03/20200723/c69a20b5eced4eff88e6d285b26ae104.jpeg",
        },
        {
          time: "12:00",
          type: "food",
          title: { en: "Tingxiang Mansion Panda Banquet", zh: "听香公馆熊猫创意宴" },
          desc: { en: "", zh: "" },
          cost: { cny: 200, usd: 29.54, note: { en: "set menu for two", zh: "双人套餐" } },
          image: "images/tingxiang-restaurant.webp",
        },
        {
          time: "15:00",
          type: "transport",
          title: { en: "Taxi: Wide & Narrow Alleys → Jinsha", zh: "打车：宽窄巷子 → 金沙遗址" },
          desc: {
            en: "Taxi from Wide & Narrow Alleys to Jinsha Site Museum.",
            zh: "打车：宽窄巷子 → 金沙遗址博物馆。",
          },
          cost: { cny: 20, usd: 2.95, note: { en: "one-way", zh: "单程" } },
          image: "images/jinsha-museum.jpg",
        },
        {
          time: "15:20–18:00",
          type: "attraction",
          title: { en: "Jinsha Site Museum", zh: "金沙遗址博物馆" },
          desc: {
            en: "English audio guide available.",
            zh: "可租英文讲解器。",
          },
          cost: { cny: 70, usd: 10.34, note: { en: "ticket/person + 30 audio", zh: "门票/人 + 讲解 30" } },
          image: "images/jinsha-museum.jpg",
        },
        {
          time: "18:30",
          type: "transport",
          title: { en: "Metro Line 7: Jinsha → Wenshu Monastery", zh: "地铁 7 号线：金沙博物馆 → 文殊院" },
          desc: {
            en: "Metro Line 7 from Jinsha Site Museum to Wenshu Monastery.",
            zh: "地铁 7 号线金沙博物馆站 → 文殊院站。",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "per person", zh: "单人" } },
          image: "images/chengdu-metro.png",
        },
        {
          time: "19:00",
          type: "food",
          title: { en: "Long Chaoshou (Wenshu Branch)", zh: "龙抄手（文殊院分店）" },
          desc: { en: "", zh: "" },
          cost: { cny: 25, usd: 3.69, note: { en: "per person", zh: "人均" } },
          image: "https://pimg.1px.tw/bluehero/1377524829-57389938.jpg",
        },
        {
          time: "20:00–21:10",
          type: "attraction",
          title: { en: "Sichuan Opera at Liyuan Club Wenshu Branch", zh: "梨园会馆文殊院店川剧变脸" },
          desc: {
            en: "Book seats in advance.",
            zh: "建议提前订位。",
          },
          cost: { cny: 99, usd: 14.61, note: { en: "two-person ticket", zh: "双人套票" } },
          image: "https://ak-d.tripcdn.com/images/1lo2m12000h62zogi8C2A_W_960_0_R5_Q60.webp?proc=source/trip",
        },
        {
          time: "21:30",
          type: "transport",
          title: { en: "Metro Back to Hotel", zh: "地铁返程酒店" },
          desc: {
            en: "21:30 metro back to Panda Sleepy Hotel.",
            zh: "21:30 地铁返程酒店。",
          },
          cost: null,
          image: "images/chengdu-metro.png",
        },
        {
          time: "22:00",
          type: "hotel",
          title: { en: "Panda Sleepy Hotel", zh: "熊猫很困酒店住宿" },
          desc: {
            en: "Overnight at Panda Sleepy Hotel.",
            zh: "熊猫很困酒店过夜住宿",
          },
          cost: { cny: 300, usd: 44.31, note: { en: "nightly share", zh: "单日分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 3,
      city: { en: "Chengdu", zh: "成都" },
      theme: { en: "Sanxingdui Day Trip", zh: "三星堆一日往返" },
      intensity: "standard",
      hotel: "panda-sleepy",
      subtotal: { cny: 636, usd: 93.94 },
      summary: { en: "Sanxingdui Museum full-day visit", zh: "三星堆博物馆深度游览" },
      activities: [
        {
          time: "08:00",
          type: "transport",
          title: { en: "IFS → Sanxingdui Shuttle", zh: "IFS 直通车 → 三星堆" },
          desc: {
            en: "Fixed shuttle bus from IFS to Sanxingdui Museum, 70 min ride. Departures at 08:00 & 10:30 daily.",
            zh: "IFS 定点直通车直达三星堆博物馆，车程 70 分钟，每日 8:00/10:30 发车",
          },
          cost: { cny: 33, usd: 4.87, note: { en: "one-way, per person", zh: "单人单程" } },
          image: "images/shuttle-bus.svg",
        },
        {
          time: "10:00–16:00",
          type: "attraction",
          title: { en: "Sanxingdui Museum", zh: "三星堆博物馆" },
          desc: {
            en: "Available for rent:\n1. Smart audio guide (recommended for two sharing one device)\nRental: 30CNY / 4.43USD per unit; deposit 200CNY (fully refunded on return)\nLanguages: English, Chinese, Japanese & more; auto-triggered exhibit narration\nHours: 08:30–17:00; 4-hour battery — enough for a full-day visit\n2. MR immersive guide glasses (Shu Kingdom Secret Mirror)\nRental: 38CNY / 5.61USD per unit\nHighlight: AR animations recreate ancient Shu scenes (c. 1200–1000 BCE) — ideal for immersive experience seekers",
            zh: "可租：\n1. 智慧语音导览器（推荐双人使用）\n租金：30CNY / 4.43USD / 台，押金 200CNY（归还全额退还）\n语言：含英语、中文、日语等多语种，文物自动感应讲解\n时长：08:30–17:00，续航 4 小时，足够全天游览\n2. MR 沉浸式导览眼镜（蜀国秘镜）\n租金：38CNY / 5.61USD / 台\n特色：AR 动画还原古蜀场景（约公元前 1200–1000 年），适合喜欢沉浸式体验游客",
          },
          cost: { cny: 102, usd: 15.06, note: { en: "ticket 72 + 30 audio / person", zh: "门票 72 + 讲解 30/人" } },
          image: "images/sanxingdui-museum.jpg",
        },
        {
          time: "16:30",
          type: "transport",
          title: { en: "Return Shuttle to Chunxi Road", zh: "直通车返程春熙路" },
          desc: {
            en: "16:30 shuttle bus return to Chunxi Road. Free evening to buy souvenirs; hotel free luggage storage, pack for Jiuzhaigou trip.",
            zh: "16:30 直通车返程春熙路。晚间自由采购伴手礼，酒店免费寄存大件行李，整理九寨沟出行物资。",
          },
          cost: null,
          image: "images/shuttle-bus.svg",
        },
        {
          time: "19:00",
          type: "hotel",
          title: { en: "Panda Sleepy Hotel", zh: "熊猫很困酒店住宿" },
          desc: {
            en: "Evening at Panda Sleepy Hotel — free luggage storage, pack for Jiuzhaigou.",
            zh: "晚间回熊猫很困酒店，免费寄存大件行李、整理九寨沟出行物资",
          },
          cost: { cny: 300, usd: 44.31, note: { en: "nightly share", zh: "单日分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 4,
      city: { en: "Chengdu → Jiuzhaigou", zh: "成都 → 九寨沟" },
      theme: { en: "High-Speed Train + Scenic Shuttle", zh: "高铁 + 景区接驳" },
      intensity: "standard",
      hotel: "xingyu",
      subtotal: { cny: 701, usd: 103.54 },
      summary: { en: "Train C5782 → Xingyu Hotel check-in", zh: "C5782 高铁 → 星宇国际入住" },
      activities: [
        {
          time: "06:45",
          type: "transport",
          title: { en: "High-Speed Train C5782", zh: "高铁 C5782" },
          desc: {
            en: "Recommended train C5782: departs Chengdu East at 06:45, arrives Huanglongjiuzhai (黄龙九寨) at 08:24—the Jiuzhaigou HSR station (not Jiuzhaigou town). Alternatives: 08:12/10:06/11:46/15:45/18:36, 1h 39m.",
            zh: "推荐早班 C5782：06:45 成都东站发车，08:24 抵达黄龙九寨站（Huanglongjiuzhai，九寨沟高铁站名）。备选 08:12/10:06/11:46/15:45/18:36，1 小时 39 分",
          },
          cost: { cny: 135, usd: 19.94, note: { en: "2nd class, per person", zh: "二等座/人" } },
          image: "images/china-railway.png",
        },
        {
          time: "09:00",
          type: "transport",
          title: { en: "Scenic Shuttle to Jiuzhaigou Gate", zh: "景区接驳大巴" },
          desc: {
            en: "After exiting Huanglongjiuzhai (黄龙九寨) station, transfer to the direct scenic shuttle to Jiuzhaigou entrance—rolling departure, 2-hour ride.",
            zh: "自黄龙九寨站（Huanglongjiuzhai）出站，换乘景区直通接驳大巴直达九寨沟口，滚动发车，车程 2 小时",
          },
          cost: { cny: 51, usd: 7.53, note: { en: "per person", zh: "单人" } },
          image: "images/shuttle-bus.svg",
        },
        {
          time: "11:00",
          type: "hotel",
          title: { en: "Xingyu International Hotel", zh: "星宇国际大酒店" },
          desc: {
            en: "Check in. Free Tibetan costume photoshoot in hotel courtyard in the afternoon (included). Self-arranged light non-spicy dinner; rest to adapt to plateau altitude. Amenities: full-room diffused oxygen, free round-trip scenic shuttle, complimentary breakfast for two included.",
            zh: "办理入住，下午酒店庭院免费双人藏服换装拍照（套餐内含），自行安排清淡无辣晚餐，休整适应高原海拔。酒店配套：全屋弥散式供氧、免费景区往返班车、双人自助早餐已包含。",
          },
          cost: { cny: 329, usd: 48.59, note: { en: "nightly share", zh: "单日分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc1012000seytq7cA1F4_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 5,
      city: { en: "Jiuzhaigou", zh: "九寨沟" },
      theme: { en: "Full-Day Jiuzhaigou Sightseeing", zh: "九寨沟全天深度游览" },
      intensity: "relaxed",
      hotel: "xingyu",
      subtotal: { cny: 889, usd: 131.31 },
      summary: { en: "Colorful lakes · shuttles · optional evening show", zh: "五彩湖泊 · 观光车全覆盖 · 晚间可选千古情" },
      activities: [
        {
          time: "All Day",
          type: "attraction",
          title: { en: "Jiuzhaigou Valley", zh: "九寨沟风景区" },
          desc: {
            en: "Note: optional evening Legend of Jiuzhai (theme park + show) is a separate venue and ticket—not included here.",
            zh: "提示：晚间《九寨千古情》（主题园+主秀）为可选自费，地点与门票均不同于本项。",
          },
          cost: { cny: 280, usd: 41.36, note: { en: "ticket + shuttle / person", zh: "门票+观光车/人" } },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/960px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg",
        },
        {
          time: "Optional · Evening",
          optional: true,
          type: "attraction",
          title: { en: "Legend of Jiuzhai Show", zh: "《九寨千古情》藏羌歌舞（可选）" },
          desc: {
            en: "Not included in the required budget.\n\n• Separate from Jiuzhaigou National Park (your Day 5 valley ticket)—different location, different ticket\n• This ticket includes: Jiuzhai Romance theme-park entry + Legend of Jiuzhai main show (~1 hr)\n• Does not include: national-park valley ticket (already in required costs)\n\n• Theme park quick stroll: arrive 30–60 min before showtime\n• Theme park in depth: ~1–1.5 hr\n• Whole evening (park + show): usually ~2–3 hr\n\nTypical show slots 17:30 or 19:00 (confirm when booking). TripAdvisor 4.4★. Taxi or hotel shuttle from Xingyu; book ahead in peak season.",
            zh: "不计入固定花费。\n\n• 与白天「九寨沟风景区」不同地点、不同门票\n• 本票含：九寨千古情主题园入园 + 主秀（约 1 小时）\n• 不含：国家公园门票（白天固定花费已含）\n\n• 主题园快速逛：提前 30–60 分钟入园\n• 主题园深度逛：约 1–1.5 小时\n• 连主秀整晚：通常 2–3 小时\n\n常见场次 17:30 或 19:00（以预约为准）。TripAdvisor 4.4 分。星宇酒店班车或短途打车；旺季提前预约。",
          },
          cost: { cny: 270, usd: 39.88, note: { en: "audience seat / person (park + show)", zh: "观众席/人（含主题园+主秀）" } },
          image: "https://ak-d.tripcdn.com/images/1mc1012000seytq7cA1F4_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 6,
      city: { en: "Jiuzhaigou → Chengdu", zh: "九寨沟 → 成都" },
      theme: { en: "Return to Chengdu", zh: "返程成都" },
      intensity: "standard",
      hotel: "panda-sleepy",
      subtotal: { cny: 672, usd: 99.26 },
      summary: { en: "Shuttle + train back to Chunxi Road", zh: "接驳大巴 + 高铁返回春熙路" },
      activities: [
        {
          time: "Morning",
          type: "transport",
          title: { en: "Shuttle to Huanglongjiuzhai Station", zh: "接驳大巴 → 黄龙九寨站" },
          desc: {
            en: "Shuttle bus from Jiuzhaigou entrance back to Huanglongjiuzhai (黄龙九寨) HSR station.",
            zh: "九寨沟口接驳大巴返回黄龙九寨站（Huanglongjiuzhai，九寨沟高铁站）",
          },
          cost: { cny: 51, usd: 7.53, note: { en: "per person", zh: "单人" } },
          image: "images/shuttle-bus.svg",
        },
        {
          time: "Midday",
          type: "transport",
          title: { en: "High-Speed Train to Chengdu East", zh: "高铁返回成都东" },
          desc: {
            en: "High-speed train from Huanglongjiuzhai (黄龙九寨) to Chengdu East. Arrive near Chunxi Road in the evening and pack for Chongqing tomorrow.",
            zh: "黄龙九寨站（Huanglongjiuzhai）午间高铁返回成都东，晚间抵达春熙路，整理行李，准备次日前往重庆",
          },
          cost: { cny: 135, usd: 19.94, note: { en: "2nd class, per person", zh: "二等座/人" } },
          image: "images/china-railway.png",
        },
        {
          time: "Evening",
          type: "hotel",
          title: { en: "Panda Sleepy Hotel", zh: "熊猫很困酒店" },
          desc: {
            en: "No complimentary breakfast—pick up food nearby or buy breakfast at the front desk.",
            zh: "入住熊猫很困酒店，住宿提示：无免费早餐，次日早餐可街边就餐或酒店自费购买。",
          },
          cost: { cny: 300, usd: 44.31, note: { en: "nightly share", zh: "单日分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 7,
      city: { en: "Chengdu → Chongqing", zh: "成都 → 重庆" },
      theme: { en: "Sichuan Museum & Train to Chongqing", zh: "川博 + 高铁赴渝" },
      intensity: "compact",
      hotel: "kaiyuan",
      subtotal: { cny: 714, usd: 105.46 },
      summary: {
        en: "Sichuan Museum → Train → Chongqing → Noodles",
        zh: "川博 → 高铁赴渝 → 花市豌杂面",
      },
      activities: [
        {
          time: "09:00",
          type: "transport",
          title: { en: "Metro to Sichuan Museum", zh: "地铁至四川省博物院" },
          desc: {
            en: "Metro from Chunxi Road to Sichuan Museum.",
            zh: "地铁春熙路 → 四川省博物院",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "per person", zh: "单人" } },
          image: "images/chengdu-metro.png",
        },
        {
          time: "09:30–12:00",
          type: "attraction",
          title: { en: "Sichuan Museum", zh: "四川博物院" },
          desc: {
            en: "Book online in advance. One museum only today—no need to rush.",
            zh: "需线上预约，今日只游川博，不必赶场。",
          },
          cost: null,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sichuan_Provincial_Museum_-_Chengdu%2C_China_-_DSC04119.jpg/960px-Sichuan_Provincial_Museum_-_Chengdu%2C_China_-_DSC04119.jpg",
        },
        {
          time: "12:30–14:00",
          type: "food",
          title: { en: "Lunch & Taxi to Chengdu East", zh: "午餐 + 打车至成都东站" },
          desc: {
            en: "Light lunch near the museum or at the station, then taxi to Chengdu East Railway Station.",
            zh: "川博附近或车站简餐，打车前往成都东站。",
          },
          cost: { cny: 20, usd: 2.95, note: { en: "taxi one-way", zh: "打车单程" } },
          image: "images/china-railway.png",
        },
        {
          time: "15:00",
          type: "transport",
          title: { en: "High-Speed Train to Chongqing", zh: "高铁赴重庆" },
          desc: {
            en: "Chengdu East → Chongqing West (~1 hr 20 min). Panda-themed trains sometimes run on this line, but any G/D train works.",
            zh: "成都东 → 重庆西成渝高铁，车程约 1 小时 20 分。线路偶有熊猫主题涂装列车，但不保证班次，任意 G/D 车次均可。",
          },
          cost: { cny: 148, usd: 21.86, note: { en: "2nd class, per person", zh: "二等座/人" } },
          image: "images/china-railway.png",
        },
        {
          time: "18:00",
          type: "transport",
          title: { en: "Metro: Chongqing West → Jiefangbei", zh: "地铁：重庆西 → 解放碑" },
          desc: {
            en: "Metro from Chongqing West Station to Jiefangbei. Check into Kaiyuan Mingting Hotel — daily complimentary breakfast for two included.",
            zh: "地铁重庆西站 → 解放碑，办理开元名庭入住（每日双人自助早餐已包含）。",
          },
          cost: { cny: 3, usd: 0.44, note: { en: "per person", zh: "单人" } },
          image: "images/chongqing-metro.png",
        },
        {
          time: "Evening",
          type: "food",
          title: {
            en: "Bai Xiang Ju · Shiba Ti · Huashi Wanza Noodles",
            zh: "白象居 · 十八梯 · 花市豌杂面",
          },
          desc: {
            en: "5-minute walk from the hotel (pay separately). Order two dry pea noodles without chili, each with a soft-boiled egg.",
            zh: "从酒店步行 5 分钟（自费，不计入固定花费），两碗干溜豌杂面不要辣、各加溏心煎蛋。",
          },
          cost: null,
          image: "images/huashi-wanza-noodles.jpg",
        },
      ],
    },
    {
      day: 8,
      city: { en: "Chongqing", zh: "重庆" },
      theme: { en: "Wulong Day Trip", zh: "武隆一日游" },
      intensity: "compact",
      hotel: "kaiyuan",
      subtotal: { cny: 958, usd: 141.5 },
      summary: { en: "Three Natural Bridges only", zh: "天生三桥（不含地缝）" },
      activities: [
        {
          time: "07:30",
          type: "transport",
          title: { en: "Direct Shuttle to Wulong", zh: "武隆往返直通车" },
          desc: {
            en: "Direct round-trip shuttle from Jiefangbei Bombing Site to Wulong — 3 hours per direction to Xiannv Town, no transfers needed.",
            zh: "解放碑大轰炸遗址乘坐武隆往返直达直通车，单程 3 小时直达仙女镇，无需换乘。",
          },
          cost: { cny: 130, usd: 19.2, note: { en: "round-trip/person", zh: "往返/人" } },
          image: "images/shuttle-bus.svg",
        },
        {
          time: "10:30",
          type: "attraction",
          title: { en: "Three Natural Bridges", zh: "武隆天生三桥" },
          desc: {
            en: "Skipping Longshui Gorge today for an earlier return.",
            zh: "今日不含龙水峡地缝，便于早返。",
          },
          cost: { cny: 155, usd: 22.89, note: { en: "per person", zh: "人均" } },
          image: "images/wulong-bridges.jpg",
        },
        {
          time: "15:00",
          type: "transport",
          title: { en: "Return Shuttle to Jiefangbei", zh: "直通车返程解放碑" },
          desc: {
            en: "Shuttle back to Jiefangbei—expect to reach the hotel around 6:00–7:00 PM.",
            zh: "直通车返程解放碑，仅游天生三桥时约 18:00–19:00 抵达酒店。",
          },
          cost: null,
          image: "images/shuttle-bus.svg",
        },
      ],
    },
    {
      day: 9,
      city: { en: "Chongqing", zh: "重庆" },
      theme: { en: "Mountain City + Hongyadong", zh: "山城打卡 + 洪崖洞" },
      intensity: "standard",
      hotel: "kaiyuan",
      subtotal: { cny: 400, usd: 59.08 },
      summary: { en: "Liziba → Nanbin sunset → Hongyadong", zh: "李子坝 → 南滨路日落 → 洪崖洞" },
      activities: [
        {
          time: "09:30",
          type: "food",
          title: { en: "Hotel Breakfast", zh: "酒店早餐" },
          desc: {
            en: "Complimentary buffet at Kaiyuan Mingting.",
            zh: "开元名庭免费自助早餐。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
        },
        {
          time: "09:30",
          type: "attraction",
          title: { en: "Liziba Light Rail Through Building", zh: "李子坝轻轨穿楼" },
          desc: {
            en: "Metro Line 2 from Jiefangbei to Liziba. Photo spot for panda light rail & train-through-building sight.",
            zh: "地铁 2 号线解放碑 → 李子坝，打卡熊猫涂装轻轨、轻轨穿楼观景台",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "metro / person", zh: "地铁/人" } },
          image: "images/liziba.jpg",
        },
        {
          time: "11:30",
          type: "food",
          title: { en: "Brother Mao Old Duck Soup (Linjiang Branch)", zh: "毛哥老鸭汤（临江门店）" },
          desc: {
            en: "Paid separately—mild duck-soup hot pot near the riverfront.",
            zh: "自费，不计入固定花费 — 南滨路附近清淡老鸭汤。",
          },
          cost: null,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKwOlaW029oF7YmdOYj86NUimIZYCB8AC51aZS1hohg&s=10",
        },
        {
          time: "14:00",
          type: "transport",
          title: { en: "Taxi: Jiefangbei → Nanbin Road", zh: "打车：解放碑 → 南滨路" },
          desc: {
            en: "Taxi from Jiefangbei to Nanbin Road. Distance note: 800m straight line between Nanbin Road and Xiahaoli, 10-min gentle downhill walk; 5-min walk from Shangxinjie Metro Exit 5 to entrance.",
            zh: "打车：解放碑 → 南滨路，南滨路至下浩里直线 800 米，步行 10 分钟平缓下坡，地铁上新街站出站 5 分钟直达入口。",
          },
          cost: { cny: 8, usd: 1.18, note: { en: "one-way", zh: "单程" } },
          image: "https://photo.settour.com.tw/900x600/https://www.settour.com.tw/ss_img/info/location/CKG/G0/CKG0000141/CKG0000141_85348.jpg",
        },
        {
          time: "15:00–18:00",
          type: "attraction",
          title: { en: "Nanbin Road & Xiahaoli", zh: "南滨路 + 下浩里" },
          desc: {
            en: "Sunset viewing at Longmenhao View Platform.",
            zh: "龙门浩观景台赏渝中半岛日落。",
          },
          cost: null,
          image: "images/xiahaoli.jpg",
        },
        {
          time: "19:30",
          type: "transport",
          title: { en: "Taxi Back to Jiefangbei", zh: "打车返回解放碑" },
          desc: {
            en: "Taxi back to Jiefangbei — short rest at the hotel before Hongyadong.",
            zh: "打车返回解放碑，回酒店稍作休整后前往洪崖洞。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
        },
        {
          time: "20:00–21:30",
          type: "attraction",
          title: { en: "Hongyadong Night View", zh: "洪崖洞夜景" },
          desc: {
            en: "8-min walk from hotel. Best after sunset — stilt houses lit above the Jialing River. Jiefangbei square dancing nearby until 21:30.",
            zh: "从酒店步行 8 分钟，吊脚楼亮灯后最佳；解放碑步行街 19:00–21:30 广场舞，步行 3 分钟可达。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/10020s000000hqkwh48D9.jpg",
        },
      ],
    },
    {
      day: 10,
      city: { en: "Chongqing → Dazu", zh: "重庆 → 大足" },
      theme: { en: "Dazu Rock Carvings Day Trip", zh: "大足石刻一日游" },
      intensity: "compact",
      hotel: "kaiyuan",
      subtotal: { cny: 900, usd: 132.94 },
      summary: { en: "Baodingshan carvings · back by evening", zh: "宝顶山石窟 · 傍晚返渝" },
      activities: [
        {
          time: "08:00",
          type: "food",
          title: { en: "Hotel Breakfast", zh: "酒店早餐" },
          desc: {
            en: "Complimentary buffet before the Dazu day trip.",
            zh: "大足一日游前的酒店自助早餐，已含在住宿内。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
        },
        {
          time: "08:30",
          type: "transport",
          title: { en: "Taxi: Jiefangbei → Chongqing West", zh: "打车：解放碑 → 重庆西站" },
          desc: {
            en: "Taxi from Jiefangbei to Chongqing West Railway Station.",
            zh: "打车：解放碑 → 重庆西站。",
          },
          cost: { cny: 15, usd: 2.22, note: { en: "one-way", zh: "单程" } },
          image: "images/china-railway.png",
        },
        {
          time: "09:30",
          type: "transport",
          title: { en: "High-Speed Train to Dazu South", zh: "高铁至大足南站" },
          desc: {
            en: "Chongqing West → Dazu South on the Chengdu–Chongqing HSR (~50 min).",
            zh: "重庆西 → 大足南站成渝高铁，车程约 50 分钟。",
          },
          cost: { cny: 48, usd: 7.09, note: { en: "2nd class, per person", zh: "二等座/人" } },
          image: "images/china-railway.png",
        },
        {
          time: "10:30",
          type: "transport",
          title: { en: "Taxi: Dazu South → Baodingshan", zh: "打车：大足南站 → 宝顶山" },
          desc: {
            en: "Taxi from Dazu South Station to Baodingshan scenic area (~25 min).",
            zh: "大足南站 → 宝顶山景区，车程约 25 分钟。",
          },
          cost: { cny: 30, usd: 4.43, note: { en: "one-way", zh: "单程" } },
          image: "images/shuttle-bus.svg",
        },
        {
          time: "11:00–14:30",
          type: "attraction",
          title: { en: "Dazu Rock Carvings (Baodingshan)", zh: "大足石刻（宝顶山）" },
          desc: { en: "", zh: "" },
          cost: { cny: 115, usd: 16.99, note: { en: "Baodingshan / person", zh: "宝顶山/人" } },
          image: "images/dazu-rock-carvings.png",
        },
        {
          time: "15:00",
          type: "transport",
          title: { en: "Taxi: Baodingshan → Dazu South", zh: "打车：宝顶山 → 大足南站" },
          desc: {
            en: "Return taxi to Dazu South Station for the afternoon train.",
            zh: "返回大足南站，搭乘下午返程高铁。",
          },
          cost: { cny: 30, usd: 4.43, note: { en: "one-way", zh: "单程" } },
          image: "images/shuttle-bus.svg",
        },
        {
          time: "16:30",
          type: "transport",
          title: { en: "High-Speed Train to Chongqing West", zh: "高铁返重庆西" },
          desc: {
            en: "Dazu South → Chongqing West (~50 min).",
            zh: "大足南站 → 重庆西，车程约 50 分钟。",
          },
          cost: { cny: 48, usd: 7.09, note: { en: "2nd class, per person", zh: "二等座/人" } },
          image: "images/china-railway.png",
        },
        {
          time: "18:00",
          type: "transport",
          title: { en: "Taxi: Chongqing West → Jiefangbei", zh: "打车：重庆西 → 解放碑" },
          desc: {
            en: "Taxi back to Kaiyuan Mingting Hotel — 10-day itinerary complete.",
            zh: "返回开元名庭酒店，全部行程正式完结。",
          },
          cost: { cny: 15, usd: 2.22, note: { en: "one-way", zh: "单程" } },
          image: "images/china-railway.png",
        },
      ],
    },
  ],

  budgetBreakdown: {
    title: { en: "Required costs by day", zh: "每日固定消费" },
    subtitle: {
      en: "Required costs for two travelers—excludes snacks, souvenirs, optional meals, and paid breakfast in Chengdu",
      zh: "仅必付项目（双人）— 不含零食、伴手礼、自选正餐、酒水及成都酒店自费早餐",
    },
    days: [
      {
        day: 1,
        label: { en: "Day 1 · Chengdu", zh: "D1 成都" },
        items: [
          { label: { en: "IFS round-trip Panda Base shuttle", zh: "IFS 往返熊猫基地直通车" }, cny: 40, usd: 5.91 },
          { label: { en: "Panda Base entrance (×2)", zh: "熊猫基地门票（×2）" }, cny: 110, usd: 16.25 },
          { label: { en: "Panda Base internal shuttle (×2)", zh: "熊猫基地观光车（×2）" }, cny: 60, usd: 8.86 },
          { label: { en: "Panda Base lunch for two", zh: "熊猫基地双人午餐" }, cny: 120, usd: 17.72 },
          { label: { en: "IFS panda afternoon tea set", zh: "IFS 双人熊猫下午茶" }, cny: 260, usd: 38.4 },
          { label: { en: "Taxis (hotel→Jinli→hotel)", zh: "打车（酒店→锦里→酒店）" }, cny: 18, usd: 2.66 },
          { label: { en: "Panda Sleepy (2 nights, your share)", zh: "熊猫很困两晚分摊房价" }, cny: 600, usd: 88.62 },
        ],
        subtotal: { cny: 1208, usd: 178.42 },
      },
      {
        day: 2,
        label: { en: "Day 2 · Chengdu", zh: "D2 成都" },
        items: [
          { label: { en: "Metro fares", zh: "地铁" }, cny: 4, usd: 0.59 },
          { label: { en: "Panda creative banquet", zh: "宽窄巷子双人熊猫创意宴" }, cny: 200, usd: 29.54 },
          { label: { en: "Long Chaoshou for two (Wenshu)", zh: "文殊院龙抄手双人" }, cny: 50, usd: 7.39 },
          { label: { en: "Taxi to Jinsha Museum", zh: "打车至金沙遗址" }, cny: 20, usd: 2.95 },
          { label: { en: "Jinsha ticket + audio guide (×2)", zh: "金沙门票+英文讲解（×2）" }, cny: 200, usd: 29.54 },
          { label: { en: "Sichuan Opera two-person ticket", zh: "川剧变脸双人套票" }, cny: 99, usd: 14.61 },
          { label: { en: "Panda Sleepy (nightly share)", zh: "熊猫很困单日分摊房价" }, cny: 300, usd: 44.31 },
        ],
        subtotal: { cny: 873, usd: 128.93 },
      },
      {
        day: 3,
        label: { en: "Day 3 · Chengdu", zh: "D3 成都" },
        items: [
          { label: { en: "IFS round-trip Sanxingdui shuttle", zh: "IFS 往返三星堆直通车" }, cny: 132, usd: 19.5 },
          { label: { en: "Sanxingdui ticket + audio guide (×2)", zh: "三星堆门票+讲解（×2）" }, cny: 204, usd: 30.13 },
          { label: { en: "Panda Sleepy (nightly share)", zh: "熊猫很困单日分摊房价" }, cny: 300, usd: 44.31 },
        ],
        subtotal: { cny: 636, usd: 93.94 },
      },
      {
        day: 4,
        label: { en: "Day 4 · Chengdu → Jiuzhaigou", zh: "D4 成都→九寨沟" },
        items: [
          { label: { en: "High-speed rail Chengdu East–Huanglong Jiuzhai (×2)", zh: "成都东→黄龙九寨高铁（×2）" }, cny: 270, usd: 39.88 },
          { label: { en: "Shuttle to Jiuzhaigou gate (×2)", zh: "九寨站→九寨沟口接驳（×2）" }, cny: 102, usd: 15.07 },
          { label: { en: "Xingyu Hotel (nightly share)", zh: "星宇国际单日分摊房价" }, cny: 329, usd: 48.59 },
        ],
        subtotal: { cny: 701, usd: 103.54 },
      },
      {
        day: 5,
        label: { en: "Day 5 · Jiuzhaigou", zh: "D5 九寨沟" },
        items: [
          { label: { en: "Jiuzhaigou ticket + shuttle (×2)", zh: "九寨沟门票+观光车（×2）" }, cny: 560, usd: 82.71 },
          { label: { en: "Xingyu Hotel (nightly share)", zh: "星宇国际单日分摊房价" }, cny: 329, usd: 48.59 },
        ],
        subtotal: { cny: 889, usd: 131.31 },
      },
      {
        day: 6,
        label: { en: "Day 6 · Jiuzhaigou → Chengdu", zh: "D6 九寨沟→成都" },
        items: [
          { label: { en: "Shuttle Jiuzhaigou–Huanglong Jiuzhai (×2)", zh: "九寨沟口→九寨站接驳（×2）" }, cny: 102, usd: 15.07 },
          { label: { en: "High-speed rail to Chengdu East (×2)", zh: "九寨站→成都东高铁（×2）" }, cny: 270, usd: 39.88 },
          { label: { en: "Panda Sleepy (nightly share)", zh: "熊猫很困单日分摊房价" }, cny: 300, usd: 44.31 },
        ],
        subtotal: { cny: 672, usd: 99.26 },
      },
      {
        day: 7,
        label: { en: "Day 7 · Sichuan Museum → Chongqing", zh: "D7 川博→重庆" },
        items: [
          { label: { en: "Metro to Sichuan Museum (×2)", zh: "地铁至四川省博物院（×2）" }, cny: 4, usd: 0.59 },
          { label: { en: "Taxi to Chengdu East", zh: "打车至成都东站" }, cny: 20, usd: 2.95 },
          { label: { en: "High-speed rail Chengdu East–Chongqing West (×2)", zh: "成都东→重庆西高铁（×2）" }, cny: 296, usd: 43.72 },
          { label: { en: "Metro Chongqing West–Jiefangbei (×2)", zh: "地铁重庆西→解放碑（×2）" }, cny: 6, usd: 0.89 },
          { label: { en: "Kaiyuan Mingting (nightly share)", zh: "开元名庭单日分摊房价" }, cny: 388, usd: 57.31 },
        ],
        subtotal: { cny: 714, usd: 105.46 },
      },
      {
        day: 8,
        label: { en: "Day 8 · Wulong Day Trip", zh: "D8 武隆一日游" },
        items: [
          { label: { en: "Wulong round-trip shuttle (×2)", zh: "武隆往返直通车（×2）" }, cny: 260, usd: 38.4 },
          { label: { en: "Three Natural Bridges combo (×2)", zh: "天生三桥套票（×2）" }, cny: 310, usd: 45.79 },
          { label: { en: "Kaiyuan Mingting (nightly share)", zh: "开元名庭单日分摊房价" }, cny: 388, usd: 57.31 },
        ],
        subtotal: { cny: 958, usd: 141.5 },
      },
      {
        day: 9,
        label: { en: "Day 9 · Chongqing", zh: "D9 重庆山城打卡" },
        items: [
          { label: { en: "Metro Jiefangbei–Liziba (×2)", zh: "地铁解放碑→李子坝（×2）" }, cny: 4, usd: 0.59 },
          { label: { en: "Taxi Jiefangbei → Nanbin Road", zh: "打车：解放碑→南滨路" }, cny: 8, usd: 1.18 },
          { label: { en: "Kaiyuan Mingting (nightly share)", zh: "开元名庭单日分摊房价" }, cny: 388, usd: 57.31 },
        ],
        subtotal: { cny: 400, usd: 59.08 },
      },
      {
        day: 10,
        label: { en: "Day 10 · Dazu Rock Carvings", zh: "D10 大足石刻一日游" },
        items: [
          { label: { en: "Taxi Jiefangbei → Chongqing West", zh: "打车：解放碑→重庆西" }, cny: 15, usd: 2.22 },
          { label: { en: "High-speed rail Chongqing West–Dazu South (×2)", zh: "重庆西→大足南高铁（×2）" }, cny: 96, usd: 14.18 },
          { label: { en: "Taxi Dazu South ↔ Baodingshan (round trip)", zh: "大足南↔宝顶山打车往返" }, cny: 60, usd: 8.86 },
          { label: { en: "Baodingshan admission (×2)", zh: "宝顶山门票（×2）" }, cny: 230, usd: 33.97 },
          { label: { en: "High-speed rail Dazu South–Chongqing West (×2)", zh: "大足南→重庆西高铁（×2）" }, cny: 96, usd: 14.18 },
          { label: { en: "Taxi Chongqing West → Jiefangbei", zh: "打车：重庆西→解放碑" }, cny: 15, usd: 2.22 },
          { label: { en: "Kaiyuan Mingting (nightly share)", zh: "开元名庭单日分摊房价" }, cny: 388, usd: 57.31 },
        ],
        subtotal: { cny: 900, usd: 132.94 },
      },
    ],
    optional: {
      title: { en: "Optional extras", zh: "自费项目" },
      items: [
        { en: "D1 Times Square Block A panda souvenirs & gifts", zh: "D1 时代广场A座熊猫文创伴手礼" },
        { en: "D1 Jiuyan Bridge optional evening (~80 CNY/person cover + drinks + taxis)", zh: "D1 九眼桥可选晚间：清吧人均约 80 CNY + 酒水 + 打车" },
        { en: "D1–D3 Panda Sleepy Hotel breakfast for two (3 nights): 228 CNY / $33.68", zh: "D1–D3 成都熊猫很困 3 晚双人早餐：228 CNY / 33.68 USD" },
        { en: "D1–D10 Everyday dining: regular meals, street snacks, local dishes & beverages", zh: "D1–D10 日常餐饮：正餐、小吃、饮品及江湖菜" },
        { en: "Chongqing hot pot with a mild or clear broth—any evening in Chongqing", zh: "重庆鸳鸯火锅（清汤/微辣）— 渝期间任一晚间自选" },
        { en: "D9 Yangtze River Cableway round-trip for two (~100 CNY / $14.77)", zh: "D9 长江索道往返（×2）：约 100 CNY / 14.77 USD" },
        { en: "D8 Longshui Gorge add-on (~210 CNY / $31.02 for two)", zh: "D8 龙水峡地缝加游（若补游武隆）：双人约 210 CNY / 31.02 USD" },
        { en: "D3 Sichuan local specialty souvenirs (evening shopping)", zh: "D3 四川特产伴手礼" },
        { en: "D5 Legend of Jiuzhai (九寨千古情) evening for two — theme park + show, audience seats ~540 CNY / $79.76 (separate from valley ticket; book ahead)", zh: "D5 晚间《九寨千古情》（主题园+主秀，双人观众席）：约 540 CNY / 79.76 USD（与白天国家公园门票无关，旺季提前预约）" },
        { en: "D7 Huashi Wanza Noodles for two (34CNY): 2 dry pea noodles, no chili, soft-boiled egg each", zh: "D7 花市豌杂面（民生路总店）双人 34 CNY：两碗干溜豌杂面、不要辣、各加溏心煎蛋" },
        { en: "D9 Brother Mao Old Duck Soup lunch for two (70/person): 140 CNY / $20.68", zh: "D9 毛哥老鸭汤（临江门店）双人午餐：140 CNY / 20.68 USD" },
        { en: "D10 Lunch near Dazu scenic area", zh: "D10 大足景区附近午餐" },
      ],
    },
  },

  visa: {
    title: { en: "China Tourist (L) Visa for U.S. Citizens", zh: "美国公民中国旅游签证指南" },
    subtitle: {
      en: "Required for U.S. travelers flying round-trip from the United States—American passport holders are not visa-exempt for China",
      zh: "美国往返中国须办 L 类旅游签证 — 美国护照不在中国单方面免签范围内",
    },
    required: {
      en: "U.S. citizens need an L (tourist) visa for this 10-day Sichuan–Chongqing trip. Start the application 4–8 weeks before departure.",
      zh: "美国公民赴川渝 10 天行程须提前办理 L 类（旅游）签证，建议出发前 4–8 周申请。",
    },
    steps: [
      {
        en: "Apply online through COVA (launched September 30, 2025) via the Chinese embassy or consulate that serves your U.S. state",
        zh: "在美国驻华使领馆管辖范围内，通过 COVA 在线签证系统（2025年9月30日启用）填写申请",
      },
      {
        en: "Choose Ordinary Visa → L (Tourism). Request a multiple-entry or 10-year visa if you qualify",
        zh: "选择普通签证 → L 类（旅游），符合条件可申请多次/10年有效",
      },
      {
        en: "Upload your passport bio page, a signed Visa Application Statement, and proof of U.S. residence",
        zh: "上传护照信息页、签字的签证申请声明、美国居住证明",
      },
      {
        en: "When the status reads “Passport to be submitted,” bring your passport and printed barcode page to the CVASC or consulate in person",
        zh: "状态显示「待递交护照」后，携带护照原件与打印条码页至签证中心或领馆递交",
      },
      {
        en: "Processing usually takes about four business days. Pay the visa fee when you pick up your passport",
        zh: "常规审理约 4 个工作日，取证时缴费",
      },
    ],
    documents: {
      title: { en: "Documents to prepare", zh: "主要材料" },
      upload: [
        {
          en: "Passport valid at least six months beyond your trip, with at least two blank visa pages",
          zh: "护照有效期距行程结束 6 个月以上，至少 2 页空白签证页",
        },
        {
          en: "Signed Visa Application Statement (handwritten signature required)",
          zh: "签字的签证申请声明（须手写签名）",
        },
        {
          en: "Proof of U.S. residence—driver's license, utility bill, or bank statement",
          zh: "美国居住证明：驾照、水电账单或银行账单",
        },
        {
          en: "Copy of a previous Chinese visa, if you have one",
          zh: "曾持有的中国签证复印件（如有）",
        },
      ],
      notRequired: {
        title: {
          en: "Since January 1, 2024—these are generally not required for an L visa applied for in the U.S.:",
          zh: "自 2024年1月1日起 — 在美国申请 L 类旅游签通常无需：",
        },
        items: [
          { en: "Round-trip flight reservation", zh: "往返机票预订单" },
          { en: "Hotel bookings", zh: "酒店预订单" },
          { en: "Detailed itinerary or invitation letter", zh: "详细行程单或邀请函" },
        ],
      },
    },
    links: [
      { label: { en: "Chinese Embassy in the United States", zh: "中国驻美国大使馆" }, url: "https://us.china-embassy.gov.cn/eng/lsfw/zj/" },
      { label: { en: "COVA online application", zh: "COVA 在线申请系统" }, url: "https://cova.mfa.gov.cn" },
      { label: { en: "Consulate General of China, New York", zh: "纽约总领馆" }, url: "https://newyork.china-consulate.gov.cn/eng/" },
      { label: { en: "Consulate General of China, Chicago", zh: "芝加哥总领馆" }, url: "https://chicago.china-consulate.gov.cn/eng/" },
      { label: { en: "Consulate General of China, San Francisco", zh: "旧金山总领馆" }, url: "https://sanfrancisco.china-consulate.gov.cn/eng/" },
    ],
    note: {
      en: "Requirements vary by applicant. Always confirm the latest rules with the consulate that covers your home state before you apply.",
      zh: "签证审理因个案而异，请以所属领馆辖区最新要求为准。",
    },
  },

  downloads: {
    groups: [
      {
        id: "itinerary",
        title: { en: "Itinerary Document", zh: "行程 Word 文档" },
        items: [
          {
            file: { zh: "downloads/itinerary-zh.docx", en: "downloads/itinerary-en.docx" },
            title: { en: "10-Day Sichuan-Chongqing Itinerary", zh: "10 天 9 晚川渝熊猫主题行程" },
            desc: {
              en: "Full daily schedule, hotels, budget & tips",
              zh: "含每日安排、酒店、预算与出行提示",
            },
          },
        ],
      },
      {
        id: "visa",
        title: { en: "Visa Guide", zh: "签证指南" },
        items: [
          {
            file: { zh: "downloads/visa-l-timing-zh.docx", en: "downloads/visa-l-timing-en.docx" },
            title: { en: "L Visa Application Timing Guide", zh: "中国旅游 L 签证办理时间" },
            desc: {
              en: "When to start, how long processing takes, and pitfalls to avoid—ideal for offline reading",
              zh: "何时启动申请、审理时长与避坑要点，适合离线阅读与打印",
            },
          },
        ],
      },
    ],
  },

  ui: {
    en: {
      appsTitle: "Apps to Install Before You Go",
      appsSubtitle: "Set these up at home—payments and navigation are much easier once you land",
      hotelsTitle: "Hotels",
      primerTitle: "Where You're Going",
      primerHint: "Tap a card to expand · Underlined names jump to that stop in your itinerary",
      primerAnalogyLabel: "U.S. comparison",
      primerHonorsLabel: "Known for",
      primerHistoryLabel: "History in brief",
      primerInventionsLabel: "Traditions & innovations",
      primerTripLabel: "On this trip",
      highlightsTitle: "Trip Highlights",
      highlightsHint: "Read reviews on TripAdvisor",
      ticketLabel: "Admission",
      freeAdmission: "Free",
      daysTitle: "Day-by-Day Itinerary",
      drillHint: "Tap a day to expand · Tap any stop for photos and details",
      spotNavTitle: "Places & Meals",
      spotNavHint: "Jump to day",
      sectionNavTitle: "On this page",
      sectionNavWelcome: "Welcome",
      budgetTitle: "Budget Overview",
      tipsTitle: "Travel Essentials",
      tipsHint: "Tap a section to expand",
      preDepartureTitle: "48 Hours Before Departure",
      preDepartureHint: "Tap to expand the checklist",
      preDepartureMore: "Full guide",
      intensityLabels: {
        relaxed: "Relaxed pace",
        standard: "Standard",
        compact: "Full day",
      },
      totalFixed: "Required costs (2 travelers)",
      budgetCap: "Budget cap",
      remaining: "Remaining buffer",
      perPerson: "per person",
      setForTwo: "for two",
      dayLabel: "Day",
      viewDetails: "Details",
      viewReviews: "TripAdvisor reviews",
      activityOverview: "About",
      close: "Close",
      cost: "Cost",
      optionalLabel: "Optional",
      typeLabels: { transport: "Getting there", attraction: "Sightseeing", food: "Food", hotel: "Hotel" },
      downloadIos: "App Store",
      downloadAndroid: "Google Play",
      watchVideo: "Watch Video",
      budgetBreakdownTitle: "Required costs by day",
      budgetBreakdownSubtitle: "Tap a day for a line-item breakdown",
      subtotalLabel: "Day total",
      grandTotalLabel: "Trip total (2 travelers)",
      optionalTitle: "Optional extras",
      visaSubtitle: "For U.S. citizens · Apply before you travel",
      officialLinks: "Official links",
      documentsUpload: "Upload with your online application",
      documentsNotRequired: "Usually not required",
      stars: "stars",
      nights: "nights",
      downloadsTitle: "Downloads",
      downloadsHint: "Itinerary and visa timing guides for offline reading and printing",
      downloadBtn: "Download .docx",
      contactTitle: "Trip Inquiry",
      contactHint: "Send a message—we'll reply by email. Your details are used only to respond.",
      contactName: "Name",
      contactPhone: "Phone (optional)",
      contactEmail: "Email",
      contactMessage: "Message",
      contactSubmit: "Send message",
      contactSending: "Sending…",
      contactSuccess: "Thanks! Your message was sent—we'll get back to you soon.",
      contactError: "Something went wrong. Please try again in a moment.",
      contactNotConfigured: "The contact form isn't set up yet. Ask the site owner to add a Formspree form ID.",
      contactNamePlaceholder: "Your name",
      contactPhonePlaceholder: "Phone number (with country code)",
      contactEmailPlaceholder: "you@example.com",
      contactMessagePlaceholder: "Questions about the itinerary, visa, hotels, or anything else…",
      pwaInstallTitle: "Install app",
      pwaInstallHint: "Add to your home screen for offline access",
      pwaInstallBtn: "Install",
      pwaInstallDismiss: "Not now",
      pwaInstallSuccess: "Installed! Find the app on your home screen.",
      installQrTitle: "Open on your phone",
      installQrHint: "Scan with your camera to open the trip, then add it to your home screen.",
      footerTagline: "Made with care for Coralia D. Hope you have a wonderful trip",
    },
    zh: {
      appsTitle: "出行前必备 APP",
      appsSubtitle: "建议出发前完成安装与绑定，落地后支付与导航更省心",
      hotelsTitle: "酒店",
      primerTitle: "目的地速览",
      primerHint: "点击卡片展开详情 · 带下划线的名称可跳转至对应行程",
      primerAnalogyLabel: "美国读者参照",
      primerHonorsLabel: "知名称号",
      primerHistoryLabel: "历史亮点",
      primerInventionsLabel: "著名创造与传统",
      primerTripLabel: "本行程涉及",
      highlightsTitle: "行程亮点",
      highlightsHint: "TripAdvisor 评价（英文）",
      ticketLabel: "门票",
      freeAdmission: "免费",
      daysTitle: "每日行程",
      drillHint: "点击日期展开当日安排 · 点击活动查看详情与图片",
      spotNavTitle: "景点与美食",
      spotNavHint: "跳转至对应日期",
      sectionNavTitle: "页面导航",
      sectionNavWelcome: "欢迎",
      budgetTitle: "预算汇总",
      tipsTitle: "出行提示",
      tipsHint: "点击标题展开详情",
      preDepartureTitle: "行前 48 小时",
      preDepartureHint: "点击标题展开核对清单",
      preDepartureMore: "查看完整指南",
      intensityLabels: {
        relaxed: "轻松",
        standard: "标准",
        compact: "紧凑",
      },
      totalFixed: "固定总花费（双人）",
      budgetCap: "预算上限",
      remaining: "灵活消费余额",
      perPerson: "人均",
      setForTwo: "双人",
      dayLabel: "第",
      viewDetails: "查看详情",
      viewReviews: "TripAdvisor 评价",
      activityOverview: "简介",
      close: "关闭",
      cost: "费用",
      optionalLabel: "可选",
      typeLabels: { transport: "交通", attraction: "景点", food: "餐饮", hotel: "酒店" },
      downloadIos: "App Store",
      downloadAndroid: "Google Play",
      watchVideo: "观看视频",
      budgetBreakdownTitle: "每日固定消费",
      budgetBreakdownSubtitle: "点击日期查看分项费用",
      subtotalLabel: "当日合计",
      grandTotalLabel: "全行程固定总花费（双人）",
      optionalTitle: "自费项目",
      visaSubtitle: "美国公民 · 出行前办理",
      officialLinks: "官方链接",
      documentsUpload: "在线申请时上传",
      documentsNotRequired: "通常无需提交",
      stars: "星",
      nights: "晚",
      downloadsTitle: "下载资料",
      downloadsHint: "行程与签证办理时间指南，可离线阅读与打印",
      downloadBtn: "下载 .docx",
      contactTitle: "行程咨询",
      contactHint: "欢迎留言，我会通过邮件回复。您的信息仅用于回复咨询。",
      contactName: "姓名",
      contactPhone: "电话（选填）",
      contactEmail: "邮箱",
      contactMessage: "留言内容",
      contactSubmit: "发送留言",
      contactSending: "发送中…",
      contactSuccess: "感谢留言！我们已收到，会尽快回复。",
      contactError: "发送失败，请稍后再试。",
      contactNotConfigured: "联系表单尚未配置，请联系网站管理员添加 Formspree 表单 ID。",
      contactNamePlaceholder: "您的姓名",
      contactPhonePlaceholder: "电话号码（含国家/区号）",
      contactEmailPlaceholder: "you@example.com",
      contactMessagePlaceholder: "咨询行程、签证、酒店或其他问题…",
      pwaInstallTitle: "安装到手机",
      pwaInstallHint: "添加到主屏幕，离线也能查看行程",
      pwaInstallBtn: "安装",
      pwaInstallDismiss: "暂不",
      pwaInstallSuccess: "安装成功！请在本机主屏幕查看图标。",
      installQrTitle: "手机安装",
      installQrHint: "用手机相机或微信扫码打开行程，再添加到主屏幕即可。",
      footerTagline: "Coralia D. 专属旅程 · 愿一路皆美好",
    },
  },
};

/** Short bilingual overviews for attractions & restaurants in the daily itinerary. */
const ACTIVITY_OVERVIEWS = {
  "Chengdu Panda Breeding Base": {
    en: "World-famous panda research center — see giant pandas and the moon cub nursery up close; pandas are most active in the morning. In-park shuttle bus is included in your ticket.",
    zh: "世界知名大熊猫科研基地，可近距离观赏成年熊猫与月亮产房幼崽；上午活动最活跃，园区观光车费用已含于门票。",
  },
  "Panda Panoramic Restaurant": {
    en: "The only full-service restaurant inside the panda base with panoramic windows overlooking the enclosures — dine while watching pandas, with non-spicy options.",
    zh: "熊猫基地内唯一全景餐厅，落地窗外即是熊猫活动区，可一边用餐一边看熊猫，有无辣菜品可选。",
  },
  "IFS Sunset Bistro Panda Afternoon Tea": {
    en: "Panda-themed afternoon tea on IFS 7F, steps from the iconic climbing panda sculpture — photogenic set menus in a trendy Chengdu landmark.",
    zh: "IFS 7 楼熊猫主题下午茶，紧邻网红爬墙大熊猫雕塑，套餐精致上镜，是成都地标式体验。",
  },
  "Times Square Block A Panda Souvenirs": {
    en: "Wholesale panda souvenir hub hidden near IFS — licensed plush, blind boxes, and Sichuan gifts at roughly one-third of tourist-street prices.",
    zh: "IFS 旁隐藏的熊猫文创批发楼，正版公仔、盲盒、四川特产齐全，价格约为景区街边的三分之一。",
  },
  "Jinli Ancient Street": {
    en: "Ming–Qing style pedestrian lane (Ming 1368–1644; Qing 1644–1912) beside Wuhou Shrine — red lanterns, folk crafts, and Chengdu street snacks; most atmospheric after dark.",
    zh: "武侯祠旁明清风格古街（明 1368–1644 年；清 1644–1912 年），红灯笼、民间手艺与成都小吃云集，华灯初上时最有氛围。",
  },
  "Jiuyan Bridge Riverside Bar": {
    en: "Anshun Bridge spans the Jin River with neon reflections at night; riverside folk bars offer live music and mild fruit wine in a relaxed local scene.",
    zh: "安顺廊桥横跨锦江，夜景灯光倒映江面；沿岸民谣清吧可听 live 音乐，果酒清淡，氛围轻松本地。",
  },
  "People's Park": {
    en: "Chengdu's oldest public park (since 1911) — square dancing, the famous marriage market, and century-old Heming Teahouse gaiwan tea culture.",
    zh: "成都历史最悠久的城市公园（1911 年建），可观赏广场舞、独特相亲角，以及鹤鸣茶社百年盖碗茶文化。",
  },
  "Tingxiang Mansion Panda Banquet": {
    en: "Private dining in Wide & Narrow Alleys with panda-shaped creative dishes — fully customizable non-spicy menu in a Qing-dynasty (1644–1912) courtyard setting.",
    zh: "宽窄巷子内私房菜馆，熊猫造型创意菜可全桌无辣定制，在清代（1644–1912 年）院落环境中用餐，仪式感强。",
  },
  "Jinsha Site Museum": {
    en: "Shu Kingdom site (c. 1200–650 BCE) — home of the golden Sun Bird (China's cultural heritage logo) and exquisite jade and gold artifacts.",
    zh: "古蜀王国遗址（约公元前 1200–650 年），出土太阳神鸟金饰（中国文化遗产标志）及精美玉器、金器，是成都文明的源头。",
  },
  "Long Chaoshou (Wenshu Branch)": {
    en: "Chengdu's classic wonton chain since 1941 — clear-broth wontons are light, mild, and perfect for a non-spicy local dinner near Wenshu Monastery.",
    zh: "1941 年创立的老字号龙抄手，清汤抄手清淡鲜美，适合文殊院附近的无辣本地晚餐。",
  },
  "Sichuan Opera at Liyuan Club Wenshu Branch": {
    en: "Intimate 70-min Sichuan Opera — face-changing, fire-breathing, and long-spout tea pouring in a small traditional venue.",
    zh: "70 分钟精品川剧，变脸、吐火、长嘴壶茶艺一网打尽，在小剧场近距离欣赏非遗技艺。",
  },
  "Sanxingdui Museum": {
    en: "One of China's greatest archaeological discoveries (Sanxingdui culture, c. 1200–1000 BCE) — towering bronze masks, gold scepters, and a mysterious civilization unlike anything else in Chinese history.",
    zh: "中国考古最震撼发现之一（三星堆文化，约公元前 1200–1000 年），青铜大面具、金杖与神秘古蜀文明，视觉冲击力极强。",
  },
  "Jiuzhaigou Valley": {
    en: "Jiuzhaigou lies in the Ngawa (Aba) Tibetan and Qiang Autonomous Prefecture—named for nine Tibetan villages once along the gorges. Tibetan-style architecture around the gate town; Day 4 hotel includes complimentary Tibetan costume photos. UNESCO site since 1992; affected by the 2008 Wenchuan earthquake and later restored. Turquoise lakes and waterfalls at high altitude; mid-to-late October (Oct 15–30 on this trip) brings peak red-and-gold foliage. Shuttle buses and boardwalks cover the valley without strenuous hiking—layer up for cool mornings.",
    zh: "九寨沟位于阿坝藏族羌族自治州，沟名来自沟内九个藏族村寨；沟口可见藏式建筑，D4 酒店含免费藏服拍照。1992 年世界自然遗产；2008 年汶川大地震波及本区，后经修复现正常开放。钙华海子碧蓝；本行程在 10 月 15–30 日，彩林正盛。观光车与木栈道覆盖全沟，无需高强度徒步，早晚较凉请添衣。",
  },
  "Legend of Jiuzhai Show": {
    en: "Songcheng’s Tibetan-Qiang theme park in Zhangzha gate town—next to Jiuzhaigou Valley but a separate ticket. Inside: Tibetan-style streets, pop-up acts, and snack stalls—mostly flat, easy walking.",
    zh: "宋城在沟口漳扎镇打造的藏羌主题园，与九寨沟国家公园相邻但门票独立；园内有藏羌街景、快闪小演出与小吃街，以平路为主。",
  },
  "Sichuan Museum": {
    en: "Sichuan's top provincial museum — free entry, strong collection of Shu relics, Tibetan artifacts, and Zhang Daqian paintings.",
    zh: "四川省顶级综合博物馆，免费预约，古蜀文物、藏文化、张大千书画收藏突出。",
  },
  "Chengdu Museum": {
    en: "Free city museum at Tianfu Square tracing 4,500 years of Chengdu history — from ancient Shu cultures (from c. 4500 BCE) to modern teahouse culture.",
    zh: "天府广场免费城市博物馆，从约公元前 4500 年起的古蜀文化到现代茶馆文化，互动展陈讲述成都城市通史。",
  },
  "Bai Xiang Ju · Shiba Ti · Huashi Wanza Noodles": {
    en: "Huashi Wanza Noodles is a Chongqing staple — dry pea noodles with minced pork, customizable no-chili; paired with Bai Xiang Ju cliffside apartments and Shiba Ti's restored steps.",
    zh: "花市豌杂面是重庆招牌干溜豌杂面，可不要辣；搭配白象居魔幻楼群与十八梯老街步行，感受立体山城。",
  },
  "Hongyadong Night View": {
    en: "Chongqing's iconic 11-story stilt-house complex lit above the Jialing River — looks like a scene from Spirited Away; free to explore, best at dusk.",
    zh: "重庆标志性吊脚楼群，嘉陵江畔亮灯后如《千与千寻》场景，免费参观，黄昏至夜间最佳。",
  },
  "Three Natural Bridges": {
    en: "Three natural stone arch bridges spanning a forested gorge — elevator access avoids the steepest climbs.",
    zh: "三座天生石拱桥横跨峡谷；观光电梯减少爬坡，适合慢行观赏。",
  },
  "Longshui Gorge": {
    en: "A narrow limestone gorge with elevator descent, gentle downhill boardwalks, and the dramatic Galaxy Waterfall — cooler and less crowded than the bridges.",
    zh: "窄缝式石灰岩峡谷，电梯下谷、平缓下坡栈道，银河飞瀑壮观；比天生三桥更清凉人少。",
  },
  "Liziba Light Rail Through Building": {
    en: "Chongqing's famous train-through-building sight — watch panda-painted Line 2 light rail pass through a residential block from the viewing platform.",
    zh: "重庆网红轻轨穿楼打卡点，观景台可拍摄熊猫涂装 2 号线列车穿楼而过的经典画面。",
  },
  "Hotel Breakfast": {
    en: "Complimentary buffet at Kaiyuan Mingting — a good start before a full day of Chongqing sightseeing.",
    zh: "开元名庭免费自助早餐，为山城全天打卡补充能量。",
  },
  "Brother Mao Old Duck Soup (Linjiang Branch)": {
    en: "Light duck-soup hotpot popular with locals — mild broth, tender duck, customizable spice level; a non-spicy-friendly choice on Nanbin Road.",
    zh: "本地人气老鸭汤，汤底清淡、鸭肉软烂，辣度可调，是南滨路一带的无辣友好选择。",
  },
  "Nanbin Road & Xiahaoli": {
    en: "Nanbin Road faces Yuzhong Peninsula across the Yangtze — Xiahaoli is a restored hillside lane with cafés and Longmenhao sunset views over Chongqing's skyline.",
    zh: "南滨路隔江对望渝中半岛；下浩里文艺老街有咖啡馆与龙门浩观景台，可赏重庆天际线日落。",
  },
  "Hotel Breakfast & Departure": {
    en: "Early hotel buffet before the Dazu day trip — included in your stay.",
    zh: "大足一日游前的酒店自助早餐，已含在住宿内。",
  },
  "Dazu Rock Carvings (Baodingshan)": {
    en: "Cliff sculptures from the late Tang through Song dynasties (9th–13th centuries; Tang 618–907 CE, Song 960–1279 CE) — the Thousand-Hand Guanyin and themed grotto clusters at Baodingshan are among China's finest Buddhist rock art.",
    zh: "唐至宋代（9–13 世纪；唐 618–907 年，宋 960–1279 年）摩崖造像 — 宝顶山千手观音等石窟群为中国佛教石刻艺术巅峰之一。",
  },
};

/** UNESCO World Heritage metadata keyed by English activity title. */
const UNESCO_HERITAGE = {
  "Jiuzhaigou Valley": { kind: "natural", year: 1992 },
  "Sanxingdui Museum": { kind: "cultural", year: 2024 },
  "Jinsha Site Museum": { kind: "cultural", year: 2024 },
  "Three Natural Bridges": { kind: "natural", year: 2007, series: { en: "South China Karst", zh: "南方喀斯特" } },
  "Longshui Gorge": { kind: "natural", year: 2007, series: { en: "South China Karst", zh: "南方喀斯特" } },
  "Dazu Rock Carvings (Baodingshan)": { kind: "cultural", year: 1999 },
};

/** Verified TripAdvisor pages (manual lookup, g297463 Chengdu geo). */
const ACTIVITY_REVIEWS = {
  "Chengdu Panda Breeding Base":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d457089-Reviews-Giant_Panda_Breeding_Research_Base_Xiongmao_Jidi-Chengdu_Sichuan.html",
  "Panda Panoramic Restaurant":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d457089-Reviews-Giant_Panda_Breeding_Research_Base_Xiongmao_Jidi-Chengdu_Sichuan.html",
  "IFS Sunset Bistro Panda Afternoon Tea":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d15671160-Reviews-Taikoo_Li-Chengdu_Sichuan.html",
  "Times Square Block A Panda Souvenirs":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d5115902-Reviews-Chunxi_Road_Pedestrian_Street-Chengdu_Sichuan.html",
  "Jinli Ancient Street":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d1832090-Reviews-Jinli_Pedestrian_Street-Chengdu_Sichuan.html",
  "Jiuyan Bridge Riverside Bar":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d9757726-Reviews-Anshun_Bridge_Dongmen_Bridge-Chengdu_Sichuan.html",
  "Wide & Narrow Alleys":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d1832089-Reviews-Kuanzhai_Alley-Chengdu_Sichuan.html",
  "Walk to Wide & Narrow Alleys":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d1832089-Reviews-Kuanzhai_Alley-Chengdu_Sichuan.html",
  "People's Park":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d546614-Reviews-Chengdu_Renmin_Park-Chengdu_Sichuan.html",
  "Long Chaoshou (Wenshu Branch)":
    "https://www.tripadvisor.com/Restaurant_Review-g297463-d1217812-Reviews-Longchaoshou-Chengdu_Sichuan.html",
  "Jinsha Site Museum":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d1769021-Reviews-Jinsha_Site_Museum-Chengdu_Sichuan.html",
  "Sanxingdui Museum":
    "https://www.tripadvisor.com/Attraction_Review-g1152585-d457099-Reviews-Guanghan_Sanxingdui_Museum-Guanghan_Sichuan.html",
  "Jiuzhaigou Valley":
    "https://www.tripadvisor.com/Attraction_Review-g303770-d319081-Reviews-Jiuzhaigou_Natural_Reserve-Jiuzhaigou_County_Sichuan.html",
  "Legend of Jiuzhai Show":
    "https://www.tripadvisor.com/Attraction_Review-g303770-d8705179-Reviews-Jiuzhai_Romance_Park-Jiuzhaigou_County_Ngawa_Tibetan_and_Qiang_Autonomous_Prefecture.html",
  "Sichuan Museum":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d1824371-Reviews-Sichuan_Museum-Chengdu_Sichuan.html",
  "Chengdu Museum":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d10813335-Reviews-Chengdu_Museum_New_Building-Chengdu_Sichuan.html",
  "Bai Xiang Ju · Shiba Ti · Huashi Wanza Noodles":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d10257051-Reviews-Shiba_Ti-Chongqing.html",
  "Hongyadong Night View":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d1814790-Reviews-Hongya_Cave-Chongqing.html",
  "Three Natural Bridges":
    "https://www.tripadvisor.com/Attraction_Review-g1372315-d1814702-Reviews-Wulong_Tiankeng_Three_Bridges-Wulong_County.html",
  "Longshui Gorge":
    "https://www.tripadvisor.com/Attraction_Review-g1372315-d2068750-Reviews-Chongqing_Longshuixia_Gap-Wulong_County.html",
  "Yangtze River Cableway":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d6207908-Reviews-Yangtze_River_Cableway-Chongqing.html",
  "Liziba Station":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d15758086-Reviews-Liziba_Station-Chongqing.html",
  "Liziba Light Rail Through Building":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d15758086-Reviews-Liziba_Station-Chongqing.html",
  "Xiahaoli Old Street":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d5302833-Reviews-LongMenHao_ShangYeJie_SenLin_LongMen_HaoYue_Nan-Chongqing.html",
  "Nanbin Road & Xiahaoli":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d5302833-Reviews-LongMenHao_ShangYeJie_SenLin_LongMen_HaoYue_Nan-Chongqing.html",
  "Dazu Rock Carvings":
    "https://www.tripadvisor.com/Attraction_Review-g659303-d325274-Reviews-Dazu_Rock_Carving-Dazu_County_Chongqing.html",
  "Dazu Rock Carvings (Baodingshan)":
    "https://www.tripadvisor.com/Attraction_Review-g659303-d325274-Reviews-Dazu_Rock_Carving-Dazu_County_Chongqing.html",
};

ITINERARY.highlights.forEach((h) => {
  const url = ACTIVITY_REVIEWS[h.reviewKey];
  if (url) h.reviewUrl = url;
});

ITINERARY.days.forEach((day) => {
  day.activities.forEach((act) => {
    if (act.type === "attraction" || act.type === "food") {
      const overview = ACTIVITY_OVERVIEWS[act.title.en];
      if (overview) act.overview = overview;
    }
    const heritage = UNESCO_HERITAGE[act.title.en];
    if (heritage) act.heritage = heritage;
    const review = ACTIVITY_REVIEWS[act.title.en];
    if (!review || act.reviews?.length) return;
    if (Array.isArray(review)) act.reviews = review;
    else if (!act.reviewUrl) act.reviewUrl = review;
  });
});
