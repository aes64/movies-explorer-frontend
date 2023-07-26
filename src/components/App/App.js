import React, { useState, useEffect } from "react";
import {Switch, Route, useLocation, useHistory} from 'react-router-dom';
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {AUTH_TOKEN} from "../../utils/localStorageConstants";
import MainApi from "../../utils/MainApi";

function App() {
  const location = useLocation();
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const viewFooter =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies';

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token && !loggedIn) {
      setLoading(true);
      MainApi
        .getInitialProfileData()
        .then((res) => {
          if (res) {
            setEmail(res?.email);
            setLoggedIn(true);
            history.push('/movies')
          }
        })
        .catch((err) => {
          console.log(err)
          setLoggedIn(false)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setLoading(false);
    }
  }, [loggedIn, location.pathname, email]);

  useEffect(() => {
    if (loggedIn) {
      MainApi
        .getLikedMovies()
        .catch((err) => {
          console.log(err)
        })
    }
  }, [loggedIn]);

  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/signup'>
            <Register/>
          </Route>
          <Route path='/signin'>
            <Login/>
          </Route>
          <ProtectedRoute loggedIn={loggedIn} loading={loading} path='/movies' component={Movies}/>
          <ProtectedRoute loggedIn={loggedIn} loading={loading} path='/saved-movies' component={SavedMovies}/>
          <ProtectedRoute loggedIn={loggedIn} loading={loading} path='/profile' component={Profile}/>
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
