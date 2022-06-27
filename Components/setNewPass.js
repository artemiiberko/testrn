import React from "react"
import { StyleSheet, Text, View, Image, Modal, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import { Button, Input } from "@ui-kitten/components"
import { useState } from "react"

const SetNewPass = ({ navigation }) => {
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
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
        <Pressable
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalview}>
            <Text style={{ color: "#FF4B2B", fontSize: 22 }}>
              Passwords do not match!
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
          colors={["rgba(240, 290, 260, 0.5)", "rgba(70, 125, 200, 0.5)"]}
          style={styles.formbodyContainer}
        >
          <BlurView intensity={100} style={styles.formbody}>
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
              Enter a new password, different from the past
            </Text>
            <View style={styles.inputContainer}>
              <Input
                secureTextEntry={true}
                textContentType="newPassword"
                style={styles.input}
                textStyle={{ fontSize: 20 }}
                size="large"
                color="rgba(69, 69, 69, 1)"
                value={newPass}
                onChangeText={(nextValue) => {
                  setNewPass(nextValue)
                }}
                placeholder="New password"
              />
              <Input
                secureTextEntry={true}
                textContentType="newPassword"
                style={styles.input}
                textStyle={{ fontSize: 20 }}
                size="large"
                color="rgba(69, 69, 69, 1)"
                value={confirmPass}
                onChangeText={(nextValue) => {
                  setConfirmPass(nextValue)
                }}
                placeholder="Repeat password"
              />
            </View>
            <Button
              style={styles.button}
              size="medium"
              disabled={newPass && confirmPass ? false : true}
              onPress={() => {
                newPass === confirmPass
                  ? navigation.navigate("New Password Saved")
                  : setModalVisible(true)
              }}
            >
              {() => <Text style={styles.buttonText}>Save</Text>}
            </Button>
          </BlurView>
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
  formbodyContainer: {
    width: "90%",
    borderRadius: 25,
    height: "75%",
    overflow: "hidden",
  },
  formbody: {
    width: "100%",
    padding: 20,
    height: "100%",
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
export default SetNewPass
