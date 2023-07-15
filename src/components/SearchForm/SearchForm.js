import React from 'react';
import './SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <div className='search__container'>
      <form className='search__form'>
        <div className='search__box'>
          <div className='search__box-input'>
          <div className='search__icon'></div>
          <input
            className='search__input'
            name='film'
            placeholder='Фильм'
            required
          ></input>
          </div>
          
            <div className='search__button-container'>
            <button type='submit' className='search__button'></button>
            </div>
            </div>

            <FilterCheckbox />
      </form>
      </div>
    </div>
  );
}

export default SearchForm;