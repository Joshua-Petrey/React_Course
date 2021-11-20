import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import styled from 'styled-components';
import styles from './CourseInput.module.css'

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input:focus {
//     outline: none;
//     border-color: red;
//     background-color: rgb(226, 80, 128);
//   }
// `;


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
      {/* since form-control has a - we used [] syntax */}
      {/*  */}
      <div className={`${styles['form-control']} ${!isGoalInputValid && styles.invalid}`}>
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
