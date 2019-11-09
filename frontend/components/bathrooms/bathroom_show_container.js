import { connect } from 'react-redux';
import { requestBathroom } from '../../actions/bathroom_actions';
import { updateFilter } from '../../actions/filter_actions';
import BathroomShow from './bathroom_show'

const msp = ({ entities, ui }, ownProps) => {
  return {
    bathroom: entities.bathrooms[ownProps.match.params.id] || null,
    center: ui.filters.center
  }
}

const mdp = dispatch => ({
  requestBathroom: id => dispatch(requestBathroom(id)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(msp, mdp)(BathroomShow)