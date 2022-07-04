import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Platform,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@ui-kitten/components"
import BookingComponent from "./bookingComponent"
import SalderiaCleanSvg from "./../content/saluderia-clean.svg"

bookings_data = [
  {
    id: 1,
    status: "completed",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 130,
  },
  {
    id: 2,
    status: "awaiting confirmation",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 100,
  },
  {
    id: 3,
    status: "canceled by therapist",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 200,
  },
  {
    id: 4,
    status: "full refund",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 350,
  },
  {
    id: 5,
    status: "canceled by you",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 480,
  },
  {
    id: 6,
    status: "no refund",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 520,
  },
]

const Home = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  return (
    <View style={styles.container}>
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
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            setHeaderHeight(height)
          }}
        >
          <SafeAreaView>
            <View style={styles.blurContainerTop}>
              <SalderiaCleanSvg style={styles.logo} width="50%" />
              <Button
                style={styles.button}
                size="medium"
                onPress={() => {
                  console.log("new booking")
                  navigation.navigate("New Booking Navigator")
                }}
              >
                {() => <Text style={styles.buttonText}>New booking</Text>}
              </Button>
            </View>
            <View style={styles.blurContainerBottom}>
              <Text
                style={{ color: "#00ABB9", fontSize: 28, fontWeight: "700" }}
              >
                Bookings <Text style={{ fontWeight: "400" }}> 5 </Text>
              </Text>
              <Text
                style={{ color: "#454545", fontSize: 28, fontWeight: "700" }}
              >
                478 €
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
        <FlatList
          style={{
            flex: 1,
            width: "100%",
            paddingTop: headerHeight,
          }}
          contentContainerStyle={
            headerHeight
              ? {
                  paddingBottom:
                    Platform.OS === "ios"
                      ? headerHeight + 90
                      : headerHeight + 60,
                }
              : {}
          }
          initialNumToRender={3}
          data={bookings_data}
          renderItem={({ item }) => (
            <BookingComponent
              status={item.status}
              name={item.name}
              date={item.date}
              starttime={item.starttime}
              endtime={item.endtime}
              where={item.where}
              price={item.price}
              id={item.id}
              navigation={navigation}
            />
          )}
        />
      </LinearGradient>
    </View>
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
    height: "20%",
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
    width: "45%",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
})
export default Home
