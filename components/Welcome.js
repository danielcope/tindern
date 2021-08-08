import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import Background from "./Background";
import style from "./Styles";

const Welcome = () => {
  return (
    <View style={style.view}>
      <Background />
      <View>
        <Text style={style.welcomeText}>Welcome!</Text>
      </View>
      <Text style={style.welcomeQ}>
        Are you ready to find your next adventure party?
      </Text>

      <View style={style.logoContainer}>
        <View style={style.logoBigCircle}></View>
        <View style={style.logoLittleCircle}></View>
      </View>

      <TouchableOpacity
        style={style.nextButton}
        onPress={() => Actions.auth()}
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

export default Welcome;
