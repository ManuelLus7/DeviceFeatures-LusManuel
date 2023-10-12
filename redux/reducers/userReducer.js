import { SET_USER, LOGOUT_USER } from '../actions/userActions';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
