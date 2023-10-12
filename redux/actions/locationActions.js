export const SET_LOCATION_PERMISSION = 'SET_LOCATION_PERMISSION';
export const SET_USER_LOCATION = 'SET_USER_LOCATION';

export const setLocationPermission = (permission) => ({
  type: SET_LOCATION_PERMISSION,
  payload: permission,
});

export const setUserLocation = (location) => ({
  type: SET_USER_LOCATION,
  payload: location,
});
