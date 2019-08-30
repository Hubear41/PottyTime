import { connect } from 'react-redux';
import SignupModal from './signup_modal';
import { closeModal, openModal } from '../../actions/modal_actions';
import { signupUser } from '../../actions/session_actions';
import { removeErrors } from '../../actions/session_actions';

const msp = ({ errors }) => ({
  errors
})

const mdp = (dispatch) => ({
  signupUser: user => dispatch(signupUser(user)),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(msp, mdp)(SignupModal);