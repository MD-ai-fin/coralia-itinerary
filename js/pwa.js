(function () {
  "use strict";

  const DISMISS_KEY = "coralia-pwa-install-dismissed";
  let deferredPrompt = null;
  let successTimer = null;
  let lastSuccessAt = 0;

  function strings() {
    const lang = document.body.getAttribute("lang") || "en";
    if (typeof ITINERARY !== "undefined" && ITINERARY.ui?.[lang]) {
      return ITINERARY.ui[lang];
    }
    return lang === "zh"
      ? {
          pwaInstallTitle: "安装到手机",
          pwaInstallHint: "添加主屏幕图标，离线也能查看行程",
          pwaInstallBtn: "安装",
          pwaInstallDismiss: "暂不",
          pwaInstallSuccess: "安装成功！请在本机主屏幕查看图标。",
        }
      : {
          pwaInstallTitle: "Install app",
          pwaInstallHint: "Add to your home screen for offline access",
          pwaInstallBtn: "Install",
          pwaInstallDismiss: "Not now",
          pwaInstallSuccess: "Installed successfully! Find the app on your home screen.",
        };
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

  function showInstallSuccess() {
    const now = Date.now();
    if (now - lastSuccessAt < 1500) return;
    lastSuccessAt = now;
    const toast = document.getElementById("pwa-install-success");
    const successText = document.getElementById("pwa-install-success-text");
    if (!toast || !successText) return;
    successText.textContent = strings().pwaInstallSuccess;
    toast.classList.remove("hidden");
    toast.classList.add("visible");
    clearTimeout(successTimer);
    successTimer = setTimeout(() => {
      toast.classList.remove("visible");
      toast.classList.add("hidden");
    }, 4500);
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
      const { outcome } = await deferredPrompt.userChoice;
      deferredPrompt = null;
      banner.classList.add("hidden");
      if (outcome === "accepted") showInstallSuccess();
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

    const successText = document.getElementById("pwa-install-success-text");
    if (successText) successText.textContent = u.pwaInstallSuccess;

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
      showInstallSuccess();
    });
  }

  registerServiceWorker();
  bindInstallPrompt();

  window.CoraliaPWA = { refreshInstallBanner, showInstallSuccess };
})();
