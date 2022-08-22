import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Input, Spinner, useTheme } from "@ui-kitten/components"
import { useState } from "react"
import { StackActions } from "@react-navigation/native"
import LayoutLogin from "../../Layouts/LayoutLogin"
import { Configuration, LoginApi } from "@krupnov/saluderia-api-webserver-rn"

const Login = ({ navigation, setUser }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState("Wrong Email or Password!")
  const [scrollHeight, setScrollHeight] = useState({})
  const [loading, setLoading] = useState(false)
  const theme = useTheme()

  // const loginRequest = () => {
  //   setLoading(true)
  //   axios
  //     .post("https://api.saluderia.com/login", {
  //       email: email,
  //       password: pass,
  //     })
  //     .then((response) => {
  //       response.data.role === "therapist"
  //         ? navigation.dispatch(StackActions.replace("Main Therapist"))
  //         : navigation.dispatch(StackActions.replace("Main"))
  //       setUser(response.data)
  //     })
  //     .catch(() => {
  //       setModalVisible(true)
  //       setLoading(false)
  //     })
  // }

  const configuration = new Configuration({
    basePath: "https://api.saluderia.com/",
  })
  const loginApi = new LoginApi(configuration)

  const loginRequest = () => {
    setLoading(true)
    loginApi
      .postLogin({ email: email.toLocaleLowerCase(), password: pass })
      .then((response) => {
        response.data.role === "therapist"
          ? navigation.dispatch(StackActions.replace("Main Therapist"))
          : navigation.dispatch(StackActions.replace("Main"))
        setUser(response.data)
      })
      .catch((response) => {
        setModalVisible(true)
        setLoading(false)
      })
  }

  return (
    <LayoutLogin
      scrollHeight={scrollHeight}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modal={modalText}
      scroller={true}
    >
      {loading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            backgroundColor: theme["color-warning-600"],
          }}
        >
          <Spinner size="giant" />
        </View>
      )}
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
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
            autoCapitalize="none"
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
          // onPress={() => {
          //   email === "admin" && pass === "pass"
          //     ? (navigation.dispatch(StackActions.replace("Main")),
          //       setUser({ name: "John Smith", role: "client" }))
          //     : email === "therapist" && pass === "pass"
          //     ? (navigation.dispatch(StackActions.replace("Main Therapist")),
          //       setUser({ name: "John Smith", role: "therapist" }))
          //     : setModalVisible(true)
          // }}
          onPress={() => loginRequest()}
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
