import React from "react";
import { View, Text } from "react-native";

import style from "../../Styles";

const CanHost = () => {
  return (
    <View style={{ marginBottom: 100 }}>
      <Text style={style.questionText}>Can you host the sessions?</Text>
    </View>
  );
};

export default CanHost;
