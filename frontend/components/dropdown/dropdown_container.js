import { connect } from 'react-redux';
import Dropdown from './dropdown';
import { openModal } from '../../actions/modal_actions';
import { logoutUser } from '../../actions/session_actions'

const msp = ({ session }) => ({
    loggedIn: Boolean(session.currentUser),
})

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    logoutUser: () => dispatch(logoutUser())
});

export default connect(msp, mdp)(Dropdown);