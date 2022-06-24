import React from "react"
import { StyleSheet, Text, View, Image, Modal, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [userName, setUserName] = useState("")
  const [repeatpass, setRepeatPass] = useState("")
  const [modalText, setModalText] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

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
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalview}>
            <Text style={{ color: "#FF4B2B", fontSize: 22 }}>{modalText}</Text>
          </View>
        </Pressable>
      </Modal>
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
          <Text
            style={{ fontSize: 26, alignSelf: "flex-start", color: "#454545" }}
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
              onChangeText={(nextValue) => {
                setUserName(nextValue)
              }}
              placeholder="Name"
            />
            <Input
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
                <Text style={styles.buttonTextSocial}>
                  Continue with Google
                </Text>
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
  logo: {},
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
    justifyContent: "space-between",
    alignItems: "center",
  },
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
  modalview: {
    width: "90%",
    justifyContent: "space-between",
    backgroundColor: "#ebb1b8",
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingVertical: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
  },
})
export default Signup
