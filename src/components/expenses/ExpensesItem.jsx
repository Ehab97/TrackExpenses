import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { GolbalStyles } from "../../utlis/constants/styles";
import { getFormattedDate } from "../../utlis/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpensesItem({ item }) {
  const navgiation = useNavigation();
  const expenseItemPressHandler = () => {
    navgiation.navigate("ManageExpenses", { expense: item });
  };
  // console.log({ item });
  return (
    <Pressable onPress={expenseItemPressHandler} style={({ pressed }) => [pressed && styles.pressed]}>
      <View style={styles.expenseItem}>
        <View
        >
          <Text style={[styles.textBase, styles.description]}>{item.description}</Text>
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
  description: {
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
  pressed: {
    opacity: 0.75,
  },
});
