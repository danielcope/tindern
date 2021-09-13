import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import Arrow from "./Arrow";

import Background from "./Background";
import style from "./Styles";

const TransitionPage = () => {
  return (
    <View style={style.view}>
      <Background />
      <View>
        <Text style={style.centeredText}>
          We just need you to answer a few questions to get started!
        </Text>
      </View>

      <TouchableOpacity
        style={style.nextButton}
        onPress={() => Actions.initqs()}
      >
        <Arrow />
      </TouchableOpacity>
    </View>
  );
};

export default TransitionPage;
