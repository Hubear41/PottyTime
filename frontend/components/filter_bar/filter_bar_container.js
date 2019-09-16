import { connect } from 'react-redux';
import { requestCategories } from '../../actions/category_actions';
import { updateFilter } from '../../actions/filter_actions';
import FilterBar from './filter_bar';

const msp = ({ entities, ui }) => ({
    categories: Object.values(entities.categories),
    filteredCategoryIds: ui.filters.categoryIds,
});

const mdp = dispatch => ({
    requestCategories: () => dispatch(requestCategories()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(msp, mdp)(FilterBar);