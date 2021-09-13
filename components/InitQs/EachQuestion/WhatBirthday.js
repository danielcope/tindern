import React from "react";
import { View, Text } from "react-native";
3;
import style from "../../Styles";

const WhatBirthday = () => {
  return (
    <View style={style.questionBlock}>
      <Text style={style.questionText}>When is your birthday?</Text>
      <View></View>
    </View>
  );
};

export default WhatBirthday;
