import http from './httpService';

export async function getGenres() {
  return http.get('/genres');
}
