import React from "react";
import { View } from "react-native";

import style from "./Styles";

const Arrow = () => {
  return (
    <View style={style.nextArrowContainer}>
      <View style={style.nextArrowLine}></View>
      <View style={style.nextArrowSlantOne}></View>
      <View style={style.nextArrowSlantTwo}></View>
    </View>
  );
};

export default Arrow;
