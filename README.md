# Coralia 熊猫之旅 · Travel Itinerary Web

软萌糖果风川渝熊猫主题旅行行程网页，基于文件夹内 10 天 9 晚定制行程文档制作。

## 打开方式

**方式一（推荐）：** 双击 `index.html` 即可在浏览器中打开。

**方式二：** 本地服务器预览：

```powershell
cd web
npx serve .
```

或双击 `打开网页.bat` 自动启动本地服务器。

## 功能

- 🐼 软萌糖果色系 UI，熊猫与竹子元素
- 🌐 中英文一键切换（右上角按钮，选择会保存在浏览器）
- 📅 **Drill-down 行程**：点击日期展开当日时间线 → 点击具体活动查看详情弹窗（含图片/视频）
- 📱 必备 APP 清单，含应用图标与 App Store / Google Play 下载链接
- 🏨 三家酒店信息与图片
- 💰 双人固定预算汇总

## 文件结构

```
web/
├── index.html      # 主页面
├── css/style.css   # 糖果风样式
├── js/
│   ├── data.js     # 双语行程数据
│   └── app.js      # 交互逻辑
└── README.md
```

## 数据来源

- `10-Day 9-Night Custom Panda-Themed Sichuan-Chongqing Travel Itinerary - English.docx`
- `10 天 9 晚川渝熊猫主题定制旅行行程.docx`
