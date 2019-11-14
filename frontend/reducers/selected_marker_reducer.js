import { UPDATE_CURRENT_MARKER } from "../actions/ui_actions";

const _default_state = {
  markerId: null
};

const selectedMarkerReducer = (state = _default_state, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_CURRENT_MARKER:
      return { markerId: action.bathroom.id };
    default:
      return state;
  }
};

export default selectedMarkerReducer;
