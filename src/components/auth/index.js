import * as actions from './actions';

export const authenticate = (username, password) => actions.authenticate(username, password);
export const logout = () => actions.logout();