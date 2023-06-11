import { View, StyleSheet } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import IconButton from "../components/ui/IconButton";
import { GolbalStyles } from "../utlis/constants/styles";
import { ExpensesContext } from "../store/context/expensesContext";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../utlis/http";
import LoadingOverLay from "../components/ui/LoadingOverLays";

export default function ManageExpenses({ navigation, route }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const expensesCTX = useContext(ExpensesContext);
  const expense = route.params?.expense;
  const isEditing = !!expense;

  React.useLayoutEffect(() => {
    const title = isEditing ? "Edit Expense" : "Add Expense";
    navigation.setOptions({ title });
  }, [navigation, isEditing]);

  const handleDelete = async () => {
    setIsSubmitting(true);
    expensesCTX.deleteExpense(expense.id);
    const res = await deleteExpense(expense.id);
    // setIsSubmitting(false);
    console.log("delete", res);
    navigation.goBack();
  };
  const handleSave = async (expenseData) => {
    isSubmitting(true);
    if (isEditing) {
      expensesCTX.updateExpense(expense.id, expenseData);
      const res = await updateExpense(expense.id, expenseData);
      console.log("update", res);
    } else {
      const id = await storeExpense(expenseData);
      expensesCTX.addExpense({ ...expenseData, id });
    }
    setIsSubmitting(false);

    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <LoadingOverLay isLoading={isSubmitting}>
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
    </LoadingOverLay>
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
