import './Profile.css';
import {
  AUTH_TOKEN,
  CURRENT_USER, LIKED_MOVIES,
  SEARCH_RESULTS,
  SEARCH_STRING,
  SHORTS_TOGGLE
} from "../../utils/localStorageConstants";

function Profile() {
  const loggOut = () => {
    localStorage.removeItem(SEARCH_STRING)
    localStorage.removeItem(SHORTS_TOGGLE)
    localStorage.removeItem(SEARCH_RESULTS)
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(CURRENT_USER)
    localStorage.removeItem(LIKED_MOVIES)

  }
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
        <button className='profile__button profile__button-exit' onClick={loggOut}>
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}

export default Profile;
