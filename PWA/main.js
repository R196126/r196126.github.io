if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('✅ Service Worker registrován'))
    .catch((err) => console.error('❌ Chyba registrace:', err));
}
