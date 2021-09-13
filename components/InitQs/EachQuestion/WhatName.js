import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import style from "../../Styles";

const WhatName = () => {
  return (
    <View style={(style.questionBlock, { marginTop: 80 })}>
      <Text style={style.questionText}>What is your name?</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TextInput
          style={style.questionsInput}
          placeholder={"first"}
        ></TextInput>
        <TextInput
          style={style.questionsInput}
          placeholder={"last"}
        ></TextInput>
      </View>
    </View>
  );
};

export default WhatName;
