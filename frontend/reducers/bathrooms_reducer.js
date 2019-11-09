import { RECEIVE_BATHROOMS, RECEIVE_BATHROOM, DELETE_BATHROOM } from '../actions/bathroom_actions';
import { merge } from 'lodash'

const bathroomsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BATHROOMS:
            return merge({}, state, action.bathrooms);
        case RECEIVE_BATHROOM:
            return merge({}, state, { [action.bathroom.id]: action.bathroom });
        case DELETE_BATHROOM:
            const newState = merge({}, state)
            delete newState[action.bathroom.id]

            return newState;
        default:
            return state;
    }
}

export default bathroomsReducer;