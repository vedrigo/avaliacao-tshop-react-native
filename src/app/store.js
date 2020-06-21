import { configureStore } from '@reduxjs/toolkit';
import likeReducer from '../components/Like/likeSlice';

export default configureStore({
  reducer: {
    counter: likeReducer
  },
});
