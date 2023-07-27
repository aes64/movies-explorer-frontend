import React from 'react';
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

function App() {
  const location = useLocation();
  const viewFooter =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies';

  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/signup' component={Register} />
          <Route path='/signin' component={Login} />
          <Route path='/movies' component={Movies} />
          <Route path='/saved-movies' component={SavedMovies} />
          <Route path='/profile' component={Profile} />
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </main>
      {viewFooter && <Footer />}
      <Popup></Popup>
    </div>
  );
}

export default App;