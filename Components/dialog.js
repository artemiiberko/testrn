import React, { useState, useEffect } from "react"
import {
  Platform,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native"
import { Button, Input, Popover } from "@ui-kitten/components"
import { LinearGradient } from "expo-linear-gradient"
import LayoutMore from "./LayoutMore"
import ChatCheckSvg from "./../content/chat-check.svg"
import ChatDoubleCheckSvg from "./../content/chat-doublecheck.svg"
import ArrowBackSvg from "./../content/arrow-back.svg"
import ThreeDotsSvg from "./../content/three-dots.svg"
import SendSvg from "./../content/send.svg"

const Message = ({ userId, messageBy, text, time, messageStatus }) => {
  return (
    <View
      style={
        messageBy === userId
          ? [
              styles.block,
              {
                alignSelf: "flex-end",
                backgroundColor: "#C0C0C01A",
                borderTopRightRadius: 0,
              },
            ]
          : [
              styles.block,
              {
                alignSelf: "flex-start",
                backgroundColor: "#00ABB91A",
                borderTopLeftRadius: 0,
              },
            ]
      }
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.bottomStrip}>
        <Text style={styles.time}>{time}</Text>
        {messageStatus === "read" ? (
          <ChatDoubleCheckSvg height={10} />
        ) : (
          <ChatCheckSvg height={10} />
        )}
      </View>
    </View>
  )
}

