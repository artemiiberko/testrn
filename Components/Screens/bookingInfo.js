import React, { useEffect, useState } from "react"
import { View } from "react-native"
import BookingComponentMore from "../Elements/bookingComponentMore"
import LayoutMin from "../Layouts/LayoutMin"

const BookingInfo = ({ navigation, route, role }) => {
  const [bookingObject, setBookingObject] = useState({})
  const [headerHeight, setHeaderHeight] = useState()

  useEffect(() => {
    console.log(route.params.id)
    /* getting object of booking by id from API - route.params.id */
    setBookingObject({
      id: 1,
      status: "completed",
      name: "Kim Potapov",
      date: "13 June",
      starttime: "15:00",
      endtime: "16:30",
      where: "at the therapist",
      price: 130,
    })
  }, [])
  return (
    <LayoutMin setHeaderHeight={setHeaderHeight} navigation={navigation}>
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: headerHeight,
        }}
      >
        <BookingComponentMore
          id={route.params.id}
          navigation={navigation}
          role={role}
        />
      </View>
    </LayoutMin>
  )
}

export default BookingInfo
