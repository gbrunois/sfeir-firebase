import firebase from "firebase";

const config = {
  apiKey: "AIzaSyChgGBAfNuisFjTAjMdsn2S2mkHWHUUQdA",
  authDomain: "chfeirshare-firebase-demo.firebaseapp.com",
  databaseURL: "https://chfeirshare-firebase-demo.firebaseio.com",
  projectId: "chfeirshare-firebase-demo",
  storageBucket: "chfeirshare-firebase-demo.appspot.com",
  messagingSenderId: "692261967408"
};

function initializeApp() {
  return firebase.initializeApp(config);
}

export default {
  initializeApp
};
