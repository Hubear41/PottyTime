import { combineReducers } from "redux";
import modal from "./modal_reducer";
import filters from "./filters_reducer";
import filterBar from "./filter_bar_reducer";
import selectedMarker from "./selected_marker_reducer";

const uiReducer = combineReducers({
  filters,
  modal,
  filterBar,
  selectedMarker
});

export default uiReducer;
