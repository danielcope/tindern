import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import axios from "axios";

import Background from "../Background";
import style from "../Styles";
import { API_URL } from "@env";
import Arrow from "../Arrow";

const Login = () => {
  const [passErrMenu, handlePassErr] = useState(false);

  const hitTest = () => {
    axios
      .get(`${API_URL}/test/rawr/`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <View style={style.view}>
      <Background />
      <Text style={style.authTitle}>Login to Account!</Text>
      <Text style={style.authText}> Enter your email address</Text>
      <TextInput style={style.authInput} placeholder={"email"} />
      <Text style={style.authText}> Enter Your password</Text>
      <TextInput style={style.authInput} placeholder={"password"} />

      {passErrMenu ? (
        <View style={style.activePassMenu}>
          <View style={style.passErrBox}>
            <Text style={{ fontSize: 20 }}>Password must include:</Text>

            <View style={style.listLine}>
              <View style={style.bulletPoint}></View>
              <Text>between 8 and 12 characters</Text>
            </View>
            <View style={style.listLine}>
              <View style={style.bulletPoint}></View>
              <Text>at least one number</Text>
            </View>
            <View style={style.listLine}>
              <View style={style.bulletPoint}></View>
              <Text>at least one special character</Text>
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}

      {passErrMenu ? (
        <View style={style.greyedView}>
          <Text
            style={style.fullText}
            onPress={() => handlePassErr(false)}
          ></Text>
        </View>
      ) : (
        <View></View>
      )}

      <TouchableOpacity style={style.nextButton} onPress={() => hitTest()}>
        <Arrow/>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
