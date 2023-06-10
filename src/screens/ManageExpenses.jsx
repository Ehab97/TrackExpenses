import { View, Text, StyleSheet } from "react-native";
import React from "react";
import IconButton from "../components/ui/IconButton";
import { GolbalStyles } from "../utlis/constants/styles";
import Button from "../components/ui/Buttons";

export default function ManageExpenses({ navigation, route }) {
  const expense = route.params?.expense;
  const isEditing = !!expense;

  React.useLayoutEffect(() => {
    const title = isEditing ? "Edit Expense" : "Add Expense";
    navigation.setOptions({ title });
  }, [navigation, isEditing]);

  const handleDelete = () => {};

  const handleSave = () => {};

  const handleCancel = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button text="Cancel" onPress={handleCancel} mode="flat"  style={styles.button}/>
        <Button text={isEditing ? "Update " : "Add Expense"} onPress={handleSave} style={styles.button} />
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GolbalStyles.colors.primary200,
    alignItems: "center",
  },
  button:{
    minWidth:120,
    marginHorizontal:8
  }
});
