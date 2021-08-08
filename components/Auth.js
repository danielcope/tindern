import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Actions } from "react-native-router-flux";
import axios from "axios";

import Background from "./Background";
import style from "./Styles";
// import { IP } from "react-native-dotenv";

const Auth = () => {
  useEffect(() => {
    console.log(IP);
  }, []);

  const [passErrMenu, handlePassErr] = useState(false);

  // const hitTest = () => {
  //   axios
  //     .get("https://localhost:4333/blah")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <View style={style.view}>
      <Background />
      <Text style={style.authTitle}>Create an Account!</Text>
      <Text style={style.authText}> Enter your email address</Text>
      <TextInput style={style.authInput} placeholder={"email"} />
      <TouchableOpacity
        style={style.authI}
        onPress={() => handlePassErr(!passErrMenu)}
      >
        <Text>i</Text>
      </TouchableOpacity>
      <Text style={style.authText}> Choose a password</Text>
      <TextInput style={style.authInput} placeholder={"password"} />
      <TextInput style={style.authInput} placeholder={"re-enter password"} />

      {passErrMenu ? (
        <View style={style.activePassMenu}>
          <View style={style.passErrBox}>
            <Text style={{ fontSize: 20 }}>Password must include:</Text>
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
        <View style={style.nextArrowContainer}>
          <View style={style.nextArrowLine}></View>
          <View style={style.nextArrowSlantOne}></View>
          <View style={style.nextArrowSlantTwo}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;
