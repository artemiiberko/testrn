import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NewBooking from "../Screens/newBooking"
import FilterTherapy from "../Screens/filterTherapy"
import FilterTherapist from "../Screens/filterTherapist"

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
          <FilterTherapist navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default NewBookingNavigator
