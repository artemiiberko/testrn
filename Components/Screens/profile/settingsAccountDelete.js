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
import { Button, Input } from "@ui-kitten/components"
import LayoutMin from "../../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"

const SettingsAccountDelete = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [confirmWord, setConfirmWord] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [errorText, setErrorText] = useState("")

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
            colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.1)"]}
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
                    accessoryLeft={() => <ArrowBackSvg />}
                    onPress={() => {
                      navigation.goBack()
                    }}
                  />
                  <Text style={styles.headerText}>
                    Settings / Account deleting
                  </Text>
                </View>
                <LinearGradient
                  colors={["#00ABB9FF", "#00ABB900"]}
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
                  <Text style={styles.text}>
                    Enter the word "delete" to confirm the deletion of the
                    account
                  </Text>
                  <Input
                    style={styles.input}
                    textStyle={{ fontSize: 18 }}
                    size="medium"
                    color="rgba(69, 69, 69, 1)"
                    value={confirmWord}
                    onChangeText={(nextValue) => {
                      setConfirmWord(nextValue)
                    }}
                    placeholder='"delete"'
                    autoCapitalize="none"
                  />
                  <Button
                    style={styles.button}
                    onPress={() =>
                      confirmWord === "delete"
                        ? console.log("delete")
                        : (setErrorText("NO!"), setModalVisible(true))
                    }
                  >
                    Delete account
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
    backgroundColor: "#e7f4f6",
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
    padding: 20,
    paddingTop: 30,
  },
  input: {
    backgroundColor: "#6D6D6D26",
    marginBottom: 20,
    maxWidth: 230,
  },
  text: {
    color: "#454545",
    fontSize: 22,
    paddingBottom: 20,
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

export default SettingsAccountDelete
