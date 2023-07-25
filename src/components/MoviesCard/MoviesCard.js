import { useState } from 'react';
import './MoviesCard.css';

const prettifyDuration = duration => {
  if (!duration) return '';
  const hours = Math.floor(duration / 60);
  const hoursStr = `${hours}ч`
  const minutes = Math.floor(duration % 60);
  const minutesStr = `${minutes}м`
  return [hours && hoursStr, minutes && minutesStr].filter(Boolean).join(' ');
}

function MoviesCard({ movie }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleClickLike = () => {
    setIsLiked(true);
  };

  return (
    <div className='movie'>
      <img
        src={`https://api.nomoreparties.co${movie?.image?.url}`}
        className='movie__image'
        alt='Постер к фильму'
      />
      <div className='movie__container'>
        <h2 className='movie__title'>{movie?.nameRU}</h2>
        <div className='movie__like-container'>
          <button
            className={`movie__like-button ${
              isLiked ? 'movie__like-button_active' : 'movie__like-button'
            } `}
            type='button'
            onClick={handleClickLike}
          />
        </div>
      </div>
      <p className='movie__duration'>{prettifyDuration(movie?.duration)}</p>
    </div>
  );
}

export default MoviesCard;
