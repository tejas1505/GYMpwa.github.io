self.addEventListener('install', e =>{
    console.log("Installed!")
    e.waitUntil(
        caches.open("pwa-cache").then(cache =>{
            return cache.addAll(['/index.html','/Images/logo_512x512.png','/Images/logo_192x192.png'])
        })
    )
})

self.addEventListener('fetch', e => {
    console.log(`Initiating fetch request for: ${e.request.url} `)
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})
