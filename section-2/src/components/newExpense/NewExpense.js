import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
// Render a form for entering a new expense, saves data that will be pulled up tp App.js

const NewExpense = (props) => {
  // fired by the ExpenseForm wihich is the child of newExpense
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // send exenseData up to App.js
    props.onAddExpense(expenseData);
  };

  // for conditional rendering the ExpenseForm
  const [formVisible, setFormVisible] = useState(false);
  const showFormHandler = () => {
    setFormVisible(true);
  };
  const hideFormHandler = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-expense">
      {formVisible === false && (
        <button onClick={showFormHandler}>Add an Expense</button>
      )}
      {formVisible === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={hideFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
