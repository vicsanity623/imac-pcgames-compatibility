self.addEventListener("install",function(e){e.waitUntil(self.skipWaiting());});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim());});
self.addEventListener("fetch",function(e){
  if(e.request.url.indexOf("steamstatic")>=0||e.request.url.indexOf("wikimedia")>=0||e.request.url.indexOf("github")>=0){
    e.respondWith(caches.open("games-v1").then(function(c){return c.match(e.request).then(function(r){return r||fetch(e.request).then(function(f){c.put(e.request,f.clone());return f;})});}));
  }
});