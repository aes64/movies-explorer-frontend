import React from 'react';
import './SavedMovies';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <div className='saved-movies'>
      <SearchForm />
      <div className='saved-movies__container'>
        <div className='movie'>
          <img
            src='https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            className='movie__image'
            alt='Постер к фильму'
          />
          <div className='movie__container'>
            <h2 className='movie__title'>33 слова о дизайне</h2>
              <button className='movie__button-delete' type='button' />
          </div>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <div className='movie'>
          <img
            src='https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            className='movie__image'
            alt='Постер к фильму'
          />
          <div className='movie__container'>
            <h2 className='movie__title'>Киноальманах «100 лет дизайна»</h2>
              <button className='movie__button-delete' type='button' />
          </div>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <div className='movie'>
          <img
            src='https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            className='movie__image'
            alt='Постер к фильму'
          />
          <div className='movie__container'>
            <h2 className='movie__title'>В погоне за Бенкси</h2>
              <button className='movie__button-delete' type='button' />
          </div>
          <p className='movie__duration'>1ч 42м</p>
        </div>
      </div>
    </div>
  );
}

export default SavedMovies;