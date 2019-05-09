var cacheName = 'version1';
//install
self.addEventListener('install', e => {
  console.log('SW Installed');
  e.waitUntil(
    caches.open('static')
    .then(cache => {
      return cache.addAll([

      ]);
    })
  );
});
//activate
self.addEventListener('active', e => {
  console.log("serviceWorker activated Successfully");
  e.waitUntil(
    caches.keys().then(cacheName => {
      return Promise.all(cacheName.map(newname => {
        if (newname !== cacheName) {
          console.log("deleted");
          return caches.delete(newname);
        }
      }))
    })
  )
})
//fetch
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(req) {
      return req || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
