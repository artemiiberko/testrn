import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, Input, useTheme } from "@ui-kitten/components"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutMore from "../../Layouts/LayoutMore"

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]

const RepeatSettings = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [cardHeight, setCardHeight] = useState({})
  const [scrollHeight, setScrollHeight] = useState({})
  const [repeatFor, setRepeatFor] = useState("4")
  const [selectedDays, setSelectedDays] = useState([
    "monday",
    "wednesday",
    "friday",
  ])
  const [termins, setTermins] = useState([
    {
      date: "21 June",
      day: "Monday",
      termins: [
        "13:00 - 14:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00",
        "20:00 - 21:00",
      ],
    },
    {
      date: "23 June",
      day: "Wednesday",
      termins: [
        "13:00 - 14:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00",
      ],
    },
    {
      date: "25 June",
      day: "Friday",
      termins: ["13:00 - 14:00", "16:00 - 17:00", "17:00 - 18:00"],
    },
  ])
  const theme = useTheme()

  return (
    <LayoutMore
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
      button={false}
      white={true}
    >
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
        >
          <LinearGradient
            colors={["#D3DADB", "#D3DADB00"]}
            style={styles.card}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout
              setCardHeight(height)
            }}
          >
            <BlurView intensity={50}>
              <View style={styles.backHeader}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
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
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: "#454545",
                    }}
                  >
                    Repeat settings
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
                contentContainerStyle={{ paddingTop: 70 }}
              >
                <View
                  onLayout={(event) => {
                    const { height } = event.nativeEvent.layout
                    setScrollHeight(height)
                  }}
                >
                  <View style={styles.firstSection}>
                    <View style={styles.repeatfor}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#454545",
                        }}
                      >
                        Repeat for
                      </Text>
                      <Input
                        style={styles.input}
                        textStyle={{ fontSize: 20, textAlign: "center" }}
                        size="large"
                        color="rgba(69, 69, 69, 1)"
                        value={repeatFor}
                        onChangeText={(nextValue) => {
                          setRepeatFor(nextValue)
                        }}
                        maxLength={1}
                        keyboardType="number-pad"
                      />
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#454545",
                        }}
                      >
                        weeks
                      </Text>
                    </View>
                    <View style={styles.dayschoose}>
                      {days.map((i) => (
                        <Button
                          key={i}
                          status={
                            selectedDays.includes(i) ? "primary" : "warning"
                          }
                          onPress={() =>
                            selectedDays.includes(i)
                              ? setSelectedDays((prev) =>
                                  prev.filter((item) => item !== i)
                                )
                              : setSelectedDays((prev) => [...prev, i])
                          }
                          style={styles.dayButton}
                        >
                          {i[0].toUpperCase()}
                        </Button>
                      ))}
                    </View>
                  </View>
                  <View>
                    <LinearGradient
                      colors={["#00ABB9FF", "#00ABB900"]}
                      start={{ x: -1, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{
                        height: 1,
                        position: "absolute",
                        width: "50%",
                        left: 0,
                      }}
                    />
                    <LinearGradient
                      colors={["#00ABB9FF", "#00ABB900"]}
                      start={{ x: 2, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      style={{
                        height: 1,
                        position: "absolute",
                        width: "50%",
                        right: 0,
                      }}
                    />
                  </View>
                  <View style={styles.secondSection}>
                    {termins.map((i, index) => (
                      <View key={index} style={styles.dayContainer}>
                        <View style={styles.dayTitles}>
                          <Text
                            style={[styles.dayTitle, { fontWeight: "600" }]}
                          >
                            {i.day}
                          </Text>
                          <Text style={styles.dayTitle}>{i.date}</Text>
                        </View>
                        <View style={styles.termins}>
                          {i.termins.map((item, index) => (
                            <View key={index} style={styles.terminContainer}>
                              <Text style={styles.terminText}>{item}</Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                  <LinearGradient
                    colors={["#00ABB9FF", "#00ABB900"]}
                    start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ height: 1 }}
                  />
                  <Button
                    style={{
                      width: "50%",
                      alignSelf: "center",
                      margin: 20,
                    }}
                    size="medium"
                    onPress={() => {
                      console.log("confirm")
                      navigation.goBack()
                    }}
                  >
                    {() => (
                      <Text
                        style={{
                          fontSize: 18,
                          color: "white",
                          fontWeight: "500",
                        }}
                      >
                        Confirm
                      </Text>
                    )}
                  </Button>
                </View>
              </ScrollView>
            </BlurView>
          </LinearGradient>
        </KeyboardAvoidingView>
      </View>
    </LayoutMore>
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
    backgroundColor: "#e1e6e6FA",
  },
  firstSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  repeatfor: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "#00ABB9",
    marginHorizontal: 10,
    minWidth: 50,
  },
  dayschoose: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayButton: {
    paddingHorizontal: 0,
    borderWidth: 0,
  },
  secondSection: { padding: 20 },
  dayContainer: { paddingBottom: 20 },
  dayTitles: { flexDirection: "row", paddingBottom: 10 },
  dayTitle: { fontSize: 20, paddingRight: 10 },
  termins: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  terminContainer: {
    backgroundColor: "#00ABB959",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    margin: 5,
  },
  terminText: {
    color: "#FFF",
    fontSize: 12,
  },
})
export default RepeatSettings
