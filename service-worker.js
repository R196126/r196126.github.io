const CACHE_NAME = 'todo-pwa-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './manifest.json',
  /*'./icon.png'*/
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match('./');
    })
  );
});
