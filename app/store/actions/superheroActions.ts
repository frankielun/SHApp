/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ISuperHeros } from '../../@types/index';

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

export function saveSuperHero(superHero: ISuperHeros) {
  return {
    type: types.SAVE_SUPER_HERO,
    superHero
  };
}

export function unSaveSuperHero(superHero: ISuperHeros) {
  return {
    type: types.UN_SAVE_SUPER_HERO,
    superHero
  };
}