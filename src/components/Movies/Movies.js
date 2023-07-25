import React, { useState, useEffect } from "react";
import './Movies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  const [movies, setMovies] = useState([]);

  const handleSearchMovie = (searchString) => {
    return moviesApi
      .getMoviesData()
      .then((result) => {
        debugger;
        return result?.filter((item) => (item?.nameRU?.toLowerCase()?.includes(searchString?.toLowerCase())))
      })
      .then((data) => setMovies(data))
      .catch(e => { console.error(e)});
    // 1) Call to api
    // 2) filter using JS on FE, by searchString
    // 3) set state, set movies filtered.
  }

  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSearchMovie} />
      <MoviesCardList movies={movies}/>
    </section>
  );
}

export default Movies;