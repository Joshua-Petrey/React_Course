import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const authContext = useContext(AuthContext)
  const newPasswordRef = useRef(AuthContext)
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredNewPassword = newPasswordRef.current.value

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCSs7OsvZAEnXyLiQlj5k43QPIpuaA3eP0', {
      method: 'POST',
      body: JSON.stringify({
        password: enteredNewPassword,
        idToken: authContext.token,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assume success, should error check here
      history.replace('/')
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordRef}type='password' id='new-password' min={8} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
