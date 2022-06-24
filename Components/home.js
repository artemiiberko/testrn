import React from "react"
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@ui-kitten/components"

const Home = ({ navigation }) => {
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
              <Image
                style={styles.logo}
                source={require("./../content/saluderia-clear.png")}
              />
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
        <ScrollView style={{ flex: 1, width: "100%", marginBottom: 90 }}>
          <View
            style={{
              backgroundColor: "transparent",
              width: "90%",
              height: 200,
              alignSelf: "center",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#e7f4f6",
              width: "90%",
              height: 200,
              alignSelf: "center",
              marginVertical: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#e7f4f6",
              width: "90%",
              height: 200,
              alignSelf: "center",
              marginVertical: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#e7f4f6",
              width: "90%",
              height: 200,
              alignSelf: "center",
              marginVertical: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#e7f4f6",
              width: "90%",
              height: 200,
              alignSelf: "center",
              marginVertical: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#e7f4f6",
              width: "90%",
              height: 200,
              alignSelf: "center",
              marginVertical: 10,
            }}
          ></View>
        </ScrollView>
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
export default Home
