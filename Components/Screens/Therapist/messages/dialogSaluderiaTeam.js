import React, { useState, useEffect } from "react"
import {
  Platform,
  View,
  StyleSheet,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Vibration,
} from "react-native"
import { Button, Input, Popover, useTheme } from "@ui-kitten/components"
import { LinearGradient } from "expo-linear-gradient"
import LayoutMore from "../../../Layouts/LayoutMore"
import ChatCheckSvg from "./../../../../content/chat-check.svg"
import ChatDoubleCheckSvg from "./../../../../content/chat-doublecheck.svg"
import ArrowBackSvg from "./../../../../content/arrow-back.svg"
import FileSvg from "./../../../../content/file.svg"
import DownloadSvg from "./../../../../content/download.svg"
import AcceptSvg from "./../../../../content/accept.svg"
import DeclineSvg from "./../../../../content/decline.svg"
import SendSvg from "./../../../../content/send.svg"
import ReplySvg from "./../../../../content/reply.svg"
import SaluderiaTeamSvg from "./../../../../content/saluderia-team.svg"
import LayoutTherapist from "./../../../Layouts/LayoutTherapist"

const Message = ({
  userId,
  messageBy,
  text,
  time,
  messageStatus,
  replyFor,
  replyAdd,
  file,
  fileStatus,
}) => {
  const theme = useTheme()
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={() => (replyAdd(text), Vibration.vibrate())}
    >
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
                  backgroundColor: theme["color-warning-600"],
                  borderTopLeftRadius: 0,
                },
              ]
        }
      >
        {replyFor ? (
          <View style={styles.replyContainer}>
            <ReplySvg fill={theme["color-primary-500"]} height={12} />
            <Text numberOfLines={1} style={styles.replyText}>
              {replyFor}
            </Text>
          </View>
        ) : (
          true
        )}
        {file ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FileSvg fill={theme["color-primary-500"]} />
              <Text style={{ paddingLeft: 10, fontSize: 18, color: "#454545" }}>
                {file}
              </Text>
            </View>
            <Button appearance="ghost" style={{ paddingHorizontal: 0 }}>
              <DownloadSvg fill={theme["color-primary-500"]} />
            </Button>
          </View>
        ) : (
          true
        )}
        <Text style={styles.text}>{text}</Text>
        <View style={styles.bottomStrip}>
          <Text style={styles.time}>{time}</Text>
          {file ? (
            true
          ) : messageStatus === "read" ? (
            <ChatDoubleCheckSvg fill={theme["color-primary-500"]} height={10} />
          ) : (
            <ChatCheckSvg fill={theme["color-primary-500"]} height={10} />
          )}
        </View>
        {file ? (
          <View>
            <LinearGradient
              colors={[theme["color-primary-500"], theme["color-primary-100"]]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            {fileStatus === "confirmed" ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <AcceptSvg fill={theme["color-primary-500"]} />
                <Text
                  style={{
                    fontSize: 20,
                    color: theme["color-primary-500"],
                    paddingLeft: 10,
                  }}
                >
                  Confirmed
                </Text>
              </View>
            ) : fileStatus === "declined" ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <AcceptSvg fill={theme["color-danger-500"]} />
                <Text
                  style={{
                    fontSize: 20,
                    color: theme["color-danger-500"],
                    paddingLeft: 10,
                  }}
                >
                  Declined
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  justifyContent: "space-between",
                }}
              >
                <Button size="small" style={{ paddingHorizontal: 0 }}>
                  <AcceptSvg fill="#FFF" />
                </Button>
                <Button
                  size="small"
                  style={{ paddingHorizontal: 0 }}
                  status="danger"
                >
                  <DeclineSvg fill="#FFF" />
                </Button>
              </View>
            )}
          </View>
        ) : (
          true
        )}
      </View>
    </TouchableOpacity>
  )
}

