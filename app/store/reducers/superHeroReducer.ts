/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../lib/createReducer';
import * as types from '../../store/actions/types';
import { ISuperHeroReducerType } from '../../models/reducers/superHero';
import Favorite from '../../screens/Favorite/index';

const initialState: ISuperHeroReducerType = {
  superHeros: [],
  searchResult: [],
  favoriteList: []
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
  [types.SAVE_SUPER_HERO]: (state: ISuperHeroReducerType, action: any) => {
    return {
      ...state,
      favoriteList: [...state.favoriteList, action.superHero],
    };
  },
  [types.UN_SAVE_SUPER_HERO]: (state: ISuperHeroReducerType, action: any) => {
    return {
      ...state,
      favoriteList: state.favoriteList.filter(item => item.id !== action.superHero.id),
    };
  },
});
