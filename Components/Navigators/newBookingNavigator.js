import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NewBooking from "../Screens/newbooking/newBooking"
import FilterTherapy from "../Screens/newbooking/filterTherapy"
import FilterTherapist from "../Screens/newbooking/filterTherapist"
import RepeatSettings from "./../Screens/newbooking/repeatSettings"
import ConfirmBooking from "../Screens/newbooking/confirmBooking"

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
      <Stack.Screen
        name="Confirm Booking"
        children={({ navigation, route }) => (
          <ConfirmBooking navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Repeat Settings"
        children={({ navigation, route }) => (
          <RepeatSettings navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default NewBookingNavigator
