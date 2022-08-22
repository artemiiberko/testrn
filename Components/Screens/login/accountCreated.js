import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, useTheme } from "@ui-kitten/components"
import DoneSvg from "./../../../content/done.svg"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutLogin from "../../Layouts/LayoutLogin"

const AccountCreated = ({ navigation }) => {
  const theme = useTheme()
  return (
    <LayoutLogin scroller={false}>
      {/* <Button
        style={styles.backButton}
        appearance="ghost"
        size="giant"
        accessoryLeft={() => <ArrowBackSvg fill={theme["color-primary-500"]} />}
        onPress={() => {
          navigation.goBack()
        }}
      /> */}
      <Text
        style={{
          fontSize: 26,
          color: "#454545",
          fontWeight: "500",
        }}
      >
        Confirm Email
      </Text>
      <Text
        style={{
          fontSize: 22,
          color: "#A8A8A8",
          marginTop: 40,
          alignSelf: "center",
        }}
      >
        Your account has been created! Please confirm your email!
      </Text>
      <View style={styles.inputContainer}>
        <DoneSvg style={styles.doneimg} />
      </View>
      <Button
        style={styles.button}
        size="medium"
        onPress={() => navigation.navigate("Login")}
      >
        {() => <Text style={styles.buttonText}>Sign-in</Text>}
      </Button>
    </LayoutLogin>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    width: "85%",
    marginVertical: 10,
  },
  button: {
    width: "60%",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
    margin: 7,
  },
  doneimg: {
    alignSelf: "center",
    margin: 50,
  },
})
export default AccountCreated
