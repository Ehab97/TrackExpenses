import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        descrption:"",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        descrption:"",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        descrption:"",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'New Desk (Wooden)',
        descrption:"",
        amount: 450,
        date: new Date(2021, 5, 12),
    }

];

export default function ExpensesOutput({expenses,periodName}) {
  return (
    <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}