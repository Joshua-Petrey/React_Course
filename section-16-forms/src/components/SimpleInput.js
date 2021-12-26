import UseInput from '../hooks/useInput.';
import Input from './Input';


const SimpleInput = (props) => {
   const {
     value: enteredName,
     isValid: enteredNameIsValid,
     hasError: nameInputHasError,
     valueChangeHandler: nameChangeHandler,
     inputBlurHandler: nameInputBlurHandler,
     reset: nameInputReset,
   } = UseInput((value) => value.trim() !== "");

   const {
     value: enteredEmail,
     isValid: enteredEmailIsValid,
     hasError: emailInputHasError,
     valueChangeHandler: emailInputChangeHandler,
     inputBlurHandler: emailInputBlurHandler,
     reset: emailInputReset,
   } = UseInput((value) => value.trim().includes('@'));

  let formIsValid = false

// check if all form inputs are valid
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true
  } 

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // reset form
    nameInputReset()
    emailInputReset()
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        label="Name"
        value={enteredName}
        type="text"
        id="name"
        onChange={nameChangeHandler}
        onBlur={nameInputBlurHandler}
        isValid={enteredNameIsValid}
      />
      {/* User error feedback */}
      {nameInputHasError && (
        <p className="error-text">Name must not be empty</p>
      )}

      <Input
        label="Email"
        value={enteredEmail}
        type="email"
        id="email"
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        isValid={enteredEmailIsValid}
      />
      {/* User error feedback */}
      {emailInputHasError && (
        <p className="error-text">Must be a valid email</p>
      )}
      <div className="form-actions">
        {/* Button disabled unless all form inputs are valid */}
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
