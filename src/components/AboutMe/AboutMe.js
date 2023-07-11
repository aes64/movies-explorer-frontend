import React from 'react';
import './AboutMe';

function AboutMe() {
  return (
    <div className='about-me' id='student'>
      <h1 className='about-me__title'>Студент</h1>
      <div className='about-me__container'>
        <div className='about-me__information'>
          <p className='about-me__name'>Елена</p>
          <p className='about-me__age'>Фронтенд-разработчик, 23 года</p>
          <p className='about-me__text'>
            Я начальник юридического отдела Управляющей компании, но не так давно начала интересоваться программированием.
          </p>
          <a
            href='https://github.com/aes64'
            target='_blank'
            rel='noopener noreferrer'
            className='about-me__github'
          >
            Github
          </a>
        </div>
        <div className='about-me__photo'></div>
      </div>
    </div>
  );
}

export default AboutMe;