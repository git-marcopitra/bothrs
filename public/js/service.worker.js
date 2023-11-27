self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        // Add other assets to cache
      ])
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
