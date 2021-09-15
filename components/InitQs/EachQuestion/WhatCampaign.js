import React from "react";
import { View, Text } from "react-native";

import style from "../../Styles";

const WhatCampaign = () => {
  return (
    <View style={style.questionBlock}>
      <Text style={style.questionText}>
        What kind of campaign are you looking for?
      </Text>
      <View style={style.campaignAnswersContainer}>
        <View style={style.radioRow}>
          <View style={style.radioButton}></View>
          <Text style={style.campaignAnswersText}>One shots only</Text>
        </View>
        <View style={style.radioRow}>
          <View style={style.radioButton}></View>
          <Text style={style.campaignAnswersText}>Long term campaign</Text>
        </View>
        <View style={style.radioRow}>
          <View style={style.radioButton}></View>
          <Text style={style.campaignAnswersText}>All of the above</Text>
        </View>
      </View>
    </View>
  );
};

export default WhatCampaign;
