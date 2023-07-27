import './MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <div className='movies-list'>
      <MoviesCard />
      <div className='movies__container'>
        <button className='movies__button-more'>Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;