import React, { useState } from "react"
import { FlatList, Platform } from "react-native"
import BookingComponent from "../Elements/bookingComponent"
import LayoutMore from "../Layouts/LayoutMore"

bookings_data = [
  {
    id: 1,
    status: "completed",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 130,
  },
  {
    id: 2,
    status: "awaiting confirmation",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 100,
  },
  {
    id: 3,
    status: "canceled by therapist",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 200,
  },
  {
    id: 4,
    status: "full refund",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 350,
  },
  {
    id: 5,
    status: "canceled by you",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 480,
  },
  {
    id: 6,
    status: "no refund",
    name: "Kim Potapov",
    date: "13 June",
    starttime: "15:00",
    endtime: "16:30",
    where: "at the therapist",
    price: 520,
  },
]

const Home = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  return (
    <LayoutMore navigation={navigation} setHeaderHeight={setHeaderHeight}>
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
        data={bookings_data}
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
          />
        )}
      />
    </LayoutMore>
  )
}
export default Home
