import React from "react"
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@ui-kitten/components"
import SalderiaCleanSvg from "./../../content/saluderia-clean.svg"

const LayoutMin = ({ navigation, setHeaderHeight, children }) => {
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
                  navigation.navigate("New Booking Navigator")
                }}
              >
                {() => <Text style={styles.buttonText}>New booking</Text>}
              </Button>
            </View>
          </SafeAreaView>
        </LinearGradient>
        {children}
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
    height: "15%",
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
    width: "45%",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
})
export default LayoutMin
