import * as UberAuthAPIUtil from '../util/uber/auth_api.js';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload
});

export const login = (code) => (dispatch) => (
  UberAuthAPIUtil.login(code)
    .then(payload => dispatch(receiveUser(payload)))
);
