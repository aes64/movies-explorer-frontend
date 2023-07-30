import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import {
  AUTH_TOKEN,
  CURRENT_USER,
  LIKED_MOVIES,
  SEARCH_RESULTS,
  SEARCH_STRING,
  SHORTS_TOGGLE,
} from "../../utils/localStorageConstants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation, validations } from "../../utils/formValidation";
import mainApi from "../../utils/MainApi";

function Profile() {
  const history = useHistory();
  const [loading, setLoading] = useState("");
  const [updateError, setUpdateError] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [user, setUser] = React.useContext(CurrentUserContext);
  const userNameValidation = useCallback(
    (value) => {
      if (value === user.name) {
        return {
          isValid: false,
          validationMessage: "поле name должно отличаться от существующего",
        };
      }
      return validations["name"](value);
    },
    [user.name],
  );
  const emailValidation = useCallback(
    (value) => {
      if (value === user.email) {
        return {
          isValid: false,
          validationMessage: "поле email должно отличаться от существующего",
        };
      }
      return validations["email"](value);
    },
    [user.email],
  );

  const loggOut = () => {
    localStorage.removeItem(SEARCH_STRING);
    localStorage.removeItem(SHORTS_TOGGLE);
    localStorage.removeItem(SEARCH_RESULTS);
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(CURRENT_USER);
    localStorage.removeItem(LIKED_MOVIES);
    setUser({});
    history.push("/");
  };

  const {
    values: data,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation(
    {
      name: userNameValidation,
      email: emailValidation,
    },
    { name: user.name, email: user.email },
    false,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setUpdateError("");
    setUpdateStatus("");
    mainApi
      .setNewProfileData({ ...user, ...data })
      .then((newUser) => {
        setUser(newUser);
        resetForm(newUser, {}, false)
        setUpdateStatus("Обновление успешно");
      })
      .catch((e) => {
        setUpdateError("Ошибка обновления");
      })
      .finally(() => {
        setLoading(false)
      });
  };

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <div className="profile__container">
        <h2 className="profile__header">Привет, {user.name}!</h2>
        <div className="profile__field">
          <label className="profile__label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__input"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        {errors["name"] && (
          <span className="profile__validaton-message" id="name">
            {errors["name"]}
          </span>
        )}
        <div className="profile__border"></div>
        <div className="profile__field">
          <label className="profile__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="profile__input"
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {errors["email"] && (
          <span className="profile__validaton-message" id="name">
            {errors["email"]}
          </span>
        )}
      </div>
      <div className="profile__container">
        <button className="profile__button" type="submit" disabled={!isValid || loading}>
          Редактировать
        </button>
        {updateError && (
          <span className="profile__update-message" id="name">
            {updateError}
          </span>
        )}
        {updateStatus && (
          <span className="profile__update-message" id="name">
            {updateStatus}
          </span>
        )}
        <button
          className="profile__button profile__button-exit"
          type="button"
          onClick={loggOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}

export default Profile;
