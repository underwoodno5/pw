self.addEventListener('push', () => {
  self.registration.sendNotification('whattayat', {});
});
