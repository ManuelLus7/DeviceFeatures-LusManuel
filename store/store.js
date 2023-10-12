import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../redux/reducers/locationReducer';
import userReducer from '../redux/reducers/userReducer';

const rootReducer = {
  location: locationReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
