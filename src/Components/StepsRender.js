import { View, Text, FlatList } from "react-native";
import React from "react";

const steplist = [
  { id: "1", nom: "make your work space clean" },
  { id: "2", nom: "wash your hands" },
  { id: "3", nom: "cut your bread" },
  { id: "4", nom: "make fire" },
  { id: "5", nom: "smile" },
];

export default function StepsRender() {
  return (
    < >
      <Text className="text-[16px]  mt-6 mb-2 font-bold text-[#3c444c]">
        Steps
      </Text>
      <FlatList
     keyExtractor={(item) => item.id}
        data={steplist}
        renderItem={({ item }) => (
          <View className="flex flex-row justify-start items-center">
            <Text className="text-[14px] text-center font-bold text-[#3c444c]">
              {item.id + " - "}
              <Text className="text-[14px] text-center font-semibold text-[#3c444c]">
                {item.nom}
              </Text>
            </Text>
          </View>
        )}
      />
    </>
  );
}
