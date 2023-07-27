import './Popup';
import { Route, Link} from 'react-router-dom';

function Popup({closePopup}) {
  return (
    <div className='popup'>
      <div className='popup__menu'>
        
        <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <div className='popup__links'>
        <button className='popup__button-close' onClick={closePopup}></button>
          <Link to='/' className='header__font'>
              Главная
            </Link>
            <Link to='/movies' className='header__font'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='header__font'>
              Сохраненные фильмы
            </Link>
        </div>
            <Link to='/profile' className='header__font header__link-profile'>
              Аккаунт
              <div className='header__field'>
                <div className='header__icon'></div>
              </div>
            </Link>
        </Route>
      </div>
    </div>
  )
}
export default Popup;