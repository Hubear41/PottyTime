import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import search from './search_errors_reducer';

const errorsReducer = combineReducers({
    session,
    search,
});

export default errorsReducer;
