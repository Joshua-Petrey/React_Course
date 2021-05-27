import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

// Render a form for entering a new expense, saves data that will be pulled up tp App.js

const NewExpense = (props) => {
  // fired by the ExpenseForm wihich is the child of newExpense
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // send exenseData up to App.js
    props.onAddExpense();
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
