import React from "react";
import { View, Text } from "react-native";

import style from "../../Styles";

const WhatCampaign = () => {
  return (
    <View style={style.questionBlock}>
      <Text style={style.questionText}>
        What kind of campaign are you looking for?
      </Text>
    </View>
  );
};

export default WhatCampaign;
