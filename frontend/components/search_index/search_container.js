import { connect } from 'react-redux';
import { requestBathrooms } from '../../actions/bathroom_actions';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const msp = ({ entities, ui }) => ({
    bathrooms: Object.values(entities.bathrooms),
    center: ui.filters.center,
});

const mdp = dispatch => ({
    requestBathrooms: () => dispatch(requestBathrooms()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(msp, mdp)(Search);