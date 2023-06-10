import React from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../store/context/expensesContext";
import { getDateMinusDays } from "../utlis/date";

export default function RecentExpenses() {
  const expensesCTX = React.useContext(ExpensesContext);

  const recentExpenses = expensesCTX.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      periodName="Last 7 days"
      expenses={recentExpenses}
      fallBackText={"No expenses in the last 7 days"}
    />
  );
}
