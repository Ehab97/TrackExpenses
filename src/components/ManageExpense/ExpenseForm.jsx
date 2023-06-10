import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "../ui/Buttons";

export default function ExpenseForm({ onSumbit, onCancel, submitLabel }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    descrption: "",
  });

  const inputChangeHandler = (inputName, inputValue, isEditing) => {
    setInputValues((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const sumbitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      descrption: inputValues.descrption,
    };

    onSumbit(expenseData);
  };

  console.log(inputValues);
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            placeholder: "Enter amount",
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
            maxLinth: 10,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="descrption"
        textInputConfig={{
          placeholder: "Enter descrption",
          onChangeText: inputChangeHandler.bind(this, "descrption"),
          value: inputValues.descrption,
          multiline: true,
          //   autoCorrect: false,
          //   autoCapitalize: "none",
        }}
      />
      <View style={styles.buttonContainer}>
        <Button text="Cancel" onPress={onCancel} mode="flat" style={styles.button} />
        <Button text={submitLabel} onPress={sumbitHandler} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
