import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GolbalStyles } from "../../utlis/constants/styles";
import Button from "./Buttons";

export default function ErrorOverLay({ onTryAgain, isError, errorMessage, children }) {
  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.text]}>Something went wrong!</Text>
        <Text style={[styles.message, styles.text]}>{errorMessage}</Text>
        <Button title="try Again" onPress={onTryAgain} />
      </View>
    );
  }
  return children;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GolbalStyles.colors.primary700,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    marginBottom: 8,
  },
});
