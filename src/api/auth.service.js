import * as firebase from "firebase";

let _loggedUser = null;

const authService = {
  _loggedUser,
  getAuth,
  getLoggedUser,
  authenticate,
  isAuthenticated,
  logout
};

async function authenticate(provider, credentials) {
  try {
    if (provider === "email") {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      // when logging in via email, use the email adress as a "displayName"
      authService._loggedUser = {
        displayName: response.email,
        email: response.email,
        photoUrl: "assets/images/avatar_circle_blue_512dp.png"
      };
    } else {
      const result = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      authService._loggedUser = {
        displayName: result.user.displayName,
        email: result.user.email,
        photuUrl: result.user.photoURL
      };
    }
  } catch (e) {
    console.error("can not log in");
    console.error(e);
  }
  return authService._loggedUser;
}

function isAuthenticated() {
  return authService._loggedUser !== null;
}

function getLoggedUser() {
  return authService._loggedUser;
}

async function logout() {
  await firebase.auth().signOut();
  authService._loggedUser = null;
}

function getAuth() {
  firebase.auth().onAuthStateChanged(user => {
    authService._loggedUser = user;
  });
}

export default authService;
