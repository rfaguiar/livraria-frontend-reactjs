
export const fakeAuth = {
  authenticate(username, password) {
    const auth = username === 'admin@admin' && password === '123';
    return new Promise((resolve, reject) => setTimeout(auth?resolve(true):reject(false), 500)); // fake async
  },
  signout() {
    return new Promise(resolve => setTimeout(resolve(true), 500)); // fake async
  }
}