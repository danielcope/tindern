import React from "react";
import { View, Text } from "react-native";

import style from "../../Styles";

const DMQuestion = () => {
  return (
    <View>
      <Text style={style.questionText}>
        Are you willing to be a DM and run the campaign?
      </Text>
    </View>
  );
};

export default DMQuestion;
