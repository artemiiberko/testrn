import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"

const PassRecovery = ({ navigation }) => {
  const [email, setEmail] = useState("")
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
          <Text style={{ fontSize: 22, color: "#A8A8A8", marginTop: 40 }}>
            Enter the email you provided during registration
          </Text>
          <View style={styles.inputContainer}>
            <Input
              textContentType="email"
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
export default PassRecovery
