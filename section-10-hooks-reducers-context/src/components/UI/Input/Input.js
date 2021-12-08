import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';
// 2nd arg to a component can be a ref that is set externally on the Input component
// The Input ref is set in Login.js to emailInputRef
// React.Forwardref allows a react compont to be bound to a ref
const Input = React.forwardRef((props, ref) => {

  const inputRef = useRef()

  // can now use Input.focus() to focus on the input
  const activateFocus = () => {
    inputRef.current.focus()
  }

  // ref is 2nd arg pass to Input component
  // 2nd arg returns an external name that can call the local function
  // forwardRef can only use what was exposed here
  useImperativeHandle( ref, () => { return {
    focus: activateFocus
  }})

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}

      />
    </div>
  );
})

export default Input