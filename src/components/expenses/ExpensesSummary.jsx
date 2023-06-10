import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GolbalStyles } from "../../utlis/constants/styles";

export default function ExpensesSummary({ periodName, expenses }) {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${totalAmount.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GolbalStyles.colors.primary50,
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GolbalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    color: GolbalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
