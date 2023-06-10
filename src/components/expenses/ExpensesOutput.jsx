import { View, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GolbalStyles } from "../../utlis/constants/styles";



export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: GolbalStyles.colors.primary700,
  },
});
