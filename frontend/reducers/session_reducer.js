import {
    RECEIVE_CURRENT_USER,
    LOGOUT,
} from '../actions/session_actions';

const defaultState = {
    currentUser: null
}

const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return Object.assign({}, state, { currentUser: action.currentUser.id });
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
}

export default sessionReducer;