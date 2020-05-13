self.addEventListener('push', function (event) {
  event.waitUntil(self.registration.showNotification('Hello, World.'));
});
