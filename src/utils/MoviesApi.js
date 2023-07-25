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
    );
  }
}
const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
