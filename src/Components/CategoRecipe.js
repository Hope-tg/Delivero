import { View, Text, ScrollViewComponent, ScrollView } from "react-native";
import React from "react";
import CategoTable from "../Constants/CategoTable";

export default function CategoRecipe() {
  return (
    <View className="mt-12">
      <Text className="text-xl font-bold text-[#3c444c] mb-5 ">Categories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-x-4 py-1 "
      >
        {CategoTable.map((category, index) => {
          return (
            <View className="bg-white px-5 py-3  mr-2 rounded-xl flex justify-center  w-fit items-center ">
              <Text className="text-[16px]">{category.cateName}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
