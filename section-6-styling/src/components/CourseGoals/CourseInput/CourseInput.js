import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState("");
  // CSS output will depend on the value of isGoalInputValid
  const [isGoalInputValid, setGoalInput] = useState(true);

  const goalInputChangeHandler = (event) => {
    // check if input is valid on each keystroke. If valid change state
    if(event.target.value.trim().length > 0){
      setGoalInput(true) ;
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // deny empty goals
    if (enteredValue.trim().length === 0) {
      // change state to change css
      setGoalInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Dynmic classes */}
      <div className={`form-control ${!isGoalInputValid ? 'invalid' : ''}`}>
  
        <label >
          Course Goal
        </label>
        <input
            
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
