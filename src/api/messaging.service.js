import * as firebase from "firebase";

async function register() {
  const messaging = firebase.messaging();
  try {
    await registerSW();
    // ...
    await messaging.requestPermission();
    console.log("Notification permission granted.");

    const currentToken = await messaging.getToken();
    if (storeToken(currentToken)) {
      await sendTokenToServer(currentToken);
      console.log("Token stored and sent to server.");
    }

    registerListeners();
  } catch (err) {
    console.log("Unable to get permission to notify.", err);
    return false;
  }
}

async function registerSW() {
  const messaging = firebase.messaging();
  try {
    const registration = await navigator.serviceWorker.register(
      "firebase-messaging-sw.js"
    );
    messaging.useServiceWorker(registration);
  } catch (e) {
    console.error("ServiceWorker is not supported by this browser.");
    console.log(e);
    return false;
  }
}

function registerListeners() {
  const messaging = firebase.messaging();
  // eslint-disable-next-line no-unused-vars
  messaging.onTokenRefresh(arg => {
    /* handle token rotation */
    /* find the old token and replace it with the new one */
  });

  messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    this.messages.push(payload);
    this.notifications$.next(this.messages.length);
  });
}

function storeToken(token) {
  const previousToken = localStorage.getItem("notificationToken");
  if (previousToken === null || previousToken !== token) {
    localStorage.setItem("notificationToken", token);
    return true;
  }
  return false;
}

async function sendTokenToServer(currentToken) {
  return Promise.resolve(
    firebase
      .database()
      .ref("/notifications/tokens")
      .push(currentToken)
  );
}

export default {
  register
};
