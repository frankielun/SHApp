/**
 *  Redux saga class init
 */
import { all, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import superheroRequestSaga from './superheroRequestSaga';

export default function* watch() {
  yield all([takeEvery(types.SUPERHERO_REQUEST, superheroRequestSaga)]);
}
