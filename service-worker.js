"use strict";var precacheConfig=[["/stellamiller-portfolio/index.html","cc59247f9b1fdb6c2c4f8e450389987a"],["/stellamiller-portfolio/static/css/main.31134529.css","0772fa5082820468f336d86a6e8e09b1"],["/stellamiller-portfolio/static/js/main.40c6aac4.js","28e1166c170f1ff9fe2749eb4830d20c"],["/stellamiller-portfolio/static/media/CarouselStockPhoto2.87971ca0.jpg","87971ca0741020384cf9e540f852466b"],["/stellamiller-portfolio/static/media/CarouselUT.818121d7.jpg","818121d72b51d57e481af6c75225f060"],["/stellamiller-portfolio/static/media/SanDiegoComicCon.b9871dba.jpg","b9871dbaab39086c008303d4761db2c3"],["/stellamiller-portfolio/static/media/StellaMiller.a3561921.jpg","a356192113b12d5e934731fc55136138"],["/stellamiller-portfolio/static/media/giphy.b00a761c.PNG","b00a761c63bfa6ce3f78679fa61195ca"],["/stellamiller-portfolio/static/media/rps.e635a1e1.PNG","e635a1e17baf7cfa78bda62f15874e4e"],["/stellamiller-portfolio/static/media/star.0e6d7ada.svg","0e6d7ada2dbd6f2a1207a8b33a4313ed"],["/stellamiller-portfolio/static/media/wizard.6ebd11b5.png","6ebd11b50302d7cd9a5595627cffe56c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));var n="/stellamiller-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});