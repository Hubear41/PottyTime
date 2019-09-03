import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultState = {
    bounds: {}
};

const filtersReducer = (state = defaultState, { type, field, value }) => {
    Object.freeze(state);

    switch(type) {
        case UPDATE_BOUNDS:
            return Object.assign({}, state, { [field]: value });
        default:
            return state;
    }
};

export default filtersReducer;