import React, { useState } from "react";
import * as Font from "expo-font";
import "react-native-gesture-handler";

import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./src/screens/Landing";
import Main from "./src/screens/Main";
import Profile from "./src/screens/Profile";
import Collection from "./src/screens/Collection";
import Add from "./src/screens/Add";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import ListLiterature from "./src/component/list-literature";

const Stack = createStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/font/Poppins-Regular.ttf"),
    "poppins-medium": require("./assets/font/Poppins-Medium.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="Collection" component={Collection} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="ListLiterature" component={ListLiterature} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
