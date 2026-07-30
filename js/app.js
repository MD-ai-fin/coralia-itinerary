(function () {
  "use strict";

  let lang = localStorage.getItem("coralia-lang") || "en";
  let expandedDay = null;
  let expandedBudgetDay = null;
  let expandedBudgetPanel = null;
  let expandedTipSection = null;
  let expandedPreDeparture = false;
  let expandedPrimerId = null;
  let spotNavOpen = false;
  let sectionNavOpen = false;
  let spotlightTimer = null;
  let manifestBlobUrl = null;
  let downloadToastTimer = null;

  const SECTION_NAV_DRAWER_MQ = "(max-width: 1279px)";
  const SPOT_NAV_DRAWER_MQ = "(max-width: 1279px)";

  const t = (obj) => (typeof obj === "object" && obj !== null ? obj[lang] || obj.en : obj);
  const ui = () => ITINERARY.ui[lang];

  function init() {
    document.body.setAttribute("lang", lang);
    renderAll();
    bindEvents();
  }

  function renderAll() {
    renderHeader();
    renderHero();
    renderPreDeparture48h();
    renderInstallQr();
    renderDestinationPrimer();
    renderHighlights();
    renderHotels();
    renderDays();
    renderSpotNav();
    renderSectionNav();
    renderBudgetBreakdown();
    renderTips();
    renderDownloads();
    renderContact();
    renderFooter();
  }

  function updatePwaManifest() {
    const fullName = t(ITINERARY.meta.title);
    const shortName = t(ITINERARY.meta.iconShortName || ITINERARY.meta.title);
    const appleTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (appleTitle) appleTitle.setAttribute("content", shortName);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    const manifest = {
      name: fullName,
      short_name: shortName,
      description: t(ITINERARY.meta.description),
      start_url: "./",
      scope: "./",
      display: "standalone",
      orientation: "portrait-primary",
      background_color: "#FFFFFF",
      theme_color: "#6A9B4E",
      lang: lang === "zh" ? "zh-CN" : "en",
      icons: [
        { src: "images/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
        { src: "images/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
        { src: "images/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      ],
    };

    if (manifestBlobUrl) URL.revokeObjectURL(manifestBlobUrl);
    manifestBlobUrl = URL.createObjectURL(
      new Blob([JSON.stringify(manifest)], { type: "application/manifest+json" })
    );
    const link = document.querySelector('link[rel="manifest"]');
    if (link) link.href = manifestBlobUrl;
  }

  function renderHeader() {
    document.getElementById("page-title").textContent = t(ITINERARY.meta.title);
    document.getElementById("page-subtitle").textContent = t(ITINERARY.meta.subtitle);
    document.getElementById("traveler-info").textContent = t(ITINERARY.meta.traveler);
    const badge = document.getElementById("build-badge");
    if (badge && ITINERARY.meta.build) {
      badge.textContent = ITINERARY.meta.build;
    }
    document.title = t(ITINERARY.meta.title) + " · Coralia";
    updatePwaManifest();
    requestAnimationFrame(fitTravelerBadge);
  }

  function fitTravelerBadge() {
    const el = document.getElementById("traveler-info");
    if (!el) return;

    el.style.fontSize = "";
    if (lang !== "en" || !window.matchMedia("(max-width: 640px)").matches) return;

    el.style.whiteSpace = "nowrap";
    const maxWidth = el.clientWidth;
    if (maxWidth <= 0) return;

    let size = parseFloat(getComputedStyle(el).fontSize);
    const minSize = Math.max(9, size * 0.62);
    el.style.fontSize = `${size}px`;
    while (size > minSize && el.scrollWidth > maxWidth) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
    }
  }

  function renderInstallQr() {
    const u = ui();
    const url = ITINERARY.meta.siteUrl;
    const section = document.getElementById("install-qr-section");
    if (!url || !section) return;

    document.getElementById("install-qr-title").textContent = u.installQrTitle;
    document.getElementById("install-qr-hint").textContent = u.installQrHint;

    const img = document.getElementById("install-qr-image");
    img.alt = u.installQrTitle;

    const urlEl = document.getElementById("install-qr-url");
    if (urlEl) {
      urlEl.href = url;
      urlEl.textContent = url.replace(/\/$/, "");
    }
  }

  function renderHero() {
    const u = ui();
    document.getElementById("hero-greeting-lead").textContent = t(ITINERARY.meta.greetingLead);
    document.getElementById("hero-greeting-rest").textContent = t(ITINERARY.meta.greetingRest);

    const b = ITINERARY.meta.budget;
    document.getElementById("budget-pills").innerHTML = `
      <span class="budget-pill total">${u.totalFixed}: ${b.total.cny} CNY / $${b.total.usd}</span>
      <span class="budget-pill cap">${u.budgetCap}: ${b.cap.cny} CNY / $${b.cap.usd}</span>
      <span class="budget-pill remaining">${u.remaining}: ${b.remaining.cny} CNY / $${b.remaining.usd}</span>
    `;
    requestAnimationFrame(() => {
      fitHeroGreetingBox();
      fitHeroTextLines();
    });
  }

  function fitHeroGreetingBox() {
    const box = document.getElementById("hero-greeting-box");
    if (!box) return;

    box.style.fontSize = "";
    if (!window.matchMedia("(max-width: 600px)").matches) return;

    const lead = document.getElementById("hero-greeting-lead");
    const rest = document.getElementById("hero-greeting-rest");
    const maxWidth = box.clientWidth;
    if (maxWidth <= 0) return;

    lead.style.whiteSpace = "nowrap";
    rest.style.whiteSpace = "nowrap";

    let size = parseFloat(getComputedStyle(lead).fontSize);
    const minSize = Math.max(10, size * 0.62);
    box.style.fontSize = `${size}px`;
    while (
      size > minSize &&
      (lead.scrollWidth > maxWidth || rest.scrollWidth > maxWidth)
    ) {
      size -= 0.5;
      box.style.fontSize = `${size}px`;
    }
  }

  function fitHeroTextLines() {
    const container = document.querySelector(".hero-intro");
    if (!container) return;

    const maxWidth = container.clientWidth;
    if (maxWidth <= 0) return;

    const pills = document.querySelectorAll("#budget-pills .budget-pill");

    pills.forEach((el) => {
      el.style.fontSize = "";
      el.style.whiteSpace = "nowrap";
      let size = parseFloat(getComputedStyle(el).fontSize);
      const minSize = Math.max(10, size * 0.62);
      el.style.fontSize = `${size}px`;
      while (size > minSize && el.scrollWidth > maxWidth) {
        size -= 0.5;
        el.style.fontSize = `${size}px`;
      }
    });
  }

  const storeBadgeAlt = (store) =>
    lang === "zh"
      ? store === "ios"
        ? "在 App Store 下载"
        : "在 Google Play 获取"
      : store === "ios"
        ? "Download on the App Store"
        : "Get it on Google Play";

  function renderPrimerContent(item) {
    if (!item) return "";
    if (item.segments) {
      return item.segments
        .map((seg) => {
          if (seg.day != null) {
            const actAttr = seg.actIndex != null ? ` data-act-index="${seg.actIndex}"` : "";
            return `<button type="button" class="primer-itinerary-link" data-day="${seg.day}"${actAttr}>${t(seg.t)}</button>`;
          }
          return `<span>${t(seg.t)}</span>`;
        })
        .join("");
    }
    return t(item);
  }

  function renderDestinationPrimer() {
    const u = ui();
    const p = ITINERARY.destinationPrimer;
    if (!p) return;

    document.getElementById("primer-title").textContent = u.primerTitle;
    document.getElementById("primer-hint").textContent = u.primerHint;
    document.getElementById("primer-disclaimer").textContent = t(p.disclaimer);

    document.getElementById("primer-grid").innerHTML = p.places
      .map((place) => {
        const isExpanded = expandedPrimerId === place.id;
        const usScale = place.usScale ? `<span class="primer-us-scale">${t(place.usScale)}</span>` : "";
        return `
        <article class="primer-card card tip-collapsible ${isExpanded ? "expanded" : ""}" data-primer="${place.id}">
          <div class="tip-header" role="button" tabindex="0" aria-expanded="${isExpanded}">
            <h3>${t(place.name)}</h3>
            <span class="day-chevron">▼</span>
          </div>
          <div class="tip-body">
            <div class="tip-body-inner primer-body-inner">
              <p class="primer-stats">${t(place.stats)} ${usScale}</p>
              ${place.geoNote ? `<p class="primer-geo-note">${t(place.geoNote)}</p>` : ""}
              <p class="primer-status">${t(place.status)}</p>
              ${
                place.honors?.length
                  ? `<div class="primer-block">
                <h4 class="primer-label">${u.primerHonorsLabel}</h4>
                <ul class="primer-list primer-honors-list">
                  ${place.honors.map((item) => `<li>${renderPrimerContent(item)}</li>`).join("")}
                </ul>
              </div>`
                  : ""
              }
              <div class="primer-block">
                <h4 class="primer-label">${u.primerAnalogyLabel}</h4>
                <p class="primer-analogy">${t(place.analogy)}</p>
              </div>
              <div class="primer-block">
                <h4 class="primer-label">${u.primerHistoryLabel}</h4>
                <p class="primer-text">${t(place.history)}</p>
              </div>
              <div class="primer-block">
                <h4 class="primer-label">${u.primerInventionsLabel}</h4>
                <ul class="primer-list">
                  ${place.inventions.map((item) => `<li>${renderPrimerContent(item)}</li>`).join("")}
                </ul>
              </div>
              <p class="primer-trip"><strong>${u.primerTripLabel}:</strong> ${renderPrimerContent(place.trip)}</p>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  function renderPreDeparture48h() {
    const card = document.getElementById("predeparture-card");
    const data = ITINERARY.preDeparture48h;
    if (!card || !data) return;

    const hintEl = document.getElementById("predeparture-hint");
    if (hintEl) hintEl.textContent = ui().preDepartureHint;

    const u = ui();
    const isExpanded = expandedPreDeparture;
    card.innerHTML = `
      <article class="predeparture-card card tip-collapsible ${isExpanded ? "expanded" : ""}" id="predeparture-collapsible">
        <div class="tip-header" role="button" tabindex="0" aria-expanded="${isExpanded}">
          <h3>${t(data.title)}</h3>
          <span class="day-chevron">▼</span>
        </div>
        <div class="tip-body">
          <div class="tip-body-inner">
            <p class="predeparture-subtitle">${t(data.subtitle)}</p>
            <ul class="predeparture-list">
              ${data.items
                .map(
                  (item) => `
                <li class="predeparture-item">
                  <span class="predeparture-icon" aria-hidden="true">${item.icon}</span>
                  <div class="predeparture-body">
                    <div class="predeparture-item-title">${t(item.title)}</div>
                    <p class="predeparture-item-desc">${t(item.desc)}</p>
                    <div class="predeparture-item-links">
                      ${
                        item.link
                          ? `<a class="predeparture-link" href="${item.link.url}" target="_blank" rel="noopener">${t(item.link.label)} ↗</a>`
                          : ""
                      }
                      ${
                        item.tipTarget
                          ? `<button type="button" class="predeparture-tip-link" data-tip-target="${item.tipTarget}">${u.preDepartureMore} ↗</button>`
                          : ""
                      }
                    </div>
                  </div>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>
      </article>
    `;
  }

  function renderIntensityBadge(intensity) {
    if (!intensity) return "";
    const label = ui().intensityLabels[intensity];
    if (!label) return "";
    return `<span class="day-intensity day-intensity-${intensity}">${label}</span>`;
  }

  function normalizeActivityText(text) {
    return text
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[，,；;。.!！?？·—–-]/g, "")
      .trim();
  }

  function textsAreRedundant(a, b) {
    if (!a || !b) return false;
    const na = normalizeActivityText(a);
    const nb = normalizeActivityText(b);
    if (na === nb) return true;
    if (na.length >= 12 && nb.length >= 12 && (na.includes(nb) || nb.includes(na))) return true;
    const prefixLen = Math.min(48, na.length, nb.length);
    return prefixLen >= 24 && na.slice(0, prefixLen) === nb.slice(0, prefixLen);
  }

  function joinActivitySentences(lead, tail) {
    if (!lead) return tail;
    if (!tail) return lead;
    if (/[。!.?]$/.test(lead)) {
      return lang === "zh" ? `${lead}${tail}` : `${lead} ${tail}`;
    }
    return lang === "zh" ? `${lead}。${tail}` : `${lead}. ${tail}`;
  }

  function composeActivityText(act) {
    const overview = act.overview ? t(act.overview).trim() : "";
    const desc = formatActivityDesc(act);

    if (!overview) return desc;
    if (!desc) return overview;
    if (textsAreRedundant(overview, desc)) return overview;

    if (desc.includes("\n")) {
      if (/^\s*•\s/m.test(desc)) return desc;
      return `${overview}\n\n${desc}`;
    }

    if (desc.length <= 90) {
      return joinActivitySentences(overview, desc);
    }

    if (textsAreRedundant(overview, desc)) return overview;
    return joinActivitySentences(overview, desc);
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderActivityBodyHtml(text, variant) {
    if (!text) return "";

    const blocks = text.split(/\n\n+/);
    const html = blocks
      .map((block) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        if (!lines.length) return "";

        const listItems = lines.filter((line) =>
          /^(\d+[.)]|[-•*]|[12]）)/.test(line)
        );
        if (listItems.length === lines.length) {
          return `<ul class="activity-body-list">${lines
            .map((line) => `<li>${escapeHtml(line.replace(/^(\d+[.)]|[-•*]\s?|[12]）\s?)/, ""))}</li>`)
            .join("")}</ul>`;
        }

        return lines.map((line) => `<p class="activity-body-p">${escapeHtml(line)}</p>`).join("");
      })
      .join("");

    const className =
      variant === "modal"
        ? `modal-body-text${text.includes("\n") ? " modal-body-text-multiline" : ""}`
        : `timeline-body-text${text.includes("\n") ? " timeline-body-text-multiline" : ""}`;

    return `<div class="${className}">${html}</div>`;
  }

  function renderActivityBody(act, variant = "timeline") {
    const badge = renderHeritageBadge(act.heritage);
    const text = composeActivityText(act);
    if (!badge && !text) return "";

    const bodyHtml = renderActivityBodyHtml(text, variant);
    if (variant === "modal") {
      return `
        <div class="modal-activity-body">
          ${badge ? `<div class="heritage-badge-row">${badge}</div>` : ""}
          ${bodyHtml}
        </div>
      `;
    }

    return `
      <div class="timeline-activity-body">
        ${badge ? `<div class="timeline-heritage">${badge}</div>` : ""}
        ${bodyHtml}
      </div>
    `;
  }

  function renderTips() {
    document.getElementById("tips-title").textContent = ui().tipsTitle;
    document.getElementById("tips-hint").textContent = ui().tipsHint;

    const o = ITINERARY.overseasAccess;
    const v = ITINERARY.visa;

    const appsHtml = ITINERARY.apps
      .map(
        (app) => `
      <article class="app-card card">
        <div class="app-header">
          <img class="app-icon" src="${app.icon}" alt="${t(app.name)}" loading="lazy"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2256%22 height=%2256%22><rect fill=%22%23C8E6B0%22 width=%2256%22 height=%2256%22 rx=%2212%22/><text x=%2228%22 y=%2236%22 text-anchor=%22middle%22 font-size=%2224%22>📱</text></svg>'">
          <div>
            <div class="app-name">${t(app.name)}</div>
            <span class="app-tag">${t(app.tag)}</span>
          </div>
        </div>
        <p class="app-desc">${t(app.desc)}</p>
        <div class="app-links">
          ${
            app.links.ios
              ? `<a class="app-link-badge ios" href="${app.links.ios}" target="_blank" rel="noopener" aria-label="${storeBadgeAlt("ios")}"><img src="images/badge-app-store.svg" alt=""></a>`
              : ""
          }
          ${
            app.links.android
              ? app.links.androidLabel
                ? `<a class="app-link text-link" href="${app.links.android}" target="_blank" rel="noopener">${t(app.links.androidLabel)} ↗</a>`
                : `<a class="app-link-badge android" href="${app.links.android}" target="_blank" rel="noopener" aria-label="${storeBadgeAlt("android")}"><img src="images/badge-google-play.svg" alt=""></a>`
              : ""
          }
        </div>
      </article>
    `
      )
      .join("");

    const tipSections = [
      {
        id: "apps",
        heading: `📱 ${ui().appsTitle}`,
        body: `
          <p class="tip-subtitle-text">${ui().appsSubtitle}</p>
          <div class="apps-grid">${appsHtml}</div>
        `,
      },
      {
        id: "overseas",
        heading: `🌐 ${t(o.title)}`,
        body: `
          <p class="overseas-desc">${t(o.desc)}</p>
          <ul class="overseas-options">
            ${o.options.map((opt) => `<li>${t(opt)}</li>`).join("")}
          </ul>
        `,
      },
      {
        id: "visa",
        heading: `🛂 ${t(v.title)}`,
        body: `
          <p class="visa-subtitle-text">${t(v.subtitle)}</p>
          <p class="visa-required">${t(v.required)}</p>
          <ol class="visa-steps">
            ${v.steps.map((step) => `<li>${t(step)}</li>`).join("")}
          </ol>
          <div class="visa-docs">
            <h4>${t(v.documents.title)}</h4>
            <p class="visa-docs-label">${ui().documentsUpload}</p>
            <ul>${v.documents.upload.map((d) => `<li>${t(d)}</li>`).join("")}</ul>
            <p class="visa-docs-label not-required">${t(v.documents.notRequired.title)}</p>
            <ul class="not-required-list">${v.documents.notRequired.items.map((d) => `<li>${t(d)}</li>`).join("")}</ul>
          </div>
          <div class="visa-links">
            <h4>${ui().officialLinks}</h4>
            ${v.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${t(l.label)} ↗</a>`).join("")}
          </div>
          <p class="visa-note">${t(v.note)}</p>
        `,
      },
    ];

    document.getElementById("tips-grid").innerHTML = tipSections
      .map((section) => {
        const isExpanded = expandedTipSection === section.id;
        return `
        <article class="tip-card card tip-collapsible ${isExpanded ? "expanded" : ""}" data-tip="${section.id}">
          <div class="tip-header" role="button" tabindex="0" aria-expanded="${isExpanded}">
            <h3>${section.heading}</h3>
            <span class="day-chevron">▼</span>
          </div>
          <div class="tip-body">
            <div class="tip-body-inner">${section.body}</div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  function renderHighlightTicket(spot, u) {
    if (!spot.ticket) return "";
    if (spot.ticket.free) {
      return `<div class="highlight-price highlight-price-free">${u.ticketLabel}: ${u.freeAdmission}</div>`;
    }
    const note = spot.ticket.note ? `<div class="highlight-price-note">${t(spot.ticket.note)}</div>` : "";
    return `
      <div class="highlight-price">${u.ticketLabel}: ${spot.ticket.cny} CNY / $${spot.ticket.usd}</div>
      ${note}
    `;
  }

  function renderHighlights() {
    const u = ui();
    document.getElementById("highlights-title").textContent = u.highlightsTitle;
    document.getElementById("highlights-hint").textContent = u.highlightsHint;

    const dayPrefix = lang === "zh" ? "D" : "Day ";

    document.getElementById("highlights-grid").innerHTML = ITINERARY.highlights
      .map(
        (spot) => `
      <article class="highlight-card card">
        <div class="highlight-image-wrap">
          <img class="highlight-image" src="${spot.image}" alt="${t(spot.name)}" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=800&q=80'">
          <span class="highlight-day-badge">${dayPrefix}${spot.day}</span>
        </div>
        <div class="highlight-body">
          <div class="highlight-city">📍 ${t(spot.city)}</div>
          <div class="highlight-name">${t(spot.name)}</div>
          ${spot.heritage ? `<div class="highlight-heritage">${renderHeritageBadge(spot.heritage)}</div>` : ""}
          ${renderHighlightTicket(spot, u)}
          <p class="highlight-tagline">${t(spot.tagline)}</p>
          <a class="highlight-review-link" href="${spot.reviewUrl}" target="_blank" rel="noopener noreferrer">${u.viewReviews} ↗</a>
        </div>
      </article>
    `
      )
      .join("");
  }

  function renderHotels() {
    document.getElementById("hotels-title").textContent = ui().hotelsTitle;

    document.getElementById("hotels-grid").innerHTML = ITINERARY.hotels
      .map(
        (h) => `
      <article class="hotel-card card">
        <a class="hotel-image-link" href="${h.website}" target="_blank" rel="noopener" aria-label="${t(h.name)}">
          <img class="hotel-image" src="${h.image}" alt="${t(h.name)}" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'">
        </a>
        <div class="hotel-body">
          <div class="hotel-city">🏨 ${t(h.city)}</div>
          <div class="hotel-name">
            <a class="hotel-name-link" href="${h.website}" target="_blank" rel="noopener">${t(h.name)} ↗</a>
          </div>
          <div class="hotel-meta">
            <span>⭐ ${h.stars} ${ui().stars}</span>
            <span>🌙 ${h.nights} ${ui().nights}</span>
          </div>
          <div class="hotel-price">${h.total.cny} CNY / $${h.total.usd}</div>
          <p class="hotel-perks">${t(h.perks)}</p>
        </div>
      </article>
    `
      )
      .join("");
  }

  function isSpotNavExcluded(act) {
    if (act.type !== "attraction" && act.type !== "food") return true;
    const titleEn = (act.title?.en || "").toLowerCase();
    const titleZh = act.title?.zh || "";
    if (/hotel breakfast|breakfast & departure|breakfast and departure/.test(titleEn)) return true;
    if (/酒店早餐|早餐出发/.test(titleZh)) return true;
    // Transit combos mis-tagged as food/attraction — not navigable spots
    if (
      act.image === "images/china-railway.png" ||
      act.image === "images/didi.png" ||
      act.image === "images/shuttle-bus.svg" ||
      act.image === "images/chengdu-metro.png" ||
      act.image === "images/chongqing-metro.png"
    ) {
      return true;
    }
    return false;
  }

  function getSpotNavItems() {
    const items = [];
    ITINERARY.days.forEach((day) => {
      day.activities.forEach((act, actIndex) => {
        if (isSpotNavExcluded(act)) return;
        items.push({ day: day.day, actIndex, act });
      });
    });
    return items;
  }

  function getSpotNavImage(act) {
    if (act.image) return act.image;
    return act.type === "food"
      ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect fill='%23D4EBC0' width='48' height='48' rx='12'/%3E%3Ctext x='24' y='32' text-anchor='middle' font-size='22'%3E🍜%3C/text%3E%3C/svg%3E"
      : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect fill='%23E8F3DC' width='48' height='48' rx='12'/%3E%3Ctext x='24' y='32' text-anchor='middle' font-size='22'%3E🏛%3C/text%3E%3C/svg%3E";
  }

  function renderSpotNav() {
    const u = ui();
    const titleEl = document.getElementById("spot-nav-title");
    const listEl = document.getElementById("spot-nav-list");
    const navEl = document.getElementById("spot-nav");
    if (!titleEl || !listEl || !navEl) return;

    titleEl.textContent = u.spotNavTitle;
    navEl.setAttribute("aria-label", u.spotNavTitle);

    const dayPrefix = lang === "zh" ? "D" : "Day ";
    let lastDay = null;

    listEl.innerHTML = getSpotNavItems()
      .map(({ day, actIndex, act }) => {
        const dayMarker =
          day !== lastDay
            ? `<div class="spot-nav-day">${dayPrefix}${day}</div>`
            : "";
        lastDay = day;
        const typeClass = act.type === "food" ? "spot-nav-food" : "spot-nav-attraction";
        return `
          ${dayMarker}
          <button type="button" class="spot-nav-item ${typeClass}"
                  data-day="${day}" data-act-index="${actIndex}"
                  title="${t(act.title)} · ${u.spotNavHint}"
                  aria-label="${dayPrefix}${day} · ${t(act.title)}">
            <img src="${getSpotNavImage(act)}" alt="" loading="lazy"
                 onerror="${imgOnErrorHandler(getSpotNavImage(act))}">
          </button>
        `;
      })
      .join("");

    document.body.classList.add("has-spot-nav");
    navEl.classList.toggle("open", spotNavOpen);
    const toggle = document.getElementById("spot-nav-toggle");
    if (toggle) {
      toggle.setAttribute("aria-expanded", spotNavOpen ? "true" : "false");
      toggle.setAttribute("aria-label", u.spotNavTitle);
    }
    requestAnimationFrame(syncSpotNavAccessibility);
  }

  function isSpotNavDrawerMode() {
    return (
      window.matchMedia(SPOT_NAV_DRAWER_MQ).matches ||
      document.body.classList.contains("spot-nav-needs-toggle")
    );
  }

  function syncSpotNavAccessibility() {
    const nav = document.getElementById("spot-nav");
    if (!nav) return;

    if (window.matchMedia(SPOT_NAV_DRAWER_MQ).matches) {
      document.body.classList.remove("spot-nav-needs-toggle");
      return;
    }

    const rect = nav.getBoundingClientRect();
    const inView =
      rect.width > 40 &&
      rect.height > 40 &&
      rect.left > 8 &&
      rect.right < window.innerWidth - 8;

    document.body.classList.toggle("spot-nav-needs-toggle", !inView);
  }

  function getSectionNavItems() {
    const u = ui();
    const b = ITINERARY.budgetBreakdown;
    return [
      { sectionId: "hero-section", label: u.sectionNavWelcome, iconImg: "images/panda-wave.png" },
      { sectionId: "predeparture-section", label: u.preDepartureTitle, icon: "⏰" },
      { sectionId: "primer-section", label: u.primerTitle, icon: "🗺️" },
      { sectionId: "highlights-section", label: u.highlightsTitle, icon: "✨" },
      { sectionId: "hotels-section", label: u.hotelsTitle, icon: "🏨" },
      { sectionId: "tips-section", label: u.tipsTitle, icon: "💡" },
      { sectionId: "days-section", label: u.daysTitle, icon: "📅" },
      { sectionId: "budget-section", label: t(b.title), icon: "💰", budgetPanel: "breakdown" },
      { sectionId: "budget-section", label: t(b.optional.title), icon: "➕", budgetPanel: "optional" },
      { sectionId: "downloads-section", label: u.downloadsTitle, icon: "📥" },
      { sectionId: "contact-section", label: u.contactTitle, icon: "✉️" },
      { sectionId: "install-qr-section", label: u.installQrTitle, icon: "📲" },
    ];
  }

  function renderSectionNav() {
    const u = ui();
    const titleEl = document.getElementById("section-nav-title");
    const listEl = document.getElementById("section-nav-list");
    const navEl = document.getElementById("section-nav");
    if (!titleEl || !listEl || !navEl) return;

    titleEl.textContent = u.sectionNavTitle;
    navEl.setAttribute("aria-label", u.sectionNavTitle);
    listEl.innerHTML = getSectionNavItems()
      .map(
        (item, index) => `
        <button type="button" class="section-nav-item"
                data-section-id="${item.sectionId}"
                data-budget-panel="${item.budgetPanel || ""}"
                data-section-index="${index}">
          ${
            item.iconImg
              ? `<span class="section-nav-item-icon section-nav-item-icon-img" aria-hidden="true"><img class="section-nav-panda-icon" src="${item.iconImg}" alt="" width="18" height="18" loading="lazy" decoding="async"></span>`
              : item.icon
                ? `<span class="section-nav-item-icon" aria-hidden="true">${item.icon}</span>`
                : ""
          }
          <span class="section-nav-item-label">${item.label}</span>
        </button>
      `
      )
      .join("");

    navEl.classList.toggle("open", sectionNavOpen);
    document.body.classList.add("has-section-nav");
    const toggle = document.getElementById("section-nav-toggle");
    if (toggle) {
      toggle.setAttribute("aria-expanded", sectionNavOpen ? "true" : "false");
      toggle.setAttribute("aria-label", u.sectionNavTitle);
    }
    requestAnimationFrame(syncSectionNavAccessibility);
  }

  function isSectionNavDrawerMode() {
    return (
      window.matchMedia(SECTION_NAV_DRAWER_MQ).matches ||
      document.body.classList.contains("section-nav-needs-toggle")
    );
  }

  function syncSectionNavAccessibility() {
    const nav = document.getElementById("section-nav");
    if (!nav) return;

    if (window.matchMedia(SECTION_NAV_DRAWER_MQ).matches) {
      document.body.classList.remove("section-nav-needs-toggle");
      return;
    }

    const rect = nav.getBoundingClientRect();
    const inView =
      rect.width > 40 &&
      rect.height > 40 &&
      rect.right > 8 &&
      rect.left < window.innerWidth - 8;

    document.body.classList.toggle("section-nav-needs-toggle", !inView);
  }

  function getStickyHeaderOffset() {
    const header = document.querySelector(".header");
    return (header?.offsetHeight ?? 88) + 12;
  }

  function scrollToTarget(el) {
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - getStickyHeaderOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function scrollToDayCard(day) {
    requestAnimationFrame(() => {
      const header = document.querySelector(`.day-card[data-day="${day}"] .day-header`);
      scrollToTarget(header);
    });
  }

  function jumpToSection(sectionId, budgetPanel) {
    if (budgetPanel) {
      expandedBudgetPanel = budgetPanel;
      renderBudgetBreakdown();
    }

    const runScroll = () => {
      const el = budgetPanel
        ? document.querySelector(`.budget-collapsible[data-budget-panel="${budgetPanel}"]`)
        : document.getElementById(sectionId);
      scrollToTarget(el);
    };

    if (budgetPanel) {
      requestAnimationFrame(() => requestAnimationFrame(runScroll));
    } else {
      requestAnimationFrame(runScroll);
    }

    if (isSectionNavDrawerMode()) {
      sectionNavOpen = false;
      renderSectionNav();
    }
  }

  function jumpToDay(dayNum) {
    expandedDay = dayNum;
    renderDays();
    renderSpotNav();
    requestAnimationFrame(() => {
      document.getElementById("days-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => scrollToDayCard(dayNum), 280);
    });
    if (isSpotNavDrawerMode()) {
      spotNavOpen = false;
      renderSpotNav();
    }
  }

  function jumpToActivity(dayNum, actIndex) {
    expandedDay = dayNum;
    renderDays();
    renderSpotNav();

    requestAnimationFrame(() => {
      const el = document.getElementById(`act-d${dayNum}-${actIndex}`);
      if (!el) return;

      document.getElementById("days-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("timeline-item-spotlight");
        if (spotlightTimer) window.clearTimeout(spotlightTimer);
        spotlightTimer = window.setTimeout(() => {
          el.classList.remove("timeline-item-spotlight");
        }, 2200);
      }, 280);
    });

    if (isSpotNavDrawerMode()) {
      spotNavOpen = false;
      renderSpotNav();
    }
  }

  function jumpToTipSection(tipId) {
    expandedTipSection = tipId;
    renderTips();
    requestAnimationFrame(() => {
      const card = document.querySelector(`.tip-collapsible[data-tip="${tipId}"]`);
      scrollToTarget(card || document.getElementById("tips-section"));
    });
  }

  function renderDays() {
    document.getElementById("days-title").textContent = ui().daysTitle;
    document.getElementById("drill-hint").textContent = ui().drillHint;

    document.getElementById("days-list").innerHTML = ITINERARY.days
      .map((day) => {
        const isExpanded = expandedDay === day.day;
        return `
        <article class="day-card card ${isExpanded ? "expanded" : ""}" data-day="${day.day}">
          <div class="day-header" role="button" tabindex="0" aria-expanded="${isExpanded}">
            <div class="day-number">${day.day}</div>
            <div class="day-info">
              <div class="day-meta-row">
                <div class="day-city">${t(day.city)}</div>
                ${renderIntensityBadge(day.intensity)}
              </div>
              <div class="day-theme">${t(day.theme)}</div>
              <div class="day-summary">${t(day.summary)}</div>
            </div>
            <div class="day-cost">
              <div class="day-cost-amount">${day.subtotal.cny} CNY</div>
              <div class="day-cost-usd">$${day.subtotal.usd}</div>
            </div>
            <span class="day-chevron">▼</span>
          </div>
          <div class="day-body">
            <div class="day-timeline">
              ${day.activities.map((act, actIndex) => renderTimelineItem(act, day.day, actIndex)).join("")}
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  const DIDI_ICON = "images/didi.png";
  const HSR_ICON = "images/china-railway.png";
  const SHUTTLE_ICON = "images/shuttle-bus.svg";
  const CHONGQING_METRO_ICON = "images/chongqing-metro.png";
  const IMAGE_FALLBACKS = {
    "images/wulong-shuttle.jpg": SHUTTLE_ICON,
    "images/jiuzhaigou-shuttle.jpg": SHUTTLE_ICON,
    "https://q4.itc.cn/images01/20240905/8b80a3c7561b46e7bb2777baaf82d81e.jpeg": HSR_ICON,
    "https://dw-media.dotdotnews.com/dams/share/image/202201/01/61d02b38e4b05b0b57d274eb.jpg": "images/panda-panoramic-restaurant.jpg",
    "https://www.ifsresidences.com/files/chengduifs01.jpg": "images/ifs-chengdu.jpg",
    "https://d.ifengimg.com/w827_h1104_ablur_q90_webp/x0.ifengimg.com/ucms/2025_25/4F58CAC4A0CCBBC9F8C90EA45ACA463234D408BE_size203_w827_h1104.jpg": "images/tingxiang-restaurant.webp",
    "https://www.jinshasitemuseum.com/steponview/files/20220119/1642561079089.jpg": "images/jinsha-museum.jpg",
    "https://www.hlhbsc.org/upload/download/Spot_pic/Spot_picfile_000877_New.jpg": "images/sanxingdui-museum.jpg",
    "https://www.cityhui.com/uploads/allimg/190416/1-1Z4161419460-L.jpg": "images/huashi-wanza-noodles.jpg",
    "https://www.wlkst.com/u/cms/www/202404/0516275744f6.jpg": "images/longshui-gorge.jpg",
  };
  const GENERIC_IMAGE_FALLBACK =
    "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=200&q=80";

  function imgOnErrorHandler(primarySrc, size) {
    const fallback = IMAGE_FALLBACKS[primarySrc];
    const generic =
      size === "large"
        ? "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=800&q=80"
        : GENERIC_IMAGE_FALLBACK;
    if (!fallback) {
      return `this.src='${generic}'`;
    }
    return `if(this.dataset.fallbackApplied!=='1'){this.dataset.fallbackApplied='1';this.src='${fallback}';}else{this.src='${generic}';}`;
  }

  function isTaxiActivity(act) {
    if (act.type !== "transport") return false;
    const titleEn = act.title.en || "";
    const titleZh = act.title.zh || "";
    return /打车|Taxi/i.test(titleEn) || /打车/.test(titleZh);
  }

  function isHsrActivity(act) {
    if (act.type !== "transport") return false;
    const t = `${act.title.en} ${act.title.zh}`;
    if (/Metro|地铁|打车|Taxi|Shuttle|直通车|接驳|专线大巴|Cableway|索道|Walk|步行/.test(t)) return false;
    return /高铁|High-Speed|G2442|C5782|Panda High-Speed|熊猫.*高铁|熊猫涂装高铁/.test(t);
  }

  function isShuttleActivity(act) {
    if (act.type !== "transport") return false;
    const t = `${act.title.en} ${act.title.zh}`;
    return /Shuttle|直通车|接驳大巴|专线大巴|景区接驳|Scenic Shuttle/i.test(t);
  }

  function isChongqingMetroActivity(act) {
    if (act.type !== "transport") return false;
    const t = `${act.title.en} ${act.title.zh}`;
    if (!/Metro|地铁/.test(t)) return false;
    return /Chongqing West|重庆西|Liziba|李子坝|Metro: Chongqing|地铁：重庆/.test(t);
  }

  function isTransportIconActivity(act) {
    return (
      isTaxiActivity(act) ||
      isHsrActivity(act) ||
      isShuttleActivity(act) ||
      isChongqingMetroActivity(act)
    );
  }

  function getActivityImage(act) {
    if (isTaxiActivity(act)) return DIDI_ICON;
    if (isHsrActivity(act)) return HSR_ICON;
    if (isShuttleActivity(act)) return SHUTTLE_ICON;
    if (isChongqingMetroActivity(act)) return CHONGQING_METRO_ICON;
    return act.image;
  }

  function getActivityReviews(act) {
    if (act.reviews?.length) return act.reviews;
    if (act.reviewUrl) return [{ label: ui().viewReviews, url: act.reviewUrl }];
    return [];
  }

  function stripPricesFromDesc(text) {
    if (!text) return "";
    const isShoppingGuide = /Pop Panda Factory|泡泡熊猫工厂/.test(text);

    const stripLine = (line) => {
      if (/^\s*[•·\-*]\s/.test(line)) return line.trim();
      if (/租金|押金|Rental:|deposit|\/ 台|per unit|导览器|导览眼镜|智慧语音|MR 沉浸式|Smart audio guide|MR immersive|Languages:|语言：|时长：|Hours:|Highlight:|特色：|^可租/i.test(line)) return line.trim();
      if (isShoppingGuide) return line.trim();

      const logisticsLine = /酒店|早餐|配套|amenities|停止入园|停运|included|内含|complimentary|藏服|换拍照|breakfast for|photosho/i.test(line);
      const priceOnlyPatterns = [
        /\d+(?:\.\d+)?\s*CNY\s*\/\s*\d+(?:\.\d+)?\s*USD(?:\s*\/\s*人|\s*per person|\s*one-way|\s*round-trip|\s*\([^)]*\))?/gi,
        /\d+(?:\.\d+)?\s*CNY(?:\s*\/\s*人|\s*\/人|\s*per person)?/gi,
        /\d+(?:\.\d+)?\s*USD(?:\s*\/\s*人|\s*per person|\s*one-way|\s*round-trip)?/gi,
        /(?:约?\s*\d+(?:\.\d+)?\s*元\/人(?:\/天)?)/g,
      ];

      if (logisticsLine) {
        let s = line;
        for (const re of priceOnlyPatterns) s = s.replace(re, "");
        s = s.replace(/[，,;；]\s*$/g, "").replace(/、\s*$/g, "").replace(/\s{2,}/g, " ").trim();
        if (s === "." || s === "。" || s === "、") return "";
        return s;
      }

      let s = line;
      const patterns = [
        /\d+(?:\.\d+)?\s*CNY\s*\/\s*\d+(?:\.\d+)?\s*USD(?:\s*\/\s*人|\s*per person|\s*one-way|\s*round-trip|\s*\([^)]*\))?/gi,
        /\d+(?:\.\d+)?\s*CNY(?:\s*\/\s*人|\s*\/人|\s*per person)?/gi,
        /\d+(?:\.\d+)?\s*USD(?:\s*\/\s*人|\s*per person|\s*one-way|\s*round-trip)?/gi,
        /(?:约?\s*\d+(?:\.\d+)?\s*元\/人(?:\/day)?)/g,
        /(?:One-way fare per person|One-way|Second-class seat|Second-class|Set price for two|Set for two|Ticket set for two|Cost for two|Daily room split|Daily split|Room rate|Average second-class|Combined entrance ticket|Entrance ticket|Combo ticket)\s*[^.;\n]*/gi,
        /\bTicket\s+(?:\d|~|CNY|USD|\$)[^.;\n]*/gi,
        /(?:Round-trip)\s+(?:\d|fare|ticket|per person|CNY|USD)/gi,
        /(?:单人|人均|双人|套餐|单日分摊|房价|合计|二等座|英文讲解器|地缝门票|含百龙天梯)[^，,;；.\n]*/g,
        /(?:English audio guide)[^，,;；.\n]*/gi,
        /(?:mandatory in-park shuttle bus)[^，,;；.\n]*/gi,
        /(?:园区观光车必购)[^，,;；.\n]*/g,
      ];
      for (const re of patterns) s = s.replace(re, "");
      s = s.replace(/\s*[，,;；]\s*[，,;；]+/g, "，");
      s = s.replace(/[，,;；]\s*$/g, "").replace(/^\s*[，,;；]\s*/g, "");
      s = s.replace(/、\s*$/g, "");
      s = s.replace(/\(\s*\)/g, "").replace(/\s{2,}/g, " ").trim();
      if (s === "." || s === "。" || s === "、") return "";
      return s;
    };

    return text.split("\n").map(stripLine).filter(Boolean).join("\n").trim();
  }

  function stripLeadingTimeFromDesc(text, actTime) {
    if (!text) return "";

    const stripFromLine = (line) => {
      let result = line;
      if (actTime) {
        const flexTime = actTime
          .trim()
          .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
          .replace(/\\-/g, "[\\u2013\\u2014\\-~]");
        result = result.replace(new RegExp(`^${flexTime}\\s*[.·]?\\s*`, "u"), "");
      }
      result = result.replace(/^visit\.\s*/i, "");
      result = result.replace(/^游览[。.]?\s*/, "");
      if (actTime && /^[A-Za-z]/.test(actTime)) {
        result = result.replace(new RegExp(`^${actTime.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*[.·:-]?\\s*`, "i"), "");
      }
      return result.trim();
    };

    const lines = text.split("\n");
    lines[0] = stripFromLine(lines[0]);
    return lines.join("\n").trim();
  }

  function formatActivityDesc(act) {
    return stripLeadingTimeFromDesc(stripPricesFromDesc(t(act.desc)), act.time);
  }

  function formatHeritageLabel(heritage) {
    if (!heritage) return "";
    const kindLabel =
      heritage.kind === "natural"
        ? lang === "zh"
          ? "世界自然遗产"
          : "UNESCO World Natural Heritage"
        : lang === "zh"
          ? "世界文化遗产"
          : "UNESCO World Cultural Heritage";
    const yearPart = heritage.year ? (lang === "zh" ? `（${heritage.year}年）` : ` (${heritage.year})`) : "";
    const seriesPart = heritage.series ? ` · ${t(heritage.series)}` : "";
    return `${kindLabel}${yearPart}${seriesPart}`;
  }

  function renderHeritageBadge(heritage) {
    if (!heritage) return "";
    const kindClass = heritage.kind === "natural" ? "heritage-natural" : "heritage-cultural";
    return `<span class="heritage-badge ${kindClass}">${formatHeritageLabel(heritage)}</span>`;
  }

  function renderActivityTitle(act) {
    const title = t(act.title);
    const reviews = getActivityReviews(act);

    if (!reviews.length) {
      return `<div class="timeline-title">${title}</div>`;
    }

    if (reviews.length === 1) {
      return `<a class="timeline-title timeline-title-link" href="${reviews[0].url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${title} ↗</a>`;
    }

    return `
      <div class="timeline-title">${title}</div>
      <div class="timeline-review-links">
        ${reviews.map((r) => `<a class="timeline-review-link" href="${r.url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${t(r.label)} ↗</a>`).join("")}
      </div>
    `;
  }

  function renderReviewLinksHtml(act) {
    const reviews = getActivityReviews(act);
    if (!reviews.length) return "";
    return `
      <div class="modal-review-links">
        ${reviews
          .map(
            (r) =>
              `<a class="modal-review-link" href="${r.url}" target="_blank" rel="noopener noreferrer">${t(r.label)} ↗</a>`
          )
          .join("")}
      </div>
    `;
  }

  function formatActivityTime(act) {
    if (!act.optional) return act.time;
    if (lang === "zh") return act.time.replace(/^Optional ·\s*/, "可选 · ");
    const match = act.time.match(/(\d{1,2}):(\d{2})/);
    if (!match) return ui().optionalLabel;
    let hour = parseInt(match[1], 10);
    const minute = match[2];
    const suffix = hour >= 12 ? "PM" : "AM";
    if (hour > 12) hour -= 12;
    if (hour === 0) hour = 12;
    return `${ui().optionalLabel} (from ${hour}:${minute} ${suffix})`;
  }

  function renderTimelineItem(act, dayNum, actIndex) {
    const typeLabel = ui().typeLabels[act.type] || act.type;
    const costStr = formatCost(act.cost);
    const imgSrc = getActivityImage(act);
    const thumbClass = isTransportIconActivity(act)
      ? "timeline-thumb timeline-thumb-icon"
      : "timeline-thumb";
    const optionalBadge = act.optional
      ? `<span class="timeline-optional-badge">${ui().optionalLabel}</span>`
      : "";
    const itemClass = act.optional ? "timeline-item timeline-item-optional" : "timeline-item";
    const timeDisplay = formatActivityTime(act);

    return `
      <div class="${itemClass}" id="act-d${dayNum}-${actIndex}" data-day="${dayNum}" data-act-index="${actIndex}" role="button" tabindex="0" aria-label="${t(act.title)}">
        <div class="timeline-time">${timeDisplay}</div>
        <img class="${thumbClass}" src="${imgSrc}" alt="" loading="lazy"
             onerror="${imgOnErrorHandler(imgSrc)}">
        <div class="timeline-content">
          <span class="timeline-type type-${act.type}">${typeLabel}</span>
          ${optionalBadge}
          ${renderActivityTitle(act)}
          ${renderActivityBody(act)}
          ${costStr ? `<div class="timeline-cost">${costStr}</div>` : ""}
        </div>
        <span class="timeline-arrow">›</span>
      </div>
    `;
  }

  function getActivityByRef(dayNum, actIndex) {
    const day = ITINERARY.days.find((d) => d.day === dayNum);
    return day?.activities[actIndex] ?? null;
  }

  function formatCost(cost) {
    if (!cost) return "";
    const note = cost.note ? t(cost.note) : "";
    return `${cost.cny} CNY / $${cost.usd}${note ? ` (${note})` : ""}`;
  }

  function renderBudgetBreakdown() {
    const u = ui();
    const b = ITINERARY.budgetBreakdown;
    const total = ITINERARY.meta.budget;

    const daysHtml = b.days
      .map((day) => {
        const isExpanded = expandedBudgetDay === day.day;
        return `
        <article class="budget-day-card card ${isExpanded ? "expanded" : ""}" data-budget-day="${day.day}">
          <div class="budget-day-header" role="button" tabindex="0" aria-expanded="${isExpanded}">
            <div class="budget-day-label">${t(day.label)}</div>
            <div class="budget-day-subtotal">${day.subtotal.cny} CNY / $${day.subtotal.usd}</div>
            <span class="day-chevron">▼</span>
          </div>
          <div class="budget-day-body">
            <table class="budget-table">
              <tbody>
                ${day.items
                  .map(
                    (item) => `
                  <tr>
                    <td>${t(item.label)}</td>
                    <td class="budget-amount">${item.cny} CNY</td>
                    <td class="budget-amount">$${item.usd}</td>
                  </tr>`
                  )
                  .join("")}
                <tr class="budget-subtotal-row">
                  <td>${u.subtotalLabel}</td>
                  <td class="budget-amount">${day.subtotal.cny} CNY</td>
                  <td class="budget-amount">$${day.subtotal.usd}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>`;
      })
      .join("");

    const grandHtml = `
      <div class="budget-grand-label">${u.grandTotalLabel}</div>
      <div class="budget-grand-amount">${total.total.cny} CNY / $${total.total.usd}</div>
      <div class="budget-grand-meta">${u.budgetCap}: ${total.cap.cny} CNY / $${total.cap.usd} · ${u.remaining}: ${total.remaining.cny} CNY / $${total.remaining.usd}</div>
    `;

    const panels = [
      {
        id: "breakdown",
        heading: t(b.title),
        body: `
          <p class="budget-panel-desc">${t(b.subtitle)}</p>
          <div class="budget-list">${daysHtml}</div>
          <div class="budget-grand card">${grandHtml}</div>
        `,
      },
      {
        id: "optional",
        heading: t(b.optional.title),
        body: `<ul class="budget-optional-list">${b.optional.items.map((item) => `<li>${t(item)}</li>`).join("")}</ul>`,
      },
    ];

    document.getElementById("budget-panels").innerHTML = panels
      .map((panel) => {
        const isExpanded = expandedBudgetPanel === panel.id;
        return `
        <article class="budget-panel card budget-collapsible ${isExpanded ? "expanded" : ""}" data-budget-panel="${panel.id}">
          <div class="budget-panel-header" role="button" tabindex="0" aria-expanded="${isExpanded}">
            <h3>${panel.heading}</h3>
            <span class="day-chevron">▼</span>
          </div>
          <div class="budget-panel-body">
            <div class="budget-panel-inner">${panel.body}</div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  function renderContact() {
    const u = ui();
    document.getElementById("contact-title").textContent = u.contactTitle;
    document.getElementById("contact-hint").textContent = u.contactHint;

    document.getElementById("contact-form-wrap").innerHTML = `
      <form id="contact-form" class="contact-form" novalidate>
        <input type="text" name="_gotcha" class="contact-honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="contact-grid">
          <label class="contact-field">
            <span class="contact-label">${u.contactName} <span class="contact-required" aria-hidden="true">*</span></span>
            <input type="text" name="name" required autocomplete="name" placeholder="${u.contactNamePlaceholder}">
          </label>
          <label class="contact-field">
            <span class="contact-label">${u.contactPhone}</span>
            <input type="tel" name="phone" autocomplete="tel" placeholder="${u.contactPhonePlaceholder}">
          </label>
          <label class="contact-field contact-field-full">
            <span class="contact-label">${u.contactEmail} <span class="contact-required" aria-hidden="true">*</span></span>
            <input type="email" name="email" required autocomplete="email" placeholder="${u.contactEmailPlaceholder}">
          </label>
          <label class="contact-field contact-field-full">
            <span class="contact-label">${u.contactMessage} <span class="contact-required" aria-hidden="true">*</span></span>
            <textarea name="message" required rows="5" placeholder="${u.contactMessagePlaceholder}"></textarea>
          </label>
        </div>
        <div class="contact-actions">
          <button type="submit" class="contact-submit">${u.contactSubmit}</button>
        </div>
        <p id="contact-status" class="contact-status" role="status" aria-live="polite" hidden></p>
      </form>
    `;
  }

  function showContactStatus(type, message) {
    const status = document.getElementById("contact-status");
    if (!status) return;
    status.hidden = false;
    status.textContent = message;
    status.className = `contact-status contact-status-${type}`;
  }

  async function handleContactSubmit(e) {
    const form = e.target.closest("#contact-form");
    if (!form) return;
    e.preventDefault();

    const u = ui();
    const formId = ITINERARY.contact?.formspreeFormId;
    if (!formId || formId === "YOUR_FORMSPREE_FORM_ID") {
      showContactStatus("error", u.contactNotConfigured);
      return;
    }

    if (!form.reportValidity()) return;

    const submitBtn = form.querySelector(".contact-submit");
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = u.contactSending;

    const status = document.getElementById("contact-status");
    if (status) {
      status.hidden = true;
      status.className = "contact-status";
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        showContactStatus("success", u.contactSuccess);
      } else {
        showContactStatus("error", u.contactError);
      }
    } catch {
      showContactStatus("error", u.contactError);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  }

  function renderFooter() {
    const taglineEl = document.getElementById("footer-tagline-text");
    if (taglineEl) taglineEl.textContent = ui().footerTagline;

    const build = ITINERARY.meta.build ? ` · Build ${ITINERARY.meta.build}` : "";
    document.getElementById("exchange-rate").textContent = ITINERARY.meta.exchangeRate + build;
  }

  function renderDownloads() {
    const u = ui();
    document.getElementById("downloads-title").textContent = u.downloadsTitle;
    document.getElementById("downloads-hint").textContent = u.downloadsHint;

    const cards = ITINERARY.downloads.groups.flatMap((group) =>
      group.items.map((item) => ({ group, item }))
    );

    document.getElementById("downloads-groups").innerHTML = `
      <div class="downloads-grid">
        ${cards
          .map(
            ({ group, item }) => `
          <article class="download-card card">
            <div class="download-card-body">
              <span class="download-category-badge">${t(group.title)}</span>
              <div class="download-card-title">${t(item.title)}</div>
              <p class="download-card-desc">${t(item.desc)}</p>
            </div>
            <a class="download-btn" href="${item.file[lang] || item.file.en}" download data-download>
              <span class="download-btn-icon" aria-hidden="true">📥</span>
              <span class="download-btn-label">${u.downloadBtn}</span>
            </a>
          </article>
        `
          )
          .join("")}
      </div>
    `;
  }

  function ensureAppToast() {
    if (document.getElementById("app-toast")) return;
    const toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "app-toast hidden";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.innerHTML = `<span id="app-toast-text"></span>`;
    document.body.appendChild(toast);
  }

  function showAppToast(message) {
    ensureAppToast();
    const toast = document.getElementById("app-toast");
    document.getElementById("app-toast-text").textContent = message;
    toast.classList.remove("hidden");
    toast.classList.add("visible");
    clearTimeout(downloadToastTimer);
    downloadToastTimer = setTimeout(() => {
      toast.classList.remove("visible");
      toast.classList.add("hidden");
    }, 3500);
  }

  async function triggerFileDownload(url, linkEl) {
    const filename = url.split("/").pop() || "download.docx";
    const minBusyMs = 500;

    linkEl.setAttribute("aria-busy", "true");
    linkEl.classList.add("download-btn-busy");

    // Ensure the busy state paints before fetch (local files can finish in one frame).
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const started = Date.now();
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("fetch failed");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(blobUrl);
      showAppToast(ui().downloadSuccess);
    } catch {
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      showAppToast(ui().downloadSuccess);
    }

    const remaining = minBusyMs - (Date.now() - started);
    if (remaining > 0) {
      await new Promise((resolve) => setTimeout(resolve, remaining));
    }

    linkEl.classList.remove("download-btn-busy");
    linkEl.removeAttribute("aria-busy");
  }

  function bindEvents() {
    document.getElementById("contact-section")?.addEventListener("submit", handleContactSubmit);

    document.getElementById("downloads-section")?.addEventListener("click", (e) => {
      const link = e.target.closest("[data-download]");
      if (!link || link.classList.contains("download-btn-busy")) return;
      e.preventDefault();
      triggerFileDownload(link.getAttribute("href"), link);
    });

    document.getElementById("lang-toggle").addEventListener("click", toggleLang);

    document.getElementById("predeparture-section")?.addEventListener("click", (e) => {
      const header = e.target.closest("#predeparture-section .tip-header");
      if (header && !e.target.closest("[data-tip-target], .predeparture-link")) {
        expandedPreDeparture = !expandedPreDeparture;
        renderPreDeparture48h();
        return;
      }
      const btn = e.target.closest("[data-tip-target]");
      if (!btn) return;
      e.preventDefault();
      jumpToTipSection(btn.dataset.tipTarget);
    });

    document.getElementById("predeparture-section")?.addEventListener("keydown", (e) => {
      const header = e.target.closest("#predeparture-section .tip-header");
      if (!header || (e.key !== "Enter" && e.key !== " ")) return;
      e.preventDefault();
      expandedPreDeparture = !expandedPreDeparture;
      renderPreDeparture48h();
    });

    document.getElementById("spot-nav-list")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".spot-nav-item");
      if (!btn) return;
      jumpToActivity(parseInt(btn.dataset.day, 10), parseInt(btn.dataset.actIndex, 10));
    });

    document.getElementById("spot-nav-toggle")?.addEventListener("click", () => {
      spotNavOpen = !spotNavOpen;
      if (spotNavOpen) sectionNavOpen = false;
      renderSpotNav();
      renderSectionNav();
    });

    document.getElementById("section-nav-list")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".section-nav-item");
      if (!btn) return;
      jumpToSection(btn.dataset.sectionId, btn.dataset.budgetPanel || null);
    });

    document.getElementById("section-nav-toggle")?.addEventListener("click", () => {
      sectionNavOpen = !sectionNavOpen;
      if (sectionNavOpen) spotNavOpen = false;
      renderSpotNav();
      renderSectionNav();
    });

    document.addEventListener("click", (e) => {
      if (isSpotNavDrawerMode() && spotNavOpen && !e.target.closest("#spot-nav, #spot-nav-toggle")) {
        spotNavOpen = false;
        renderSpotNav();
      }
      if (isSectionNavDrawerMode() && sectionNavOpen && !e.target.closest("#section-nav, #section-nav-toggle")) {
        sectionNavOpen = false;
        renderSectionNav();
      }
    });

    window.addEventListener("resize", () => {
      syncSectionNavAccessibility();
      syncSpotNavAccessibility();
      fitHeroGreetingBox();
      fitHeroTextLines();
      fitTravelerBadge();
    });

    document.getElementById("budget-panels").addEventListener("click", (e) => {
      const panelHeader = e.target.closest(".budget-panel-header");
      if (panelHeader) {
        const panel = panelHeader.closest(".budget-collapsible");
        const panelId = panel.dataset.budgetPanel;
        expandedBudgetPanel = expandedBudgetPanel === panelId ? null : panelId;
        renderBudgetBreakdown();
        if (expandedBudgetPanel === panelId) {
          document.querySelector(`.budget-collapsible[data-budget-panel="${panelId}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        return;
      }

      const header = e.target.closest(".budget-day-header");
      if (!header) return;
      const card = header.closest(".budget-day-card");
      const day = parseInt(card.dataset.budgetDay, 10);
      expandedBudgetDay = expandedBudgetDay === day ? null : day;
      renderBudgetBreakdown();
    });

    document.getElementById("budget-panels").addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const panelHeader = e.target.closest(".budget-panel-header");
      const dayHeader = e.target.closest(".budget-day-header");
      if (panelHeader || dayHeader) {
        e.preventDefault();
        (panelHeader || dayHeader).click();
      }
    });

    document.getElementById("tips-grid").addEventListener("click", (e) => {
      const header = e.target.closest(".tip-header");
      if (!header) return;
      const card = header.closest(".tip-collapsible");
      if (!card || card.closest("#primer-grid")) return;
      const tipId = card.dataset.tip;
      expandedTipSection = expandedTipSection === tipId ? null : tipId;
      renderTips();
      if (expandedTipSection === tipId) {
        document.querySelector(`.tip-collapsible[data-tip="${tipId}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    document.getElementById("primer-grid").addEventListener("click", (e) => {
      const link = e.target.closest(".primer-itinerary-link");
      if (link) {
        e.preventDefault();
        e.stopPropagation();
        const day = parseInt(link.dataset.day, 10);
        const actIndexRaw = link.dataset.actIndex;
        if (actIndexRaw !== undefined && actIndexRaw !== "") {
          jumpToActivity(day, parseInt(actIndexRaw, 10));
        } else {
          jumpToDay(day);
        }
        return;
      }

      const header = e.target.closest(".tip-header");
      if (!header) return;
      const card = header.closest(".tip-collapsible");
      const primerId = card.dataset.primer;
      expandedPrimerId = expandedPrimerId === primerId ? null : primerId;
      renderDestinationPrimer();
      if (expandedPrimerId === primerId) {
        document.querySelector(`.tip-collapsible[data-primer="${primerId}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    document.getElementById("primer-grid").addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const link = e.target.closest(".primer-itinerary-link");
      if (link) {
        e.preventDefault();
        link.click();
        return;
      }
      const header = e.target.closest(".tip-header");
      if (header) {
        e.preventDefault();
        header.click();
      }
    });

    document.getElementById("tips-grid").addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const header = e.target.closest(".tip-header");
      if (header) {
        e.preventDefault();
        header.click();
      }
    });

    document.getElementById("days-list").addEventListener("click", (e) => {
      if (e.target.closest(".timeline-title-link, .timeline-review-link")) return;

      const header = e.target.closest(".day-header");
      if (header) {
        const card = header.closest(".day-card");
        const day = parseInt(card.dataset.day, 10);
        expandedDay = expandedDay === day ? null : day;
        renderDays();
        if (expandedDay === day) {
          scrollToDayCard(day);
        }
        return;
      }

      const item = e.target.closest(".timeline-item");
      if (item) {
        const act = getActivityByRef(
          parseInt(item.dataset.day, 10),
          parseInt(item.dataset.actIndex, 10)
        );
        if (act) openModal(act);
        return;
      }
    });

    document.getElementById("days-list").addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const header = e.target.closest(".day-header");
      const item = e.target.closest(".timeline-item");
      if (header || item) {
        e.preventDefault();
        header ? header.click() : item.click();
      }
    });

    document.getElementById("modal").addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-close")) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  function toggleLang() {
    lang = lang === "en" ? "zh" : "en";
    localStorage.setItem("coralia-lang", lang);
    document.body.setAttribute("lang", lang);
    renderAll();
    window.CoraliaPWA?.refreshInstallBanner();
  }

  function openModal(act) {
    const u = ui();
    const typeLabel = u.typeLabels[act.type] || act.type;
    const costStr = formatCost(act.cost);

    let mediaHtml = "";
    const imgSrc = getActivityImage(act);
    if (imgSrc) {
      const mediaClass = isTransportIconActivity(act)
        ? "modal-media modal-media-icon"
        : "modal-media";
      mediaHtml = `<img class="${mediaClass}" src="${imgSrc}" alt="${t(act.title)}" onerror="${imgOnErrorHandler(imgSrc, 'large')}">`;
    }

    document.getElementById("modal-body").innerHTML = `
      ${mediaHtml}
      <span class="modal-type type-${act.type}">${typeLabel}</span>
      <div class="modal-time">⏰ ${act.time}</div>
      <h3 class="modal-title">${t(act.title)}</h3>
      ${renderReviewLinksHtml(act)}
      ${renderActivityBody(act, "modal")}
      ${costStr ? `<div class="modal-cost-box">${u.cost}: ${costStr}</div>` : ""}
    `;

    const modal = document.getElementById("modal");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
