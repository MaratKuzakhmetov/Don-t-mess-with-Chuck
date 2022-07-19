import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getJokeThunk, getJoke } from '../../redux/actions/joke';
import { addFavorites } from '../../redux/actions/favorites';
import './button.css';

function Buttons() {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const joke = useSelector((state) => state.joke);
  let list = [];

  function addFavorite(key, value) {
    try {
      list = JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
      console.error(e);
    }
    list.push(value);
    localStorage.setItem(key, JSON.stringify(list));
  }

  function favoriteJokes() {
    addFavorite('url', joke);
    dispatch(addFavorites(joke));
  }

  function newJoke(path) {
    dispatch(getJoke(null));
    dispatch(getJokeThunk(path));
  }

  return (
    <div>
      <Button type="button" onClick={() => favoriteJokes()}>SAVE</Button>
      <Button type="button" onClick={() => newJoke(path)}>NEXT</Button>
    </div>
  );
}

export default Buttons;
