import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"
import NewBooking from "./newBooking"
import FilterTherapy from "./filterTherapy"

const NewBookingNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Create New Booking"
        children={({ navigation, route }) => (
          <NewBooking navigation={navigation} />
        )}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  blurContainer: {
    width: "100%",
    height: 185,
    justifyContent: "center",
    paddingHorizontal: 30,
    position: "absolute",
    zIndex: 1,
  },
  blurContainerTop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "65%",
    alignItems: "center",
  },
  blurContainerBottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "35%",
  },
  logo: {
    marginTop: -15,
    width: "50%",
    resizeMode: "contain",
  },
  button: {
    width: "40%",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
})
export default NewBookingNavigator
