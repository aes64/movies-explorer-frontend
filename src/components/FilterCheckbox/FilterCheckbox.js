import React from 'react';
import './FilterCheckbox';

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <label className='checkbox__label'>
        <input className='checkbox__button' type='checkbox' />
      </label>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;