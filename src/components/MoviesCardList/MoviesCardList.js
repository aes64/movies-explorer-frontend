import './MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useCallback, useEffect, useState} from "react";
import {useResultSize} from "../Movies/hooks";

function MoviesCardList({ movies }) {
  const resultSize = useResultSize();
  const [totalSize, setTotalSize] = useState(resultSize);
  const [pagedMovies, setPagedMovies] = useState(movies.slice(0, resultSize));
  
  useEffect(() => {
    setPagedMovies(movies.slice(0, totalSize))
  }, [movies])
  const loadMore = useCallback(() => {
    setPagedMovies(movies.slice(0, totalSize + resultSize))
    setTotalSize(totalSize + resultSize);
  }, [setPagedMovies, movies, pagedMovies, resultSize])

  return (
    <div className='movies-list'>
      <div className='movies-card'>
        {pagedMovies.map((movie) => <MoviesCard key={movie?.id} movie={movie}/>)}
      </div>
      <div className='movies__container'>
        <button className='movies__button-more' onClick={loadMore}>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;
