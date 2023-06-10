import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/expenses/ExpensesOutput'
import { ExpensesContext } from '../store/context/expensesContext';

export default function AllExpenses() {

  const expensesCTX = React.useContext(ExpensesContext);

  return (
    <ExpensesOutput periodName="Total"
    expenses={expensesCTX.expenses}
    />
  )
}