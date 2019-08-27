import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import LoginForm from './login_form'
import { closeModal } from '../../actions/modal_actions'

const msp = ({ entities }) => ({

});

const mdp = dispatch => ({
  loginUser: userParams => dispatch(loginUser(userParams)),
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mdp)(LoginForm)