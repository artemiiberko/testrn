import React from "react"
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, useTheme } from "@ui-kitten/components"
import SalderiaCleanSvg from "./../../content/saluderia-clean.svg"
import CartSvg from "./../../content/cart.svg"

const LayoutMore = ({
  navigation,
  children,
  setHeaderHeight,
  button = true,
  white = false,
  title,
  cart = false,
}) => {
  const theme = useTheme()
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={
          white
            ? [
                "rgba(0, 171, 185, 0)",
                "rgba(0, 171, 185, 0.15)",
                "rgba(0, 171, 185, 0)",
              ]
            : ["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.35)"]
        }
        style={styles.linearGradient}
        start={white ? { x: -1, y: 0 } : { x: 0.5, y: 0 }}
        end={white ? { x: 1, y: 1.5 } : { x: 0.5, y: 1 }}
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
              <SalderiaCleanSvg
                fill={theme["color-primary-500"]}
                style={styles.logo}
                width="50%"
              />
              {cart ? (
                <Button
                  style={{}}
                  size="medium"
                  onPress={() => {
                    navigation.navigate("Cart")
                  }}
                  accessoryLeft={() => <CartSvg height={20} />}
                >
                  {() => (
                    <Text style={[styles.buttonText, { paddingLeft: 5 }]}>
                      1 Booking
                    </Text>
                  )}
                </Button>
              ) : button ? (
                <Button
                  style={styles.button}
                  size="medium"
                  onPress={() => {
                    navigation.navigate("New Booking Navigator")
                  }}
                >
                  {() => <Text style={styles.buttonText}>New booking</Text>}
                </Button>
              ) : (
                true
              )}
            </View>
            {title ? (
              <View style={styles.blurContainerBottom}>
                <Text
                  style={{ color: "#00ABB9", fontSize: 28, fontWeight: "700" }}
                >
                  {title}
                </Text>
              </View>
            ) : (
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
            )}
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
    justifyContent: "space-between",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
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
export default LayoutMore
