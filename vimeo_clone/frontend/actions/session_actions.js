import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
};

const logoutCurrentUser = () => {
    debugger
    return {
        type: LOGOUT_CURRENT_USER
    }
};

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = formUser => dispatch => APIUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const login = formUser => dispatch => APIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const logout = () => dispatch => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
        (errors) => dispatch(receiveErrors(errors.responseJSON)));
