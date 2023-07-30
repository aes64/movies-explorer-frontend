import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header";
import Popup from "../Popup/Popup";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header() {
  const [narrowWindow, setNarrowWindow] = useState(false);
  const [user, setUser] = React.useContext(CurrentUserContext);
  const openPopupMenu = () => {
    setNarrowWindow(true);
  };

  const closePopup = () => {
    setNarrowWindow(false);
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      {!Object.values(user).length ? (
        <>
          <div className="header__main">
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>

            <Link
              to="/signin"
              className="header__link header__link_white header__link_size"
            >
              Войти
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="header__burger" onClick={openPopupMenu}></div>
          <div className="header__box">
            <Link to="/movies" className="header__font">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__font">
              Сохраненные фильмы
            </Link>
            <Link to="/profile" className="header__font header__link-profile">
              Аккаунт
              <div className="header__field">
                <div className="header__icon"></div>
              </div>
            </Link>
          </div>
        </>
      )}
      {narrowWindow && <Popup closePopup={closePopup} />}
    </header>
  );
}

export default Header;
