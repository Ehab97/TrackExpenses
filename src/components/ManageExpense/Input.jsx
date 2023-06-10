import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { GolbalStyles } from "../../utlis/constants/styles";
export default function Input({ label, textInputConfig, style }) {
  return (
    <View style={[styles.inputContainer,style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input,  textInputConfig.multiline && styles.inputMultiline]}
        {...textInputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    color: GolbalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GolbalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GolbalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
