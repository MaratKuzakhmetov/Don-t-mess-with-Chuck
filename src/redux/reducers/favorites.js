import { ADD_FAVORITES, DELETE_FAVORITES } from '../constants/constants';

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITES:
      return [...state, payload];
    case DELETE_FAVORITES:
      return state.filter((joke) => joke.id !== payload);
    default:
      return state;
  }
};

export default favoritesReducer;
