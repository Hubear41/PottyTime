import { connect } from 'react-redux';
import { requestBathrooms } from '../../actions/bathroom_actions';
import Search from './search';

const msp = ({ entities }) => ({
    bathrooms: Object.values(entities.bathrooms),
});

const mdp = dispatch => ({
    requestBathrooms: () => dispatch(requestBathrooms()),
});

export default connect(msp, mdp)(Search);