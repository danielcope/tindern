import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import WhatName from "./EachQuestion/WhatName";
import WhatBirthday from "./EachQuestion/WhatBirthday";
import WhatCampaign from "./EachQuestion/WhatCampaign";
import DMQuestion from "./EachQuestion/DMQuestion";
import CanHost from "./EachQuestion/CanHost";
// import Arrow from "../../Arrow";

import { Actions } from "react-native-router-flux";
import Background from "../Background";

import style from "../Styles";

const InitQs = () => {
  const day = [
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
  ];

  const [text, changeText] = useState("");

  return (
    <ScrollView style={style.scrollView}>
      <View style={style.view}>
        <Background />
        {/* Quesiton 1 */}
        <WhatName />
        <Separator />
        {/* Question 2 */}
        <WhatBirthday />
        <Separator />
        {/* Question 3 */}
        <WhatCampaign />
        <Separator />
        {/* Question 4 */}
        <DMQuestion />
        <Separator />
        {/* Question 5 */}
        <CanHost />

        <TouchableOpacity
          style={style.nextButton}
          onPress={() => Actions.availability()}
        >
          {/* <Arrow /> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default InitQs;

const Separator = () => <View style={style.separator}></View>;
