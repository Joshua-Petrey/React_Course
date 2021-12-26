import UseInput from "../hooks/useInput";
import Input from "./Input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameInputReset,
  } = UseInput(isNotEmpty);

   const {
     value: enteredLastName,
     isValid: enteredLastNameIsValid,
     hasError: lastNameInputHasError,
     valueChangeHandler: lastNameChangeHandler,
     inputBlurHandler: lastNameInputBlurHandler,
     reset: lastNameInputReset,
   } = UseInput(isNotEmpty);


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = UseInput(isEmail);

  let formIsValid = false;

  // check if all form inputs are valid
  if (enteredFirstNameIsValid && enteredLastNameIsValid &&enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    // reset form
    firstNameInputReset()
    lastNameInputReset();
    emailInputReset();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className="form-control">
          <Input
            label="First name"
            value={enteredFirstName}
            type="text"
            id="first-name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
            isValid={enteredFirstNameIsValid}
          />
         
          <div>
            {firstNameInputHasError && (
              <p className="error-text">First name must not be empty</p>
            )}
          </div>
        </div>
        <div className="form-control">
          <Input
            label="Last name:"
            value={enteredLastName}
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            isValid={enteredLastNameIsValid}
          />
          
          <div>
            {lastNameInputHasError && (
              <p className="error-text">Last name must not be empty</p>
            )}
          </div>
        </div>
      </div>
      <div className="form-control">
        <Input
          label="E-mail"
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          isValid={enteredEmailIsValid}
        />
        <div>
          {emailInputHasError && (
            <p className="error-text">Must enter a valid email adrress</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
