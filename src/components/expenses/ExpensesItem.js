import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { GolbalStyles } from "../../utlis/constants/styles";
import { getFormattedDate } from "../../utlis/date";

export default function ExpensesItem({ item }) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View
        // style={styles}
        >
          <Text style={[styles.textBase, styles.descrption]}>{item.descrption}</Text>
          <Text styles={styles.textBase}>{getFormattedDate(item.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.textBase, styles.amount]}>{item.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GolbalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GolbalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GolbalStyles.colors.primary50,
  },
  descrption: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 90,
  },
  amount: {
    color: GolbalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
