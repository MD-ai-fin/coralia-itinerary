const ITINERARY = {
  meta: {
    title: { en: "Coralia's Panda Adventure", zh: "Coralia 的熊猫之旅" },
    subtitle: {
      en: "10 Days · 9 Nights · Sichuan & Chongqing",
      zh: "10 天 9 晚 · 四川与重庆",
    },
    traveler: {
      en: "An unforgettable journey for two · Mild flavors · Easy pace · September",
      zh: "一场属于两个人的难忘旅程 · 清淡饮食 · 轻松慢行 · 九月",
    },
    exchangeRate: "1 CNY = 0.1477 USD",
    build: "2026-07-26dh",
    budget: {
      total: { cny: 9179, usd: 1355.74 },
      cap: { cny: 9820, usd: 1449.41 },
      remaining: { cny: 641, usd: 93.67 },
    },
  },

  overseasAccess: {
    title: {
      en: "Accessing Overseas Apps While in China",
      zh: "在中国访问中国境外的应用",
    },
    desc: {
      en: "No VPN needed. Complete ONE of these before departure:",
      zh: "无需 VPN，出发前完成以下任一操作即可：",
    },
    options: [
      {
        en: "Activate US carrier international roaming — overseas apps work automatically in China",
        zh: "开通美国运营商国际漫游，落地中国后自动使用 Google、Instagram 等",
      },
      {
        en: "Purchase an international travel eSIM — legal access to global platforms with no legal risk",
        zh: "购买国际通用 eSIM 卡，合法使用境外平台，无网络限制、无法律风险",
      },
    ],
  },

  apps: [
    {
      id: "amap",
      name: { en: "Amap Global", zh: "高德地图 Amap Global" },
      tag: { en: "#1 Navigation", zh: "首选导航" },
      desc: {
        en: "Full English UI & voice nav. Offline maps for Jiuzhaigou. Register with US phone number.",
        zh: "完整英文界面与导航语音，九寨沟可离线地图，美国手机号即可注册。",
      },
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6f/a8/17/6fa81731-26bd-3e94-9e6e-d3b466426c3a/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      links: {
        ios: "https://apps.apple.com/us/app/amap-global/id461703208",
        android: "https://play.google.com/store/apps/details?id=com.autonavi.minimap",
      },
    },
    {
      id: "wechat",
      name: { en: "WeChat", zh: "微信 WeChat" },
      tag: { en: "Pay & Translate", zh: "支付 + 翻译" },
      desc: {
        en: "WeChat Pay with Visa/Mastercard. Photo & voice translation for menus and signs.",
        zh: "绑定 Visa/Mastercard 扫码支付，拍照/语音翻译菜单与路牌。",
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
      tag: { en: "Primary Payment", zh: "主力支付" },
      desc: {
        en: "Easy foreign card binding. TourPass for tickets to Sanxingdui, Jiuzhaigou & Wulong.",
        zh: "外卡绑定简便，TourPass 可购三星堆、九寨沟、武隆电子票。",
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
      tag: { en: "Ride-hailing", zh: "备用打车" },
      desc: {
        en: "English ride-hailing app for mainland China. Backup to Amap taxi service.",
        zh: "中国内地英文叫车软件，与高德打车互为备用。",
      },
      icon: "images/didi.png",
      links: {
        ios: "https://apps.apple.com/cn/app/id554499054",
        android: "https://play.google.com/store/apps/details?id=com.sdu.didi.psnger",
      },
    },
    {
      id: "translate",
      name: { en: "Baidu Translate", zh: "百度翻译" },
      tag: { en: "Camera OCR", zh: "拍照翻译" },
      desc: {
        en: "Works without VPN. Instant camera translation for menus & museum exhibits.",
        zh: "无需 VPN，拍照翻译菜单与景区介绍。",
      },
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2d/f8/0c/2df80ca3-1677-0811-86f6-e08c9c2155d1/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg",
      links: {
        ios: "https://apps.apple.com/cn/app/id605670941",
        android: "https://fanyi.baidu.com/appdownload/download.html",
        androidLabel: { en: "Official Download", zh: "官网下载" },
      },
    },
    {
      id: "applemaps",
      name: { en: "Apple Maps", zh: "Apple 地图" },
      tag: { en: "Built-in Backup", zh: "自带备用" },
      desc: {
        en: "Powered by Amap data on iPhone. No extra download needed.",
        zh: "iPhone 自带，底层高德数据，无需额外下载。",
      },
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/05/f8/6705f876-0db2-711d-0d42-524ef6432165/maps-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
      links: {
        ios: "https://apps.apple.com/app/apple-maps/id915056765",
        android: null,
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
        en: "Panda-themed rooms · 24h laundry & gym · Free luggage storage · No free breakfast (38CNY/person/day)",
        zh: "熊猫主题客房 · 24h 洗衣健身房 · 免费行李寄存 · 不含早餐（38元/人/天）",
      },
      image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
      website: "https://www.booking.com/hotel/cn/cheng-du-xiong-mao-hen-kun-jiu-dian.html",
    },
    {
      id: "xingyu",
      city: { en: "Jiuzhaigou", zh: "九寨沟" },
      name: { en: "Xingyu International Hotel", zh: "星宇国际大酒店" },
      location: { en: "Official 4-star Foreign-related Hotel", zh: "挂牌 4 星涉外酒店" },
      stars: 4,
      nights: 2,
      pricePerNight: { cny: 329, usd: 48.59 },
      total: { cny: 658, usd: 97.19 },
      perks: {
        en: "Mountain-view king room · Free breakfast · Tibetan costume photoshoot · Oxygen supply · Free shuttle to scenic gate",
        zh: "山景大床 · 含双早 · 免费藏服拍照 · 全屋供氧 · 免费景区接驳",
      },
      image: "https://ak-d.tripcdn.com/images/1mc1012000seytq7cA1F4_R_960_660_R5_D.jpg",
      website: "https://www.trip.com/hotels/jiuzhaigou-hotel-detail-436645/sanroyal-international-hotel/?locale=en-US&curr=USD",
    },
    {
      id: "kaiyuan",
      city: { en: "Chongqing", zh: "重庆" },
      name: { en: "Maison Lee Kaiyuan Mingting Hotel", zh: "开元名庭酒店（解放碑）" },
      location: { en: "No.1 Minzu Road, Jiefangbei · 3 min to Hongyadong", zh: "渝中区民族路1号 · 解放碑核心 · 步行3分钟至洪崖洞" },
      stars: 4,
      nights: 5,
      pricePerNight: { cny: 388, usd: 57.31 },
      total: { cny: 1940, usd: 286.54 },
      perks: {
        en: "Daily breakfast for two · Tang-style design · Xiaoshizi Metro <100m · Laundry & gym",
        zh: "每日双人早餐 · 唐风国潮设计 · 小什字地铁口 · 自助洗衣健身房",
      },
      image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
      website: "https://www.trip.com/hotels/chongqing-hotel-detail-132460794/chongqing-jiefangbei-maison-new-century-hotel/?locale=en-US&curr=USD",
    },
  ],

  highlights: [
    {
      id: "panda-base",
      day: 1,
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Chengdu Panda Breeding Base", zh: "成都大熊猫繁育研究基地" },
      tagline: { en: "Moon cub nursery & giant pandas up close", zh: "月亮产房 · 近距离看国宝" },
      image: "https://vega.enanyang.my/sites/default/files/2024-01/heye2.jpg",
      reviewKey: "Chengdu Panda Breeding Base",
      ticket: { cny: 55, usd: 8.12 },
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
      tagline: { en: "Qing-era lanes & panda-themed dining", zh: "清代巷弄 · 熊猫主题餐饮" },
      image: "https://p2.itc.cn/q_70/images03/20200723/c69a20b5eced4eff88e6d285b26ae104.jpeg",
      reviewKey: "Wide & Narrow Alleys",
      ticket: { free: true },
    },
    {
      id: "jinsha",
      day: 2,
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Jinsha Site Museum", zh: "金沙遗址博物馆" },
      tagline: { en: "3,000-year-old Shu civilization & golden sunbird", zh: "三千年古蜀文明 · 太阳神鸟" },
      image: "https://www.jinshasitemuseum.com/steponview/files/20220119/1642561079089.jpg",
      reviewKey: "Jinsha Site Museum",
      ticket: { cny: 100, usd: 14.77, note: { en: "ticket + audio guide / person", zh: "门票+讲解器/人" } },
    },
    {
      id: "sanxingdui",
      day: 3,
      city: { en: "Guanghan", zh: "广汉" },
      name: { en: "Sanxingdui Museum", zh: "三星堆博物馆" },
      tagline: { en: "Bronze masks & mysterious ancient Shu kingdom", zh: "青铜面具 · 神秘古蜀王国" },
      image: "https://www.hlhbsc.org/upload/download/Spot_pic/Spot_picfile_000877_New.jpg",
      reviewKey: "Sanxingdui Museum",
      ticket: { cny: 102, usd: 15.06, note: { en: "ticket + audio guide / person", zh: "门票+讲解器/人" } },
    },
    {
      id: "jiuzhaigou",
      day: 5,
      city: { en: "Jiuzhaigou", zh: "九寨沟" },
      name: { en: "Jiuzhaigou Valley", zh: "九寨沟风景区" },
      tagline: { en: "Turquoise lakes & shuttle-friendly boardwalks", zh: "五彩海子 · 观光车全覆盖" },
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/960px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg",
      reviewKey: "Jiuzhaigou Valley",
      ticket: { cny: 280, usd: 41.36, note: { en: "ticket + shuttle / person", zh: "门票+观光车/人" } },
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
      id: "chengdu-museum",
      day: 7,
      city: { en: "Chengdu", zh: "成都" },
      name: { en: "Chengdu Museum", zh: "成都博物馆" },
      tagline: { en: "Free entry · Chengdu city history under one roof", zh: "免费入馆 · 成都城市通史" },
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/%E6%88%90%E9%83%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E6%AD%A3%E9%97%A8.jpg/960px-%E6%88%90%E9%83%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E6%AD%A3%E9%97%A8.jpg",
      reviewKey: "Chengdu Museum",
      ticket: { free: true },
    },
    {
      id: "hongyadong",
      day: 7,
      city: { en: "Chongqing", zh: "重庆" },
      name: { en: "Hongyadong Night View", zh: "洪崖洞夜景" },
      tagline: { en: "Stilt-house light show above the Jialing River", zh: "吊脚楼亮灯 · 嘉陵江夜景" },
      image: "https://ak-d.tripcdn.com/images/10020s000000hqkwh48D9.jpg",
      reviewKey: "Hongyadong Night View",
      ticket: { free: true },
    },
    {
      id: "wulong-bridges",
      day: 8,
      city: { en: "Wulong", zh: "武隆" },
      name: { en: "Three Natural Bridges", zh: "武隆天生三桥" },
      tagline: { en: "UNESCO karst bridges · elevator access", zh: "世界自然遗产 · 电梯直达" },
      image: "images/wulong-bridges.jpg",
      reviewKey: "Three Natural Bridges",
      ticket: { cny: 155, usd: 22.89, note: { en: "combo ticket / person", zh: "套票/人" } },
    },
    {
      id: "longshui",
      day: 8,
      city: { en: "Wulong", zh: "武隆" },
      name: { en: "Longshui Gorge", zh: "龙水峡地缝" },
      tagline: { en: "Elevator to valley floor · gentle downhill walk", zh: "电梯下谷底 · 平缓下坡栈道" },
      image: "https://www.wlkst.com/u/cms/www/202404/0516275744f6.jpg",
      reviewKey: "Longshui Gorge",
      ticket: { cny: 116, usd: 17.13, note: { en: "entrance / person", zh: "门票/人" } },
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
      id: "cableway",
      day: 9,
      city: { en: "Chongqing", zh: "重庆" },
      name: { en: "Yangtze River Cableway", zh: "长江索道" },
      tagline: { en: "Iconic river crossing with skyline views", zh: "横跨长江 · 山城天际线" },
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%E9%87%8D%E5%BA%86_%E9%95%BF%E6%B1%9F%E4%B8%8A%E7%9A%84%E6%B8%A1%E6%B1%9F%E7%B4%A2%E9%81%931_-_panoramio.jpg/960px-%E9%87%8D%E5%BA%86_%E9%95%BF%E6%B1%9F%E4%B8%8A%E7%9A%84%E6%B8%A1%E6%B1%9F%E7%B4%A2%E9%81%931_-_panoramio.jpg",
      reviewKey: "Yangtze River Cableway",
      ticket: { cny: 20, usd: 2.95, note: { en: "round-trip / person", zh: "往返/人" } },
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
    {
      id: "wulingyuan",
      day: 10,
      city: { en: "Zhangjiajie", zh: "张家界" },
      name: { en: "Wulingyuan National Forest Park", zh: "武陵源国家森林公园" },
      tagline: { en: "Avatar pillars · cableways & Bailong Elevator", zh: "阿凡达石林 · 索道电梯全覆盖" },
      image: "https://img3.chinadaily.com.cn/images/202212/14/63998f71a3102ada7c81badd.jpeg",
      reviewKey: "Wulingyuan National Forest Park",
      ticket: { cny: 230, usd: 33.97, note: { en: "incl. Bailong Elevator 65 / person", zh: "含百龙天梯 65/人" } },
    },
  ],

  days: [
    {
      day: 1,
      city: { en: "Chengdu", zh: "成都" },
      theme: { en: "Full-Day Panda Tour", zh: "全天熊猫主题游览" },
      hotel: "panda-sleepy",
      subtotal: { cny: 1198, usd: 176.94 },
      summary: {
        en: "Panda Base → IFS Afternoon Tea → Jinli → Jiuyan Bridge",
        zh: "熊猫基地 → IFS 下午茶 → 锦里 → 九眼桥",
      },
      activities: [
        {
          time: "08:00",
          type: "transport",
          title: { en: "IFS → Panda Base Shuttle", zh: "IFS 直通车 → 熊猫基地" },
          desc: {
            en: "iPanda shuttle from IFS Square (IMAX Plaza). One-way fare per person: 10CNY/1.48USD, 40 min ride.",
            zh: "IFS 古迹广场 iPanda 直通车前往大熊猫繁育基地，交通单人单程 10CNY/1.48USD，车程 40 分钟。",
          },
          cost: { cny: 10, usd: 1.48, note: { en: "per person one-way", zh: "单人单程" } },
          image: "https://www.ifsresidences.com/files/chengduifs01.jpg",
        },
        {
          time: "08:40–12:00",
          type: "attraction",
          title: { en: "Chengdu Panda Breeding Base", zh: "成都大熊猫繁育研究基地" },
          desc: {
            en: "08:40–12:00 visit. Entrance ticket 55CNY/8.12USD per person; mandatory in-park shuttle bus 20CNY/2.95USD per person. Visit moon cub delivery house.",
            zh: "08:40–12:00 游览。门票 55CNY/8.12USD/人；园区观光车必购 20CNY/2.95USD/人，打卡月亮产房幼年熊猫。",
          },
          cost: { cny: 75, usd: 11.07, note: { en: "55 ticket + shuttle / person", zh: "55 门票+观光车/人" } },
          image: "https://vega.enanyang.my/sites/default/files/2024-01/heye2.jpg",
        },
        {
          time: "12:00–13:10",
          type: "food",
          title: { en: "Panda Panoramic Restaurant", zh: "熊猫全景餐厅" },
          desc: {
            en: "12:00–13:10 lunch inside the park. 60CNY/8.86USD per person, all non-spicy dishes available.",
            zh: "12:00–13:10 园区熊猫全景餐厅午餐，人均 60CNY/8.86USD，全菜品无辣可选。",
          },
          cost: { cny: 60, usd: 8.86, note: { en: "per person", zh: "人均" } },
          image: "https://dw-media.dotdotnews.com/dams/share/image/202201/01/61d02b38e4b05b0b57d274eb.jpg",
        },
        {
          time: "13:30",
          type: "transport",
          title: { en: "Return Shuttle to IFS", zh: "直通车返回 IFS" },
          desc: {
            en: "13:30 return to IFS by the same shuttle bus. 10CNY/1.48USD per person one-way.",
            zh: "13:30 原车直通车返回 IFS，单人 10CNY/1.48USD。",
          },
          cost: { cny: 10, usd: 1.48, note: { en: "per person one-way", zh: "单人单程" } },
          image: "https://www.ifsresidences.com/files/chengduifs01.jpg",
        },
        {
          time: "14:00",
          type: "food",
          title: { en: "IFS Sunset Bistro Panda Afternoon Tea", zh: "落日餐吧熊猫下午茶" },
          desc: {
            en: "14:00 panda-themed afternoon tea set at IFS Sunset Bistro (5:59+) on IFS 7F, next to the rooftop panda. Set price for two: 260CNY/38.40USD.",
            zh: "14:00 IFS 7 楼落日餐吧（5:59+）熊猫双人下午茶，紧邻顶楼大熊猫雕塑。套餐总价 260CNY/38.40USD。",
          },
          cost: { cny: 260, usd: 38.4, note: { en: "set for two", zh: "双人套餐" } },
          image: "https://www.ifsresidences.com/files/chengduifs01.jpg",
        },
        {
          time: "16:00",
          type: "attraction",
          title: { en: "Times Square Block A Panda Souvenirs", zh: "时代广场A座熊猫文创" },
          desc: {
            en: "16:00 Walk to Times Square Block A panda souvenir hub (shopping self-paid).\n\nDirections: From the giant panda on the IFS façade, enter Block A via the side alley opposite Bosideng. Low-rise and high-rise elevators are separate.\n\n1) 15F · Pop Panda Factory (low-rise elevator)\nBudget mini gifts: ¥1.2 panda headbands, ¥1.5 fridge magnets, knit pouches, panda stationery, 60+ free commemorative stamps — best for small souvenirs.\n\n2) 28F · Yichuan Ershu Panda Specialties (high-rise elevator)\nLargest shop: licensed Huahua plush, blind boxes, figurines, plus Sichuan local products (mild beef, pastries, tea) — one-stop for souvenirs and food gifts.\n\n3) 30F · Fufu / Guyü Panda (high-rise elevator)\nLow-price blind boxes, Sanxingdui collab panda merch, commemorative coins; free shipping to China on qualifying orders — ideal for bulk gifting.\n\n• Key perks: ~1/3 of street/tourist-site prices, wholesale even for single items; seating to rest, clear pricing, WeChat / Alipay accepted.",
            zh: "16:00 步行至时代广场 A 座熊猫文创批发市场（伴手礼自费）。\n\n导航：IFS 外墙巨型熊猫屁股，斜对面波司登侧边小巷进入时代广场 A 座，电梯分低层 / 高层分开乘坐。\n\n1）15 楼｜泡泡熊猫工厂（低层电梯）\n主打平价小文创：1.2 元熊猫发箍、1.5 元冰箱贴、针织小包、全套熊猫文具，60 + 款免费纪念印章，小件伴手礼首选。\n\n2）28 楼｜一川二蜀熊猫特产（高层电梯）\n店面最大，正版花花公仔、熊猫盲盒、摆件齐全，同时售卖四川本地特产（无辣牛肉、糕点、茶叶），一站式买文创 + 美食伴手礼。\n\n3）30 楼｜福福 / 故屿熊猫（高层电梯）\n低价盲盒、三星堆联名熊猫周边、纪念币，满额可免费邮寄回国，适合大量采购送人。\n\n• 核心优势：街边景区同款价格仅 1/3，一件也按批发价；店内有座椅可歇脚，明码标价无宰客，支持微信 / 支付宝。",
          },
          cost: null,
          image: "https://www.ifsresidences.com/files/chengduifs01.jpg",
        },
        {
          time: "18:00",
          type: "hotel",
          title: { en: "Panda Sleepy Hotel Check-in", zh: "熊猫很困酒店入住" },
          desc: {
            en: "18:00 walk back to Panda Sleepy Hotel to check in and rest. Room rate 300CNY/44.31USD per night; Day 1 budget includes tonight plus the prior night (2-night split: 600CNY/88.62USD total).",
            zh: "18:00 步行回熊猫很困酒店办理入住休整。房价 300CNY/44.31USD/晚；D1 计入当晚及前一晚，两晚分摊 600CNY/88.62USD。",
          },
          cost: { cny: 600, usd: 88.62, note: { en: "2-night split", zh: "两晚分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
        {
          time: "19:00",
          type: "transport",
          title: { en: "Taxi: Hotel → Jinli", zh: "打车：酒店 → 锦里" },
          desc: {
            en: "19:00 taxi from hotel to Jinli Ancient Street. 9CNY/1.33USD one-way.",
            zh: "19:00 打车：酒店 → 锦里古街，9CNY/1.33USD。",
          },
          cost: { cny: 9, usd: 1.33, note: { en: "one-way", zh: "单程" } },
          image: "https://ak-d.tripcdn.com/images/0105r12000jfr27ub5C2A.jpg",
        },
        {
          time: "19:20–20:30",
          type: "attraction",
          title: { en: "Jinli Ancient Street", zh: "锦里古街" },
          desc: {
            en: "19:20–20:30 night stroll in Jinli Ancient Street. Light snacks self-paid.",
            zh: "19:20–20:30 夜游锦里古街，清淡小吃自费。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/0105r12000jfr27ub5C2A.jpg",
        },
        {
          time: "20:40",
          type: "transport",
          title: { en: "Taxi: Jinli → Jiuyan Bridge", zh: "打车：锦里 → 九眼桥" },
          desc: {
            en: "20:40 taxi from Jinli to Jiuyan Bridge. 10CNY/1.48USD one-way.",
            zh: "20:40 打车：锦里 → 九眼桥，10CNY/1.48USD。",
          },
          cost: { cny: 10, usd: 1.48, note: { en: "one-way", zh: "单程" } },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anshun_Bridge_Chengdu.jpg/960px-Anshun_Bridge_Chengdu.jpg",
        },
        {
          time: "20:50–22:40",
          type: "attraction",
          title: { en: "Jiuyan Bridge Riverside Bar", zh: "九眼桥安顺廊桥清吧" },
          desc: {
            en: "20:50–22:40 free photos at Anshun Corridor. Affordable riverside folk bar: 80CNY/11.82USD per person, mild fruit wine & non-spicy bites.",
            zh: "20:50–22:40 九眼桥安顺廊桥免费拍照，临江平价民谣清吧小酌，清吧人均 80CNY/11.82USD。",
          },
          cost: { cny: 80, usd: 11.82, note: { en: "bar/person", zh: "清吧人均" } },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anshun_Bridge_Chengdu.jpg/960px-Anshun_Bridge_Chengdu.jpg",
        },
        {
          time: "22:40",
          type: "transport",
          title: { en: "Taxi Back to Hotel", zh: "打车返回酒店" },
          desc: {
            en: "22:40 taxi back to Panda Sleepy Hotel. 9CNY/1.33USD one-way.",
            zh: "22:40 打车返回酒店，9CNY/1.33USD。",
          },
          cost: { cny: 9, usd: 1.33, note: { en: "one-way", zh: "单程" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 2,
      city: { en: "Chengdu", zh: "成都" },
      theme: { en: "Alleys + Jinsha + Sichuan Opera", zh: "宽窄巷子 + 金沙 + 川剧变脸" },
      hotel: "panda-sleepy",
      subtotal: { cny: 866, usd: 127.91 },
      summary: {
        en: "Wide & Narrow Alleys → Jinsha Museum → Face-Changing Opera",
        zh: "宽窄巷子 → 金沙遗址 → 川剧变脸",
      },
      activities: [
        {
          time: "09:00",
          type: "transport",
          title: { en: "Metro Line 2 to People's Park", zh: "地铁 2 号线至人民公园" },
          desc: {
            en: "09:00 Metro Line 2 from Chunxi Road to People's Park, 2CNY/0.30USD per person, then walk to Wide & Narrow Alleys.",
            zh: "09:00 地铁 2 号线春熙路 → 人民公园，单人 2CNY/0.30USD，步行至宽窄巷子。",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "per person", zh: "单人" } },
          image: "images/chengdu-metro.png",
        },
        {
          time: "09:30–11:40",
          type: "attraction",
          title: { en: "Wide & Narrow Alleys", zh: "宽窄巷子" },
          desc: {
            en: "09:30–11:40 sightseeing and photo walk through Wide & Narrow Alleys.",
            zh: "09:30–11:40 宽窄巷子漫步打卡。",
          },
          cost: null,
          image: "https://p2.itc.cn/q_70/images03/20200723/c69a20b5eced4eff88e6d285b26ae104.jpeg",
        },
        {
          time: "12:00",
          type: "food",
          title: { en: "Tingxiang Mansion Panda Banquet", zh: "听香公馆熊猫创意宴" },
          desc: {
            en: "12:00 private panda creative banquet at Tingxiang Mansion. Set for two: 200CNY/29.54USD, fully customized non-spicy menu.",
            zh: "12:00 听香公馆双人熊猫创意宴，套餐 200CNY/29.54USD，全桌无辣定制。",
          },
          cost: { cny: 200, usd: 29.54, note: { en: "set for two", zh: "双人套餐" } },
          image: "https://d.ifengimg.com/w827_h1104_ablur_q90_webp/x0.ifengimg.com/ucms/2025_25/4F58CAC4A0CCBBC9F8C90EA45ACA463234D408BE_size203_w827_h1104.jpg",
        },
        {
          time: "13:30",
          type: "food",
          title: { en: "Long Chaoshou (Kuanzhai Branch)", zh: "龙抄手（宽窄巷子分店）" },
          desc: {
            en: "13:30 5-min walk to Heming Teahouse in People's Park. Long Chaoshou branch beside alleys: 25CNY/3.69USD per person clear soup wonton. Watch local square dancing & Tibetan circle dances by the lake.",
            zh: "13:30 步行 5 分钟至人民公园鹤鸣茶社，打卡宽窄巷子龙抄手分店，清汤抄手 25CNY/3.69USD/人，湖边可观赏本地广场舞、锅庄舞。",
          },
          cost: { cny: 25, usd: 3.69, note: { en: "per person", zh: "人均" } },
          image: "https://pimg.1px.tw/bluehero/1377524829-57389938.jpg",
        },
        {
          time: "15:00",
          type: "transport",
          title: { en: "Taxi: People's Park → Jinsha", zh: "打车：人民公园 → 金沙遗址" },
          desc: {
            en: "15:00 taxi from People's Park to Jinsha Site Museum. 11CNY/1.62USD one-way.",
            zh: "15:00 打车：人民公园 → 金沙遗址博物馆，11CNY/1.62USD。",
          },
          cost: { cny: 11, usd: 1.62, note: { en: "one-way", zh: "单程" } },
          image: "https://www.jinshasitemuseum.com/steponview/files/20220119/1642561079089.jpg",
        },
        {
          time: "15:20–18:00",
          type: "attraction",
          title: { en: "Jinsha Site Museum", zh: "金沙遗址博物馆" },
          desc: {
            en: "15:20–18:00 Jinsha Site Museum. Ticket 70CNY/10.34USD per person; English audio guide 30CNY/4.43USD per person.",
            zh: "15:20–18:00 金沙遗址博物馆，门票 70CNY/10.34USD/人；英文讲解器 30CNY/4.43USD/人。",
          },
          cost: { cny: 70, usd: 10.34, note: { en: "ticket/person + 30 audio", zh: "门票/人 + 讲解 30" } },
          image: "https://www.jinshasitemuseum.com/steponview/files/20220119/1642561079089.jpg",
        },
        {
          time: "18:30",
          type: "transport",
          title: { en: "Metro Back to Chunxi Road", zh: "地铁返回春熙路" },
          desc: {
            en: "18:30 metro back to Chunxi Road. 2CNY/0.30USD per person.",
            zh: "18:30 地铁返回春熙路，2CNY/0.30USD/人。",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "per person", zh: "单人" } },
          image: "images/chengdu-metro.png",
        },
        {
          time: "19:30",
          type: "transport",
          title: { en: "Metro Line 1 to Wenshu Monastery", zh: "地铁 1 号线至文殊院" },
          desc: {
            en: "19:30 Metro Line 1 from Chunxi Road to Wenshu Monastery. 2CNY/0.30USD per person.",
            zh: "19:30 地铁 1 号线春熙路 → 文殊院，2CNY/0.30USD/人。",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "per person", zh: "单人" } },
          image: "images/chengdu-metro.png",
        },
        {
          time: "20:00–21:10",
          type: "attraction",
          title: { en: "Sichuan Opera at Liyuan Club Wenshu Branch", zh: "梨园会馆文殊院店川剧变脸" },
          desc: {
            en: "20:00–21:10 Sichuan Opera at Liyuan Club Wenshu Branch. Ticket set for two: 99CNY/14.61USD. 70-min intangible cultural heritage performance (face-changing, fire-spitting, long-spout tea art).",
            zh: "20:00–21:10 梨园会馆文殊院店川剧变脸演出，双人套票 99CNY/14.61USD，70 分钟非遗表演（变脸、吐火、长嘴壶茶艺）。",
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
            en: "Overnight at Panda Sleepy Hotel. Daily room split: 300CNY/44.31USD.",
            zh: "熊猫很困酒店过夜住宿，单日分摊房价 300CNY/44.31USD。",
          },
          cost: { cny: 300, usd: 44.31, note: { en: "daily split", zh: "单日分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 3,
      city: { en: "Chengdu", zh: "成都" },
      theme: { en: "Sanxingdui Day Trip", zh: "三星堆一日往返" },
      hotel: "panda-sleepy",
      subtotal: { cny: 636, usd: 93.94 },
      summary: { en: "Sanxingdui Museum full-day visit", zh: "三星堆博物馆深度游览" },
      activities: [
        {
          time: "08:00",
          type: "transport",
          title: { en: "IFS → Sanxingdui Shuttle", zh: "IFS 直通车 → 三星堆" },
          desc: {
            en: "08:00 fixed shuttle bus from IFS to Sanxingdui Museum. One-way 33CNY/4.87USD per person, 70 min ride. Departures at 08:00 & 10:30 daily.",
            zh: "08:00 IFS 定点直通车直达三星堆博物馆，单人单程 33CNY/4.87USD，车程 70 分钟，每日 8:00/10:30 发车。",
          },
          cost: { cny: 33, usd: 4.87, note: { en: "one-way/person", zh: "单人单程" } },
          image: "https://www.ifsresidences.com/files/chengduifs01.jpg",
        },
        {
          time: "10:00–16:00",
          type: "attraction",
          title: { en: "Sanxingdui Museum", zh: "三星堆博物馆" },
          desc: {
            en: "10:00–16:00 in-depth visit to Sanxingdui Museum. Ticket 72CNY/10.63USD per person; English audio guide 30CNY/4.43USD per person.",
            zh: "10:00–16:00 三星堆博物馆深度游览，门票 72CNY/10.63USD/人；英文讲解器 30CNY/4.43USD/人。",
          },
          cost: { cny: 72, usd: 10.63, note: { en: "ticket/person + 30 audio", zh: "门票/人 + 讲解 30" } },
          image: "https://www.hlhbsc.org/upload/download/Spot_pic/Spot_picfile_000877_New.jpg",
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
          image: "https://www.ifsresidences.com/files/chengduifs01.jpg",
        },
        {
          time: "19:00",
          type: "hotel",
          title: { en: "Panda Sleepy Hotel", zh: "熊猫很困酒店住宿" },
          desc: {
            en: "Evening at Panda Sleepy Hotel — free luggage storage, pack for Jiuzhaigou. Daily room split: 300CNY/44.31USD.",
            zh: "晚间回熊猫很困酒店，免费寄存大件行李、整理九寨沟出行物资。单日分摊房价 300CNY/44.31USD。",
          },
          cost: { cny: 300, usd: 44.31, note: { en: "daily split", zh: "单日分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 4,
      city: { en: "Chengdu → Jiuzhaigou", zh: "成都 → 九寨沟" },
      theme: { en: "High-Speed Train + Scenic Shuttle", zh: "高铁 + 景区接驳" },
      hotel: "xingyu",
      subtotal: { cny: 701, usd: 103.54 },
      summary: { en: "Train C5782 → Xingyu Hotel check-in", zh: "C5782 高铁 → 星宇国际入住" },
      activities: [
        {
          time: "06:45",
          type: "transport",
          title: { en: "High-Speed Train C5782", zh: "高铁 C5782" },
          desc: {
            en: "Recommended train C5782: departs Chengdu East at 06:45, arrives Huanglong Jiuzhai at 08:24. Alternative departures: 08:12/10:06/11:46/15:45/18:36. Second-class 135CNY/19.94USD per person, 1h 39m.",
            zh: "推荐早班 C5782：06:45 成都东站发车，08:24 抵达黄龙九寨站。备选 08:12/10:06/11:46/15:45/18:36。高铁二等座 135CNY/19.94USD/人，1 小时 39 分。",
          },
          cost: { cny: 135, usd: 19.94, note: { en: "2nd class/person", zh: "二等座/人" } },
          image: "https://q4.itc.cn/images01/20240905/8b80a3c7561b46e7bb2777baaf82d81e.jpeg",
        },
        {
          time: "09:00",
          type: "transport",
          title: { en: "Scenic Shuttle to Jiuzhaigou Gate", zh: "景区接驳大巴" },
          desc: {
            en: "Transfer to direct scenic shuttle bus to Jiuzhaigou entrance after exit. 51CNY/7.53USD per person, rolling departure, 2-hour ride.",
            zh: "出站换乘景区直通接驳大巴直达九寨沟口，单人 51CNY/7.53USD，滚动发车，车程 2 小时。",
          },
          cost: { cny: 51, usd: 7.53, note: { en: "per person", zh: "单人" } },
          image: "images/jiuzhaigou-shuttle.jpg",
        },
        {
          time: "11:00",
          type: "hotel",
          title: { en: "Xingyu International Hotel", zh: "星宇国际大酒店" },
          desc: {
            en: "11:00 check in. Free Tibetan costume photoshoot in hotel courtyard in the afternoon (included, no extra charge). Self-arranged light non-spicy dinner; rest to adapt to plateau altitude. Amenities: full-room diffused oxygen, free round-trip scenic shuttle, complimentary breakfast for two included.",
            zh: "11:00 办理入住，下午酒店庭院免费双人藏服换装拍照（套餐内含）。自行安排清淡无辣晚餐，休整适应高原海拔。酒店配套：全屋弥散式供氧、免费景区往返班车、双人自助早餐已包含。",
          },
          cost: { cny: 329, usd: 48.59, note: { en: "daily split", zh: "单日分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc1012000seytq7cA1F4_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 5,
      city: { en: "Jiuzhaigou", zh: "九寨沟" },
      theme: { en: "Full-Day Jiuzhaigou Sightseeing", zh: "九寨沟全天深度游览" },
      hotel: "xingyu",
      subtotal: { cny: 889, usd: 131.31 },
      summary: { en: "Colorful lakes & shuttle buses all day", zh: "五彩湖泊 · 观光车全覆盖" },
      activities: [
        {
          time: "All Day",
          type: "attraction",
          title: { en: "Jiuzhaigou Valley", zh: "九寨沟风景区" },
          desc: {
            en: "Jiuzhaigou entrance ticket + mandatory in-valley shuttle bus: 280CNY/41.36USD per person (combined). Shuttle buses cover the whole scenic area, gentle wooden boardwalks with rest benches, panda souvenir shops inside the park. Vivid lake colors in September, free exploration all day, return to hotel at night. Next day's complimentary breakfast is covered in the hotel package.",
            zh: "九寨沟门票+观光车套票 280CNY/41.36USD/人。全景区观光车全覆盖，平缓木栈道，多处休息座椅，园区内设熊猫文创商店；9 月湖水层次丰富，全天自由游览，晚间返回酒店休息。次日双人早餐包含在套餐内，无需额外付费。",
          },
          cost: { cny: 280, usd: 41.36, note: { en: "ticket + shuttle / person", zh: "门票+观光车/人" } },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/960px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg",
        },
      ],
    },
    {
      day: 6,
      city: { en: "Jiuzhaigou → Chengdu", zh: "九寨沟 → 成都" },
      theme: { en: "Return to Chengdu", zh: "返程成都" },
      hotel: "panda-sleepy",
      subtotal: { cny: 672, usd: 99.25 },
      summary: { en: "Shuttle + train back to Chunxi Road", zh: "接驳大巴 + 高铁返回春熙路" },
      activities: [
        {
          time: "Morning",
          type: "transport",
          title: { en: "Shuttle to Huanglong Jiuzhai Station", zh: "接驳大巴 → 黄龙九寨站" },
          desc: {
            en: "Shuttle bus from Jiuzhaigou entrance back to Huanglong Jiuzhai Station. 51CNY/7.53USD per person.",
            zh: "九寨沟口接驳大巴返回黄龙九寨高铁站，单人 51CNY/7.53USD。",
          },
          cost: { cny: 51, usd: 7.53, note: { en: "per person", zh: "单人" } },
          image: "images/jiuzhaigou-shuttle.jpg",
        },
        {
          time: "Midday",
          type: "transport",
          title: { en: "High-Speed Train to Chengdu East", zh: "高铁返回成都东" },
          desc: {
            en: "Midday high-speed train back to Chengdu East Station. 135CNY/19.94USD per person. Arrive Chunxi Road in the evening, organize luggage for Chongqing trip next day.",
            zh: "午间高铁返回成都东站，单人 135CNY/19.94USD。晚间抵达春熙路，整理行李，准备次日前往重庆。",
          },
          cost: { cny: 135, usd: 19.94, note: { en: "2nd class/person", zh: "二等座/人" } },
          image: "https://q4.itc.cn/images01/20240905/8b80a3c7561b46e7bb2777baaf82d81e.jpeg",
        },
        {
          time: "Evening",
          type: "hotel",
          title: { en: "Panda Sleepy Hotel", zh: "熊猫很困酒店" },
          desc: {
            en: "Check in Panda Sleepy Hotel. Reminder: no free breakfast; buy on street or at hotel front desk (38CNY/person/day optional).",
            zh: "入住熊猫很困酒店。住宿提示：无免费早餐，次日早餐可街边就餐或酒店自费购买（38 元/人/天）。",
          },
          cost: { cny: 300, usd: 44.31, note: { en: "daily split", zh: "单日分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc2x12000iqcute15938_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 7,
      city: { en: "Chengdu → Chongqing", zh: "成都 → 重庆" },
      theme: { en: "Two Museums + Panda Train", zh: "双博物馆 + 熊猫高铁" },
      hotel: "kaiyuan",
      subtotal: { cny: 700, usd: 103.39 },
      summary: {
        en: "Sichuan Museum → Chengdu Museum → Chongqing → Huashi Noodles → Hongyadong",
        zh: "川博 → 成博 → 重庆 → 花市豌杂面 → 洪崖洞",
      },
      activities: [
        {
          time: "09:00",
          type: "transport",
          title: { en: "Metro to Sichuan Museum", zh: "地铁至四川省博物院" },
          desc: {
            en: "09:00 metro from Chunxi Road to Sichuan Museum. 2CNY/0.30USD per person.",
            zh: "09:00 地铁春熙路 → 四川省博物院，单人 2CNY/0.30USD。",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "per person", zh: "单人" } },
          image: "images/chengdu-metro.png",
        },
        {
          time: "09:30–12:00",
          type: "attraction",
          title: { en: "Sichuan Museum", zh: "四川博物院" },
          desc: {
            en: "09:30–12:00 Sichuan Museum. Free entry, online reservation required, top provincial cultural relic collection, fully retained in itinerary.",
            zh: "09:30–12:00 四川博物院（免费，线上预约，省级文物馆藏，行程完整保留不删减）。",
          },
          cost: null,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sichuan_Provincial_Museum_-_Chengdu%2C_China_-_DSC04119.jpg/960px-Sichuan_Provincial_Museum_-_Chengdu%2C_China_-_DSC04119.jpg",
        },
        {
          time: "12:30",
          type: "transport",
          title: { en: "Taxi: Sichuan Museum → Chengdu Museum", zh: "打车：川博 → 成都博物馆" },
          desc: {
            en: "12:30 taxi from Sichuan Museum to Chengdu Museum at Tianfu Square. 10CNY/1.48USD one-way.",
            zh: "12:30 打车：川博 → 天府广场成都博物馆，10CNY/1.48USD。",
          },
          cost: { cny: 10, usd: 1.48, note: { en: "one-way", zh: "单程" } },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/%E6%88%90%E9%83%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E6%AD%A3%E9%97%A8.jpg/960px-%E6%88%90%E9%83%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E6%AD%A3%E9%97%A8.jpg",
        },
        {
          time: "13:00–15:00",
          type: "attraction",
          title: { en: "Chengdu Museum", zh: "成都博物馆" },
          desc: {
            en: "13:00–15:00 Chengdu Museum. Free entry, displays Chengdu city history — two independent venues from Sichuan Museum.",
            zh: "13:00–15:00 成都博物馆（免费，展示成都城市通史，与川博为两处独立场馆）。",
          },
          cost: null,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/%E6%88%90%E9%83%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E6%AD%A3%E9%97%A8.jpg/960px-%E6%88%90%E9%83%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E6%AD%A3%E9%97%A8.jpg",
        },
        {
          time: "16:30",
          type: "transport",
          title: { en: "Panda High-Speed Train", zh: "熊猫涂装高铁" },
          desc: {
            en: "16:30 panda-themed high-speed train Chengdu East → Chongqing West. Second-class 148CNY/21.86USD per person, 1h 20m ride.",
            zh: "16:30 成都东 → 重庆西熊猫涂装高铁，二等座 148CNY/21.86USD/人，车程 1 小时 20 分。",
          },
          cost: { cny: 148, usd: 21.86, note: { en: "2nd class/person", zh: "二等座/人" } },
          image: "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/485729861_1081663570672065_4040875253893617965_n.jpg?stp=dst-jpg_tt6&cstp=mx900x675&ctp=s590x590&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ChF2mJV6fwoQ7kNvwGTeWzG&_nc_oc=Adp9DNe0mRSWNHbthmTJVebtyPYAx7EHfkp9fi9BWwD014bPvdUdfE1Au2k5cDZXwKsi-WmqUxBuqOSW1PiPv0AF&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=hFh5xdXrcHYN8jHOOacV6A&_nc_ss=7b289&oh=00_AQC_GViCdGaEx0b3yz4xpuGpywoUeeFg6UFJEUJCWCZ1AA&oe=6A6AFEF2",
        },
        {
          time: "18:00",
          type: "transport",
          title: { en: "Metro: Chongqing West → Jiefangbei", zh: "地铁：重庆西 → 解放碑" },
          desc: {
            en: "18:00 metro from Chongqing West Station to Jiefangbei. 3CNY/0.44USD per person. Check into Kaiyuan Mingting Hotel — daily complimentary breakfast for two included.",
            zh: "18:00 地铁重庆西站 → 解放碑，单人 3CNY/0.44USD，办理开元名庭入住（每日双人自助早餐已包含）。",
          },
          cost: { cny: 3, usd: 0.44, note: { en: "per person", zh: "单人" } },
          image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
        },
        {
          time: "Evening",
          type: "food",
          title: {
            en: "Bai Xiang Ju · Shiba Ti · Huashi Wanza Noodles",
            zh: "白象居 · 十八梯 · 花市豌杂面",
          },
          desc: {
            en: "From hotel, 5-min walk to Huashi Pea & Minced Pork Noodles (Minsheng Road Main Store) for a light dinner (self-paid, not in fixed budget). Cost for two: 34CNY / 5.02USD. Order: two bowls dry pea noodles, no chili, add one soft-boiled fried egg each (~17CNY/person). Evening stroll through Bai Xiang Ju & Shiba Ti.",
            zh: "从酒店出来，步行 5 分钟至花市豌杂面（民生路总店）轻晚餐（自费，不计入固定花费）。双人 34CNY / 5.02USD。点餐：两碗干溜豌杂面，不要辣，各加一个溏心煎蛋（约 17CNY/人）。傍晚步行白象居、十八梯山城老街。",
          },
          cost: null,
          image: "https://www.cityhui.com/uploads/allimg/190416/1-1Z4161419460-L.jpg",
        },
        {
          time: "19:00",
          type: "attraction",
          title: { en: "Hongyadong Night View", zh: "洪崖洞夜景" },
          desc: {
            en: "19:00 8-min walk to Hongyadong light show. The largest square dancing group in Chongqing gathers at Jiefangbei Pedestrian Street 19:00–21:30, 3-min walk from hotel.",
            zh: "19:00 步行 8 分钟至洪崖洞观赏亮灯夜景；解放碑步行街 19:00–21:30 为重庆规模最大广场舞集群，步行 3 分钟可达。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/10020s000000hqkwh48D9.jpg",
        },
      ],
    },
    {
      day: 8,
      city: { en: "Chongqing", zh: "重庆" },
      theme: { en: "Wulong Day Trip", zh: "武隆一日游" },
      hotel: "kaiyuan",
      subtotal: { cny: 1190, usd: 175.76 },
      summary: { en: "Three Natural Bridges + Longshui Gorge", zh: "天生三桥 + 龙水峡地缝" },
      activities: [
        {
          time: "07:30",
          type: "transport",
          title: { en: "Direct Shuttle to Wulong", zh: "武隆往返直通车" },
          desc: {
            en: "07:30 have complimentary hotel breakfast, then take round-trip direct shuttle from Jiefangbei Bombing Site to Wulong. 130CNY/19.20USD per person round-trip, 3-hour one-way to Xiannv Town, no transfers needed.",
            zh: "07:30 酒店享用免费双人早餐后出发，解放碑大轰炸遗址乘坐武隆往返直达直通车，单人往返 130CNY/19.20USD，单程 3 小时直达仙女镇，无需换乘。",
          },
          cost: { cny: 130, usd: 19.2, note: { en: "round-trip/person", zh: "往返/人" } },
          image: "images/wulong-shuttle.jpg",
        },
        {
          time: "10:30",
          type: "attraction",
          title: { en: "Three Natural Bridges", zh: "武隆天生三桥" },
          desc: {
            en: "10:30 visit Three Natural Bridges. Combo ticket (entrance + sightseeing elevator) 155CNY/22.89USD per person, elevator avoids steep climbing.",
            zh: "10:30 游览天生三桥，套票（门票 + 观光电梯）155CNY/22.89USD/人，电梯减少爬坡。",
          },
          cost: { cny: 155, usd: 22.89, note: { en: "per person", zh: "人均" } },
          image: "images/wulong-bridges.jpg",
        },
        {
          time: "13:30",
          type: "attraction",
          title: { en: "Longshui Gorge", zh: "龙水峡地缝" },
          desc: {
            en: "13:30 transfer bus to Longshui Gorge. Free elevator down to valley bottom, walk 10–15 mins to Galaxy Waterfall, full gentle downhill boardwalk, 1.5–2 hours full tour. Gorge entrance ticket 116CNY/17.13USD per person.",
            zh: "13:30 中转车前往龙水峡地缝：免费电梯下谷底，步行 10–15 分钟可见银河飞瀑，全程平缓下坡栈道，完整游览 1.5–2 小时；地缝门票 116CNY/17.13USD/人。",
          },
          cost: { cny: 116, usd: 17.13, note: { en: "per person", zh: "人均" } },
          image: "https://www.wlkst.com/u/cms/www/202404/0516275744f6.jpg",
        },
        {
          time: "17:00",
          type: "transport",
          title: { en: "Return Shuttle to Jiefangbei", zh: "直通车返程解放碑" },
          desc: {
            en: "16:00 return to Xiannv Town Tourist Center. Shuttle bus back to Jiefangbei at 17:00, arrive hotel around 20:00.",
            zh: "16:00 返回仙女镇游客中心，17:00 直通车返程解放碑，20:00 抵达酒店。",
          },
          cost: null,
          image: "images/wulong-shuttle.jpg",
        },
      ],
    },
    {
      day: 9,
      city: { en: "Chongqing", zh: "重庆" },
      theme: { en: "Mountain City Highlights", zh: "山城打卡" },
      hotel: "kaiyuan",
      subtotal: { cny: 440, usd: 64.99 },
      summary: { en: "Panda Light Rail → Cableway → Nanbin Road", zh: "熊猫轻轨 → 索道 → 南滨路" },
      activities: [
        {
          time: "09:30",
          type: "food",
          title: { en: "Hotel Breakfast", zh: "酒店早餐" },
          desc: {
            en: "09:30 enjoy complimentary hotel breakfast for two before heading out.",
            zh: "09:30 酒店享用免费双人早餐。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
        },
        {
          time: "09:30",
          type: "transport",
          title: { en: "Metro to Liziba", zh: "地铁至李子坝" },
          desc: {
            en: "Metro Line 2 from Jiefangbei to Liziba. 2CNY/0.30USD per person. Photo spot for panda light rail & train-through-building sight.",
            zh: "09:30 地铁 2 号线解放碑 → 李子坝，单人 2CNY/0.30USD，打卡熊猫涂装轻轨、轻轨穿楼观景台。",
          },
          cost: { cny: 2, usd: 0.3, note: { en: "per person", zh: "单人" } },
          image: "images/liziba.jpg",
        },
        {
          time: "11:00",
          type: "transport",
          title: { en: "Yangtze River Cableway", zh: "长江索道" },
          desc: {
            en: "11:00 round-trip Yangtze River Cableway ticket. 20CNY/2.95USD per person.",
            zh: "11:00 长江索道往返票，单人 20CNY/2.95USD。",
          },
          cost: { cny: 20, usd: 2.95, note: { en: "per person", zh: "单人" } },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%E9%87%8D%E5%BA%86_%E9%95%BF%E6%B1%9F%E4%B8%8A%E7%9A%84%E6%B8%A1%E6%B1%9F%E7%B4%A2%E9%81%931_-_panoramio.jpg/960px-%E9%87%8D%E5%BA%86_%E9%95%BF%E6%B1%9F%E4%B8%8A%E7%9A%84%E6%B8%A1%E6%B1%9F%E7%B4%A2%E9%81%931_-_panoramio.jpg",
        },
        {
          time: "13:00",
          type: "food",
          title: { en: "Brother Mao Old Duck Soup (Linjiang Branch)", zh: "毛哥老鸭汤（临江门店）" },
          desc: {
            en: "13:00 lunch at Brother Mao Old Duck Soup (Linjiang Branch). 70CNY/10.34USD per person, light non-spicy duck soup (self-paid, not in fixed budget).",
            zh: "13:00 毛哥老鸭汤（临江门店）午餐，人均 70CNY/10.34USD，清淡可无辣（自费，不计入固定花费）。",
          },
          cost: null,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKwOlaW029oF7YmdOYj86NUimIZYCB8AC51aZS1hohg&s=10",
        },
        {
          time: "15:00",
          type: "transport",
          title: { en: "Taxi: Jiefangbei → Nanbin Road", zh: "打车：解放碑 → 南滨路" },
          desc: {
            en: "15:00 taxi from Jiefangbei to Nanbin Road. 8CNY/1.18USD one-way. Distance note: 800m straight line between Nanbin Road and Xiahaoli, 10-min gentle downhill walk; 5-min walk from Shangxinjie Metro Exit 5 to entrance.",
            zh: "15:00 打车：解放碑 → 南滨路，8CNY/1.18USD。南滨路至下浩里直线 800 米，步行 10 分钟平缓下坡；地铁上新街站出站 5 分钟直达入口。",
          },
          cost: { cny: 8, usd: 1.18, note: { en: "one-way", zh: "单程" } },
          image: "https://photo.settour.com.tw/900x600/https://www.settour.com.tw/ss_img/info/location/CKG/G0/CKG0000141/CKG0000141_85348.jpg",
        },
        {
          time: "16:00–19:00",
          type: "attraction",
          title: { en: "Nanbin Road & Xiahaoli", zh: "南滨路 + 下浩里" },
          desc: {
            en: "16:00–19:00 visit Xiahaoli Literary Old Street, overlook Yuzhong Peninsula sunset at Longmenhao View Platform.",
            zh: "16:00–19:00 下浩里文艺老街、龙门浩观景台观赏渝中半岛日落。",
          },
          cost: null,
          image: "images/xiahaoli.jpg",
        },
        {
          time: "19:30",
          type: "transport",
          title: { en: "Taxi Back to Jiefangbei", zh: "打车返回解放碑" },
          desc: {
            en: "19:30 taxi back to Jiefangbei for self-arranged dinner and rest.",
            zh: "19:30 打车返回解放碑自由晚餐休息。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
        },
      ],
    },
    {
      day: 10,
      city: { en: "Chongqing", zh: "重庆" },
      theme: { en: "Wulingyuan National Forest Park", zh: "武陵源国家森林公园" },
      hotel: "kaiyuan",
      subtotal: { cny: 1887, usd: 278.68 },
      summary: { en: "Zhangjiajie Wulingyuan full day", zh: "张家界武陵源全天游览" },
      activities: [
        {
          time: "07:00",
          type: "food",
          title: { en: "Hotel Breakfast & Departure", zh: "酒店早餐出发" },
          desc: {
            en: "07:00 have complimentary hotel breakfast for two before departure.",
            zh: "07:00 酒店享用免费双人早餐后出发。",
          },
          cost: null,
          image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
        },
        {
          time: "07:00",
          type: "transport",
          title: { en: "Taxi: Jiefangbei → Chongqing East", zh: "打车：解放碑 → 重庆东" },
          desc: {
            en: "07:00 taxi from Jiefangbei to Chongqing East Railway Station. 15CNY/2.22USD one-way.",
            zh: "07:00 打车：解放碑 → 重庆东站，15CNY/2.22USD。",
          },
          cost: { cny: 15, usd: 2.22, note: { en: "one-way", zh: "单程" } },
          image: "https://q4.itc.cn/images01/20240905/8b80a3c7561b46e7bb2777baaf82d81e.jpeg",
        },
        {
          time: "07:40",
          type: "transport",
          title: { en: "High-Speed Train to Zhangjiajie", zh: "高铁至张家界西" },
          desc: {
            en: "07:40 high-speed train Chongqing East → Zhangjiajie West. Average second-class 226CNY/33.38USD per person, fastest ride 2h 02m, multiple daily shifts.",
            zh: "07:40 重庆东 → 张家界西高铁，二等座均价 226CNY/33.38USD/人，最快 2 小时 02 分，多班次可选。",
          },
          cost: { cny: 226, usd: 33.38, note: { en: "2nd class/person", zh: "二等座/人" } },
          image: "https://q4.itc.cn/images01/20240905/8b80a3c7561b46e7bb2777baaf82d81e.jpeg",
        },
        {
          time: "10:00",
          type: "transport",
          title: { en: "Shuttle to Wulingyuan Gate", zh: "专线大巴至武陵源" },
          desc: {
            en: "10:00 scenic shuttle bus from Zhangjiajie West Station to Wulingyuan Gate. 40CNY/5.91USD per person, 40-min ride.",
            zh: "10:00 张家界西站景区专线大巴前往武陵源大门，单人 40CNY/5.91USD，车程 40 分钟。",
          },
          cost: { cny: 40, usd: 5.91, note: { en: "per person", zh: "单人" } },
          image: "https://www.hongxiangzuche.com/up_files/20130604142622992.jpg",
        },
        {
          time: "10:40",
          type: "attraction",
          title: { en: "Wulingyuan National Forest Park", zh: "武陵源国家森林公园" },
          desc: {
            en: "Full-day Wulingyuan tour. Combined entrance ticket 230CNY/33.97USD per person, including Bailong Elevator (65CNY/9.60USD). Cableways & elevators cover most scenic areas to minimize climbing, plenty of gentle viewing platforms. The park stops admitting visitors at 17:00, and internal shuttle buses stop service at 18:00.",
            zh: "全天武陵源森林公园游览：门票套票 230CNY/33.97USD/人（含百龙天梯 65CNY/9.60USD/人）；索道、电梯全覆盖，大幅减少爬山，平缓观景平台充足；景区 17:00 停止入园、18:00 园内观光车停运。",
          },
          cost: { cny: 230, usd: 33.97, note: { en: "incl. Bailong Elevator 65/person", zh: "含百龙天梯 65/人" } },
          image: "https://img3.chinadaily.com.cn/images/202212/14/63998f71a3102ada7c81badd.jpeg",
        },
        {
          time: "17:20",
          type: "transport",
          title: { en: "Return Shuttle to Zhangjiajie West", zh: "专线大巴返回张家界西" },
          desc: {
            en: "Take the return scenic shuttle bus back to Zhangjiajie West Station. 40CNY/5.91USD per person, 40-min ride, arrive at the station at 18:00.",
            zh: "乘坐武陵源景区专线大巴返回张家界西站，单人 40CNY/5.91USD，车程 40 分钟，18:00 抵达车站。",
          },
          cost: { cny: 40, usd: 5.91, note: { en: "per person", zh: "单人" } },
          image: "https://www.hongxiangzuche.com/up_files/20130604142622992.jpg",
        },
        {
          time: "20:48",
          type: "transport",
          title: { en: "G2442 High-Speed Train to Chongqing East", zh: "G2442 高铁返程重庆东" },
          desc: {
            en: "G2442 departs Zhangjiajie West Station back to Chongqing East. Second-class seat 206CNY/30.43USD per person. Travel time 2h 07m, arrive at Chongqing East Station at 22:55 — entire itinerary complete.",
            zh: "G2442 次高铁张家界西站返程重庆东，二等座 206CNY/30.43USD/人，行程 2 小时 07 分，22:55 抵达重庆东站，全部行程正式完结。",
          },
          cost: { cny: 206, usd: 30.43, note: { en: "2nd class/person", zh: "二等座/人" } },
          image: "https://q4.itc.cn/images01/20240905/8b80a3c7561b46e7bb2777baaf82d81e.jpeg",
        },
        {
          time: "23:00",
          type: "hotel",
          title: { en: "Kaiyuan Mingting Hotel", zh: "开元名庭酒店住宿" },
          desc: {
            en: "Return to Kaiyuan Mingting Hotel after the day trip. 2-night room split allocated on Day 10: 388CNY/57.31USD total.",
            zh: "武陵源一日游结束后返回开元名庭酒店。D10 计入两晚分摊房价 388CNY/57.31USD。",
          },
          cost: { cny: 388, usd: 57.31, note: { en: "2-night split", zh: "两晚分摊" } },
          image: "https://ak-d.tripcdn.com/images/1mc0r12000qcgk653E27F_R_960_660_R5_D.jpg",
        },
      ],
    },
  ],

  budgetBreakdown: {
    title: { en: "Daily Fixed Cost Breakdown", zh: "按日双人固定消费明细" },
    subtitle: {
      en: "Mandatory charges for two travelers only — excludes snacks, souvenirs, casual meals & extra breakfast",
      zh: "仅必付项目（双人）— 不含零食、伴手礼、自选正餐、酒水及成都酒店自费早餐",
    },
    days: [
      {
        day: 1,
        label: { en: "Day 1 · Chengdu", zh: "D1 成都" },
        items: [
          { label: { en: "IFS round-trip Panda Base shuttle", zh: "IFS 往返熊猫基地直通车" }, cny: 40, usd: 5.91 },
          { label: { en: "Panda Base entrance (×2)", zh: "熊猫基地门票（×2）" }, cny: 110, usd: 16.25 },
          { label: { en: "Panda Base internal shuttle (×2)", zh: "熊猫基地观光车（×2）" }, cny: 40, usd: 5.91 },
          { label: { en: "Panda Base lunch for two", zh: "熊猫基地双人午餐" }, cny: 120, usd: 17.72 },
          { label: { en: "IFS panda afternoon tea set", zh: "IFS 双人熊猫下午茶" }, cny: 260, usd: 38.4 },
          { label: { en: "Taxis (hotel→Jinli→Jiuyan→hotel)", zh: "打车（酒店→锦里→九眼桥→酒店）" }, cny: 28, usd: 4.14 },
          { label: { en: "Panda Sleepy 2-night split", zh: "熊猫很困两晚分摊房价" }, cny: 600, usd: 88.62 },
        ],
        subtotal: { cny: 1198, usd: 176.94 },
      },
      {
        day: 2,
        label: { en: "Day 2 · Chengdu", zh: "D2 成都" },
        items: [
          { label: { en: "Metro fares", zh: "地铁" }, cny: 6, usd: 0.89 },
          { label: { en: "Panda creative banquet", zh: "宽窄巷子双人熊猫创意宴" }, cny: 200, usd: 29.54 },
          { label: { en: "Long Chaoshou for two", zh: "龙抄手双人" }, cny: 50, usd: 7.39 },
          { label: { en: "Taxi to Jinsha Museum", zh: "打车至金沙遗址" }, cny: 11, usd: 1.62 },
          { label: { en: "Jinsha ticket + audio guide (×2)", zh: "金沙门票+英文讲解（×2）" }, cny: 200, usd: 29.54 },
          { label: { en: "Sichuan Opera two-person ticket", zh: "川剧变脸双人套票" }, cny: 99, usd: 14.61 },
          { label: { en: "Panda Sleepy daily split", zh: "熊猫很困单日分摊房价" }, cny: 300, usd: 44.31 },
        ],
        subtotal: { cny: 866, usd: 127.91 },
      },
      {
        day: 3,
        label: { en: "Day 3 · Chengdu", zh: "D3 成都" },
        items: [
          { label: { en: "IFS round-trip Sanxingdui shuttle", zh: "IFS 往返三星堆直通车" }, cny: 132, usd: 19.5 },
          { label: { en: "Sanxingdui ticket + audio guide (×2)", zh: "三星堆门票+讲解（×2）" }, cny: 204, usd: 30.13 },
          { label: { en: "Panda Sleepy daily split", zh: "熊猫很困单日分摊房价" }, cny: 300, usd: 44.31 },
        ],
        subtotal: { cny: 636, usd: 93.94 },
      },
      {
        day: 4,
        label: { en: "Day 4 · Chengdu → Jiuzhaigou", zh: "D4 成都→九寨沟" },
        items: [
          { label: { en: "HSR Chengdu East–Huanglong Jiuzhai (×2)", zh: "成都东→黄龙九寨高铁（×2）" }, cny: 270, usd: 39.88 },
          { label: { en: "Shuttle to Jiuzhaigou gate (×2)", zh: "九寨站→九寨沟口接驳（×2）" }, cny: 102, usd: 15.07 },
          { label: { en: "Xingyu Hotel daily split", zh: "星宇国际单日分摊房价" }, cny: 329, usd: 48.59 },
        ],
        subtotal: { cny: 701, usd: 103.54 },
      },
      {
        day: 5,
        label: { en: "Day 5 · Jiuzhaigou", zh: "D5 九寨沟" },
        items: [
          { label: { en: "Jiuzhaigou ticket + shuttle (×2)", zh: "九寨沟门票+观光车（×2）" }, cny: 560, usd: 82.71 },
          { label: { en: "Xingyu Hotel daily split", zh: "星宇国际单日分摊房价" }, cny: 329, usd: 48.59 },
        ],
        subtotal: { cny: 889, usd: 131.31 },
      },
      {
        day: 6,
        label: { en: "Day 6 · Jiuzhaigou → Chengdu", zh: "D6 九寨沟→成都" },
        items: [
          { label: { en: "Shuttle Jiuzhaigou–Huanglong Jiuzhai (×2)", zh: "九寨沟口→九寨站接驳（×2）" }, cny: 102, usd: 15.07 },
          { label: { en: "HSR back to Chengdu East (×2)", zh: "九寨站→成都东高铁（×2）" }, cny: 270, usd: 39.88 },
          { label: { en: "Panda Sleepy daily split", zh: "熊猫很困单日分摊房价" }, cny: 300, usd: 44.31 },
        ],
        subtotal: { cny: 672, usd: 99.25 },
      },
      {
        day: 7,
        label: { en: "Day 7 · Museums → Chongqing", zh: "D7 双博物馆→重庆" },
        items: [
          { label: { en: "Metro to Sichuan Museum (×2)", zh: "地铁至四川省博物院（×2）" }, cny: 4, usd: 0.59 },
          { label: { en: "Taxi Sichuan Museum → Chengdu Museum", zh: "打车：川博→成都博物馆" }, cny: 10, usd: 1.48 },
          { label: { en: "HSR Chengdu East–Chongqing West (×2)", zh: "成都东→重庆西高铁（×2）" }, cny: 296, usd: 43.72 },
          { label: { en: "Metro Chongqing West–Jiefangbei (×2)", zh: "地铁重庆西→解放碑（×2）" }, cny: 6, usd: 0.89 },
          { label: { en: "Kaiyuan Mingting daily split", zh: "开元名庭单日分摊房价" }, cny: 388, usd: 57.31 },
        ],
        subtotal: { cny: 700, usd: 103.39 },
      },
      {
        day: 8,
        label: { en: "Day 8 · Wulong Day Trip", zh: "D8 武隆一日游" },
        items: [
          { label: { en: "Wulong round-trip shuttle (×2)", zh: "武隆往返直通车（×2）" }, cny: 260, usd: 38.4 },
          { label: { en: "Three Natural Bridges combo (×2)", zh: "天生三桥套票（×2）" }, cny: 310, usd: 45.79 },
          { label: { en: "Longshui Gorge ticket (×2)", zh: "龙水峡地缝门票（×2）" }, cny: 232, usd: 34.27 },
          { label: { en: "Kaiyuan Mingting daily split", zh: "开元名庭单日分摊房价" }, cny: 388, usd: 57.31 },
        ],
        subtotal: { cny: 1190, usd: 175.76 },
      },
      {
        day: 9,
        label: { en: "Day 9 · Chongqing", zh: "D9 重庆山城打卡" },
        items: [
          { label: { en: "Metro Jiefangbei–Liziba (×2)", zh: "地铁解放碑→李子坝（×2）" }, cny: 4, usd: 0.59 },
          { label: { en: "Yangtze Cableway round-trip (×2)", zh: "长江索道往返（×2）" }, cny: 40, usd: 5.91 },
          { label: { en: "Taxi Jiefangbei → Nanbin Road", zh: "打车：解放碑→南滨路" }, cny: 8, usd: 1.18 },
          { label: { en: "Kaiyuan Mingting daily split", zh: "开元名庭单日分摊房价" }, cny: 388, usd: 57.31 },
        ],
        subtotal: { cny: 440, usd: 64.99 },
      },
      {
        day: 10,
        label: { en: "Day 10 · Wulingyuan", zh: "D10 武陵源全天" },
        items: [
          { label: { en: "Taxi Jiefangbei → Chongqing East", zh: "打车：解放碑→重庆东" }, cny: 15, usd: 2.22 },
          { label: { en: "HSR Chongqing East–Zhangjiajie West (×2)", zh: "重庆东→张家界西高铁（×2）" }, cny: 452, usd: 66.76 },
          { label: { en: "Shuttle to Wulingyuan gate (×2)", zh: "张家界西→武陵源专线（×2）" }, cny: 80, usd: 11.82 },
          { label: { en: "Wulingyuan ticket + Bailong Elevator (×2)", zh: "武陵源门票+百龙天梯（×2）" }, cny: 460, usd: 67.94 },
          { label: { en: "Shuttle to Zhangjiajie West (×2)", zh: "武陵源→张家界西专线（×2）" }, cny: 80, usd: 11.82 },
          { label: { en: "HSR Zhangjiajie West–Chongqing East (×2)", zh: "张家界西→重庆东高铁（×2）" }, cny: 412, usd: 60.81 },
          { label: { en: "Kaiyuan Mingting 2-night split", zh: "开元名庭两晚分摊房价" }, cny: 388, usd: 57.31 },
        ],
        subtotal: { cny: 1887, usd: 278.68 },
      },
    ],
    optional: {
      title: { en: "Optional Self-Paid (not in 8611 CNY)", zh: "自费可选（不计入 8611 CNY）" },
      items: [
        { en: "D1 Times Square Block A panda souvenirs & gifts", zh: "D1 时代广场A座熊猫文创伴手礼" },
        { en: "D1 Jiuyan Bridge bar drinks (extra beyond fixed cover)", zh: "D1 九眼桥清吧酒水" },
        { en: "D1–D3 Panda Sleepy Hotel breakfast for two (3 nights): 228 CNY / $33.68", zh: "D1–D3 成都熊猫很困 3 晚双人早餐：228 CNY / 33.68 USD" },
        { en: "D1–D10 Casual meals, street snacks & local dishes", zh: "D1–D10 各地普通正餐、小吃、江湖菜" },
        { en: "D3 Sichuan local specialty souvenirs (evening shopping)", zh: "D3 四川特产伴手礼" },
        { en: "D7 Huashi Wanza Noodles for two (34CNY): 2 dry pea noodles, no chili, soft-boiled egg each", zh: "D7 花市豌杂面（民生路总店）双人 34 CNY：两碗干溜豌杂面、不要辣、各加溏心煎蛋" },
        { en: "D9 Brother Mao Old Duck Soup lunch for two (70/person): 140 CNY / $20.68", zh: "D9 毛哥老鸭汤（临江门店）双人午餐：140 CNY / 20.68 USD" },
        { en: "D1–D10 Personal snacks & beverages", zh: "D1–D10 个人零食饮品" },
        { en: "D10 Extra Wulingyuan cableways", zh: "D10 武陵源额外索道" },
      ],
    },
  },

  visa: {
    title: { en: "China Tourist Visa for US Citizens", zh: "美国公民中国旅游签证指南" },
    subtitle: {
      en: "Required for round-trip visits from the US — Americans are not on China's unilateral visa-free list",
      zh: "美国往返中国须办 L 类旅游签证 — 美国不在中国单方面免签国名单",
    },
    required: {
      en: "US citizens need an L (Tourist) visa for this 10-day Sichuan-Chongqing itinerary. Apply 4–8 weeks before departure.",
      zh: "美国公民赴川渝 10 天行程须提前办理 L 类（旅游）签证，建议出发前 4–8 周申请。",
    },
    steps: [
      { en: "Complete the COVA online application (launched Sep 30, 2025) at the Chinese Embassy or Consulate with jurisdiction over your state", zh: "在美国驻华使领馆管辖范围内，通过 COVA 在线签证系统（2025年9月30日启用）填写申请" },
      { en: "Select Ordinary Visa → L (Tourism). Request multiple entry / 10 years if eligible", zh: "选择普通签证 → L 类（旅游），符合条件可申请多次/10年有效" },
      { en: "Upload passport bio page, signed Visa Application Statement, and proof of US residence", zh: "上传护照信息页、签字的签证申请声明、美国居住证明" },
      { en: "When status shows “Passport to be submitted”, bring passport + printed barcode page to CVASC or Consulate in person", zh: "状态显示「待递交护照」后，携带护照原件与打印条码页至签证中心或领馆递交" },
      { en: "Typical processing: ~4 working days. Pick up passport and pay visa fee on collection", zh: "常规审理约 4 个工作日，取证时缴费" },
    ],
    documents: {
      title: { en: "Key Documents", zh: "主要材料" },
      upload: [
        { en: "Passport valid 6+ months with at least 2 blank visa pages", zh: "护照有效期 6 个月以上，至少 2 页空白签证页" },
        { en: "Signed Visa Application Statement (handwritten signature)", zh: "签字的签证申请声明（须手写签名）" },
        { en: "Proof of US residence: driver's license, utility bill, or bank statement", zh: "美国居住证明：驾照、水电账单或银行账单" },
        { en: "Previous Chinese visa copy (if applicable)", zh: "曾持有的中国签证复印件（如有）" },
      ],
      notRequired: {
        title: { en: "Since Jan 1, 2024 — generally NOT required for L visa in the US:", zh: "自 2024年1月1日起 — 美国 L 类旅游签通常无需：" },
        items: [
          { en: "Round-trip flight booking", zh: "往返机票预订单" },
          { en: "Hotel reservations", zh: "酒店预订单" },
          { en: "Detailed itinerary or invitation letter", zh: "详细行程单或邀请函" },
        ],
      },
    },
    links: [
      { label: { en: "Chinese Embassy in the US", zh: "中国驻美国大使馆" }, url: "https://us.china-embassy.gov.cn/eng/lsfw/zj/" },
      { label: { en: "COVA Online Application System", zh: "COVA 在线申请系统" }, url: "https://cova.mfa.gov.cn" },
      { label: { en: "Consulate General New York", zh: "纽约总领馆" }, url: "https://newyork.china-consulate.gov.cn/eng/" },
      { label: { en: "Consulate General Chicago", zh: "芝加哥总领馆" }, url: "https://chicago.china-consulate.gov.cn/eng/" },
      { label: { en: "Consulate General San Francisco", zh: "旧金山总领馆" }, url: "https://sanfrancisco.china-consulate.gov.cn/eng/" },
    ],
    note: {
      en: "Visa applications are case-by-case. Confirm requirements with your consular district before applying.",
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
            title: { en: "China L Visa Timing Guide", zh: "中国旅游 L 签证办理时间" },
            desc: {
              en: "When to apply & required documents",
              zh: "最佳办理时间与材料清单",
            },
          },
        ],
      },
    ],
  },

  ui: {
    en: {
      appsTitle: "Essential Travel Apps",
      appsSubtitle: "Download before departure · Legal & authorized only",
      hotelsTitle: "Where We Stay",
      highlightsTitle: "Must-See Highlights",
      highlightsHint: "English reviews on TripAdvisor",
      ticketLabel: "Ticket",
      freeAdmission: "Free",
      daysTitle: "Daily Itinerary",
      drillHint: "Tap a day to explore · Tap an activity for details",
      spotNavTitle: "Spots & Dining",
      spotNavHint: "Jump to itinerary",
      budgetTitle: "Budget Summary",
      tipsTitle: "Travel Tips",
      tipsHint: "Tap a heading to expand details",
      totalFixed: "Fixed Total (2 travelers)",
      budgetCap: "Budget Cap",
      remaining: "Flexible Spending",
      perPerson: "per person",
      setForTwo: "for two",
      dayLabel: "Day",
      viewDetails: "View Details",
      viewReviews: "TripAdvisor Reviews",
      close: "Close",
      cost: "Cost",
      typeLabels: { transport: "Transport", attraction: "Attraction", food: "Food", hotel: "Hotel" },
      downloadIos: "App Store",
      downloadAndroid: "Google Play",
      watchVideo: "Watch Video",
      budgetBreakdownTitle: "Daily Expense Breakdown",
      budgetBreakdownSubtitle: "Tap each day for itemized costs",
      subtotalLabel: "Day Subtotal",
      grandTotalLabel: "Grand Total (2 travelers)",
      optionalTitle: "Optional Self-Paid",
      visaSubtitle: "For US citizens · Apply before departure",
      officialLinks: "Official Links",
      documentsUpload: "Upload Online",
      documentsNotRequired: "Generally Not Required",
      stars: "stars",
      nights: "nights",
      footerTagline: "Made with care for Coralia · Have a wonderful trip",
      downloadsTitle: "Download Word Documents",
      downloadsHint: "Itinerary & visa guides for offline reading and printing",
      downloadBtn: "Download .docx",
    },
    zh: {
      appsTitle: "必备旅行 APP",
      appsSubtitle: "出行前提前下载 · 完全合规",
      hotelsTitle: "入住酒店",
      highlightsTitle: "主要游览景点",
      highlightsHint: "TripAdvisor 英文评价",
      ticketLabel: "门票",
      freeAdmission: "免费",
      daysTitle: "每日行程",
      drillHint: "点击日期展开 · 点击活动查看详情",
      spotNavTitle: "景点美食",
      spotNavHint: "跳转至行程",
      budgetTitle: "预算汇总",
      tipsTitle: "出行提示",
      tipsHint: "点击标题展开详情",
      totalFixed: "固定总花费（双人）",
      budgetCap: "预算上限",
      remaining: "灵活消费余额",
      perPerson: "人均",
      setForTwo: "双人",
      dayLabel: "第",
      viewDetails: "查看详情",
      viewReviews: "TripAdvisor 评价",
      close: "关闭",
      cost: "费用",
      typeLabels: { transport: "交通", attraction: "景点", food: "餐饮", hotel: "酒店" },
      downloadIos: "App Store",
      downloadAndroid: "Google Play",
      watchVideo: "观看视频",
      budgetBreakdownTitle: "每日消费明细",
      budgetBreakdownSubtitle: "点击日期查看分项费用",
      subtotalLabel: "当日合计",
      grandTotalLabel: "全行程固定总花费（双人）",
      optionalTitle: "自费可选项目",
      visaSubtitle: "美国公民 · 出行前办理",
      officialLinks: "官方链接",
      documentsUpload: "在线上传",
      documentsNotRequired: "通常无需提交",
      stars: "星",
      nights: "晚",
      footerTagline: "Coralia 专属旅程 · 愿一路皆美好",
      downloadsTitle: "下载 Word 行程 / 签证指南",
      downloadsHint: "完整 Word 文档，可离线阅读与打印",
      downloadBtn: "下载 .docx",
    },
  },
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
  "Long Chaoshou (Kuanzhai Branch)":
    "https://www.tripadvisor.com/Restaurant_Review-g297463-d1217812-Reviews-Longchaoshou-Chengdu_Sichuan.html",
  "Jinsha Site Museum":
    "https://www.tripadvisor.com/Attraction_Review-g297463-d1769021-Reviews-Jinsha_Site_Museum-Chengdu_Sichuan.html",
  "Sanxingdui Museum":
    "https://www.tripadvisor.com/Attraction_Review-g1152585-d457099-Reviews-Guanghan_Sanxingdui_Museum-Guanghan_Sichuan.html",
  "Jiuzhaigou Valley":
    "https://www.tripadvisor.com/Attraction_Review-g303770-d319081-Reviews-Jiuzhaigou_Natural_Reserve-Jiuzhaigou_County_Sichuan.html",
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
  "Xiahaoli Old Street":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d5302833-Reviews-LongMenHao_ShangYeJie_SenLin_LongMen_HaoYue_Nan-Chongqing.html",
  "Nanbin Road & Xiahaoli":
    "https://www.tripadvisor.com/Attraction_Review-g294213-d5302833-Reviews-LongMenHao_ShangYeJie_SenLin_LongMen_HaoYue_Nan-Chongqing.html",
  "Wulingyuan National Forest Park":
    "https://www.tripadvisor.com/Attraction_Review-g494933-d1848698-Reviews-Zhangjiajie_Wulingyuan_Scenic_Area-Zhangjiajie_Hunan.html",
};

ITINERARY.highlights.forEach((h) => {
  const url = ACTIVITY_REVIEWS[h.reviewKey];
  if (url) h.reviewUrl = url;
});

ITINERARY.days.forEach((day) => {
  day.activities.forEach((act) => {
    if (act.type !== "attraction" && act.type !== "food") return;
    const review = ACTIVITY_REVIEWS[act.title.en];
    if (Array.isArray(review)) act.reviews = review;
    else if (review) act.reviewUrl = review;
  });
});
