import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Calendar from "../Screens/Therapist/calendar/calendar"

const CalendarNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendar"
        children={({ navigation }) => <Calendar navigation={navigation} />}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default CalendarNavigator
