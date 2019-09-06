import { RECEIVE_BATHROOMS, RECEIVE_BATHROOM } from '../actions/bathroom_actions';
import { merge } from 'lodash'

const bathroomsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BATHROOMS:
            return action.bathrooms;
        case RECEIVE_BATHROOM:
            return merge({}, state, { [action.bathroom.id]: action.bathroom })
        default:
            return state;
    }
}

export default bathroomsReducer;