import './MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <div className='movies-list'>
      <div className='movies-card'>
        {movies.map((movie) => <MoviesCard movie={movie}/>)}
      </div>
      <div className='movies__container'>
        <button className='movies__button-more'>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;