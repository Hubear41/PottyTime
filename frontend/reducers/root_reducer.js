import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer'
import filters from './filters_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  filters,
  errors,
  ui,
});

export default rootReducer;