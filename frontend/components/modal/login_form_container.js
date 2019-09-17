import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import LoginForm from './login_form'
import { closeModal, openModal } from '../../actions/modal_actions'

const msp = ({ ui }) => ({
  modal: ui.modal
});

const mdp = dispatch => ({
  loginUser: userParams => dispatch(loginUser(userParams)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal('signup'))
})

export default connect(msp, mdp)(LoginForm)