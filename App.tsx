
import Login from "./src/screens/login"
import Otp from "./src/screens/otp"
import Home from "./src/screens/home"
import React from "react";
import Category from "./src/screens/categories"
import { View } from "@gluestack-ui/themed";
import CategoryDeatil from "./src/screens/categoryDetail"
import Searched from "./src/screens/searchedItems"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="categories" component={Category} />
        <Stack.Screen name="searchedItems" component={Searched} />
        <Stack.Screen name="categoryDetail" component={CategoryDeatil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}