import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (expenses) => {
  // store the filterYear state
  //2021 wil be the default filter selected since we two-way bind by sending the current selectedYear
  const [filterYear, setFilterYear] = useState("2021");

  const yearUpdateHandler = (selectedYear) => {
    // update the filterYear state to the selectedYear value
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterYearChange={yearUpdateHandler}
          selectedYear={filterYear}
        ></ExpenseFilter>
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
    </div>
  );
};

export default Expenses;
