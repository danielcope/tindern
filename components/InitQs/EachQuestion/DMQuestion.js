import React from "react";
import { View, Text } from "react-native";

import style from "../../Styles";

const DMQuestion = () => {
  return (
    <View style={style.questionBlock}>
      <Text style={style.questionText}>
        Are you willing to be a DM and run the campaign?
      </Text>
      <View style={style.campaignAnswersContainer}>
        <View style={style.radioRow}>
          <View style={style.radioButton}></View>
          <Text style={style.campaignAnswersText}>Yup!</Text>
        </View>
        <View style={style.radioRow}>
          <View style={style.radioButton}></View>
          <Text style={style.campaignAnswersText}>No way!</Text>
        </View>
        <View style={style.radioRow}>
          <View style={style.radioButton}></View>
          <Text style={style.campaignAnswersText}>Only if it's needed</Text>
        </View>
      </View>
    </View>
  );
};

export default DMQuestion;
