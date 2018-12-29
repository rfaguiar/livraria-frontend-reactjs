import * as auth from '../components/auth';
import * as actions from '../components/auth/actions';

describe('test auth', () => {

  it('should test authenticate', () => {

    actions.authenticate = jest.fn();
    auth.authenticate('testUsername', 'testPassword');
    expect(actions.authenticate).toBeCalledWith('testUsername', 'testPassword');
  });

  it('should test logout', () => {

    actions.logout = jest.fn();
    auth.logout();
    expect(actions.logout).toBeCalled();
  });
});