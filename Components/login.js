import React from "react"
import { StyleSheet, Text, View, Image, Modal, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
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
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalview}>
            <Text style={{ color: "#FF4B2B", fontSize: 22 }}>
              Wrong Email or Password!
            </Text>
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
          <Text style={{ fontSize: 26, paddingBottom: 15 }}>Sign-in</Text>
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
            secureTextEntry={true}
            placeholder="Password"
          />
          <Button
            style={styles.button}
            size="giant"
            onPress={() => setModalVisible(true)}
          >
            Login
          </Button>
          <Text style={{ textAlign: "center", fontSize: 20, color: "#454545" }}>
            or
          </Text>
          <Button style={styles.buttonsocial} size="large" status="success">
            Continue with Google
          </Button>
          <Button style={styles.buttonsocial} size="large" status="success">
            Continue with Facebook
          </Button>
          <Text style={{ textAlign: "center", fontSize: 20, color: "#454545" }}>
            Dont't have an account?
          </Text>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Signup")}
            size="giant"
          >
            Create account
          </Button>
          <Button
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.0)",
              borderColor: "rgba(0, 0, 0, 0.0)",
              marginTop: 25,
            }}
            size="medium"
          >
            Forgot your password ?
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
  },
  input: {
    borderRadius: 3,
    padding: 10,
    backgroundColor: "rgba(109, 109, 109, 0.15)",
    borderColor: "rgba(109, 109, 109, 0.15)",
  },
  button: {
    marginHorizontal: 50,
    marginTop: 15,
    marginBottom: 10,
  },
  buttonsocial: {
    marginHorizontal: 20,
    marginVertical: 10,
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
export default Login
