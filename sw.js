// AdasaPro Cache-Purge & Self-Heal Service Worker (v26)
// This worker clears all broken/stale caches on mobile and unregisters itself
// so the mobile browser directly connects to the network without any interception.

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((k) => caches.delete(k)));
    }).then(() => {
      return self.registration.unregister();
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Do not intercept fetch requests — pass directly to network
