
export const fakeAuth = {
  isAuthenticated: false,
  username: '',
  authenticate(callBack, username) {
    this.isAuthenticated = true;
    this.username = username;
    setTimeout(callBack, 100); // fake async
  },
  signout(callBack) {
    this.isAuthenticated = false;
    setTimeout(callBack, 100); // fake async
  }
}