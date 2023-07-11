import React from 'react';
import './Promo';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__logo'>
        <div className='promo__text'>
          Учебный проект студента факультета Веб-разработки.
        </div>
      </div>
      <NavTab />
    </div>
  );
}

export default Promo;