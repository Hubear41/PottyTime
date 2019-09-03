import { connect } from 'react-redux';
import { requestBathrooms } from '../../actions/bathroom_actions';
import { updateBounds } from '../../actions/filter_actions';
import Search from './search';

const msp = ({ entities }) => ({
    bathrooms: Object.values(entities.bathrooms),
});

const mdp = dispatch => ({
    requestBathrooms: () => dispatch(requestBathrooms()),
    updateBounds: bounds => dispatch(updateBounds(bounds)),
});

export default connect(msp, mdp)(Search);