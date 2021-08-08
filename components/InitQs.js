import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Actions } from "react-native-router-flux";
import Background from "./Background";
import style from "./Styles";

const InitQs = () => {
  return (
    <View style={style.view}>
      <Background />
      <Text>questions</Text>

      <TouchableOpacity
        style={style.nextButton}
        onPress={() => Actions.availability()}
      >
        <View style={style.nextArrowContainer}>
          <View style={style.nextArrowLine}></View>
          <View style={style.nextArrowSlantOne}></View>
          <View style={style.nextArrowSlantTwo}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InitQs;
