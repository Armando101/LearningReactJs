// type: para indicar la acción que se va a ejecutar.
// payload: es la información que estamos mandando al reducer.

export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
};

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});
