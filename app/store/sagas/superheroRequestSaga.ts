import { put, call, all } from 'redux-saga/effects';
import requestSuperHero from '../../services/requestSuperHero';
import * as types from '../../store/actions/types';

// Our worker Saga that logins the user
export default function* superheroRequestSaga(action: any) {
  //how to call api
  const ids = [];
  for (let i = 1; i <= 10; i++) {
    ids.push(action.page * i);
  }
  const responses = yield all(
    ids.map(item => call(requestSuperHero, `${item}`)),
  );
  const superHeros = responses.map(item => item.data);
  if (superHeros.length > 0) {
    yield put({
      type: types.SUPERHERO_RESPONSE,
      superHeros,
      page: action.page,
    });
  } else {
    yield put({ type: types.SUPERHERO_SEARCH_FAILED });
  }
}
