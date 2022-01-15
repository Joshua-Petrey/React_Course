import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  // used to control sign up button visibillty
  const [isLoading, setIsLoading] = useState(false)
  const authContext = useContext(AuthContext)
  const history = useHistory()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    setIsLoading(true)
    let url
    if(isLogin){
       url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSs7OsvZAEnXyLiQlj5k43QPIpuaA3eP0"
    } else {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSs7OsvZAEnXyLiQlj5k43QPIpuaA3eP0"
    }

    fetch(url,
       {method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json' 
        }}).then(res => {
  setIsLoading(false)
  if(res.ok){
    return res.json()
  } else {
    return res.json().then(data => {
      // show error data
      let errorMessage = 'Authenticatoin failed'
      if(data && data.error && data.error.message){
          errorMessage = data.error.message;
      }
      alert(errorMessage)
      throw new Error(errorMessage)
    })
  }
}).then(responesData => {
  // convert expiration time to data object in ms
  const tokenExpirationTime = new Date(new Date().getTime() + +responesData.expiresIn * 1000)
  // set login true when we get firebase idToken
  authContext.login(responesData.idToken, tokenExpirationTime.toISOString())
  console.log(responesData)
  history.replace('/')
}).catch(error => {
  alert(error.message)
})
    }
  

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailInputRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordInputRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>{!isLoading && isLogin ? "Login" : "Create Account"}</button>
          {isLoading && <p>Sending request</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
