import { apiClient } from './client';

export default function requestSuperHero(id: string): Promise<unknown> {
  return apiClient.get(id);
}
