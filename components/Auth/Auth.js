// imported mods
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";

// Imported Components
import Background from "../Background";
import Arrow from "../Arrow";

//Style page
import style from "../Styles";

//Components
const Auth = () => {
  const [passErrMenu, handlePassErr] = useState(false);

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

      <TouchableOpacity onPress={() => Actions.login()}>
        <Text style={{ color: "white" }}>
          Already have an account? Login here
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.nextButton}
        onPress={() => Actions.transitionPage()}
      >
        <Arrow />
      </TouchableOpacity>
    </View>
  );
};

export default Auth;
