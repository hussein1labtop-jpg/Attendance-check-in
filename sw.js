self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // بدون تخزين مؤقت — بس موجود حتى المتصفح يعتبر الموقع "تطبيق" قابل للتثبيت
});
