const cacheName = 'bitter_cache_v1';
let client;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([]);
        })
    );
});

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

// Intercept requests
self.addEventListener('fetch', (event) => {
    console.log(event);

    if (event.request.url.indexOf('api') > -1) {
        event.respondWith(getFromCacheFirst(event.request));
    }
});

self.addEventListener('message', async (event) => {
    client = event.source;
    if (event.data.type === 'clear_cache') {
        await caches.delete(cacheName);
        client.postMessage({
            type: 'clear_cache_completed',
        });
    }
});

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
