import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import "./App";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UnProtectedRoute from "../UnProtectedRoute/UnProtectedRoute";
import { AUTH_TOKEN } from "../../utils/localStorageConstants";
import MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { GetMoviesContext } from "../../contexts/GetMoviesContext";

function App() {
  const location = useLocation();
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileDataLoading, setProfileDataLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [getMoviesViaApi, setGetMoviesViaApi] = useState(true);
  const viewFooter =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token && profileDataLoading === false && loggedIn === false) {
      setProfileDataLoading(true);
      MainApi.getInitialProfileData()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
        })
        .finally(() => {
          setProfileDataLoading(false);
          setLoading(false);
        });
    }
    if (!token && profileDataLoading === false && loggedIn === false) {
      setLoading(false);
    }
  }, [loggedIn, profileDataLoading]);

  useEffect(() => {
    if (loggedIn) {
      MainApi.getLikedMovies().catch((err) => {
        console.log(err);
      });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (!Object.values(currentUser).length) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
      <GetMoviesContext.Provider value={[getMoviesViaApi, setGetMoviesViaApi]}>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Main} />
              <UnProtectedRoute
                loggedIn={loggedIn}
                loading={loading}
                path="/signup"
                component={Register}
              />
              <UnProtectedRoute
                loggedIn={loggedIn}
                loading={loading}
                path="/signin"
                component={Login}
              />
              <ProtectedRoute
                loggedIn={loggedIn}
                loading={loading}
                path="/movies"
                component={Movies}
              />
              <ProtectedRoute
                loggedIn={loggedIn}
                loading={loading}
                path="/saved-movies"
                component={SavedMovies}
              />
              <ProtectedRoute
                loggedIn={loggedIn}
                loading={loading}
                path="/profile"
                component={Profile}
              />
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </main>
          {viewFooter && <Footer />}
        </div>
      </GetMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
