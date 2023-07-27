import React from 'react';
import './Techs';

function Techs() {
  return (
    <div className='techs' id='technology'>
      <div className='techs__title'>Технологии</div>
      <div className='techs__main'>
        <p className='techs__subtitle'>7 технологий</p>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className='techs__container'>
          <p className='techs__technology'>HTML</p>
          <p className='techs__technology'>CSS</p>
          <p className='techs__technology'>JS</p>
          <p className='techs__technology'>React</p>
          <p className='techs__technology'>Git</p>
          <p className='techs__technology'>Express.js</p>
          <p className='techs__technology'>mongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Techs;