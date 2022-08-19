import React, { useState } from "react"
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Animated,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import {
  Button,
  useTheme,
  CheckBox,
  RadioGroup,
  Radio,
  Input,
} from "@ui-kitten/components"
import LayoutTherapistCalendar from "../../../Layouts/LayoutTherapistCalendar"
import CalendarDay from "./calendarDay"
import CalendarMonth from "./calendarMonth"

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]

const HomeTherapist = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [showDays, setShowDays] = useState(false)
  const [modalY, setModalY] = useState(new Animated.Value(500))
  const [availabilityModal, setAvailabilityModal] = useState(false)
  const [modalWidth, setModalWidth] = useState({})
  const [modalHeight, setModalHeight] = useState(0)
  const [isOutCall, setIsOutCall] = useState(true)
  const [isInCall, setIsInCall] = useState(true)
  const [radioIndex, setRadioIndex] = useState(0)
  const [repeatFor, setRepeatFor] = useState("4")
  const [selectedDays, setSelectedDays] = useState([
    "monday",
    "wednesday",
    "friday",
  ])

  const theme = useTheme()

  const hideModal = () => {
    setAvailabilityModal(false)
  }
  const showModal = () => {
    setAvailabilityModal(true)
    Animated.timing(modalY, {
      toValue: -100,
    }).start()
  }

  return (
    <LayoutTherapistCalendar
      setShowDays={setShowDays}
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
    >
      {availabilityModal && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -90 : -40}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Animated.View
            useNativeDriver={true}
            style={{
              transform: [{ translateY: modalY }],
              bottom: 0,
              paddingHorizontal: 30,
              width: "100%",
            }}
            onLayout={(event) => {
              const { width, height } = event.nativeEvent.layout
              setModalWidth(width)
              setModalHeight(height)
            }}
          >
            <ScrollView scrollEnabled={false}>
              <View
                style={{
                  borderRadius: 15,
                  overflow: "hidden",
                }}
              >
                <LinearGradient
                  colors={["#00A3FF66", "#00A3FF33"]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    backgroundColor: "#FFFFFFF7",
                    flex: 1,
                  }}
                >
                  <View>
                    <View style={{ padding: 20, paddingBottom: 10 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#454545",
                            fontWeight: "700",
                          }}
                        >
                          Set your availability
                        </Text>
                        <Button
                          size="small"
                          onPress={() => {
                            Animated.timing(modalY, {
                              toValue: 500,
                              useNativeDriver: true,
                            }).start()
                            setTimeout(() => {
                              setAvailabilityModal(false)
                            }, 300)
                          }}
                        >
                          Set
                        </Button>
                      </View>
                      <View>
                        <View>
                          <CheckBox
                            checked={isOutCall}
                            onChange={(nextChecked) =>
                              setIsOutCall(nextChecked)
                            }
                            style={{ paddingBottom: 10 }}
                          >
                            {() => (
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: "500",
                                  color: "#454545",
                                  paddingLeft: 10,
                                }}
                              >
                                out call
                              </Text>
                            )}
                          </CheckBox>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                          }}
                        >
                          <CheckBox
                            checked={isInCall}
                            onChange={(nextChecked) => setIsInCall(nextChecked)}
                            style={{ paddingTop: 7 }}
                          >
                            {() => (
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: "500",
                                  color: "#454545",
                                  paddingLeft: 10,
                                }}
                              >
                                in call
                              </Text>
                            )}
                          </CheckBox>
                          <RadioGroup
                            selectedIndex={radioIndex}
                            onChange={(index) => setRadioIndex(index)}
                            style={{
                              flexDirection: "row",
                              justifyContent: "flex-end",
                              alignItems: "flex-end",
                              flexWrap: "wrap",
                              flexGrow: 1,
                            }}
                          >
                            <Radio style={{ marginLeft: 15 }}>
                              {() => (
                                <Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: "500",
                                    color: "#454545",
                                    paddingLeft: 8,
                                  }}
                                >
                                  Address 1
                                </Text>
                              )}
                            </Radio>
                            <Radio style={{ marginLeft: 15 }}>
                              {() => (
                                <Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: "500",
                                    color: "#454545",
                                    paddingLeft: 8,
                                  }}
                                >
                                  Address 2
                                </Text>
                              )}
                            </Radio>
                          </RadioGroup>
                        </View>
                      </View>
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
                    <View style={{ padding: 20, paddingTop: 10 }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={{ fontSize: 20, color: "#454545" }}>
                          Repeat for
                        </Text>
                        <Input
                          style={{
                            backgroundColor: "transparent",
                            borderColor: theme["color-primary-500"],
                            marginHorizontal: 10,
                            minWidth: 50,
                          }}
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
                        <Text style={{ fontSize: 20, color: "#454545" }}>
                          weeks
                        </Text>
                      </View>
                      <View
                        style={{
                          marginVertical: 20,
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
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
                            style={{
                              paddingHorizontal: 0,
                              borderWidth: 0,
                            }}
                            size={modalWidth > 390 ? "medium" : "small"}
                          >
                            {i[0].toUpperCase()}
                          </Button>
                        ))}
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </ScrollView>
          </Animated.View>
        </KeyboardAvoidingView>
      )}
      <ScrollView style={{ flex: 1, width: "100%", paddingTop: headerHeight }}>
        <View
          style={
            headerHeight
              ? {
                  paddingBottom:
                    Platform.OS === "ios"
                      ? headerHeight + 90
                      : headerHeight + 60,
                }
              : {}
          }
        >
          {showDays ? (
            <CalendarDay
              navigation={navigation}
              availabilityModal={availabilityModal}
              setAvailabilityModal={setAvailabilityModal}
              modalHeight={modalHeight}
              modalY={modalY}
            />
          ) : (
            <CalendarMonth navigation={navigation} />
          )}
        </View>
      </ScrollView>
    </LayoutTherapistCalendar>
  )
}
export default HomeTherapist
