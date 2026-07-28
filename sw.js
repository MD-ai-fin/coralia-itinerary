/* eslint-disable no-restricted-globals */
/** Bump when shell assets change so clients refresh the cache. */
const CACHE = "panda-itinerary-20260728v";

const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./js/data.js",
  "./js/app.js",
  "./js/pwa.js",
  "./images/icon-192.png",
  "./images/icon-512.png",
  "./images/install-qr.png",
  "./images/panda-portrait.png",
  "./images/panda-sitting.png",
  "./images/panda-watermark.png",
  "./images/shuttle-bus.svg",
  "./images/wulong-shuttle.svg",
  "./images/badge-app-store.svg",
  "./images/badge-google-play.svg",
  "./images/jinsha-museum.jpg",
  "./images/sanxingdui-museum.jpg",
  "./images/wulong-bridges.jpg",
  "./images/longshui-gorge.jpg",
  "./images/liziba.jpg",
  "./images/xiahaoli.jpg",
  "./images/panda-panoramic-restaurant.jpg",
  "./images/sunset-bistro.jpg",
  "./images/ifs-chengdu.jpg",
  "./images/chengdu-metro.png",
  "./images/chongqing-metro.png",
  "./images/peoples-park.jpg",
  "./images/tingxiang-restaurant.webp",
  "./images/hsr-train.jpg",
  "./images/didi.png",
];

function sameOrigin(url) {
  try {
    return new URL(url).origin === self.location.origin;
  } catch {
    return false;
  }
}

function pathKey(url) {
  const u = new URL(url);
  return u.origin + u.pathname;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      await Promise.allSettled(SHELL.map((url) => cache.add(new Request(url, { cache: "reload" }))));
      self.skipWaiting();
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key.startsWith("panda-itinerary-") && key !== CACHE).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || !sameOrigin(request.url)) return;

  const url = new URL(request.url);
  const isNavigate = request.mode === "navigate" || request.destination === "document";
  const isShell =
    isNavigate ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".webmanifest") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("./images/") ||
    url.pathname.includes("/images/");

  if (!isShell) return;

  if (isNavigate) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(pathKey(request.url)).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            caches.open(CACHE).then((cache) => cache.put(pathKey(request.url), response.clone()));
          }
          return response;
        })
        .catch(() => cached);

      return cached || network;
    })
  );
});
