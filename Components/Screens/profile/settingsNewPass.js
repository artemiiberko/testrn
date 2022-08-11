import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  KeyboardAvoidingView,
} from "react-native"
import { Button, Input, useTheme } from "@ui-kitten/components"
import LayoutMin from "../../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"

const SettingsNewPassword = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [newPass, setNewPass] = useState("")
  const [repeatPass, setRepeatPass] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [errorText, setErrorText] = useState("")
  const theme = useTheme()

  return (
    <LayoutMin
      title=" "
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
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
            <Text style={{ color: "#FF4B2B", fontSize: 22 }}>{errorText}</Text>
          </View>
        </Pressable>
      </Modal>
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: headerHeight,
          marginBottom: Platform.OS === "ios" ? 90 : 60,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={{ flex: 1 }}
        >
          <LinearGradient
            colors={[theme["color-primary-100"], theme["color-warning-600"]]}
            style={styles.card}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout
              setCardHeight(height)
            }}
          >
            <BlurView intensity={100}>
              <View
                style={[
                  styles.backHeader,
                  {
                    backgroundColor:
                      scrollHeight + 70 > cardHeight
                        ? "#e9f5f6FA"
                        : "transparent",
                  },
                ]}
              >
                <View style={styles.backHeaderLeft}>
                  <Button
                    style={styles.backButton}
                    appearance="ghost"
                    size="giant"
                    accessoryLeft={() => (
                      <ArrowBackSvg fill={theme["color-primary-500"]} />
                    )}
                    onPress={() => {
                      navigation.goBack()
                    }}
                  />
                  <Text style={styles.headerText}>Settings / Password</Text>
                </View>
                <LinearGradient
                  colors={[
                    theme["color-primary-500"],
                    theme["color-primary-100"],
                  ]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
              </View>

              <ScrollView
                scrollEnabled={scrollHeight + 70 > cardHeight ? true : false}
                contentContainerStyle={{
                  paddingTop: 70,
                }}
              >
                <View
                  onLayout={(event) => {
                    const { height } = event.nativeEvent.layout
                    setScrollHeight(height)
                  }}
                  style={styles.container}
                >
                  <Input
                    style={styles.input}
                    textStyle={{ fontSize: 18 }}
                    size="medium"
                    color="rgba(69, 69, 69, 1)"
                    value={newPass}
                    onChangeText={(nextValue) => {
                      setNewPass(nextValue)
                    }}
                    placeholder="New password"
                    textContentType="newPassword"
                    secureTextEntry={true}
                  />
                  <Input
                    style={styles.input}
                    textStyle={{ fontSize: 18 }}
                    size="medium"
                    color="rgba(69, 69, 69, 1)"
                    value={repeatPass}
                    onChangeText={(nextValue) => {
                      setRepeatPass(nextValue)
                    }}
                    placeholder="Repeat password"
                    textContentType="newPassword"
                    secureTextEntry={true}
                  />
                  <Button
                    style={styles.button}
                    onPress={() =>
                      newPass !== ""
                        ? newPass === repeatPass
                          ? console.log("save")
                          : (setErrorText("Passwords do not match!"),
                            setModalVisible(true))
                        : (setErrorText("Enter a new password!"),
                          setModalVisible(true))
                    }
                  >
                    Save password
                  </Button>
                </View>
              </ScrollView>
            </BlurView>
          </LinearGradient>
        </KeyboardAvoidingView>
      </View>
    </LayoutMin>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e5f6fb",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  backHeader: {
    justifyContent: "flex-start",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  backHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#454545",
  },
  backHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  container: {
    alignItems: "flex-start",
    maxWidth: 250,
    padding: 20,
    paddingTop: 30,
  },
  input: {
    backgroundColor: "#6D6D6D26",
    marginBottom: 20,
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

export default SettingsNewPassword
