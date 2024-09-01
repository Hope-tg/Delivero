import { View, Text } from 'react-native'
import React from 'react'
import Navigation from "../Constants/AppNavigation";

import HeadRecipeList from '../Components/HeadRecipeList'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../Components/SearchBar'
import CategoRecipe from '../Components/CategoRecipe'
import RecipesGrid from '../Components/RecipesGrid'

export default function RecipeListScreen({navigation , }) {
  return (
    <SafeAreaView className='mt-5 px-3 flex '>
      {/* Header components */}
      <HeadRecipeList UserName={'John'}/>
      {/* Search bar */}
      <SearchBar/>
      {/* Categories components */}
      <CategoRecipe/>
      {/* Recipes Components */}
      <RecipesGrid/>



    </SafeAreaView>
   
  )
}