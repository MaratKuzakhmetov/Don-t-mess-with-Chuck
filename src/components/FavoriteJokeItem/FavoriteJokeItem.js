import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { deleteFavorites } from '../../redux/actions/favorites';
import './favoriteJokeItem.css';

function FavoriteJokeItem({ joke }) {
  const dispatch = useDispatch();
  const favoritesList = JSON.parse(localStorage.getItem('url'));

  const handleDelete = useCallback((id) => {
    const newList = favoritesList.filter((item) => (item.id === id ? null : item));
    localStorage.setItem('url', JSON.stringify(newList));
    dispatch(deleteFavorites(id));
  }, []);

  return (
    <div className='jokes'>
      <p>{joke.joke}</p>
      <Button type="button" onClick={() => handleDelete(joke.id)}>delete</Button>
    </div>
  );
}

export default FavoriteJokeItem;
