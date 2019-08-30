import {combineReducers} from 'redux';
import users from './users_reducer';
import bathrooms from './bathrooms_reducer';

export default combineReducers({
  users,
  bathrooms,
});