const Dialog = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [userId, setUserId] = useState(5)
  const [newMessage, setNewMessage] = useState("")
  const [inputMargin, setInputMargin] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialog, setDialog] = useState({})

  useEffect(() => {
    console.log(route.params.dialogId)
    /* getting dialog by id from API - route.params.dialogId */
    setDialog({
      dialogId: 1,
      senderName: "Kim",
      messages: [
        {
          text: "First message! Hello lorem lorem",
          time: "14:53",
          messageBy: 2,
          messageStatus: "read",
        },
        {
          text: "My First message! Lorem lorem lorem lorem lorem lorem",
          time: "14:54",
          messageBy: 5,
          messageStatus: "read",
        },
        {
          text: "Hi Lorem asdasdasd asd asd asd a",
          time: "14:56",
          messageBy: 5,
          messageStatus: "read",
        },
        {
          text: "YES!",
          time: "15:00",
          messageBy: 2,
          messageStatus: "read",
        },
        {
          text: "YESSS!",
          time: "15:02",
          messageBy: 5,
          messageStatus: "unread",
        },
        {
          text: "YESSS!",
          time: "15:02",
          messageBy: 5,
          messageStatus: "unread",
        },
      ],
    })
  }, [])

  return (
    <LayoutMore
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
      title="Messages"
    >
      <View
        style={[
          styles.contentContainer,
          {
            marginTop: headerHeight,
          },
        ]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "none"}
          style={{ flex: 1 }}
        >
          <View style={styles.dialogContainer}>
            <View style={styles.dialogHeader}>
              <Button
                style={{ alignSelf: "center", height: "100%" }}
                appearance="ghost"
                size="medium"
                accessoryLeft={() => <ArrowBackSvg height={20} />}
                onPress={() => {
                  navigation.goBack()
                }}
              />
              <View style={styles.headerInfo}>
                <Image
                  source={require("./../content/profile-photo.png")}
                  style={styles.photo}
                />
                <View style={styles.info}>
                  <Text style={styles.name}>Kim</Text>
                  <Text style={styles.online}>last seen 14:33 </Text>
                </View>
              </View>
              <Popover
                visible={modalVisible}
                anchor={() => (
                  <Button
                    style={{ alignSelf: "center", height: "100%" }}
                    appearance="ghost"
                    size="medium"
                    accessoryLeft={() => <ThreeDotsSvg height={20} />}
                    onPress={() => {
                      setModalVisible(true)
                    }}
                  />
                )}
                placement="bottom start"
                onBackdropPress={() => setModalVisible(false)}
                style={{
                  top: -70,
                  maxWidth: "70%",
                  backgroundColor: "#ffffffe6",
                  borderRadius: 20,
                  borderTopLeftRadius: 0,
                  borderWidth: 0,
                  height: 195,
                  width: 400,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#00ABB980",
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                    borderTopLeftRadius: 0,
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      console.log("clear the history")
                    }}
                    style={{ padding: 20, paddingLeft: 30 }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                      }}
                    >
                      clear the history
                    </Text>
                  </TouchableOpacity>
                  <LinearGradient
                    colors={["#00ABB9FF", "#00ABB900"]}
                    start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ height: 1 }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      console.log("delete chat")
                    }}
                    style={{ padding: 20, paddingLeft: 30 }}
                  >
                    <Text style={{ color: "white", fontSize: 20 }}>
                      delete chat
                    </Text>
                  </TouchableOpacity>
                  <LinearGradient
                    colors={["#00ABB9FF", "#00ABB900"]}
                    start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ height: 1 }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      console.log("block user")
                    }}
                    style={{ padding: 20, paddingLeft: 30 }}
                  >
                    <Text style={{ color: "#DC8D8D", fontSize: 20 }}>
                      block user
                    </Text>
                  </TouchableOpacity>
                </View>
              </Popover>
            </View>
            <ScrollView
              style={[styles.container, { width: "100%" }]}
              contentContainerStyle={
                headerHeight
                  ? inputMargin
                    ? {
                        paddingBottom:
                          Platform.OS === "ios"
                            ? headerHeight + 90 + 50
                            : headerHeight + 60 + 50,
                      }
                    : {
                        paddingBottom:
                          Platform.OS === "ios"
                            ? headerHeight + 50
                            : headerHeight + 50,
                      }
                  : {}
              }
            >
              {Object.keys(dialog).length !== 0
                ? dialog.messages.map((i) => (
                    <Message
                      userId={userId}
                      messageBy={i.messageBy}
                      text={i.text}
                      time={i.time}
                      messageStatus={i.messageStatus}
                    />
                  ))
                : true}
            </ScrollView>
            <View
              style={
                headerHeight
                  ? inputMargin
                    ? [
                        styles.inputContainer,
                        {
                          bottom:
                            Platform.OS === "ios"
                              ? headerHeight + 90
                              : headerHeight + 60,
                        },
                      ]
                    : [
                        styles.inputContainer,
                        {
                          bottom:
                            Platform.OS === "ios" ? headerHeight : headerHeight,
                        },
                      ]
                  : {}
              }
            >
              <Input
                style={[
                  styles.input,
                  { maxWidth: newMessage ? "80%" : "100%" },
                ]}
                textStyle={{ fontSize: 18 }}
                size="large"
                color="rgba(69, 69, 69, 1)"
                value={newMessage}
                onChangeText={(nextValue) => {
                  setNewMessage(nextValue)
                }}
                placeholder="Write a message..."
                multiline
                numberOfLines={3}
                maxHeight={70}
                showsVerticalScrollIndicator={true}
                showsHorizontalScrollIndicator={true}
                blurOnSubmit
                onBlur={() => setInputMargin(true)}
                onFocus={() => setInputMargin(false)}
              />
              {newMessage ? (
                <Button
                  style={{ alignSelf: "flex-end", width: "20%" }}
                  appearance="ghost"
                  size="small"
                  accessoryLeft={() => <SendSvg height={30} width={30} />}
                  onPress={() => {
                    console.log("send")
                  }}
                />
              ) : (
                true
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </LayoutMore>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "100%",
  },
  dialogContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#00ABB90D",
    borderRadius: 20,
    flex: 1,
  },
  dialogHeader: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    zIndex: 1,
    backgroundColor: "#c0e3e7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerInfo: {
    height: "100%",
    flexDirection: "row",
    flexGrow: 1,
  },
  photo: {
    width: 50,
    resizeMode: "cover",
    borderRadius: 50,
    aspectRatio: 1 / 1,
    alignSelf: "center",
  },
  info: {
    alignSelf: "center",
    paddingLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#454545",
  },
  online: {
    fontSize: 14,
    color: "#454545",
  },
  block: {
    backgroundColor: "red",
    justifyContent: "center",
    maxWidth: "90%",
    margin: 10,
    marginVertical: 20,
    borderRadius: 10,
    maxWidth: "70%",
  },
  text: {
    padding: 10,
    paddingBottom: 0,
    fontSize: 18,
    color: "#454545",
    flexWrap: "wrap",
  },
  bottomStrip: {
    flexDirection: "row",
    paddingBottom: 5,
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  time: { fontSize: 12, color: "#454545" },
  inputContainer: {
    position: "absolute",
    width: "90%",
    alignSelf: "center",
    marginBottom: 15,
    backgroundColor: "#a0d5dcf7",
    borderColor: "#00ABB9",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    flexGrow: 1,
  },
  modalview: {
    width: "90%",
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
export default Dialog
