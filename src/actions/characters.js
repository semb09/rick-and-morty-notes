import * as characters from '../services/characters';

export const getCharacters = () => (
  (dispatch) => {
    dispatch({
      type: 'GET_CHARACTERS_REQUEST',
    });
    characters.getCharacters()
      .then(({ data }) => {
        dispatch({
          type: 'GET_CHARACTERS_SUCCESS',
          data,
          results: data.results.reduce((obj, res) => {
            obj[res.id] = res;
            return obj;
          }, {}),
        });
      })
      .catch(() => {
        dispatch({
          type: 'GET_CHARACTERS_FAIL',
        });
      });
  }
);

export const getNextCharacters = () => (
  (dispatch, state) => {
    dispatch({
      type: 'GET_NEXT_CHARACTERS_REQUEST',
    });
    if (!state().characters.info.next) return;
    characters.getNextCharacters(state().characters.info.next)
      .then(({ data }) => {
        dispatch({
          type: 'GET_NEXT_CHARACTERS_SUCCESS',
          data,
          results: data.results.reduce((obj, res) => {
            obj[res.id] = res;
            return obj;
          }, {}),
        });
      })
      .catch(() => {
        dispatch({
          type: 'GET_NEXT_CHARACTERS_FAIL',
        });
      });
  }
);

export const getSingleCharacter = id => (
  (dispatch) => {
    dispatch({
      type: 'GET_SINGLE_CHARACTER_REQUEST',
    });
    characters.getSingleCharacter(id)
      .then(({ data }) => {
        dispatch({
          type: 'GET_SINGLE_CHARACTER_SUCCESS',
          result: {
            [data.id]: data,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'GET_SINGLE_CHARACTER_FAIL',
        });
      });
  }
);
