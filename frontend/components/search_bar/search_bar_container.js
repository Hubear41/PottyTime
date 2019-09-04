import { connect } from 'react-redux';
import { 
    updateFilter,
    receiveSearchError,
    clearSearchError,
} from '../../actions/filter_actions';
import SearchBar from './search_bar';

const mdp = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    receiveError: () => dispatch(receiveSearchError()),
    clearSearchError: () => dispatch(clearSearchError()),
});

export default connect(null, mdp)(SearchBar);