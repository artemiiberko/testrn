import React, { useEffect } from "react"
import { useState } from "react"
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@ui-kitten/components"
import SalderiaCleanSvg from "./../content/saluderia-clean.svg"
import BookingComponentMore from "./bookingComponentMore"

const BookingInfo = ({ navigation, route }) => {
  const [bookingObject, setBookingObject] = useState({})

  useEffect(() => {
    console.log(route.params.id)
    /* getting object of booking by id from API - route.params.id */
    setBookingObject({
      id: 1,
      status: "completed",
      name: "Kim Potapov",
      date: "13 June",
      starttime: "15:00",
      endtime: "16:30",
      where: "at the therapist",
      price: 130,
    })
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <LinearGradient
        colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.35)"]}
        style={styles.linearGradient}
      >
        <LinearGradient
          colors={[
            "rgba(228, 244, 245, 1)",
            "rgba(228, 244, 245, 1)",
            "rgba(228, 244, 245, 0.5)",
          ]}
          style={styles.blurContainer}
        >
          <SafeAreaView>
            <View style={styles.blurContainerTop}>
              <SalderiaCleanSvg style={styles.logo} width="50%" />
              <Button
                style={styles.button}
                size="medium"
                onPress={() => {
                  console.log("new booking")
                }}
              >
                {() => <Text style={styles.buttonText}>New booking</Text>}
              </Button>
            </View>
          </SafeAreaView>
        </LinearGradient>
        <BookingComponentMore id={route.params.id} navigation={navigation} />
      </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  linearGradient: {
    width: "100%",
    flex: 1,
  },
  blurContainer: {
    width: "100%",
    height: 140,
    justifyContent: "center",
    paddingHorizontal: 30,
    position: "absolute",
    zIndex: 1,
  },
  blurContainerTop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
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
export default BookingInfo
