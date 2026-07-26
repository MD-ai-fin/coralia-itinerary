(function () {
  "use strict";

  let lang = localStorage.getItem("coralia-lang") || "en";
  let expandedDay = null;
  let expandedBudgetDay = null;
  let expandedBudgetPanel = null;
  let expandedTipSection = null;

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
    renderHighlights();
    renderHotels();
    renderDays();
    renderBudgetBreakdown();
    renderTips();
    renderFooter();
  }

  function renderHeader() {
    document.getElementById("page-title").textContent = t(ITINERARY.meta.title);
    document.getElementById("page-subtitle").textContent = t(ITINERARY.meta.subtitle);
    document.getElementById("traveler-info").textContent = t(ITINERARY.meta.traveler);
    const badge = document.getElementById("build-badge");
    if (badge && ITINERARY.meta.build) {
      badge.textContent = `✨ ${ITINERARY.meta.build}`;
    }
    document.title = t(ITINERARY.meta.title) + " · Coralia";
  }

  function renderHero() {
    const u = ui();
    const greeting =
      lang === "zh"
        ? "🌸 欢迎 Coralia！一起开启川渝熊猫甜蜜之旅吧～"
        : "🌸 Welcome Coralia! Let's start your sweet panda adventure~";

    document.getElementById("hero-greeting").textContent = greeting;

    const b = ITINERARY.meta.budget;
    document.getElementById("budget-pills").innerHTML = `
      <span class="budget-pill total">${u.totalFixed}: ${b.total.cny} CNY / $${b.total.usd}</span>
      <span class="budget-pill cap">${u.budgetCap}: ${b.cap.cny} CNY / $${b.cap.usd}</span>
      <span class="budget-pill remaining">${u.remaining}: ${b.remaining.cny} CNY / $${b.remaining.usd}</span>
    `;
  }

  const storeBadgeAlt = (store) =>
    lang === "zh"
      ? store === "ios"
        ? "在 App Store 下载"
        : "在 Google Play 获取"
      : store === "ios"
        ? "Download on the App Store"
        : "Get it on Google Play";

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
        <a class="highlight-image-link" href="${spot.reviewUrl}" target="_blank" rel="noopener noreferrer"
           aria-label="${t(spot.name)} — ${u.viewReviews}">
          <img class="highlight-image" src="${spot.image}" alt="${t(spot.name)}" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=800&q=80'">
          <span class="highlight-day-badge">${dayPrefix}${spot.day}</span>
        </a>
        <div class="highlight-body">
          <div class="highlight-city">📍 ${t(spot.city)}</div>
          <div class="highlight-name">
            <a class="highlight-name-link" href="${spot.reviewUrl}" target="_blank" rel="noopener noreferrer">${t(spot.name)} ↗</a>
          </div>
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
              <div class="day-city">${t(day.city)}</div>
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

  function isTaxiActivity(act) {
    if (act.type !== "transport") return false;
    const titleEn = act.title.en || "";
    const titleZh = act.title.zh || "";
    return /打车|Taxi/i.test(titleEn) || /打车/.test(titleZh);
  }

  function getActivityImage(act) {
    return isTaxiActivity(act) ? DIDI_ICON : act.image;
  }

  function getActivityReviews(act) {
    if (act.reviews?.length) return act.reviews;
    if (act.reviewUrl) return [{ label: ui().viewReviews, url: act.reviewUrl }];
    return [];
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

  function renderTimelineItem(act, dayNum, actIndex) {
    const typeLabel = ui().typeLabels[act.type] || act.type;
    const costStr = formatCost(act.cost);
    const imgSrc = getActivityImage(act);
    const thumbClass = isTaxiActivity(act) ? "timeline-thumb timeline-thumb-didi" : "timeline-thumb";

    return `
      <div class="timeline-item" data-day="${dayNum}" data-act-index="${actIndex}" role="button" tabindex="0" aria-label="${t(act.title)}">
        <div class="timeline-time">${act.time}</div>
        <img class="${thumbClass}" src="${imgSrc}" alt="" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=200&q=80'">
        <div class="timeline-content">
          <span class="timeline-type type-${act.type}">${typeLabel}</span>
          ${renderActivityTitle(act)}
          <div class="timeline-desc">${t(act.desc)}</div>
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

  function renderFooter() {
    document.getElementById("footer-tagline-text").textContent = ui().footerTagline;
    const build = ITINERARY.meta.build ? ` · Build ${ITINERARY.meta.build}` : "";
    document.getElementById("exchange-rate").textContent = ITINERARY.meta.exchangeRate + build;
  }

  function bindEvents() {
    document.getElementById("lang-toggle").addEventListener("click", toggleLang);

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
      const tipId = card.dataset.tip;
      expandedTipSection = expandedTipSection === tipId ? null : tipId;
      renderTips();
      if (expandedTipSection === tipId) {
        document.querySelector(`.tip-collapsible[data-tip="${tipId}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
  }

  function openModal(act) {
    const u = ui();
    const typeLabel = u.typeLabels[act.type] || act.type;
    const costStr = formatCost(act.cost);

    let mediaHtml = "";
    const imgSrc = getActivityImage(act);
    if (imgSrc) {
      const mediaClass = isTaxiActivity(act) ? "modal-media modal-media-didi" : "modal-media";
      mediaHtml = `<img class="${mediaClass}" src="${imgSrc}" alt="${t(act.title)}">`;
    }

    document.getElementById("modal-body").innerHTML = `
      ${mediaHtml}
      <span class="modal-type type-${act.type}">${typeLabel}</span>
      <div class="modal-time">⏰ ${act.time}</div>
      <h3 class="modal-title">${t(act.title)}</h3>
      ${renderReviewLinksHtml(act)}
      <p class="modal-desc">${t(act.desc)}</p>
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
