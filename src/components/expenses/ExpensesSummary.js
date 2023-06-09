import { View, Text } from "react-native";
import React from "react";

export default function ExpensesSummary({ periodName, expenses }) {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${totalAmount.toFixed(2)}</Text>
    </View>
  );
}
