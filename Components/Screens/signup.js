import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"
import LayoutLogin from "../Layouts/LayoutLogin"

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [userName, setUserName] = useState("")
  const [repeatpass, setRepeatPass] = useState("")
  const [modalText, setModalText] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [scrollHeight, setScrollHeight] = useState({})

  const showError = () => {
    let errortext = ""
    if (repeatpass !== pass) {
      errortext = "Password do not match"
    } else if (pass === "incorrectpass") {
      errortext = "Incorrect password"
    } else if (email === "incorrectemail") {
      errortext = "Incorrect email"
    } else if (email === "emailinuse") {
      errortext = "This Email is already in use"
    } else {
      errortext = ""
    }
    errortext === ""
      ? setModalVisible(false)
      : setModalText(errortext) || setModalVisible(true)
  }

  return (
    <LayoutLogin
      scrollHeight={scrollHeight}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modal={modalText}
      scroller={true}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "95%",
        }}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout
          setScrollHeight(height)
        }}
      >
        <Text
          style={{
            fontSize: 26,
            alignSelf: "flex-start",
            color: "#454545",
          }}
        >
          Sign up
        </Text>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            textStyle={{ fontSize: 20 }}
            size="large"
            color="rgba(69, 69, 69, 1)"
            value={userName}
            placeholderTextColor="#454545"
            onChangeText={(nextValue) => {
              setUserName(nextValue)
            }}
            placeholder="Name"
          />
          <Input
            placeholderTextColor="#454545"
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
          <Input
            placeholderTextColor="#454545"
            style={styles.input}
            textStyle={{ fontSize: 20 }}
            size="large"
            value={pass}
            onChangeText={(nextValue) => {
              setPass(nextValue)
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Input
            placeholderTextColor="#454545"
            style={styles.input}
            textStyle={{ fontSize: 20 }}
            size="large"
            value={repeatpass}
            onChangeText={(nextValue) => {
              setRepeatPass(nextValue)
            }}
            placeholder="Repeat Password"
            secureTextEntry={true}
          />
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            showError()
          }}
          size="medium"
        >
          {() => <Text style={styles.buttonText}>Sign up</Text>}
        </Button>
        <Text style={{ textAlign: "center", fontSize: 18, color: "#454545" }}>
          or
        </Text>
        <View style={styles.buttonsocialContainer}>
          <Button style={styles.buttonsocial} size="medium" status="success">
            {() => (
              <Text style={styles.buttonTextSocial}>Continue with Google</Text>
            )}
          </Button>
          <Button style={styles.buttonsocial} size="medium" status="success">
            {() => (
              <Text style={styles.buttonTextSocial}>
                Continue with Facebook
              </Text>
            )}
          </Button>
        </View>
        <Text style={{ textAlign: "center", fontSize: 18, color: "#454545" }}>
          Already have an account?
        </Text>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
          size="medium"
        >
          {() => <Text style={styles.buttonText}>Sign In</Text>}
        </Button>
      </View>
    </LayoutLogin>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    width: "85%",
  },
  input: {
    borderRadius: 3,
    padding: 10,
    backgroundColor: "rgba(109, 109, 109, 0.15)",
    borderColor: "rgba(109, 109, 109, 0.15)",
  },
  button: {
    width: "60%",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  buttonsocialContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonsocial: {
    width: "90%",
    marginVertical: 5,
  },
  buttonTextSocial: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
})
export default Signup
