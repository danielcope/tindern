import React from "react";
import { View } from "react-native";
import style from "./Styles";

export default function Background() {
  return (
    <View style={style.background}>
      <View style={style.backgroundCircleLittle}></View>
      <View style={style.backgroundCircleBig}></View>
    </View>
  );
}
