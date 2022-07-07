import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NewBooking from "./newBooking"
import FilterTherapy from "./filterTherapy"

const NewBookingNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Create New Booking"
        children={({ navigation }) => <NewBooking navigation={navigation} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Therapy Filter"
        children={({ navigation, route }) => (
          <FilterTherapy navigation={navigation} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Therapist Filter"
        children={({ navigation, route }) => (
          <NewBooking navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default NewBookingNavigator
