import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Login';
import {useFormWithValidation} from "../Register/hooks";
import mainApi from "../../utils/MainApi";

function Login() {
  const { values: data, handleChange, errors, isValid, resetForm } = useFormWithValidation()
  const history = useHistory();
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    setError('');
    e.preventDefault();
    mainApi.signIn({ email: data.email, password: data.password })
      .then(() => {
        history.push('/movies')
      })
      .catch((e) => {
        setError('Ошибка авторизации');
      })
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
        <form className='auth__form' onSubmit={handleSubmit} noValidate>
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
            {errors['email'] && <span className='auth__validaton-message' id='email'>{errors['email']}</span>}
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
            {errors['password'] && <span className='auth__validaton-message' id='password' >{errors['password']}</span>}
          </fieldset>
          <button
            className='auth__submit-button auth__submit-button_indent'
            type='submit'
          >
            Войти
          </button>
          {error && <div className='auth__validaton-message' id='email' >{error}</div>}
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
