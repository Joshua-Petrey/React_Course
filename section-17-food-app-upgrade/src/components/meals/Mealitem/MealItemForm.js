import styles from './MealItemForm.module.css'
import Input from '../../UI/Card/Input'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  // comes from Input
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value ;
    const enteredAmountNumber = +enteredAmount

    // validation
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return; 
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (<p>Please enter a valid amount 1 through 5</p>)}
    </form>
  );
}

export default MealItemForm