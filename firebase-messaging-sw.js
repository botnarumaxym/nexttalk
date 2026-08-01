importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBuGDd0y2y4Tkf-tcBU_ZshX2uUGK3uQWQ",
  authDomain: "my-website-5d781.firebaseapp.com",
  databaseURL: "https://my-website-5d781-default-rtdb.firebaseio.com",
  projectId: "my-website-5d781",
  storageBucket: "my-website-5d781.firebasestorage.app",
  messagingSenderId: "111570797151",
  appId: "1:111570797151:web:5d23161a445c946ccb51ea"
});

const messaging = firebase.messaging();

// Обробка сповіщення у фоновому режимі (коли додаток закритий)
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || 'Нове повідомлення';
  const notificationOptions = {
    body: payload.notification.body || 'Вам надіслали нове повідомлення',
    icon: 'mmm.jpg'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});