self.addEventListener('install', e =>{
    console.log("Installed!")
    e.waitUntil(
        caches.open("pwa-cache").then(cache =>{
            return cache.addAll(['index.html','servicew.js','/GYMpwa.github.io/Images/BG.jpg','/GYMpwa.github.io/Images/logo.png','/GYMpwa.github.io/Images/logo_144x144.png','/GYMpwa.github.io/CSS/style.css','/GYMpwa.github.io/CSS/style2.css'])
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
