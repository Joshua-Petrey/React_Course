import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

// input validation
const isEmpty = (value) => value.trim().length === ''
const isFiveDigits = (value) => value.trim().length === 5 ;


const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street:true,
    postalCode:true,
    city: true
  })

  const nameInput = useRef()
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value
    const enteredStreet = streetInput.current.value;
    const enteredPostal = postalInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveDigits(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    // dont need function form since we assign all values
    setFormInputsValidity({
       name: enteredNameIsValid,
       street: enteredStreetIsValid,
       postalCode: enteredPostalIsValid,
       city: enteredCityIsValid
     });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid; 
    
    // don't submit if an input is invalid
    if(!formIsValid){
      return
    }
    // submit form
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity
    })
  };

const nameControl = `${classes.control} ${formInputsValidity.name ? '': classes.invalid}`
const streetControl = `${classes.control} ${formInputsValidity.street ? '': classes.invalid}`
const postalControl = `${classes.control} ${formInputsValidity.postalCode ? '': classes.invalid}`
const cityControl = `${classes.control} ${formInputsValidity.city ? '': classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControl}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputsValidity.name && <p>Enter a valid name</p>}
      </div>
      <div className={streetControl}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formInputsValidity.street && <p>Enter a valid address</p>}
      </div>
      <div className={postalControl}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInput} />
        {!formInputsValidity.postalCode && <p>Enter a valid zip code</p>}
      </div>
      <div className={cityControl}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputsValidity.city && <p>Enter a valid cityname</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
