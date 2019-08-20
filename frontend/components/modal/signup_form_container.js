import { connect } from 'react-redux';
import { signUpUser } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = ({ entities }) => ({

})

const mdp = dispatch => ({
  signUpUser: user => dispatch(signUpUser(user))
})

export default connect(null, mdp)(SignupForm)