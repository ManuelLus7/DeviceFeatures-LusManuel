import { SET_LOCATION_PERMISSION, SET_USER_LOCATION } from '../actions/locationActions';

const initialState = {
  locationPermission: null,
  userLocation: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_PERMISSION:
      return {
        ...state,
        locationPermission: action.payload,
      };
    case SET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
