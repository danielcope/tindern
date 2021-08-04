import React from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";

import style from "./Styles";

const Other = () => {
  return (
    <View style={style.view}>
      <Text onPress={() => Actions.welcome()}>Other!</Text>
    </View>
  );
};

export default Other;
