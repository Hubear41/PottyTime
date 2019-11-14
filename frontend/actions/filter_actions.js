import { requestBathrooms } from "./bathroom_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const RECEIVE_SEARCH_ERROR = "RECEIVE_SEARCH_ERROR";
export const CLEAR_SEARCH_ERROR = "CLEAR_SEARCH_ERROR";

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const changeFilters = (filters, values) => ({
  type: UPDATE_FILTERS,
  filters,
  values
});

export const receiveSearchError = () => ({
  type: RECEIVE_SEARCH_ERROR
});

export const clearSearchError = () => ({
  type: CLEAR_SEARCH_ERROR
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return requestBathrooms(getState().ui.filters)(dispatch);
};

export const updateFilters = (filters, values) => (dispatch, getState) => {
  dispatch(changeFilters(filters, values));
  return requestBathrooms(getState().ui.filters)(dispatch);
};
