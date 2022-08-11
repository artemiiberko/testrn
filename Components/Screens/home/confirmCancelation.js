import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, useTheme } from "@ui-kitten/components"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutMin from "../../Layouts/LayoutMin"

const ConfirmCancelation = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const theme = useTheme()

  useEffect(() => {
    console.log(route.params.id)
    /* getting object of booking by id from API - route.params.id */
  }, [])
  return (
    <LayoutMin setHeaderHeight={setHeaderHeight} navigation={navigation}>
      <View
        style={{
          width: "100%",
          paddingTop: headerHeight,
          paddingBottom: Platform.OS === "ios" ? 90 : 60,
        }}
      >
        <LinearGradient colors={["#D3DADB", "#D3DADB00"]} style={styles.card}>
          <BlurView
            intensity={50}
            style={{
              height: "100%",
              justifyContent: "space-between",
            }}
          >
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
                  accessoryLeft={() => (
                    <ArrowBackSvg fill={theme["color-primary-500"]} />
                  )}
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
            <View style={{ alignItems: "center" }}>
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
            </View>
            <Button
              style={{
                width: "50%",
                margin: 50,
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
          </BlurView>
        </LinearGradient>
      </View>
    </LayoutMin>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e5f6fb",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  backHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    zIndex: 1,
  },
})
export default ConfirmCancelation
