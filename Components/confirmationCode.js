import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button } from "@ui-kitten/components"
import { useState } from "react"
import CodeInput from "react-native-confirmation-code-input"
import ArrowBackSvg from "./../content/arrow-back.svg"
import LayoutLogin from "./LayoutLogin"

const ConfirmCode = ({ navigation }) => {
  const [code, setCode] = useState("")
  const [isEmpty, setIsEmpty] = useState(true)
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
      <Text
        style={{
          fontSize: 22,
          color: "#A8A8A8",
          marginTop: 40,
        }}
      >
        Sent to you confirmation code by Email
      </Text>
      <View style={styles.inputContainer}>
        <CodeInput
          keyboardType="numeric"
          codeLength={5}
          autoFocus={false}
          size={50}
          activeColor="#00ABB9"
          containerStyle={{
            marginTop: 0,
            marginBottom: 50,
          }}
          codeInputStyle={{
            fontWeight: "400",
            fontSize: 22,
            color: "#454545",
            borderRadius: 3,
            backgroundColor: "#6D6D6D26",
          }}
          onFulfill={(code) => {
            setCode(code)
            setIsEmpty(false)
          }}
        />
      </View>
      <Button
        style={styles.button}
        size="medium"
        disabled={isEmpty}
        onPress={() => navigation.navigate("Set New Password")}
      >
        {() => <Text style={styles.buttonText}>Confirm</Text>}
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
export default ConfirmCode
