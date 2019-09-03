import { connect } from 'react-redux';
import { requestBathrooms } from '../../actions/bathroom_actions';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';
import { filter } from 'minimatch';

const msp = ({ entities }) => ({
    bathrooms: Object.values(entities.bathrooms),
});

const mdp = dispatch => ({
    requestBathrooms: () => dispatch(requestBathrooms()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(msp, mdp)(Search);