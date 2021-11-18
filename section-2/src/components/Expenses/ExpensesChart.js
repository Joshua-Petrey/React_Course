import Chart from '../Chart/Chart'

const ExpensesChart = props => {
  // values will come from filteredExpenses
  const chartDataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  // sum the expenses for each month, expenses is filteredExpenses
  for( const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // Jan = 0
    // update expenses for that month
    chartDataPoints[expenseMonth].value += expense.amount
  }

  return <Chart dataPoints={chartDataPoints}></Chart>
}

export default ExpensesChart