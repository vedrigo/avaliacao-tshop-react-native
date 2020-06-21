import {put} from 'redux-saga/effects';
export default function* fetchMovie() {
  yield put({type: 'MOVIE', json: ''});
}
