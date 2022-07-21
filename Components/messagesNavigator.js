import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Messages from "./messages"
import Dialog from "./dialog"

const MessagesNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        children={({ navigation }) => <Messages navigation={navigation} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dialog"
        children={({ navigation, route }) => (
          <Dialog navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default MessagesNavigator
