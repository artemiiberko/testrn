import React, { useEffect } from "react"
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@ui-kitten/components"
import SalderiaCleanSvg from "./../content/saluderia-clean.svg"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../content/arrow-back.svg"

const ConfirmCancelation = ({ navigation, route }) => {
  useEffect(() => {
    console.log(route.params.id)
    /* getting object of booking by id from API - route.params.id */
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
        <View
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <LinearGradient colors={["#D3DADB", "#D3DADB00"]} style={styles.card}>
            <BlurView intensity={50} style={{ flex: 1 }}>
              <View style={styles.backHeader}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={styles.backButton}
                    appearance="ghost"
                    size="giant"
                    accessoryLeft={() => <ArrowBackSvg />}
                    onPress={() => {
                      navigation.goBack()
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: "#454545",
                    }}
                  >
                    Kim's booking
                  </Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    paddingBottom: 25,
                    color: "#454545",
                  }}
                >
                  Confirm cancelation
                </Text>
                <Text style={{ fontSize: 16, color: "#454545" }}>
                  Cancelation in 24 hours or less no refund
                </Text>
                <Button
                  style={{
                    width: "50%",
                    position: "absolute",
                    bottom: 50,
                    alignSelf: "center",
                  }}
                  size="medium"
                  onPress={() => {
                    console.log("cancel")
                    navigation.goBack()
                  }}
                >
                  {() => (
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white",
                        fontWeight: "500",
                      }}
                    >
                      Confirm
                    </Text>
                  )}
                </Button>
              </View>
            </BlurView>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
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
  card: {
    backgroundColor: "#e7f4f6",
    width: "90%",
    alignSelf: "center",
    marginVertical: 50,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 140,
    flex: 1,
  },
  backHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    zIndex: 1,
  },
})
export default ConfirmCancelation
