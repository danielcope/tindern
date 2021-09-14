import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import CalendarIcon from "./../../Icons/CalendarIcon";

import style from "../../Styles";

const WhatBirthday = () => {
  const [date, setDate] = useState(new Date(1076940530000));
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [dateString, setDateString] = useState();

  useEffect(() => {
    setDateString(simpleDate(date));
  }, []);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDateString(simpleDate(currentDate));
  };

  const simpleDate = (date) => {
    const strSplit = date.toUTCString().split(" ").slice(1, 4);
    return strSplit.join(" ");
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
      <View style={style.calendarPressableContainer}>
        <TouchableOpacity
          onPress={showDatePicker}
          style={style.calendarPressable}
        >
          <CalendarIcon />
          <Text style={style.calendarText}>{dateString}</Text>
          <View style={style.downArrow}>
            <View style={style.topLineArrow}></View>
            <View style={style.midLineArrow}></View>
            <View style={style.botLineArrow}></View>
          </View>
        </TouchableOpacity>
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
    </View>
  );
};

export default WhatBirthday;
