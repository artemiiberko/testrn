import React, { useState } from "react"
import { View, Text } from "react-native"
import HorizontalPicker from "@vseslav/react-native-horizontal-picker"

const renderItem = (item, index) => (
  <View
    style={{
      width: 60,
      backgroundColor: "transparent",
      height: "100%",
      justifyContent: "center",
      borderColor: "#A8A8A8",
      borderWidth: 1,
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 16, color: "#222222", fontWeight: "500" }}>
      {item}
    </Text>
  </View>
)

const TimeStrip = ({
  timeButtonGroup,
  setSelectedTime,
  AvailableTimeItems,
}) => {
  const [error, setError] = useState(false)

  let timeForClosed = timeButtonGroup === 3 ? 4 : timeButtonGroup === 2 ? 3 : 2
  return (
    <View style={{ marginTop: 15 }}>
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          left: "50%",
          zIndex: 1,
        }}
      >
        <View
          style={{
            position: "relative",
            left: "-50%",
            width:
              timeButtonGroup === 3 ? 240 : timeButtonGroup === 2 ? 180 : 120,
            height: 50,
            backgroundColor: "#00ABB91A",
            borderColor: "#00ABB9",
            borderWidth: 2,
          }}
        />
      </View>
      <HorizontalPicker
        snapTimeout={500}
        data={AvailableTimeItems}
        renderItem={renderItem}
        itemWidth={60}
        animatedScrollToDefaultIndex={true}
        onChange={(i) => {
          i > AvailableTimeItems.length - timeForClosed
            ? (setSelectedTime(AvailableTimeItems[i]), setError(true))
            : (setSelectedTime(AvailableTimeItems[i]), setError(false))
        }}
        style={{
          height: 50,
          marginLeft:
            timeButtonGroup === 3 ? -180 : timeButtonGroup === 2 ? -120 : -60,
        }}
      />
      <Text style={{ paddingLeft: 30, fontSize: 14, color: "#DC8D8D" }}>
        {error ? "Sorry, we are closed at this time" : ""}
      </Text>
    </View>
  )
}

export default TimeStrip
