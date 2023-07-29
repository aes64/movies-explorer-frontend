import {
  AUTH_TOKEN,
  CURRENT_USER,
  LIKED_MOVIES,
} from "./localStorageConstants";

class MainApi {
  constructor({ baseUrl }) {
    this._link = baseUrl;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  get _headers() {
    const token = localStorage.getItem(AUTH_TOKEN);
    let defaultHeaders = {
      "Content-Type": "application/json",
    };
    if (token) {
      defaultHeaders["Authorization"] = `Bearer ${token}`;
    }
    return defaultHeaders;
  }

  signUp({ name, email, password }) {
    return fetch(`${this._link}/signup`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then(this._checkResponse)
      .then(() => {
        return this.signIn({ email, password });
      });
  }

  signIn({ email, password }) {
    return fetch(`${this._link}/signin`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(this._checkResponse)
      .then((result) => {
        if (result?.token) {
          localStorage.setItem(AUTH_TOKEN, result.token);
          return;
        }
        throw new Error("Ошибка в запросе");
      });
  }

  getInitialProfileData() {
    return fetch(`${this._link}/users/me`, { headers: this._headers })
      .then(this._checkResponse)
      .then((res) => {
        localStorage.setItem(CURRENT_USER, JSON.stringify(res?.data));
        return res?.data;
      })
      .catch((error) => {
        localStorage.removeItem(AUTH_TOKEN);
        localStorage.removeItem(CURRENT_USER);
        throw error;
      });
  }

  setNewProfileData({ name, email }) {
    return fetch(`${this._link}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then(this._checkResponse)
      .then((res) => {
        localStorage.setItem(CURRENT_USER, JSON.stringify(res?.data));
        return res?.data;
      });
  }

  getLikedMovies() {
    return fetch(`${this._link}/movies`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((res) => {
        localStorage.setItem(LIKED_MOVIES, JSON.stringify(res));
      });
  }

  setLikeMovie(movieForUpdate) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image: {
        url: imagePath,
        formats: {
          thumbnail: { url: thumbnailPath },
        },
      },
      trailerLink,
      nameRU,
      nameEN,
      id,
    } = movieForUpdate;
    return fetch(`${this._link}/movies`, {
      method: "POST",
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${imagePath}`,
        thumbnail: `https://api.nomoreparties.co${thumbnailPath}`,
        trailerLink,
        nameRU,
        nameEN,
        movieId: id.toString(),
      }),
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((res) => {
        const currentLikes = JSON.parse(localStorage.getItem(LIKED_MOVIES));
        currentLikes.push(res);
        localStorage.setItem(LIKED_MOVIES, JSON.stringify(currentLikes));
        return res;
      });
  }

  setDislikeMovie(movieId) {
    return fetch(`${this._link}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then(() => {
        const currentLikes = JSON.parse(localStorage.getItem(LIKED_MOVIES));
        localStorage.setItem(
          LIKED_MOVIES,
          JSON.stringify(currentLikes.filter((item) => item?._id !== movieId)),
        );
      });
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.aesmovie.students.nom.nomoreparties.sbs",
});

export default mainApi;
