import React, { useState } from 'react';
import './SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {SEARCH_STRING, SHORTS_TOGGLE} from "../../utils/localStorageConstants";

function SearchForm({ onSubmit, handleCheckboxToggle }) {
  const [searchString, setSearchString] = useState(localStorage.getItem(SEARCH_STRING))
  const [shortsToggle, setShortsToggle] = useState(localStorage.getItem(SHORTS_TOGGLE) === 'true');

  const searchStringOnChange = (e) => {
    setSearchString(e.target.value);
  }

  const shortsToggleOnChange = (e) => {
    setShortsToggle((value) => {
      const nextValue = !value
      localStorage.setItem(SHORTS_TOGGLE, nextValue.toString());
      handleCheckboxToggle();
      return nextValue;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(SEARCH_STRING, searchString);
    onSubmit(searchString);
  }

  return (
    <div className='search'>
      <div className='search__container'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__box'>
          <div className='search__box-input'>
          <div className='search__icon'></div>
          <input
            className='search__input'
            name='film'
            placeholder='Фильм'
            required
            value={searchString}
            onChange={searchStringOnChange}
          ></input>
          </div>

          <div className='search__button-container'>
          <button type='submit' className='search__button'></button>
          </div>
          </div>

          <FilterCheckbox value={shortsToggle} onChange={shortsToggleOnChange}/>
      </form>
      </div>
    </div>
  );
}

export default SearchForm;
