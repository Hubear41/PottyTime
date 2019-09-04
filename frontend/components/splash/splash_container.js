import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { receiveSearchError, clearSearchError, updateFilter } from '../../actions/filter_actions';
import Splash from './splash';

const msp = ({ errors }) => ({
    noResults: errors.search,
});

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    receiveError: () => dispatch(receiveSearchError()),
    clearError: () => dispatch(clearSearchError()), 
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(msp, mdp)(Splash)