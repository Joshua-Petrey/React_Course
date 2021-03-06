import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  // store the filterYear state and pass it down to ExpenseFilter
  //2021 wil be the default filter selected since we two-way bind by sending the current selectedYear
  const [filterYear, setFilterYear] = useState("2021");

  // passed to ExpenseFilter as onFilterYearChange to change filterYear
  const yearUpdateHandler = (selectedYear) => {
    // update the filterYear state to the selectedYear value
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterYearChange={yearUpdateHandler}
          selectedYear={filterYear}
        />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList filteredExpensesArray={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
