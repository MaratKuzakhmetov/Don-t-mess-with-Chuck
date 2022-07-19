import { GET_JOKE } from '../constants/constants';

const initialState = {};

const jokeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOKE:
      return payload;
    default:
      return state;
  }
};

export default jokeReducer;
