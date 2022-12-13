self.addEventListener('install', e =>{
    console.log("Installed!")
    e.waitUntil(
        caches.open("pwa-cache").then(cache =>{
            return cache.addAll(['index.html','servicew.js','/Images/BG.jpg', '/Images/BG2.jpg','/Images/logo.png','/Images/logo_144x144.png','/logo_512x512.png','/CSS/style.css','/CSS/style2.css'])
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
