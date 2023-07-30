import React, { useMemo, useCallback, useState, useEffect } from "react";
import "./SavedMovies";
import SearchForm from "../SearchForm/SearchForm";
import { LIKED_MOVIES } from "../../utils/localStorageConstants";
import MoviesCard from "../MoviesCard/MoviesCard";

const getMoviesFromLS = () => {
  let res = [];
  try {
    res = JSON.parse(localStorage.getItem(LIKED_MOVIES)) || [];
  } catch (e) {}
  return res;
};

function SavedMovies() {
  const likedMovies = useMemo(() => getMoviesFromLS(), []);
  const [movies, setMovies] = useState(likedMovies);
  const [searchString, setSearchString] = useState("");
  const [toggleShorts, setToggleShorts] = useState(false);

  const getLikeId = useCallback(
    (id) => movies.find((item) => item._id === id)?._id,
    [movies],
  );
  const removeById = useCallback(
    (id) => {
      setMovies(movies.filter((item) => item._id !== id));
    },
    [setMovies, movies],
  );
  const handleSearchMovie = useCallback(
    (searchString) => {
      setSearchString(searchString);
    },
    [setSearchString],
  );
  const handleCheckboxToggle = useCallback(
    (nextValue) => {
      setToggleShorts(nextValue);
    },
    [setToggleShorts],
  );
  let filteredMovies = movies;
  if (searchString) {
    filteredMovies = filteredMovies.filter(
      (item) =>
        item?.nameRU?.toLowerCase()?.includes(searchString?.toLowerCase()) ||
        item?.nameEN?.toLowerCase()?.includes(searchString?.toLowerCase()),
    );
  }
  if (toggleShorts) {
    filteredMovies = filteredMovies.filter((item) => item?.duration <= 40);
  }

  return (
    <section className="saved-movies">
      <SearchForm
        onSubmit={handleSearchMovie}
        handleCheckboxToggle={handleCheckboxToggle}
        noLocalStorage
      />
      <div className="saved-movies__container">
        {!filteredMovies.length && <span>{"Ничего не найдено"}</span>}
        {filteredMovies.map((movie) => (
          <MoviesCard
            key={movie?._id}
            movie={movie}
            likeId={getLikeId(movie?._id)}
            removeById={removeById}
            likeType="cross"
          />
        ))}
      </div>
    </section>
  );
}

export default SavedMovies;
