import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { GolbalStyles } from "../../utlis/constants/styles";

export default function Button({ text, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GolbalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  flatText: {
    color: GolbalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GolbalStyles.colors.primary100,
    borderRadius: 4,
  },
});
