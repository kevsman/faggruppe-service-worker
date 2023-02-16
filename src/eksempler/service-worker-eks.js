// Installerer service worker. Pre-cache eventuelle elementer
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([]);
        })
    );
});

// Etter service worker er installert og blir aktivert. Slett eldre cache hvis du har ny
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        // Remove old caches
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fang opp requests fra nettleser
self.addEventListener('fetch', (event) => {
    const request = event.request;
    console.log(event, request);

    event.respondWith(getFromCacheFirst(event.request));
});

// Lytt på meldinger sendt til service worker
self.addEventListener('message', async (event) => {
    client = event.source;
    if (event.data.type === 'clear_cache') {
        // slett cache
        // send melding tilbake til nettsiden
    }
});

// Legger alt til i cachen
const getFromCacheFirst = async (request) => {
    const responseFromCache = await caches.match(request);

    if (responseFromCache) {
        return responseFromCache;
    }

    const responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
};

// Legg til data i cache
const putInCache = async (request, response) => {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
};

// sletter hele cachen
// await caches.delete(cacheName);

// Send meldinger fra service worker
client.postMessage({
    type: 'clear_cache_completed',
});

/*
// Kode som blir brukt i oppgave 7
const putInCache = async (request, response) => {
    const headers = new Headers(response.headers);
    headers.append('sw-fetched-on-time', new Date().getTime().toString());

    const cache = await caches.open(cacheName);

    const blob = await response.blob();
    await cache.put(
        request,
        new Response(blob, {
            status: response.status,
            statusText: response.statusText,
            headers,
        })
    );
};

getExpiryTime = (time, minutesFromNow) => time + 1000 * 60 * minutesFromNow;

const getFromCacheFirst = async (request) => {
    const responseFromCache = await caches.match(request);

    if (responseFromCache) {
        const cachedTime = responseFromCache.headers.get('sw-fetched-on-time');
        const minutesBeforeExpiry = 20;
        const expiryTime = getExpiryTime(+cachedTime, minutesBeforeExpiry);
        const hasExpired = expiryTime < new Date().getTime();

        if (!hasExpired) {
            return responseFromCache;
        }
    }

    const responseFromNetwork = await fetch(request);

    // Don't put error responses in cache
    if (responseFromNetwork.ok) {
        putInCache(request, responseFromNetwork.clone());
    }

    return responseFromNetwork;
};
*/
