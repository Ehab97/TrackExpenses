import { View, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import IconButton from "../components/ui/IconButton";
import { GolbalStyles } from "../utlis/constants/styles";
import { ExpensesContext } from "../store/context/expensesContext";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpenses({ navigation, route }) {
  const expensesCTX = useContext(ExpensesContext);
  const expense = route.params?.expense;
  const isEditing = !!expense;

  React.useLayoutEffect(() => {
    const title = isEditing ? "Edit Expense" : "Add Expense";
    navigation.setOptions({ title });
  }, [navigation, isEditing]);

  const handleDelete = () => {
    expensesCTX.deleteExpense(expense.id);
    navigation.goBack();
  };
  const handleSave = (expenseData) => {
    if (isEditing) {
      expensesCTX.updateExpense(expense.id, expenseData);
    } else {
      expensesCTX.addExpense(expenseData);
    }
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        isEditing={isEditing}
        onCancel={handleCancel}
        onSumbit={handleSave}
        submitLabel={isEditing ? "Update " : "Add Expense"}
        expense={isEditing ? expense : undefined}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton name="trash" size={36} color={GolbalStyles.colors.error500} onPress={handleDelete} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GolbalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GolbalStyles.colors.primary200,
    alignItems: "center",
  },
});
