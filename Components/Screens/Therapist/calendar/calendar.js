import React, { useState } from "react"
import { View, KeyboardAvoidingView, ScrollView, Text } from "react-native"
import LayoutTherapistCalendar from "../../../Layouts/LayoutTherapistCalendar"
import CalendarDay from "./calendarDay"
import CalendarMonth from "./calendarMonth"

const HomeTherapist = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [showDays, setShowDays] = useState(false)
  return (
    <LayoutTherapistCalendar
      setShowDays={setShowDays}
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "none"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1, width: "100%", paddingTop: headerHeight }}
        >
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
              <CalendarDay navigation={navigation} />
            ) : (
              <CalendarMonth navigation={navigation} />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LayoutTherapistCalendar>
  )
}
export default HomeTherapist
