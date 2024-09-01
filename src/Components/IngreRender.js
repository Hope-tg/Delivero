import { View, Text, FlatList } from "react-native";
import React from "react";
const list = [
  { id: "1", nom: "salt" },
  { id: "2", nom: "wateer" },
  { id: "3", nom: "bread" },
  { id: "4", nom: "caroot" },
  { id: "5", nom: "Sugar" },
];

export default function IngreRender({ ingredians }) {
  return (
    <>
      <Text className="text-[16px]  mt-6 mb-2 font-bold text-[#3c444c]">
        
        Ingredians
      </Text>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex flex-row justify-start items-center ">
            <View className="w-2 h-2 rounded-full bg-red-500 mr-2"></View>
            <Text className="text-[14px] text-center semibold text-[#3c444c]">
              {item.nom}
            </Text>
          </View>
        )}
      />
    </>
  );
}
