import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "../ui/Buttons";
import { getFormattedDate } from "../../utlis/date";
import { GolbalStyles } from "../../utlis/constants/styles";

export default function ExpenseForm({ onSumbit, onCancel, submitLabel, expense }) {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: "",
      isValid: true,
    },
    date: {
      value: "",
      isValid: true,
    },
    descrption: {
      value: "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputName, inputValue, isEditing) => {
    setInputValues((prevState) => ({
      ...prevState,
      [inputName]: {
        value: inputValue,
        isValid: inputValue.trim().length > 0,
      },
    }));
  };

  const sumbitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      descrption: inputValues.descrption.value,
    };

    //validate
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descrptionIsValid = expenseData.descrption.trim().length > 0;

    const objValidations = {
      amount: amountIsValid,
      date: dateIsValid,
      descrption: descrptionIsValid,
    };
    console.log(objValidations, expenseData);
    if (!amountIsValid || !dateIsValid || !descrptionIsValid) {
      //TODO: show error
      let errorText = "";
      Object.keys(objValidations).forEach((key, index) => {
        if (!objValidations[key]) {
          errorText += `${key.toUpperCase()} `;
          setInputValues((prevState) => ({
            ...prevState,
            [key]: {
              value: prevState[key].value,
              isValid: false,
            },
          }));

          //add comma
          if (index < Object.keys(objValidations).length - 1) {
            errorText += ", ";
          }
        }
      });
      Alert.alert("Invalid input", `Please check your inputs ${errorText}`, [{ text: "Okay" }], { cancelable: false });
      return;
    }

    onSumbit(expenseData);
  };

  useEffect(() => {
    if (expense) {
      setInputValues({
        amount: {
          value: expense.amount.toString(),
          isValid: true,
        },
        date: {
          value: getFormattedDate(expense.date),
          isValid: true,
        },
        descrption: {
          value: expense.descrption,
          isValid: true,
        },
      });
    }
  }, [expense]);

  const formIsInvalid=Object.keys(inputValues).some(key=>!inputValues[key].isValid)

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          invalid={!inputValues.amount.isValid}
          textInputConfig={{
            placeholder: "Enter amount",
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
            invalid={!inputValues.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date.value,
            maxLinth: 10,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="descrption"
        invalid={!inputValues.descrption.isValid}
        textInputConfig={{
          placeholder: "Enter descrption",
          onChangeText: inputChangeHandler.bind(this, "descrption"),
          value: inputValues.descrption.value,
          multiline: true,
          //   autoCorrect: false,
          //   autoCapitalize: "none",
        }}
      />
      {
        formIsInvalid && <Text style={styles.textError}>Please check your inputs</Text>
      }
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
  textError: {
    color: GolbalStyles.colors.error500,
    textAlign: "center",
    margin: 8,
  }
});
