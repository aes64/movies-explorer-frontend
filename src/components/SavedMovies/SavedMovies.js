import React, {useMemo, useCallback, useState} from 'react';
import './SavedMovies';
import SearchForm from '../SearchForm/SearchForm';
import {LIKED_MOVIES} from '../../utils/localStorageConstants'; 
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  const likedMovies = useMemo(() => {
    let res = [];
    try {
      res = JSON.parse(likedMoviesFromLS) || [];
    } catch(e) {}
    return res;
  }, [likedMoviesFromLS]);
  const [movies, setMovies] = (likedMovies);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const likedMoviesFromLS = localStorage.getItem(LIKED_MOVIES);
  
  const getLikeId = useCallback((id) => likedMovies.find(item => item.movieId === id)?._id, [likedMovies])

  const handleSearchMovie = () => {
    setLoading(true);
    setError('');
    return movies.filter((item) => (item?.nameRU?.toLowerCase()?.includes(searchString?.toLowerCase()) || item?.nameEN?.toLowerCase()?.includes(searchString?.toLowerCase())))
      .then((data) => {
        if (!data?.length) {
          setError('Ничего не найдено')
        }
        setMovies(data)
      })
      .catch(e => {
        console.error(e)
        setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
      .finally(() => {
        setLoading(false)
      });
  }

  /*const handleCheckboxToggle = useCallback(() => {
    setMovies(moviesApi.getDataFromLocalStorage());
  }, [setMovies, moviesApi.getDataFromLocalStorage])
  */

  return (
    <section className='saved-movies'>
      <SearchForm onSubmit={handleSearchMovie}/>
      <div className='saved-movies__container'>
        {likedMovies.map((movie) => <MoviesCard key={movie?.id} movie={movie} likeId={getLikeId(movie?.movieId)} likeType='cross'/>)}
      </div>
    </section>
  );
}

export default SavedMovies;