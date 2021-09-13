// Imported Mods
import React from "react";
import { View, Text } from "react-native";

//imported Components
import Background from "../Background";

//imported stylesheets
import style from "../Styles";

//Component
const Availability = () => {
  return (
    <View style={style.view}>
      <Background />
      <Text>Availability</Text>
    </View>
  );
};
export default Availability;
