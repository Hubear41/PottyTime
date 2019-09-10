import {
    RECEIVE_BATHROOMS
} from '../actions/bathroom_actions';

const categoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BATHROOMS:
            return Object.assign({}, state, action.categories);
        default:
            return state;
    }
}

export default categoriesReducer;