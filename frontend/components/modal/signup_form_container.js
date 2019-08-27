import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions'

const msp = ({ entities }) => ({

})

const mdp = dispatch => ({
  signupUser: user => dispatch(signupUser(user)),
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mdp)(SignupForm)