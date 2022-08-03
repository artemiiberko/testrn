import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, Input } from "@ui-kitten/components"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutMin from "../../Layouts/LayoutMin"

const Terminate = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()

  useEffect(() => {
    console.log(route.params.id)
    /* getting object of booking by id from API - route.params.id */
  }, [])
  return (
    <LayoutMin setHeaderHeight={setHeaderHeight} navigation={navigation}>
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: headerHeight,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "none"}
          style={{ flex: 1 }}
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
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    alignItems: "center",
                    height: "100%",
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
                    Terminate
                  </Text>
                  <View
                    style={{
                      flexGrow: 1,
                      borderWidth: 1,
                      borderColor: "#00ABB9",
                      width: "85%",
                      borderRadius: 5,
                    }}
                  >
                    <Input
                      multiline
                      style={{
                        flex: 1,
                        backgroundColor: "transparent",
                        borderWidth: 0,
                      }}
                      blurOnSubmit
                      textStyle={{
                        fontSize: 22,
                        backgroundColor: "transparent",
                      }}
                    />
                  </View>

                  <Button
                    style={{
                      width: "50%",
                      margin: 20,
                      alignSelf: "center",
                    }}
                    size="medium"
                    onPress={() => {
                      console.log("terminate")
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
              </View>
            </BlurView>
          </LinearGradient>
        </KeyboardAvoidingView>
      </View>
    </LayoutMin>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e7f4f6",
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 20,
    overflow: "hidden",
    flex: 1,
  },
  backHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    zIndex: 1,
  },
})
export default Terminate
