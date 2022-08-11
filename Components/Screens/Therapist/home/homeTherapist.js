import React, { useState } from "react"
import { FlatList, Platform } from "react-native"
import BookingComponent from "../../../Elements/bookingComponent"
import LayoutTherapist from "../../../Layouts/LayoutTherapist"

const bookings_data = [
  {
    id: 1,
    status: "awaiting confirmation",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "in call",
    price: 100,
    watched: false,
  },
  {
    id: 2,
    status: "canceled by therapist",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "out call",
    price: 200,
    watched: true,
  },
  {
    id: 3,
    status: "canceled by client",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "out call",
    price: 350,
    watched: true,
  },
  {
    id: 4,
    status: "awaiting confirmation",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "out call",
    price: 480,
    watched: false,
  },
  {
    id: 5,
    status: "in progress-ext",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "out call",
    price: 530,
    remaining: "17 min",
    watched: true,
  },
  {
    id: 6,
    status: "to check-in",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "out call",
    price: 495,
    watched: false,
  },
  {
    id: 7,
    status: "to check-out",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "out call",
    price: 365,
    finishedat: "16:32",
    watched: true,
  },
]

const HomeTherapist = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [showNew, setShowNew] = useState(false)
  return (
    <LayoutTherapist
      setShowNew={setShowNew}
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
    >
      <FlatList
        style={{
          flex: 1,
          width: "100%",
          paddingTop: headerHeight,
        }}
        contentContainerStyle={
          headerHeight
            ? {
                paddingBottom:
                  Platform.OS === "ios" ? headerHeight + 90 : headerHeight + 60,
              }
            : {}
        }
        initialNumToRender={3}
        data={
          showNew
            ? bookings_data.filter((i) => i.watched === false)
            : bookings_data
        }
        renderItem={({ item }) => (
          <BookingComponent
            status={item.status}
            name={item.name}
            date={item.date}
            starttime={item.starttime}
            endtime={item.endtime}
            where={item.where}
            price={item.price}
            id={item.id}
            navigation={navigation}
            remaining={item.remaining}
            role="therapist"
            finishedat={item.finishedat}
          />
        )}
      />
    </LayoutTherapist>
  )
}
export default HomeTherapist
