import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutLogin from "../../Layouts/LayoutLogin"

const PassRecovery = ({ navigation }) => {
  const [email, setEmail] = useState("")
  return (
    <LayoutLogin scroller={false}>
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
          fontSize: 26,
          color: "#454545",
        }}
      >
        Password Recovery
      </Text>
      <Text style={{ fontSize: 22, color: "#A8A8A8", marginTop: 40 }}>
        Enter the email you provided during registration
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholderTextColor="#454545"
          textContentType="emailAddress"
          style={styles.input}
          textStyle={{ fontSize: 20 }}
          size="large"
          color="rgba(69, 69, 69, 1)"
          value={email}
          onChangeText={(nextValue) => {
            setEmail(nextValue)
          }}
          placeholder="Email"
        />
      </View>
      <Button
        style={styles.button}
        size="medium"
        disabled={email ? false : true}
        onPress={() => navigation.navigate("Confirmation Code")}
      >
        {() => <Text style={styles.buttonText}>Recover</Text>}
      </Button>
    </LayoutLogin>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    width: "85%",
    marginVertical: 10,
  },
  input: {
    borderRadius: 3,
    padding: 10,
    backgroundColor: "rgba(109, 109, 109, 0.15)",
    borderColor: "rgba(109, 109, 109, 0.15)",
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
})
export default PassRecovery
