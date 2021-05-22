import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import mainReducer from './main';

export const store = configureStore({
  reducer: {
    user: userReducer,
    main: mainReducer
  },
});
