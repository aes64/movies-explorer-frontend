import './MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useState} from "react";

function MoviesCardList({ movies }) {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
