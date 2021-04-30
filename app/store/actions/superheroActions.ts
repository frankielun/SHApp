/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestTenMoreSuperHero(page: number) {
  return {
    type: types.SUPERHERO_REQUEST,
    page,
  };
}

export function requestSuperHeroSearch(name: string) {
  return {
    type: types.SUPERHERO_SEARCH_REQUEST,
    name,
  };
}
