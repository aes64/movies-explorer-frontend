import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);
  const handleClickLike = () => {
    setIsLiked(true);
  };

  return (
    <div className='movies-card'>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>33 слова о дизайне</h2>
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
        <p className='movie__duration'>1ч 47м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Киноальманах «100 лет дизайна»</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>В погоне за Бенкси</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Баския: Взрыв реальности</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Бег это свобода</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Книготорговцы</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Когда я думаю о Германии ночью</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>
            Gimme Danger: История Игги и The Stooges
          </h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        {' '}
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />{' '}
        <div className='movie__container'>
          <h2 className='movie__title'>Дженис: Маленькая девочка грустит</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Соберись перед прыжком</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>Пи Джей Харви: A dog called money</h2>
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
        <p className='movie__duration'>1ч 42м</p>
      </div>
      <div className='movie'>
        <img
          src='https://avatars.mds.yandex.net/i?id=f26edf2b71f154ba7f93962fa80b0ccb0c6deb5a-8497449-images-thumbs&n=13'
          className='movie__image'
          alt='Постер к фильму'
        />
        <div className='movie__container'>
          <h2 className='movie__title'>По волнам: Искусство звука в кино</h2>
          <div className='movie__like-container'>
            <button
              className={`movie__like-button movie__like-button_active ${
                isLiked ? 'movie__like-button_active' : 'movie__like-button'
              } `}
              type='button'
              onClick={handleClickLike}
            />
          </div>
        </div>
        <p className='movie__duration'>1ч 42м</p>
      </div> 
    </div>
  );
}

export default MoviesCard;