import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailHead from "../Components/DetailHead";
import ItemDetail from "../Components/ItemDetail";
import { useRoute } from "@react-navigation/native";


export default function RecipeDetails({route}) {

    // alert(route.params.recipeName)
    // const currrecipe = route.params
    const {item} = route.params
  return (
    <View className=" bg-green-900 flex-1 justify-between pt-4  ">
      <StatusBar />
      {/* detail scrren header */}
      <DetailHead />
    <Text className="text-3xl text-white">yo</Text>
      {/* recipe detail */}
      <ItemDetail />
    </View>
  );
}
