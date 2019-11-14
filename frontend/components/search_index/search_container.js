import { connect } from "react-redux";
import { requestBathrooms } from "../../actions/bathroom_actions";
import { updateFilter, updateFilters } from "../../actions/filter_actions";
import { updateCurrentMarker } from "../../actions/ui_actions";
import Search from "./search";

const msp = ({ entities, ui }) => {
  return {
    bathrooms: Object.values(entities.bathrooms),
    center: ui.filters.center,
    sorting: ui.filters.sorting,
    categories: ui.filters.categoryIds,
    filterBarHidden: ui.filterBar.hidden,
    selectedMarkerId: ui.selectedMarker.markerId
  };
};

const mdp = dispatch => ({
  requestBathrooms: () => dispatch(requestBathrooms()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateFilters: (filters, values) => dispatch(updateFilters(filters, values)),
  updateCurrentMarker: bathroom => dispatch(updateCurrentMarker(bathroom))
});

export default connect(msp, mdp)(Search);
