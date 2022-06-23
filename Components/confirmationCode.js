import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"
import CodeInput from "react-native-confirmation-code-input"

const ConfirmCode = ({ navigation }) => {
  const [code, setCode] = useState("")
  const [isEmpty, setIsEmpty] = useState(true)
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.35)"]}
        style={styles.linearGradient}
      >
        <Image
          style={styles.backgroundimg}
          source={require("./../content/backimg.png")}
        />
        <Image
          style={styles.logo}
          source={require("./../content/saluderia.png")}
        />

        <LinearGradient
          colors={["rgba(240, 290, 260, 1)", "rgba(70, 125, 200, 1)"]}
          style={styles.formbody}
        >
          <Button
            style={styles.backButton}
            appearance="ghost"
            size="giant"
            accessoryLeft={() => (
              <Image source={require("./../content/arrow-back.png")} />
            )}
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
        </LinearGradient>
        <Text style={{ padding: 20, color: "grey" }}>Powered by Bookly</Text>
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
    justifyContent: "space-between",
  },
  backgroundimg: {
    position: "absolute",
    bottom: 0,
    height: 600,
    resizeMode: "contain",
  },
  formbody: {
    width: "90%",
    borderRadius: 25,
    padding: 20,
    height: "75%",
    alignItems: "center",
  },
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
