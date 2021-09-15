import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import WhatName from "./EachQuestion/WhatName";
import WhatBirthday from "./EachQuestion/WhatBirthday";
import WhatCampaign from "./EachQuestion/WhatCampaign";
import DMQuestion from "./EachQuestion/DMQuestion";
import CanHost from "./EachQuestion/CanHost";
import Arrow from "../Arrow";

import { Actions } from "react-native-router-flux";
import Background from "../Background";

import style from "./../Styles";

const InitQs = () => {
  return (
    <ScrollView style={style.scrollView}>
      <View style={style.view}>
        <Background />
        <WhatName />
        <Separator />
        <WhatBirthday />
        <Separator />
        <WhatCampaign />
        <Separator />
        <DMQuestion />
        <Separator />
        <CanHost />
        <TouchableOpacity
          style={style.nextButton}
          onPress={() => Actions.availability()}
        >
          <Arrow />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default InitQs;

const Separator = () => <View style={style.separator}></View>;
