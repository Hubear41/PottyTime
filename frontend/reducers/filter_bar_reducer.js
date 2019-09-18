import {
    HIDE_FILTER_BAR,
    REVEAL_FILTER_BAR,
} from '../actions/category_actions';

const defaultState = {
    hidden: true,
};

const filterBarReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case HIDE_FILTER_BAR:
            return { hidden: true };
        case REVEAL_FILTER_BAR:
            return { hidden: false };    
        default:
            return state;
    }
}

export default filterBarReducer;