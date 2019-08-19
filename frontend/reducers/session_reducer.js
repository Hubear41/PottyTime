import {
    RECEIVE_CURRENT_USER,
    LOGOUT,
} from '../actions/session_actions';

const defaultState = {
    id: null,
}

const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case LOGOUT:
            return {};
        default:
            return state;
    }
}

export default sessionReducer;