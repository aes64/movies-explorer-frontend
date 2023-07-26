import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register';

function Register({ onSubmit }) {
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
            <span className='auth__validaton-message' id='name' >Слишком короткое имя</span>
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
            <span className='auth__validaton-message' id='email' >неверная почта</span>
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
            <span className='auth__validaton-message' id='password' >Что-то не так...</span>
          </fieldset>
          <button className='auth__submit-button' type='submit'>
            Зарегистрироваться
          </button>
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