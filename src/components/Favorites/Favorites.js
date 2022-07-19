import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteJokeItem from '../FavoriteJokeItem/FavoriteJokeItem';

function Favorites() {
  const jokes = JSON.parse(localStorage.getItem('url')) || [];
  const newJokes = useSelector((state) => state.favorites);

  return (
    <div>
      {newJokes.map((joke) => <FavoriteJokeItem key={joke.id} joke={joke} />)}
    </div>
  );
}

export default Favorites;
