import { UPDATE_FILTER, UPDATE_FILTERS } from "../actions/filter_actions";

const defaultState = {
  bounds: {},
  center: {
    lat: 40.7536,
    lng: -73.9832
  },
  sorting: {
    lat: 40.7536,
    lng: -73.9832
  },
  categoryIds: []
};

const filtersReducer = (
  state = defaultState,
  { type, filter, value, filters, values }
) => {
  Object.freeze(state);

  switch (type) {
    case UPDATE_FILTERS:
      const newFilters = {};

      filters.forEach((filter, idx) => {
        newFilters[filter] = values[idx];
      });

      return Object.assign({}, state, newFilters);
    case UPDATE_FILTER:
      return Object.assign({}, state, { [filter]: value });
    default:
      return state;
  }
};

export default filtersReducer;
