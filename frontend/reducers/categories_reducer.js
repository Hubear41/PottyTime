import { 
    RECIEVE_CATEGORIES
} from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECIEVE_CATEGORIES:
            return Object.assign({}, state, action.categories);
        default:
            return state;
    }
}

export default categoriesReducer;