import { useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // has input been touched
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // derived from enteredName state
  const enteredNameIsValid = enteredName.trim() !== "";
  // if input is invalid and form has been touched
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  let formIsValid = false

// check if all form inputs are valid
  if(enteredNameIsValid){
    formIsValid = true
  } 
  // set state to input value on every keystroke
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  // if form lost focus
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    // reset form
    setEnteredName("");
    setEnteredNameTouched(false)
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {/* User error feedback */}
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
