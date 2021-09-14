import React from "react";
import { View, StyleSheet } from "react-native";

const CalendarIcon = () => {
  return (
    <View style={styles.box}>
      <View style={styles.topFill}></View>
    </View>
  );
};

export default CalendarIcon;

const styles = StyleSheet.create({
  box: {
    borderColor: "#312152",
    borderWidth: 3,
    borderRadius: 10,
    minHeight: "55%",
    minWidth: "15%",
  },

  topFill: {
    width: "100%",
    height: "15%",
    borderColor: "#312152",
    borderWidth: 3,
    backgroundColor: "#312152",
  },
});
