import { combineReducers } from 'redux';
import modal from './modal_reducer';
import filters from './filters_reducer';
import filterBar from './filter_bar_reducer';

const uiReducer = combineReducers({
    filters,
    modal,
    filterBar,
});

export default uiReducer;