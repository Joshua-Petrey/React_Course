import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  // runs on every click because the handler function passed to onClick is recreated
  // inside app.js when app.js reevaluates
  console.log("Button running")
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
