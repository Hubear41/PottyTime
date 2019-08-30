import { connect } from 'react-redux';
import SplashNav from './splash_nav'
import { openModal } from '../../actions/modal_actions'
import { logoutUser } from '../../actions/session_actions'

const msp = ({ session }) => ({
  currentUser: session.currentUser
})

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(msp, mdp)(SplashNav)