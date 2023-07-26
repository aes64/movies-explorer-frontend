import React, {useCallback, useState} from "react";
import './Movies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import {useResultSize} from "./hooks";

function Movies() {
  const [movies, setMovies] = useState(moviesApi.getDataFromLocalStorage());
  const handleSearchMovie = () => {
    return moviesApi
      .getMoviesData()
      .then((data) => setMovies(data))
      .catch(e => { console.error(e)});
  }

  const handleCheckboxToggle = useCallback(() => {
    setMovies(moviesApi.getDataFromLocalStorage());
  }, [setMovies, moviesApi.getDataFromLocalStorage])


  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSearchMovie} handleCheckboxToggle={handleCheckboxToggle} />
      <MoviesCardList movies={movies}/>
    </section>
  );
}

export default Movies;
