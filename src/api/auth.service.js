let _loggedUser = null;

const authService = {
  _loggedUser,
  isLoggedIn: false,
  getAuth,
  getLoggedUser,
  authenticate,
  isAuthenticated,
  logout
};

async function authenticate() {
  authService.isLoggedIn = true;
}

function isAuthenticated() {
  return authService._loggedUser !== null;
}

function getLoggedUser() {
  return authService._loggedUser;
}

async function logout() {
  authService._loggedUser = null;
}

function getAuth() {
  authService._loggedUser = {};
}

export default authService;
