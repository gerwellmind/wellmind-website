// Well Mind service worker: lets phones install the app. It does not cache pages, so updates always show straight away.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',(e)=>e.waitUntil(self.clients.claim()));
