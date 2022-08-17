import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../Screens/Therapist/home/homeTherapist"
import Terminate from "../Screens/home/terminate"

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Terminate"
        component={Terminate}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
