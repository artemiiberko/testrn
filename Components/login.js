import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"
import { StackActions } from "@react-navigation/native"
import SaluderiaSvg from "./../content/saluderia.svg"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [cardHeight, setCardHeight] = useState({})
  const [scrollHeight, setScrollHeight] = useState({})
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
        <SafeAreaView>
          <SaluderiaSvg />
        </SafeAreaView>
        <LinearGradient
          colors={["rgba(240, 290, 260, 1)", "rgba(70, 125, 200, 1)"]}
          style={styles.formbodyContainer}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            setCardHeight(height)
          }}
        >
          <Image
            style={{
              position: "absolute",
              bottom: -65,
              resizeMode: "contain",
              height: "93%",
              alignSelf: "center",
              opacity: 0.4,
            }}
            blurRadius={20}
            source={require("./../content/backimg.png")}
          />
          <ScrollView
            contentContainerStyle={styles.formbody}
            scrollEnabled={scrollHeight > cardHeight ? true : false}
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
              <Text
                style={{ textAlign: "center", fontSize: 18, color: "#454545" }}
              >
                or
              </Text>
              <View style={styles.buttonsocialContainer}>
                <Button
                  style={styles.buttonsocial}
                  size="medium"
                  status="success"
                >
                  {() => (
                    <Text style={styles.buttonTextSocial}>
                      Continue with Google
                    </Text>
                  )}
                </Button>
                <Button
                  style={styles.buttonsocial}
                  size="medium"
                  status="success"
                >
                  {() => (
                    <Text style={styles.buttonTextSocial}>
                      Continue with Facebook
                    </Text>
                  )}
                </Button>
              </View>
              <Text
                style={{ textAlign: "center", fontSize: 18, color: "#454545" }}
              >
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
          </ScrollView>
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
    height: "70%",
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
  },
  formbodyContainer: {
    width: "90%",
    borderRadius: 25,
    height: "75%",
    overflow: "hidden",
  },
  formbody: {
    width: "100%",
    padding: 20,
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
    height: "15%",
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
    justifyContent: "center",
  },
})
export default Login
