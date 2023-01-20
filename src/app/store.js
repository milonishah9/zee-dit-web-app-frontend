import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/HoverValues';

export default configureStore({
  reducer: {
    hoverValue: counterReducer,
  },
});
