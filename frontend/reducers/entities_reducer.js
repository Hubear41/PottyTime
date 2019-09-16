import {combineReducers} from 'redux';
import users from './users_reducer';
import bathrooms from './bathrooms_reducer';
import categories from './categories_reducer';

export default combineReducers({
  users,
  bathrooms,
  categories,
});