import './Header';
import { Route, Link, Switch } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Switch>
        <Route exact path='/'>
          <Link to='/'>
            <div className='logo'></div>
          </Link>

          <div className='header__main'>
            <Link to='/signup' className='header__link'>
              Регистрация
            </Link>

            <Link
              to='/signin'
              className='header__link header__link_white header__link_size'
            >
              Войти
            </Link>
          </div>
        </Route>
        <Route exact path={['/movies', '/saved-movies', '/profile']}>
          <Link to='/'>
            <div className='logo'></div>
          </Link>
          <div className='header__box'>
            <Link className='header__font header__font_hidden' to='/'>
              Главная
            </Link>
            <Link to='/movies' className='header__font'>
              Фильмы
            </Link>

            <Link to='/saved-movies' className='header__font'>
              Сохраненные фильмы
            </Link>

            <Link to='/profile' className='header__font header__link-profile'>
              Аккаунт
              <div className='header__field'>
                <div className='header__icon'></div>
              </div>
            </Link>
            <div></div>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;