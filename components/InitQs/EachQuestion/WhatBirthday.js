import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import style from "../../Styles";

const WhatBirthday = () => {
  const [date, setDate] = useState(new Date(1076940530000));
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [dateString, setDateString] = useState();

  useEffect(() => {
    const strSplit = date.toUTCString().split(" ").slice(1, 4);
    setDateString(strSplit.join(" "));
  }, []);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDateString(() => {
      const strSplit = currentDate.toUTCString().split(" ").slice(1, 4);
      return strSplit.join(" ");
    });
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date");
  };

  return (
    <View style={style.questionBlock}>
      <Text style={style.questionText}>When is your birthday?</Text>
      <View>
        <Button onPress={showDatePicker} title={"Show date picker!"}></Button>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="spinner"
          onChange={handleChange}
        />
      )}
      <Text>{dateString}</Text>
    </View>
  );
};

export default WhatBirthday;

const datePickerButton = () => {
  <TouchableOpacity>
    <Text>{dateString}</Text>
  </TouchableOpacity>;
};
