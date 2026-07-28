(function () {
  "use strict";

  const DISMISS_KEY = "coralia-pwa-install-dismissed";
  let deferredPrompt = null;

  function strings() {
    const lang = document.body.getAttribute("lang") || "en";
    if (typeof ITINERARY !== "undefined" && ITINERARY.ui?.[lang]) {
      return ITINERARY.ui[lang];
    }
    return lang === "zh"
      ? { pwaInstallTitle: "安装到手机", pwaInstallHint: "添加主屏幕图标，离线也能查看行程", pwaInstallBtn: "安装", pwaInstallDismiss: "暂不" }
      : { pwaInstallTitle: "Install app", pwaInstallHint: "Add to your home screen for offline access", pwaInstallBtn: "Install", pwaInstallDismiss: "Not now" };
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  function createInstallBanner() {
    if (document.getElementById("pwa-install-banner")) return;
    const banner = document.createElement("div");
    banner.id = "pwa-install-banner";
    banner.className = "pwa-install-banner hidden";
    banner.innerHTML = `
      <div class="pwa-install-inner card">
        <div class="pwa-install-copy">
          <strong id="pwa-install-title"></strong>
          <p id="pwa-install-hint"></p>
        </div>
        <div class="pwa-install-actions">
          <button type="button" class="pwa-install-btn" id="pwa-install-btn"></button>
          <button type="button" class="pwa-install-dismiss" id="pwa-install-dismiss" aria-label="Dismiss"></button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById("pwa-install-dismiss").addEventListener("click", () => {
      localStorage.setItem(DISMISS_KEY, "1");
      banner.classList.add("hidden");
    });

    document.getElementById("pwa-install-btn").addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      banner.classList.add("hidden");
    });
  }

  function refreshInstallBanner() {
    const banner = document.getElementById("pwa-install-banner");
    if (!banner) return;
    const u = strings();
    document.getElementById("pwa-install-title").textContent = u.pwaInstallTitle;
    document.getElementById("pwa-install-hint").textContent = u.pwaInstallHint;
    document.getElementById("pwa-install-btn").textContent = u.pwaInstallBtn;
    document.getElementById("pwa-install-dismiss").textContent = u.pwaInstallDismiss;

    const show = deferredPrompt && !localStorage.getItem(DISMISS_KEY) && !isStandalone();
    banner.classList.toggle("hidden", !show);
  }

  function bindInstallPrompt() {
    createInstallBanner();
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredPrompt = event;
      refreshInstallBanner();
    });
    window.addEventListener("appinstalled", () => {
      deferredPrompt = null;
      refreshInstallBanner();
    });
  }

  registerServiceWorker();
  bindInstallPrompt();

  window.CoraliaPWA = { refreshInstallBanner };
})();
