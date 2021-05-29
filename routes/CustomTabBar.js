import React from "react";
import { View } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { COLORS, icons } from "../constants";

const CustomTabBar = (props) => {
  return (
    <View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: COLORS.white,
        }}
      ></View>
      <BottomTabBar {...props.props} />
    </View>
  );
};

export default CustomTabBar;
