import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Register';
import {useFormWithValidation} from "./hooks";
import mainApi from "../../utils/MainApi";

function Register() {
  const { values: data, handleChange, errors, isValid, resetForm } = useFormWithValidation()
  const history = useHistory();
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    setError('');
    e.preventDefault();
    mainApi.signUp({ name: data.name, email: data.email, password: data.password })
      .then(() => {
        history.push('/movies')
      })
      .catch((e) => {
        setError('Ошибка регистрации');
      })
  };

  return (
    <section className='auth'>
      <div className='auth__container'>
        <Link to='/'>
          <div className='logo logo_auth'></div>
        </Link>
        <h1 className='auth__welcome'>Добро пожаловать!</h1>
      </div>
      <section className='auth__section'>
        <form className='auth__form' onSubmit={handleSubmit}>
          <fieldset className='auth__info'>
            <label className='auth__label'>Имя</label>
            <input
              value={data.name}
              onChange={handleChange}
              id='name'
              className='auth__input'
              type='text'
              name='name'
              required
            />
            {errors['name'] && <span className='auth__validaton-message' id='name'>{errors['name']}</span>}
            <label className='auth__label'>E-mail</label>
            <input
              value={data.email}
              onChange={handleChange}
              id='email-input'
              className='auth__input'
              type='text'
              name='email'
              required
            />
            {errors['email'] && <span className='auth__validaton-message' id='email'>{errors['email']}</span>}
            <label className='auth__label'>Пароль</label>
            <input
              value={data.password}
              onChange={handleChange}
              id='password-input'
              className='auth__input auth__input_type_password'
              type='password'
              name='password'
              minLength={4}
              required
            />
            {errors['password'] && <span className='auth__validaton-message' id='password' >{errors['password']}</span>}
          </fieldset>
          <button className='auth__submit-button' type='submit'>
            Зарегистрироваться
          </button>
          {error && <div className='auth__validaton-message' id='email' >{error}</div>}
          <p className='auth__text'>
            Уже зарегистрированы?{' '}
            <Link to='/signin' className='auth__link'>
              Войти
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}

export default Register;
