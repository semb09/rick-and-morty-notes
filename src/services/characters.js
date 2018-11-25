import * as api from './api';

const CHARACTERS = 'https://rickandmortyapi.com/api/character/';

export const getCharacters = () => (
  api.get(CHARACTERS)
    .then(response => response)
    .catch(error => Promise.reject(error))
);

export const getNextCharacters = url => (
  api.get(url)
    .then(response => response)
    .catch(error => Promise.reject(error))
);

export const getSingleCharacter = id => (
  api.get(`${CHARACTERS}${id}`)
    .then(response => response)
    .catch(error => Promise.reject(error))
);
