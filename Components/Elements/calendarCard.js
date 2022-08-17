import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import TimeSvg from "./../../content/time.svg"

const CalendarCard = ({ booking, navigation, inDay = false }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate("Booking Information", { id: booking.id })
      }
      style={
        booking.status === "accepted" && inDay
          ? [
              styles.card,
              { borderRadius: 3, height: 41 * (booking.duration / 0.5) },
            ]
          : booking.status === "accepted" && inDay === false
          ? styles.card
          : booking.status === "awaiting confirmation" && inDay
          ? [
              styles.card,
              {
                borderRadius: 3,
                backgroundColor: "#A8A8A840",
                height: 41 * (booking.duration / 0.5),
              },
            ]
          : [styles.card, { backgroundColor: "#A8A8A840" }]
      }
    >
      <View style={styles.top}>
        <Text style={styles.name}>{booking.name}</Text>
        <Text
          style={
            booking.call === "in call"
              ? styles.call
              : [styles.call, { backgroundColor: "#FFFFFFE6" }]
          }
        >
          {booking.call}
        </Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.time}>
          {booking.startTime} - {booking.endTime}
        </Text>
        {booking.status === "awaiting confirmation" ? (
          <View style={styles.statusContainer}>
            <TimeSvg height={20} fill="#00A3FF" />
            <Text style={styles.status}>awaiting confirmation</Text>
          </View>
        ) : (
          true
        )}
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#00A3FF33",
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  name: { fontSize: 18, fontWeight: "700", color: "#454545" },
  call: {
    backgroundColor: "#00A3FF59",
    borderRadius: 9,
    overflow: "hidden",
    paddingHorizontal: 10,
    color: "#454545",
    fontWeight: "600",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: { color: "#454545", fontWeight: "600" },
  statusContainer: { flexDirection: "row", alignItems: "center" },
  status: { color: "#454545", fontWeight: "600" },
})

export default CalendarCard
