import { View,  ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { GolbalStyles } from "../../utlis/constants/styles";

export default function LoadingOverLay({ children, isLoading }) {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  } else {
    return children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GolbalStyles.colors.primary700,
  },
});
