import React from 'react';
import './Portfolio';

function Portfolio() {
  return (
    <div className='portfolio'>
      <p className='portfolio__name'>Портфолио</p>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            href='https://aes64.github.io/how-to-learn/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link'
          >
            <p className='portfolio__text'>Статичный сайт</p>
            <div className='portfolio__arrow'></div>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            href='https://aes64.github.io/mesto/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link'
          >
            <p className='portfolio__text'>Адаптивный сайт</p>
            <div className='portfolio__arrow'></div>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            href='https://aesmesto.students.nomoredomains.rocks'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link'
          >
            <p className='portfolio__text'>Одностраничное приложение</p>
            <div className='portfolio__arrow'></div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;