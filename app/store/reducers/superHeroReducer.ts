/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../lib/createReducer';
import * as types from '../../store/actions/types';
import { ISuperHeroReducerType } from '../../models/reducers/superHero';

const initialState: ISuperHeroReducerType = {
  superHeros: [],
  searchResult: [],
};

export const superHeroReducers = createReducer(initialState, {
  [types.SUPERHERO_RESPONSE]: (state: ISuperHeroReducerType, action: any) => {
    if (action.page === 1) {
      return { ...state, superHeros: action.superHeros };
    }
    return {
      ...state,
      superHeros: [...state.superHeros, ...action.superHeros],
    };
  },
  [types.LOGIN_DISABLE_LOADER]: (state: ISuperHeroReducerType, action: any) => {
    return {
      ...state,
      searchResult: [...state.searchResult, ...action.searchResult],
    };
  },
});
