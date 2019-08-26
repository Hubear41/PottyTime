import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import LoginForm from './login_form'

const msp = ({ entities }) => ({

});

const mdp = dispatch => ({
  loginUser: userParams => dispatch(loginUser(userParams))
})

export default connect(null, mdp)(LoginForm)