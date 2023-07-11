import React from 'react';
import './AboutProject';

function AboutProject() {
  return (
    <div className='about' id='about'>
      <div className='about__title'>О проекте</div>
      <div className='about__information'>
        <div className='about__container'>
          <h2 className='about__subtitle'>Дипломный проект включал 5 этапов</h2>
          <p className='about__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about__container'>
          <h2 className='about__subtitle'>
            На выполнение диплома ушло 5 недель
          </h2>
          <p className='about__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='about__grid'>
        <div className='about__one'>
          <p className='about__text about__text_margin about__text_black'>
            1 неделя
          </p>
          <p className='about__part'>Back-end</p>
        </div>
        <div className='about__four'>
          <p className='about__text about__text_margin about__text_grey'>
            4 недели
          </p>
          <p className='about__part'>Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;