self.addEventListener('push', function(event) {
    if (event.data) {
      const data = event.data.json()
      event.waitUntil(self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/icon.png'
      }))
    }
  })
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close()
    event.waitUntil(clients.openWindow('https://fravær.hermanerku.dev'))
  })