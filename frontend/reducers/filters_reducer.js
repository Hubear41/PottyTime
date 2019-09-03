import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultState = {
    bounds: {}
};

const filtersReducer = (state = defaultState, { type, filter, value }) => {
    Object.freeze(state);

    switch(type) {
        case UPDATE_FILTER:
            return Object.assign({}, state, { [filter]: value });
        default:
            return state;
    }
};

export default filtersReducer;