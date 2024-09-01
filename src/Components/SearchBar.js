import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View className=" mt-4 flex flex-row w-full bg-white py-4 px-2 rounded-xl">
      <Ionicons name="search" size={24} color="#f96163" />
      <TextInput className=" ml-3 flex-1" placeholder="Enter your fav recipe" />
    </View>
  );
}