import {SEARCH_RESULTS, SEARCH_STRING, SHORTS_TOGGLE} from "./localStorageConstants";

class MoviesApi {
  constructor({ baseUrl }) {
    this._link = baseUrl;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  /*
  get _headers() {
    const token = localStorage.getItem("token");
    let defaultHeaders = {
      "Content-Type": "application/json"
    }
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }
    return defaultHeaders;
  }
  */

  getMoviesData() {
    return fetch(`${this._link}`, { headers: this._headers }).then(
      this._checkResponse
    ).then((result) => {
      localStorage.setItem(SEARCH_RESULTS, JSON.stringify(result))
      return this.getDataFromLocalStorage();
    });
  }

  getDataFromLocalStorage() {
    //preloader on
    const searchString = localStorage.getItem(SEARCH_STRING);
    const shortsToggle = localStorage.getItem(SHORTS_TOGGLE) === 'true';
    let data = [];
    try {
      data = JSON.parse(localStorage.getItem(SEARCH_RESULTS)) || []
    } catch (e) {
      console.error('failed to parse result from localStorage');
      //smth going wrong
    }
    let result = data;
    if (shortsToggle) {
      result = result.filter(item => item?.duration <= 40);
    }
    if (searchString) {
      result = result.filter((item) => (item?.nameRU?.toLowerCase()?.includes(searchString?.toLowerCase()) || item?.nameEN?.toLowerCase()?.includes(searchString?.toLowerCase())));
    }
    //preloader off
    return result;
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
