import { connect } from 'react-redux';
import IndexNav from './index_nav';
import { 
    revealFilterBar, 
    hideFilterBar, 
} from '../../actions/category_actions';

const msp = ({ ui }) => ({
    filterBarHidden: ui.filterBar.hidden,
})

const mdp = dispatch => ({
    revealFilterBar: () => dispatch(revealFilterBar()),
    hideFilterBar: () => dispatch(hideFilterBar()),
})

export default connect(msp, mdp)(IndexNav)