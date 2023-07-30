import React, { useCallback, useContext, useState } from "react";
import "./Movies";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { GetMoviesContext } from "../../contexts/GetMoviesContext";

function Movies() {
  const [movies, setMovies] = useState(moviesApi.getDataFromLocalStorage());
  const [callToApi, setCallToApi] = useContext(GetMoviesContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchMovie = (str) => {
    if (callToApi) {
      setLoading(true);
      setError("");
      return moviesApi
        .getMoviesData()
        .then((data) => {
          if (!data?.length) {
            setError("Ничего не найдено");
          }
          setMovies(data);
        })
        .catch((e) => {
          console.error(e);
          setError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          );
        })
        .finally(() => {
          setLoading(false);
          setCallToApi(false);
        });
    } else {
      const result = moviesApi.getDataFromLocalStorage();
      setMovies(result);
      if (!result.length) {
        setError("Ничего не найдено");
      }
    }
  };

  const handleCheckboxToggle = useCallback(() => {
    setMovies(moviesApi.getDataFromLocalStorage());
  }, [setMovies]);

  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSearchMovie}
        handleCheckboxToggle={handleCheckboxToggle}
      />
      {loading && <Preloader />}
      {error && <span>{error}</span>}
      <MoviesCardList movies={movies} />
    </section>
  );
}

export default Movies;
