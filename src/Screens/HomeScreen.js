import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import Navigation from "../Constants/AppNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="flex items-center">
      <ScrollView className='flex  '>
        
        <View className="flex justify-center items-center">
          <Image className='h-[400px] w-[300px]' source={require("../../assets/images/homerecipe.png")} />
        </View>
        <Text className="text-[#f96163] text-center text-[18px] font-bold   rounded-2xl">
          40k+ Premium Recipes
        </Text>
        <Text className="my-3 text-3xl text-center font-bold text-[#3c444c]">
          Cook Like A Chief
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecipeList")}
          className="px-20 py-2 rounded-xl  bg-[#f96163]"
        >
          <Text className="text-white text-xl text-center">Let's Go</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
