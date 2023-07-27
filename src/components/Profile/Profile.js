import './Profile.css';

function Profile() {
  return (
    <form className='profile'>
      <div className='profile__container'>
        <h2 className='profile__header'>Привет, Елена!</h2>
        <div className='profile__field'>
          <label className='profile__label' htmlFor='name'>
            Имя
          </label>
          <input className='profile__input' name='name' id='name' />
        </div>
        <div className='profile__border'></div>
        <div className='profile__field'>
          <label className='profile__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='profile__input'
            type='email'
            name='email'
            id='email'
          />
        </div>
      </div>
      <div className='profile__container'>
        <button className='profile__button '>Редактировать</button>
        <button className='profile__button profile__button-exit'>
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}

export default Profile;