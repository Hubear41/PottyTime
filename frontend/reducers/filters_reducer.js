import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultState = {
    bounds: {},
    center: {
        lat: 40.7536,
        lng: -73.9832,
    },
    sorting: {
        lat: 40.7536,
        lng: -73.9832,
    },
    categoryIds: [],
};

const filtersReducer = (state = defaultState, { type, filter, value }) => {
    Object.freeze(state);

    switch (type) {
        case UPDATE_FILTER:
            return Object.assign({}, state, { [filter]: value });
        default:
            return state;
    }
};

export default filtersReducer;