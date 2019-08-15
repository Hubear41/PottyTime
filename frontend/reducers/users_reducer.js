import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import {merge} from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const {user} = action;
      return merge({}, state, {[user.id]: user});
    case RECEIVE_CURRENT_USER: 
      const {currentUser} = action;
      return merge({}, state, {[currentUser.id]: currentUser});
    default:
      return state;  
  }
};

export default userReducer;