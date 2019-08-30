import { RECEIVE_BATHROOMS } from '../actions/bathroom_actions';

const bathroomsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_BATHROOMS:
            return action.bathrooms;
        default:
            return state;
    }
}

export default bathroomsReducer;