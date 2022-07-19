import { ADD_FAVORITES, DELETE_FAVORITES } from '../constants/constants';

export const addFavorites = (data) => ({ type: ADD_FAVORITES, payload: data });
export const deleteFavorites = (id) => ({ type: DELETE_FAVORITES, payload: id });
