import { combineReducers } from 'redux';
import jokeReducer from './joke';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  joke: jokeReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
