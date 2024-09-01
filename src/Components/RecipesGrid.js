import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Navigation from "../Constants/AppNavigation";
import recipes from "../Constants/recipes";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"

export default function RecipesGrid({navigation}) {
  const rend = ({ item  }) => {
    // const navigation = useNavigation()
    return (
      <Pressable
        // onPress={() => navigation.navigate('Home')}
        // key={item.recipeId}
        className="bg-white w-[46%] h-[240px] mb-8 py-2 px-1 rounded-xl flex items-center"
      >
        <Image className="w-full h-2/3" source={item.recipeImage} />
        <Text className="text-[16px] font-bold text-[#3c444c]">
          {item.recipeName}
        </Text>
        <View className="flex flex-row mt-1">
          <Text className="text-[14px] font-semibold text-[#444c3c]">
            {item.cookTime}
          </Text>
          <View className="ml-2 pl-2 flex flex-row border-l-[1px] items-center ">
            <Text className="mr-1">{item.rating}</Text>
            <Ionicons name="star" size={18} color="#e6c002" />
          </View>
        </View>
      </Pressable>
    );
  };

  const datarender = () => (
    <View className="h-96 rounded-xl mb-6 border border-blue-500">
      <Text>hello</Text>
    </View>
  );

  return (
    <View className="mt-5">
      <Text className="text-xl font-bold text-[#3c444c] mb-5">Recipes</Text>

      <View>
        <FlatList
          numColumns={2}
          scrollEnabled={true}
          keyExtractor={(item) => item.recipeId}
          data={recipes}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          renderItem={rend}
          ListFooterComponent={datarender}
        />
      </View>
    </View>
  );
}
