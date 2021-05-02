import { apiClient } from './client';
import MockHeroData from '../mock/MockHeroData';

export default function requestSuperHero(id: string): Promise<unknown> {
  if (__DEV__) {
    return Promise.resolve(MockHeroData);
  }

  return apiClient.get(id);
}
