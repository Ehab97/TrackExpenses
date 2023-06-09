import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/expenses/ExpensesOutput'

export default function AllExpenses() {
  return (
    <ExpensesOutput periodName="Total" />
  )
}