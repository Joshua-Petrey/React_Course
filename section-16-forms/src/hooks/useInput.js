import { useReducer } from "react";

const initialInputState = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if(action.type === 'INPUT'){
    return {
      value: action.value,
      isTouched: state.isTouched
    }
  }
  if(action.type === 'BLUR'){
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if(action.type === 'RESET'){
    return initialInputState
  }
  return initialInputState
}

const UseInput = (validateValueFn) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

  const enteredValueIsValid = validateValueFn(inputState.value);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => dispatch({type: 'INPUT', value: e.target.value })
  
  const inputBlurHandler = (e) => dispatch({type: 'BLUR'})
  
  const reset = () => dispatch({type: 'RESET' })
  

  return {
    value: inputState.value,
    isValid: enteredValueIsValid,
    hasError,
    // expose methods so the component that uses the hooks can call them
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
}
export default UseInput ;