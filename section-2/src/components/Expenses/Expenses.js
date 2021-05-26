import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (expenses) => {
  return (
    <Card className="expenses">
      <h2>Lets get started!!!</h2>
      <ExpenseItem
        title={expenses.items[0].title}
        amount={expenses.items[0].amount}
        date={expenses.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.items[1].title}
        amount={expenses.items[1].amount}
        date={expenses.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.items[2].title}
        amount={expenses.items[2].amount}
        date={expenses.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses.items[3].title}
        amount={expenses.items[3].amount}
        date={expenses.items[3].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
