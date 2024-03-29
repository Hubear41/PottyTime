import { signup, login, logout } from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const loginUser = user => dispatch =>
  login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors(errors))
  );

export const logoutUser = () => dispatch =>
  logout().then(
    () => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors))
  );

export const signupUser = user => dispatch =>
  signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors(errors))
  );

const receiveCurrentUser = currentUser => {
  return { type: RECEIVE_CURRENT_USER, currentUser };
};

const logoutCurrentUser = () => ({
  type: LOGOUT
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});