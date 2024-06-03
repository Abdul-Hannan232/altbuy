
import Login from "./src/screens/login"
import Otp from "./src/screens/otp"
import Home from "./src/screens/home"
import React from "react";
import { View } from "@gluestack-ui/themed";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  // const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Otp" component={Otp} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <View>
      // <Login />
      // <Otp/>
     <Home/> 
    // </View>

  );
}