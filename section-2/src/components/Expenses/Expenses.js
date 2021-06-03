import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

const Expenses = (props) => {
  // store the filterYear state
  //2021 wil be the default filter selected since we two-way bind by sending the current selectedYear
  const [filterYear, setFilterYear] = useState("2021");

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
        <ExpensesList filteredExpensesArray={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
