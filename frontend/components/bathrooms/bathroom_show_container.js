import { connect } from 'react-redux';
import { requestBathroom } from '../../actions/bathroom_actions';
import BathroomShow from './bathroom_show'

const msp = ({ entities }) => ({
  bathrooms: entities.bathrooms
})

const mdp = dispatch => ({
  requestBathroom: id => dispatch(requestBathroom(id))
})

export default connect(msp, mdp)(BathroomShow)