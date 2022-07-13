import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"
import { StackActions } from "@react-navigation/native"
import LayoutLogin from "./LayoutLogin"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState("Wrong Email or Password!")
  const [scrollHeight, setScrollHeight] = useState({})
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
          Sign-in
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholderTextColor="#454545"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="email"
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
            textContentType="password"
            style={styles.input}
            textStyle={{ fontSize: 20 }}
            size="large"
            value={pass}
            onChangeText={(nextValue) => {
              setPass(nextValue)
            }}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <Button
          style={styles.button}
          size="medium"
          onPress={() => {
            email === "admin" && pass === "pass"
              ? navigation.dispatch(StackActions.replace("Main"))
              : setModalVisible(true)
          }}
        >
          {() => <Text style={styles.buttonText}>Login</Text>}
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
          Dont't have an account?
        </Text>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
          size="medium"
        >
          {() => <Text style={styles.buttonText}>Create account</Text>}
        </Button>
        <Button
          style={{
            marginTop: 25,
          }}
          appearance="ghost"
          onPress={() => navigation.navigate("Password Recovery")}
          size="medium"
        >
          {() => (
            <Text style={{ color: "white", fontWeight: "600" }}>
              Forgot your password ?
            </Text>
          )}
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
export default Login
