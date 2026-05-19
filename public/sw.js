const CACHE = 'vendy-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

// Handle scheduled notifications
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SCHEDULE_NOTIFICATIONS') {
    scheduleNotifications(e.data.reminders);
  }
});

function scheduleNotifications(reminders) {
  const now = Date.now();
  reminders.forEach(r => {
    const rDate = new Date(r.date);
    rDate.setHours(8, 0, 0, 0); // 8:00 ráno

    const msUntil = rDate.getTime() - now;
    const msUntilWeek = msUntil + (7 * 24 * 60 * 60 * 1000); // týden dřív

    // 1 den předem
    const oneDayBefore = msUntil - (24 * 60 * 60 * 1000);
    if (oneDayBefore > 0) {
      setTimeout(() => {
        self.registration.showNotification('🐴 Vendy – zítra termín', {
          body: `Zítra: ${r.label}${r.note ? ' – ' + r.note : ''}`,
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          tag: 'vendy-' + r.id + '-1d'
        });
      }, oneDayBefore);
    }

    // 7 dní předem
    const sevenDaysBefore = msUntil - (7 * 24 * 60 * 60 * 1000);
    if (sevenDaysBefore > 0) {
      setTimeout(() => {
        self.registration.showNotification('🐴 Vendy – termín za týden', {
          body: `Za 7 dní: ${r.label}${r.note ? ' – ' + r.note : ''}`,
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          tag: 'vendy-' + r.id + '-7d'
        });
      }, sevenDaysBefore);
    }
  });
}

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
