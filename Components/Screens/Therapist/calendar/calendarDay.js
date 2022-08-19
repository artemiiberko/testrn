import React, { useState } from "react"
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Platform,
} from "react-native"
import moment from "moment"
import { Button } from "@ui-kitten/components"
import CalendarCard from "./../../../Elements/calendarCard"

const workingHours = []
for (let i = 9; i < 21; i++) {
  workingHours.push(`${i}:00`, `${i}:30`)
}

const CalendarDay = ({
  navigation,
  availabilityModal,
  setAvailabilityModal,
  modalHeight,
  modalY,
}) => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Kim Potapov",
      startTime: "12:00",
      endTime: "13:30",
      duration: 1.5,
      call: "in call",
      status: "accepted",
    },
    {
      id: 2,
      name: "Kim Potapov",
      startTime: "15:00",
      endTime: "16:00",
      duration: 1,
      call: "in call",
      status: "accepted",
    },
    {
      id: 3,
      name: "Kim Potapov",
      startTime: "16:00",
      endTime: "18:00",
      duration: 2,
      call: "in call",
      status: "awaiting confirmation",
    },
    {
      id: 4,
      name: "Kim Potapov",
      startTime: "18:30",
      endTime: "19:30",
      duration: 1,
      call: "out call",
      status: "accepted",
    },
  ])
  const [availability, setAvailability] = useState([
    {
      startTime: "9:30",
      endTime: "11:30",
      address: "Address 1",
      call: "in call",
    },
    {
      startTime: "13:30",
      endTime: "15:00",
      address: "Address 2",
      call: "in call",
    },
  ])
  const [availabilitySetting, setAvailabilitySetting] = useState({
    startTime: "",
    endTime: "",
  })

  let duration = 0
  const durationMinus = () => {
    duration = duration - 0.5
    return true
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.dateTitle}>{moment().format("D MMMM")}</Text>
          <Text style={styles.dayTitle}>{moment().format("dddd")}</Text>
        </View>
        <Button
          size="small"
          style={{ paddingHorizontal: 0 }}
          onPress={() => {
            setAvailabilityModal(true)
            Animated.timing(modalY, {
              toValue: Platform.OS === "ios" ? -70 : -40,
              useNativeDriver: true,
            }).start()
          }}
        >
          Set availability
        </Button>
      </View>
      {availabilityModal ? (
        <View style={[styles.slotsContainer, { paddingBottom: modalHeight }]}>
          {workingHours.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                availabilitySetting.startTime === ""
                  ? setAvailabilitySetting({
                      startTime: item,
                      endTime: availabilitySetting.endTime,
                    })
                  : availabilitySetting.endTime === ""
                  ? moment(item, "H:mm").isBefore(
                      moment(availabilitySetting.startTime, "H:mm")
                    )
                    ? true
                    : setAvailabilitySetting({
                        startTime: availabilitySetting.startTime,
                        endTime: item,
                      })
                  : setAvailabilitySetting({ startTime: "", endTime: "" })
              }}
              activeOpacity={0.8}
              key={item}
            >
              <View
                style={
                  moment(item, "H:mm").isSame(
                    moment(availabilitySetting.startTime, "H:mm")
                  )
                    ? [
                        styles.slot,
                        {
                          backgroundColor: "#00A3FF1A",
                          marginVertical: 0,
                          borderRadius: 0,
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                          paddingVertical: 12,
                        },
                      ]
                    : moment(item, "H:mm").isBetween(
                        moment(availabilitySetting.startTime, "H:mm").subtract(
                          1,
                          "minute"
                        ),
                        moment(availabilitySetting.endTime, "H:mm")
                      )
                    ? [
                        styles.slot,
                        {
                          backgroundColor: "#00A3FF1A",
                          marginVertical: 0,
                          borderRadius: 0,
                          paddingVertical: 12,
                        },
                      ]
                    : moment(item, "H:mm").isSame(
                        moment(availabilitySetting.endTime, "H:mm")
                      )
                    ? [
                        styles.slot,
                        {
                          backgroundColor: "#00A3FF1A",
                          marginVertical: 0,
                          paddingVertical: 12,
                          borderRadius: 0,
                          borderBottomLeftRadius: 3,
                          borderBottomRightRadius: 3,
                        },
                      ]
                    : styles.slot
                }
              >
                <View style={styles.slotLeft}>
                  <Text style={styles.slotText}>{item}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.slotsContainer}>
          {workingHours.map((item, index) => (
            <View key={item}>
              {bookings.map((booking, bookingIndex) => {
                booking.startTime === item
                  ? (duration = booking.duration)
                  : true
                return (
                  <View key={booking.id}>
                    {booking.startTime === item ? (
                      <View>
                        <CalendarCard
                          inDay={true}
                          navigation={navigation}
                          booking={booking}
                        />
                      </View>
                    ) : (
                      true
                    )}
                  </View>
                )
              })}
              {duration > 0 && durationMinus() ? (
                true
              ) : (
                <View
                  style={
                    availability.some((av) =>
                      moment(item, "H:mm").isBetween(
                        moment(av.startTime, "H:mm").subtract(1, "minute"),
                        moment(av.endTime, "H:mm")
                      )
                    ) &&
                    availability.some((av) =>
                      moment(item, "H:mm").isSame(moment(av.startTime, "H:mm"))
                    )
                      ? [
                          styles.slot,
                          {
                            backgroundColor: "#00A3FF1A",
                            marginVertical: 0,
                            borderRadius: 0,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                          },
                        ]
                      : availability.some((av) =>
                          moment(item, "H:mm").isBetween(
                            moment(av.startTime, "H:mm").subtract(1, "minute"),
                            moment(av.endTime, "H:mm")
                          )
                        ) &&
                        availability.some((av) =>
                          moment(item, "H:mm").isSame(
                            moment(av.endTime, "H:mm").subtract(30, "minute")
                          )
                        )
                      ? [
                          styles.slot,
                          {
                            backgroundColor: "#00A3FF1A",
                            marginVertical: 0,
                            borderRadius: 0,
                            borderBottomLeftRadius: 3,
                            borderBottomRightRadius: 3,
                          },
                        ]
                      : availability.some((av) =>
                          moment(item, "H:mm").isBetween(
                            moment(av.startTime, "H:mm").subtract(1, "minute"),
                            moment(av.endTime, "H:mm")
                          )
                        )
                      ? [
                          styles.slot,
                          {
                            backgroundColor: "#00A3FF1A",
                            marginVertical: 0,
                            borderRadius: 0,
                          },
                        ]
                      : styles.slot
                  }
                >
                  <View style={styles.slotLeft}>
                    <Text style={styles.slotText}>{item}</Text>
                    {availability.find((x) => x.startTime === item) ? (
                      <Text style={styles.slotText}>
                        {availability.find((x) => x.startTime === item).address}
                      </Text>
                    ) : (
                      true
                    )}
                  </View>
                  {availability.find((x) => x.startTime === item) ? (
                    <Text
                      style={
                        availability.find((x) => x.startTime === item).call ===
                        "in call"
                          ? styles.slotCall
                          : [styles.slotCall, { backgroundColor: "#FFF" }]
                      }
                    >
                      {availability.find((x) => x.startTime === item).call}
                    </Text>
                  ) : (
                    true
                  )}
                </View>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: { flexDirection: "row" },
  dateTitle: { fontSize: 20, fontWeight: "700" },
  dayTitle: { fontSize: 20, paddingLeft: 10 },
  slotsContainer: { paddingTop: 10 },
  slot: {
    backgroundColor: "#00A3FF05",
    padding: 10,
    borderRadius: 3,
    marginVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  slotLeft: { flexDirection: "row" },
  slotText: {
    color: "#454545",
    paddingRight: 15,
    fontWeight: "600",
  },
  slotCall: {
    backgroundColor: "#00A3FF59",
    borderRadius: 9,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 0,
    color: "#454545",
    marginRight: 10,
    fontWeight: "600",
  },
})

export default CalendarDay
