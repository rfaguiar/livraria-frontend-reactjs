import {fakeAuth} from '../components/auth/fake-auth';

describe('fake auth tests', () => {
  it('should be resolve true when authenticate corretly', () => {
    fakeAuth.authenticate('admin@admin', '123')
      .then((resp) => expect(resp).toEqual(true));
  });

  it('should be catch true when authenticate incorretly', () => {
    fakeAuth.authenticate('admin@admin', '123')
      .catch((resp) => expect(resp).toEqual(true));
  });

  it('should be resolve true when logout corretly', () => {
    fakeAuth.signout()
      .then((resp) => expect(resp).toEqual(true));
  });
});