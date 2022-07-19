import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Joke from './components/Joke/Joke';
import Buttons from './components/Buttons/Buttons';
import Favorites from './components/Favorites/Favorites';
import MyNavbar from './components/MyNavbar/MyNavbar';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route
          path="/random"
          element={(
            <div>
              <Joke />
              <Buttons />
            </div>
)}
        />
        <Route
          path="/without-chuck"
          element={(
            <div>
              <Joke />
              <Buttons />
            </div>
)}
        />
        <Route path="/fav" element={<div><Favorites /></div>} />
      </Routes>
    </div>
  );
}

export default App;
