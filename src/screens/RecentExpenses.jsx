import React from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../store/context/expensesContext";
import { getDateMinusDays } from "../utlis/date";

export default function RecentExpenses() {
  const expensesCTX = React.useContext(ExpensesContext);

  const recentExpenses = expensesCTX.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    console.log({ expenseDate, date7DaysAgo });
    return expense.date >= date7DaysAgo;
  });

  return <ExpensesOutput periodName="Last 7 days" expenses={recentExpenses} />;
}
