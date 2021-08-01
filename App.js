import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Background from "./components/Background";

export default function App() {
  return (
    <View style={styles.view}>
      <Background />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  view: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
