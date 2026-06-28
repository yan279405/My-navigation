const CACHE_NAME = 'hub-os-cache-v100';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// 安装时缓存核心文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// 离线时优先读取缓存
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
