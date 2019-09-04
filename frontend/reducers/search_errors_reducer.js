import { 
    UPDATE_FILTER, 
    RECEIVE_SEARCH_ERROR, 
    CLEAR_SEARCH_ERROR,
} from '../actions/filter_actions';

const searchErrorsReducer = (state = false, action) => {
    switch(action.type) {
        case RECEIVE_SEARCH_ERROR:
            return true;
        case CLEAR_SEARCH_ERROR:
        case UPDATE_FILTER:
            return false;
        default:
            return state;
    }
}

export default searchErrorsReducer;