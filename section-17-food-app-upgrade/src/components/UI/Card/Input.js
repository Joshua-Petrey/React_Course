import React from 'react';
import styles from './Input.module.css'

// ref for amountInputRef is forwarded here from MealForm
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label> 
      <input ref={ref} {...props.input}/>
    </div>
  );

})

export default Input