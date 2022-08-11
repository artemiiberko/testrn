import React, { useState } from "react"
import {
  Platform,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import LayoutMore from "../../Layouts/LayoutMore"
import ChatCheckSvg from "./../../../content/chat-check.svg"
import ChatDoubleCheckSvg from "./../../../content/chat-doublecheck.svg"
import SaluderiaTeamSvg from "./../../../content/saluderia-team.svg"
import LayoutTherapist from "./../../Layouts/LayoutTherapist"
import { useTheme } from "@ui-kitten/components"

const dialogs = [
  {
    dialogWith: "Kim",
    lastMessage:
      "Hello egj weo egegiejr iogjeirjgowejr gjwe rjge jrgie wrigjwe irogee!",
    time: "14:53",
    messageStatus: "unread",
    dialogId: 1,
  },
  {
    dialogWith: "Tom",
    lastMessage:
      "Hi! sadfioja spdfi ojsdfjioasdjfoijwe fqwe fw asdfk asdfjajfiw iwa",
    time: "14:55",
    messageStatus: "read",
    dialogId: 2,
  },
  {
    dialogWith: "Dave",
    lastMessage: "uh eurih iueriasda sdas das",
    time: "14:56",
    messageStatus: "got",
    dialogId: 3,
  },
]

const Dialog = ({
  userId,
  dialogWith,
  text,
  time,
  messageStatus,
  navigation,
  dialogId,
}) => {
  const theme = useTheme()
  return (
    <TouchableOpacity
      style={[styles.block, { backgroundColor: theme["color-warning-600"] }]}
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate("Dialog", { dialogId })
      }}
    >
      <Image
        source={require("./../../../content/profile-photo.png")}
        style={styles.photo}
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentTitle}>
          <Text style={styles.name}>{dialogWith}</Text>
          <View style={styles.timeSection}>
            {messageStatus === "read" ? (
              <ChatDoubleCheckSvg
                fill={theme["color-primary-500"]}
                height={10}
              />
            ) : messageStatus === "got" ? (
              <ChatCheckSvg fill={theme["color-primary-500"]} height={10} />
            ) : (
              true
            )}

            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        <View style={styles.lastMessageContainer}>
          <Text
            style={
              messageStatus === "unread"
                ? [styles.lastMessage, { fontWeight: "700" }]
                : styles.lastMessage
            }
            numberOfLines={2}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Messages = ({ navigation, role }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [userId, setUserId] = useState(5)
  const theme = useTheme()

  const mainDialogs = (
    <ScrollView
      style={{ paddingTop: headerHeight, width: "100%" }}
      contentContainerStyle={
        headerHeight
          ? {
              paddingBottom:
                Platform.OS === "ios" ? headerHeight + 90 : headerHeight + 60,
            }
          : {}
      }
    >
      {role === "therapist" ? (
        <View>
          <TouchableOpacity
            style={[
              styles.block,
              { backgroundColor: theme["color-warning-600"] },
            ]}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("Dialog Saluderia Team")
            }}
          >
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
            <View style={styles.contentContainer}>
              <View style={styles.contentTitle}>
                <Text style={styles.name}>Saluderia Team</Text>
                <View style={styles.timeSection}>
                  <Text style={styles.time}>14:33</Text>
                </View>
              </View>
              <View style={styles.lastMessageContainer}>
                <Text
                  style={[styles.lastMessage, { fontWeight: "700" }]}
                  numberOfLines={2}
                >
                  Lorem ipsum dolor sit amet. Est molestias rerum aut galisum
                  quia est veniam illum et dignissimos minima.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <LinearGradient
            colors={[theme["color-primary-500"], theme["color-primary-100"]]}
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 1, marginVertical: 20 }}
          />
        </View>
      ) : (
        true
      )}

      {dialogs.map((i, index) => (
        <Dialog
          key={index}
          userId={userId}
          dialogWith={i.dialogWith}
          text={i.lastMessage}
          time={i.time}
          dialogId={i.dialogId}
          messageStatus={i.messageStatus}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  )

  return role === "therapist" ? (
    <LayoutTherapist
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
      title="Messages"
    >
      {mainDialogs}
    </LayoutTherapist>
  ) : (
    <LayoutMore
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
      title="Messages"
    >
      {mainDialogs}
    </LayoutMore>
  )
}

const styles = StyleSheet.create({
  block: {
    justifyContent: "center",
    width: "85%",
    maxWidth: "86%",
    margin: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    padding: 15,
  },
  photo: {
    width: "20%",
    resizeMode: "cover",
    borderRadius: 50,
    aspectRatio: 1 / 1,
    alignSelf: "center",
  },
  contentContainer: {
    flexGrow: 1,
    paddingLeft: 15,
    maxWidth: "80%",
  },
  contentTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lastMessageContainer: {
    flexGrow: 1,
  },
  lastMessage: {
    fontSize: 16,
    color: "#454545",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#454545",
  },
  time: { fontSize: 12, color: "#454545" },
  timeSection: {
    flexDirection: "row",
    alignItems: "center",
  },
})
export default Messages
