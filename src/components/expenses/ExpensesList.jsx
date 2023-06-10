import { View, Text,FlatList } from 'react-native'
import React from 'react'
import ExpensesItem from './ExpensesItem'

export default function ExpensesList({ expenses}) {
  
  return (
    <View>
     <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpensesItem item={item} />}
        keyExtractor={item => item.id}
        />
    </View>
  )
}