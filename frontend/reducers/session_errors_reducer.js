import {
    RECEIVE_ERRORS,
    REMOVE_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:    
        case REMOVE_ERRORS:
            return {};
        default:
            return state;
    }
}

export default sessionErrorsReducer;