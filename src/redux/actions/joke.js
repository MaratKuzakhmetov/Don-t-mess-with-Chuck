import axios from 'axios';
import { GET_JOKE } from '../constants/constants';

export const getJoke = (data) => ({ type: GET_JOKE, payload: data });

export const getJokeThunk = (path) => async (dispatch) => {
  try {
    const res = await axios.get('https://geek-jokes.sameerkumar.website/api?format=json');
    res.data.id = Date.now();
    if (path.includes('without-chuck') && res.data.joke.includes('Chuck')) {
      dispatch(getJokeThunk(path));
    } else {
      dispatch(getJoke(res.data));
    }
  } catch (e) {
    console.log(e);
  }
};
