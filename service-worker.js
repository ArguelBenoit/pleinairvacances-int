"use strict";var precacheConfig=[["/pleinairvacances-int/index.html","3fa6dfde1052c342238d565509ecc753"],["/pleinairvacances-int/static/css/main.72cd71bf.css","10b2c5ac2cb1d7e9325102350203b4fc"],["/pleinairvacances-int/static/js/main.a4480369.js","91607d8857f06c884595c70d2b3ebd99"],["/pleinairvacances-int/static/media/1.a013ffb8.jpg","a013ffb84718685ad21d8b3ce97c6bdc"],["/pleinairvacances-int/static/media/1.e7c85d53.jpg","e7c85d5367c3483578499f3c6c707e5f"],["/pleinairvacances-int/static/media/2.1d9d87ac.jpg","1d9d87acf91a6041564808ef0af0e4c5"],["/pleinairvacances-int/static/media/2.a6a725c2.jpg","a6a725c25c5d2d62118f103ed931d403"],["/pleinairvacances-int/static/media/3.18698deb.jpg","18698deb4b920bce55689f22f569e153"],["/pleinairvacances-int/static/media/3.a5012768.jpg","a5012768c7da2d6e8b521495c76c5518"],["/pleinairvacances-int/static/media/4.4f8e492d.jpg","4f8e492d742742108d4e3f5b02e65d09"],["/pleinairvacances-int/static/media/4.51de824c.jpg","51de824c12e6b8a205229e495f197b30"],["/pleinairvacances-int/static/media/5.50201da2.jpg","50201da2db2748a55a730751d176befe"],["/pleinairvacances-int/static/media/5.939ac325.jpg","939ac3259f3ec869915d2773ea5dd9fd"],["/pleinairvacances-int/static/media/6.7017e615.jpg","7017e6156b85f505d745f67aff5c4292"],["/pleinairvacances-int/static/media/6.e4e95b50.jpg","e4e95b50aa1bb5adb47270a7a6f5200e"],["/pleinairvacances-int/static/media/background1.ca3abf02.jpg","ca3abf02253084a6b7ceff6d161318ed"],["/pleinairvacances-int/static/media/background2.6cc4e7f1.jpg","6cc4e7f118f552911376034ae20d9f60"],["/pleinairvacances-int/static/media/background3.10095a9f.jpg","10095a9f673ad7f75ee6995ccdf9c5a3"],["/pleinairvacances-int/static/media/background4.6168caaf.jpg","6168caaf1d4ccd1af16742cf752e017d"],["/pleinairvacances-int/static/media/footer1.0221c0ec.png","0221c0ecc789bd92e2201e67e461ede7"],["/pleinairvacances-int/static/media/footer2.34788e8f.png","34788e8f46cd582cd7b07e2a1417d22d"],["/pleinairvacances-int/static/media/logo_transparent.4ca2b902.png","4ca2b902eee0cf92e01b916917641aca"],["/pleinairvacances-int/static/media/logo_transparent_shadow.a91c27ca.png","a91c27ca9d17ce4cf8792ca350e9f55e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),a=urlsToCacheKeys.has(n));var c="/pleinairvacances-int/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});