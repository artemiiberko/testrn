import React, { useState } from "react"
import { View, Platform } from "react-native"
import BookingComponentConfirmation from "../../Elements/bookingComponentConfirmation"
import LayoutMore from "../../Layouts/LayoutMore"

const ConfirmBooking = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()

  return (
    <LayoutMore cart setHeaderHeight={setHeaderHeight} navigation={navigation}>
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: headerHeight,
          marginBottom: Platform.OS === "ios" ? 90 : 60,
        }}
      >
        <BookingComponentConfirmation
          booking={route.params}
          navigation={navigation}
        />
      </View>
    </LayoutMore>
  )
}

export default ConfirmBooking
