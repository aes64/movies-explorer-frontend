import React from 'react';
import { Link } from 'react-router-dom';
import './Error';

function Error() {
  return (
    <div className='error'>
      <p className='error__404'>404</p>
      <p className='error__text'>Страница не найдена</p>
      <Link to='/' className='error__button'>
        Назад
      </Link>
    </div>
  );
}

export default Error;
