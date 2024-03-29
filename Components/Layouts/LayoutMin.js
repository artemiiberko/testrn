import React from "react"
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, useTheme } from "@ui-kitten/components"
import SalderiaCleanSvg from "./../../content/saluderia-clean.svg"
import CartSvg from "./../../content/cart.svg"

const LayoutMin = ({
  navigation,
  setHeaderHeight,
  children,
  cart = false,
  button,
}) => {
  const theme = useTheme()
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme["color-primary-100"], theme["color-success-500"]]}
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
