import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getJokeThunk, getJoke } from '../../redux/actions/joke';
// import { getFavouriteThunk, getFavourite } from '../../redux/actions/favourite';

function Joke() {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.joke);

  useEffect(() => {
    dispatch(getJokeThunk(path));
  }, [path]);

  return (
    <div>
      {joke ? <p>{joke.joke}</p> : <img src="https://www.meme-arsenal.com/memes/1ea1b714fdb5dc96bfb8ad3bc273993f.jpg" className="App-logo" alt="logo" />}
    </div>
  );
}

export default Joke;
