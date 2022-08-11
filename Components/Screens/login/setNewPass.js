import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Input, useTheme } from "@ui-kitten/components"
import { useState } from "react"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutLogin from "../../Layouts/LayoutLogin"

const SetNewPass = ({ navigation }) => {
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState("Passwords do not match!")
  const theme = useTheme()
  return (
    <LayoutLogin
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modal={modalText}
      scroller={false}
    >
      <Button
        style={styles.backButton}
        appearance="ghost"
        size="giant"
        accessoryLeft={() => <ArrowBackSvg fill={theme["color-primary-500"]} />}
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
          placeholderTextColor="#454545"
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
          placeholderTextColor="#454545"
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
    </LayoutLogin>
  )
}
const styles = StyleSheet.create({
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
export default SetNewPass
