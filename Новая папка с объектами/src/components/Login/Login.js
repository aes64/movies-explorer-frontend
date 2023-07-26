import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login';

function Login({ onSubmit }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, email, value } = e.target;
    setData({
      ...data,
      [name]: value,
      [email]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <section className='auth'>
      <div className='auth__container auth__container_indent'>
        <Link to='/'>
          <div className='logo logo_auth'></div>
        </Link>
        <h1 className='auth__welcome'>Рады видеть!</h1>
      </div>
      <section className='auth__section'>
        <form className='auth__form' onSubmit={handleChange}>
          <fieldset className='auth__info'>
            <label className='auth__label'>E-mail</label>
            <input
              id='email-input'
              className='auth__input'
              type='text'
              name='email'
              required
              value={data.email}
              onChange={handleChange}
            />
            <label className='auth__label'>Пароль</label>
            <input
              id='password-input'
              className='auth__input auth__input_type_password'
              type='password'
              name='password'
              minLength={4}
              required
              value={data.password}
              onChange={handleChange}
            />
          </fieldset>
          <button
            className='auth__submit-button auth__submit-button_indent'
            type='submit'
          >
            Войти
          </button>
          <p className='auth__text'>
            Ещё не зарегистрированы?{' '}
            <Link to='/signup' className='auth__link'>
              Регистрация
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}

export default Login;