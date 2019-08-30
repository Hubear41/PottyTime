import { connect } from 'react-redux';
import { requestBathrooms } from '../../actions/bathroom_actions';
import BathroomIndex from './bathroom_index';

const msp = ({ entities }) => {
    return {
        bathrooms: Object.values(entities.bathrooms),
    }
} 

const mdp = dispatch => ({
    requestBathrooms: () => dispatch(requestBathrooms()),
});

export default connect(msp, mdp)(BathroomIndex);