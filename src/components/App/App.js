import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from 'react-router-dom';
import './App';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import Popup from '../Popup/Popup';
import Preloader from "../Preloader/Preloader";

function App() {
  const location = useLocation();
  const viewFooter =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies';

  const handleSubmitRegistration = () => {

  }

  const handleLoginSubmit = () => {

  }
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/signup' onSubmit={handleSubmitRegistration}>
            <Register/>
          </Route>
          <Route path='/signin' onSubmit={handleLoginSubmit}>
            <Login/>
          </Route>
          <Route path='/movies'>
            <Movies/>
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies/>
          </Route>
          <Route path='/profile'>
            <Profile/>
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </main>
      {viewFooter && <Footer />}
      <Popup></Popup>
      <Preloader></Preloader>
    </div>
  );
}

export default App;