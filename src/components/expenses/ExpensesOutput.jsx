import { View, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GolbalStyles } from "../../utlis/constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    descrption: "Toilet Paper",
    amount: 94.12,
    date: new Date("2021-01-12"),
  },
  {
    id: "e2",
    descrption: "New TV",

    amount: 799.49,
    date: new Date("2021-02-12"),
  },
  {
    id: "e3",
    descrption: "Car Insurance",

    amount: 294.67,
    date: new Date("2021-02-28"),
  },
  {
    id: "e4",
    descrption: "New Desk (Wooden)",

    amount: 450,
    date: new Date("2021-05-12"),
  },
  {
    id: "e5",
    descrption: "New Desk (Wooden)",

    amount: 450,
    date: new Date("2021-05-12"),
  },
];

export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
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
