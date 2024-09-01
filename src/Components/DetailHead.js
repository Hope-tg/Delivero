import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

export default function DetailHead() {
  return (
    <View className='flex px-3 flex-row justify-between items-center'>
      <Ionicons name="arrow-back-circle" size={35} color="white" />
      <Ionicons name="heart-outline" size={35} color="white" />
    </View>
  );
}