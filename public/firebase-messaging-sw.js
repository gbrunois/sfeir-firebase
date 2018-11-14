importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "692261967408"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = "SFEIR Firebase";
  const notificationOptions = {
    body: payload.data.message,
    icon: payload.data.user.photoURL
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
