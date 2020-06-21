import { configureStore } from '@reduxjs/toolkit';
import likeReducer from '../components/Like/likeSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware()


export default configureStore({
  reducer: {
    like: likeReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)
