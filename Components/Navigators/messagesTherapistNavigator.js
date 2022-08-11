import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Messages from "../Screens/messages/messages"
import Dialog from "../Screens/messages/dialog"
import DialogSaluderiaTeam from "../Screens/Therapist/messages/dialogSaluderiaTeam"

const MessagesNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        children={({ navigation }) => (
          <Messages navigation={navigation} role="therapist" />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dialog"
        children={({ navigation, route }) => (
          <Dialog navigation={navigation} route={route} role="therapist" />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dialog Saluderia Team"
        children={({ navigation, route }) => (
          <DialogSaluderiaTeam
            navigation={navigation}
            route={route}
            role="therapist"
          />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default MessagesNavigator
