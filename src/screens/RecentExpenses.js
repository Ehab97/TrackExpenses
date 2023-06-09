import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/expenses/ExpensesOutput'

export default function RecentExpenses() {
  return (
    <View>
      <ExpensesOutput periodName="Last 7 days" />
    </View>
  )
}