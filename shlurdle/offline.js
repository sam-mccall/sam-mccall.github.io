self.addEventListener("install", e => {
  FILES = [".","offline.js","manifest.json","192.png","512.png"];
  e.waitUntil(caches.open("offline").then(cache => cache.addAll(FILES)));
})

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(rsp => rsp || Response.error()));
})


