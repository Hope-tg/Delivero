import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function HeadRecipeList({ UserName }) {
  return (
    <View className="flex flex-row justify-between items-center">
      <Text className="text-xl font-bold text-[#3c444c]">
        Hi, <Text>{UserName}</Text>
      </Text>
      <Entypo name="bell" size={30} color="#f96163" />
    </View>
  );
}
