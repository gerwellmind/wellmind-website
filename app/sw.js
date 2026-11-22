// Well Mind service worker: lets phones install the app. It does not cache pages, so updates always show straight away.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',(e)=>e.waitUntil(self.clients.claim()));

// Push reminders: the server sends an empty "ping" at your chosen morning/evening time,
// and this shows the reminder. Tapping it opens today's check-in.
self.addEventListener('push', (e) => {
  const am = new Date().getHours() < 15;
  const title = am ? 'Good morning ☀️' : 'Time to wind down 🌙';
  const body = am ? 'Your morning check-in is ready. One minute, just for you.' : 'Your evening check-in is ready. How did today go?';
  e.waitUntil(self.registration.showNotification(title, { body, icon: 'assets/icon-192.png', badge: 'assets/icon-192.png', tag: 'wellmind-' + (am ? 'am' : 'pm'), data: { url: './#today' } }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './', self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((cs) => {
    for (const c of cs) if ('focus' in c) return c.focus().then((w) => (w && w.navigate ? w.navigate(url).catch(() => w) : w));
    return self.clients.openWindow(url);
  }));
});