const DialogSaluderiaTeam = ({ navigation, role }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [userId, setUserId] = useState(5)
  const [newMessage, setNewMessage] = useState("")
  const [dialog, setDialog] = useState({})
  const [reply, setReply] = useState("")
  const theme = useTheme()

  useEffect(() => {
    setDialog({
      dialogId: 0,
      messages: [
        {
          text: "You earnings for a week from 22.02.2022 to 29.02.2022 are £1500 please view your statement and confirm to release the payment.",
          time: "14:51",
          messageBy: 0,
          fileStatus: "confirmed",
          file: "Inv-0270.pdf",
        },
        {
          text: "You earnings for a week from 22.02.2022 to 29.02.2022 are £1500 please view your statement and confirm to release the payment.",
          time: "14:53",
          messageBy: 0,
          fileStatus: "declined",
          file: "Inv-0271.pdf",
        },
        {
          text: "You earnings for a week from 22.02.2022 to 29.02.2022 are £1500 please view your statement and confirm to release the payment.",
          time: "14:54",
          messageBy: 0,
          fileStatus: "waiting",
          file: "Inv-0272.pdf",
        },
        {
          text: "Hi Lorem asdasdasd asd asd asd a",
          replyFor:
            "You earnings for a week from 22.02.2022 to 29.02.2022 are £1500 please view your statement and confirm to release the payment.",
          time: "14:56",
          messageBy: 5,
          messageStatus: "read",
        },
        {
          text: "YES!",
          time: "15:00",
          messageBy: 0,
          messageStatus: "read",
        },
      ],
    })
  }, [])

  const replyAdd = (message) => {
    setReply(message)
  }

  const mainDialog = (
    <View
      style={{
        width: "100%",
        flex: 1,
        paddingTop: headerHeight,
        marginBottom: Platform.OS === "ios" ? 90 : 60,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "none"}
        style={{ flex: 1 }}
      >
        <View style={styles.dialogContainer}>
          <View
            style={[
              styles.dialogHeader,
              { backgroundColor: theme["color-warning-600"] },
            ]}
          >
            <Button
              style={styles.backButton}
              appearance="ghost"
              size="medium"
              accessoryLeft={() => (
                <ArrowBackSvg fill={theme["color-primary-500"]} height={20} />
              )}
              onPress={() => {
                navigation.goBack()
              }}
            />
            <View style={styles.headerInfo}>
              <View
                style={[
                  styles.photo,
                  {
                    backgroundColor: theme["color-primary-500"],
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <SaluderiaTeamSvg height="50%" />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>Saluderia Team</Text>
              </View>
            </View>
          </View>
          <ScrollView style={styles.container}>
            {Object.keys(dialog).length !== 0
              ? dialog.messages.map((i, index) => (
                  <Message
                    key={index}
                    userId={userId}
                    messageBy={i.messageBy}
                    text={i.text}
                    time={i.time}
                    messageStatus={i.messageStatus}
                    replyFor={i.replyFor}
                    replyAdd={replyAdd}
                    file={i.file}
                    fileStatus={i.fileStatus}
                  />
                ))
              : true}
          </ScrollView>
          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: theme["color-warning-600"],
                borderColor: theme["color-primary-500"],
              },
            ]}
          >
            {reply ? (
              <TouchableOpacity
                onPress={() => setReply("")}
                style={styles.replyContainer}
                activeOpacity={0.5}
              >
                <ReplySvg fill={theme["color-primary-500"]} height={12} />
                <Text numberOfLines={1} style={styles.replyText}>
                  {reply}
                </Text>
              </TouchableOpacity>
            ) : (
              true
            )}

            <View style={styles.inputBottomSection}>
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
                multiline={true}
                maxHeight={Platform.OS === "ios" ? 70 : 60}
                blurOnSubmit
              />
              {newMessage ? (
                <Button
                  style={styles.sendButton}
                  appearance="ghost"
                  size="small"
                  accessoryLeft={() => (
                    <SendSvg
                      fill={theme["color-primary-500"]}
                      height={30}
                      width={30}
                    />
                  )}
                  onPress={() => {
                    setNewMessage("")
                    setReply("")
                  }}
                />
              ) : (
                true
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )

  return role === "therapist" ? (
    <LayoutTherapist
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
      title="Messages"
    >
      {mainDialog}
    </LayoutTherapist>
  ) : (
    <LayoutMore
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
      title="Messages"
    >
      {mainDialog}
    </LayoutMore>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    alignSelf: "center",
    height: "100%",
  },
  dialogContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#00ABB90D",
    borderRadius: 20,
    flex: 1,
  },
  dialogHeader: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    zIndex: 1,
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
    width: "90%",
    alignSelf: "center",
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputBottomSection: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    flexGrow: 1,
  },
  sendButton: {
    alignSelf: "flex-end",
    width: "20%",
  },
  replyText: {
    fontWeight: "600",
    fontSize: 16,
    paddingLeft: 5,
    color: "#454545",
  },
  replyContainer: {
    flexDirection: "row",
    padding: 10,
    paddingRight: 30,
    alignItems: "center",
    overflow: "hidden",
  },
})
export default DialogSaluderiaTeam
