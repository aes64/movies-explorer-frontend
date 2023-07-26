import React from 'react';
import { Link } from 'react-scroll';
import './NavTab';

function NavTab() {
  return (
    <div className='nav-tab'>
      <div className='nav-tab__container'>
        <Link
          to='about'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='nav-tab__item'
        >
          О проекте
        </Link>
        <Link
          to='technology'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='nav-tab__item'
        >
          Технологии
        </Link>
        <Link
          to='student'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='nav-tab__item'
        >
          Студент
        </Link>
      </div>
    </div>
  );
}

export default NavTab;