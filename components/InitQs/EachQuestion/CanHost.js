import React from "react";
import { View, Text } from "react-native";

import style from "../../Styles";

const CanHost = () => {
  return (
    <View style={style.questionBlock} >
      <Text style={style.questionText}>Can you host the sessions?</Text>
      <View style={style.campaignAnswersContainer}>
        <View style={style.radioRow}>
          <View style={style.radioButton}></View>
          <Text style={style.campaignAnswersText}>Yes</Text>
        </View>
        <View style={style.radioRow}>
          <View style={style.radioButton}></View>
          <Text style={style.campaignAnswersText}>No</Text>
        </View>
      </View>
    </View>
  );
};

export default CanHost;
