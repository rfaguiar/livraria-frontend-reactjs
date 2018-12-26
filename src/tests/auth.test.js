import {fakeAuth} from '../components/auth';

describe('test fake auth action', () => {

  beforeEach(() => {
    expect(fakeAuth.isAuthenticated).toBeFalsy();
  });

  it('should authenticate when call fakeAuth.authenticate', () => {

    fakeAuth.authenticate(() => {
      //do redirect
    }, 'usernameFakeAuth');

    expect(fakeAuth.isAuthenticated).toBeTruthy();

  });

});

describe('test fake auth logout action', () => {

  beforeEach(() => {
    fakeAuth.authenticate(() => {
      //do redirect
    }, 'usernameFakeAuth');
    expect(fakeAuth.isAuthenticated).toBeTruthy();
  });

  it('should not authenticate when call fakeauth.signout', () => {

    fakeAuth.signout(() => {
      //redirect to login
    });

    expect(fakeAuth.isAuthenticated).toBeFalsy();
  });
});