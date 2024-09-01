import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import IngreRender from "./IngreRender";
import StepsRender from "./StepsRender";

export default function ItemDetail({item}) {
  return (
    <View className="h-[70%] bg-white rounded-t-[50px] relative flex items-center">
      <Image
        source={require("../../assets/images/homerecipe.png")}
        className=" absolute -top-[37%] h-[75%] w-[75%]  "
      />
      <ScrollView className="mt-44 pb-5">
        <Text className="text-2xl text-center font-bold text-[#3c444c] mb-5">
          Tuna Tartare
        </Text>
        <Text className="text-[16px] text-center font-semibold text-[#3c444c] mb-5">
          Tuna Tartare is a good cooking type that 'll give you all you need.
          Tuna Tartare is a good cooking type that 'll give you all you need.
        </Text>
        <View className="flex-1 flex-row h-32 justify-between ">
          <View className="w-[28%] bg-red-300  flex justify-center items-center rounded-xl">
            <Text>40mins</Text>
          </View>
          <View className="w-[28%] bg-blue-300  flex justify-center items-center rounded-xl">
            <Text>Medium</Text>
          </View>
          <View className="w-[28%] bg-orange-300 flex justify-center items-center rounded-xl">
            <Text>420cals</Text>
          </View>
        </View>
        {/* ingredients */}
        <IngreRender  />
        {/* Steps */}
        <StepsRender  />
        <View className="h-7"></View>
      </ScrollView>
    </View>
  );
}
