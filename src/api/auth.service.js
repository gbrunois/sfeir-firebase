const authService = {
  isLoggedIn: false,
  authenticate,
  isAuthenticated,
  logout
};

function authenticate() {
  authService.isLoggedIn = true;
}

function isAuthenticated() {
  return authService.isLoggedIn;
}

function logout() {
  authService.isLoggedIn = false;
}

export default authService;
