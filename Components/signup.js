import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [userName, setUserName] = useState("")
  const [repeatpass, setRepeatPass] = useState("")
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
          <Text style={{ fontSize: 26, paddingBottom: 15 }}>Sign up</Text>
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
          <Button
            style={styles.button}
            onClick={() => navigation.navigate("Signup")}
            size="giant"
          >
            Sign up
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
            Already have an account?
          </Text>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
            size="giant"
          >
            Sign In
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
})
export default Signup
