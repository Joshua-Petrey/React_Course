import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// Reducer for useReducer
const emailReducer = (lastState, action) => {
  switch(action.type){
    case "USER_INPUT":
      // update emailState's value and check if emailState valid
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    };
    case "INPUT_BLUR":
      return {value: lastState.value, isValid: lastState.value.includes('@')}
    default: 
      return { value: '', isValid: false}
  }
};

const passwordReducer = (lastState, action) => {
  switch (action.type) {
    case "PASS_INPUT":
      // update emailState's value and check if emailState valid
      return {
        value: action.value,
        isValid: action.value.trim().length > 6,
      };
    case "INPUT_BLUR":
      return { value: lastState.value, isValid: lastState.value.trim().length > 6 };
    default:
      return { value: "", isValid: false };
  }
};

const Login = (props) => {
  // This can be a big form state or smaller grouped states
  // next two state are handled by useReducer 
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // We are handling email value and if its valid with useReducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: null})
  // password and if its valid state
  const [passState, dispatchPassword] = useReducer(passwordReducer, {
      value: "",
      isValid: null,
    });

    // pull and alias a property from state 
    const {isValid: emailIsValid} = emailState
    const { isValid: passIsValid } = passState;

  // dependencies are whatever state variable you use in useEffect. 
  // since we only use the isValid property value from emailState & passState this won't run if the emailState or passState's value property changes
  useEffect(() => {
    // debounce
    const identifier = setTimeout(() => {
      console.log("Checking form validity")
      // check if email and pass is valid
      setFormIsValid(
        emailIsValid && passIsValid
      );
    }, 1000)

    // return is a cleanup function
    // runs on or unmount
    return () => {
      // clear last timer so when can set a new timer
      clearTimeout(identifier);
      console.log("Clenaup function fired")
    }
  }, [emailIsValid, passIsValid])

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    // dispatch action is custom. generally has a action type and payload(value)
    dispatchEmail({type: 'USER_INPUT', value: event.target.value})

    // relies on multiple state not good
    //setFormIsValid(event.target.value.includes('@') && passState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: "PASS_INPUT", value: event.target.value})
    // relies on multiple state not good
    //setFormIsValid( event.target.value.trim().length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    // Bad, setEmailisValid state depends on enteredEmail state
    // SetEmailisValid has no acces to enteredEmails old state, only its own
    // setEmailIsValid(emailState.isValid);

    // input lost focus
    dispatchEmail({type: "INPUT_BLUR" })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
