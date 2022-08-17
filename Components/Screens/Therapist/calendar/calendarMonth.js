import React, { useState } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import moment from "moment"
import { Button } from "@ui-kitten/components"
import CalendarCard from "../../../Elements/calendarCard"
import IndicatorFilledSvg from "./../../../../content/indicator-filled.svg"
import IndicatorOutlinedSvg from "./../../../../content/indicator-outlined.svg"
import IndicatorGreySvg from "./../../../../content/indicator-grey.svg"
import IndicatorWhiteSvg from "./../../../../content/indicator-white.svg"

const Month = ({
  calendarDate,
  chosenDay,
  setChosenDay,
  bookings,
  navigation,
}) => {
  const startDay = calendarDate.clone().startOf("month").startOf("week")
  const endDay = calendarDate.clone().endOf("month").endOf("week")

  const daysArray = []
  let day = startDay.clone()
  while (day.isBefore(endDay)) {
    daysArray.push(day.clone())
    day.add(1, "day")
  }

  const weeks = daysArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 7)
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item)
    return resultArray
  }, [])

  return (
    <View style={styles.monthContainer}>
      <View style={styles.monthHeader}>
        <Text style={styles.monthName}>{calendarDate.format("MMMM")}</Text>
        <Button size="small">Edit</Button>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.weekNames}>
          <Text style={styles.weekName}>Mo</Text>
          <Text style={styles.weekName}>Tu</Text>
          <Text style={styles.weekName}>We</Text>
          <Text style={styles.weekName}>Th</Text>
          <Text style={styles.weekName}>Fr</Text>
          <Text style={[styles.weekName, { color: "#DC8D8D" }]}>Sa</Text>
          <Text style={[styles.weekName, { color: "#DC8D8D" }]}>Su</Text>
        </View>
        {weeks.map((week, weekIndex) => (
          <View key={weekIndex}>
            <View style={styles.weekRow}>
              {week.map((day, dayIndex) => (
                <TouchableOpacity
                  onPress={() =>
                    day.isSame(calendarDate, "month")
                      ? chosenDay && chosenDay.isSame(day)
                        ? setChosenDay()
                        : setChosenDay(day)
                      : true
                  }
                  activeOpacity={0.5}
                  key={dayIndex}
                  style={
                    !day.isSame(calendarDate, "month")
                      ? styles.weekDay
                      : day.isSame(chosenDay)
                      ? [
                          styles.weekDay,
                          {
                            backgroundColor: "#00A3FF",
                          },
                        ]
                      : moment().isSame(day, "day")
                      ? [
                          styles.weekDay,
                          {
                            borderColor: "#00A3FF",
                          },
                        ]
                      : styles.weekDay
                  }
                >
                  <View style={styles.indicatorsContainer}>
                    {bookings.map((item, index) => {
                      return moment(item.date, "DD-MM-YYYY").isSame(
                        day,
                        "day"
                      ) ? (
                        chosenDay && chosenDay.isSame(day, "day") ? (
                          <IndicatorWhiteSvg
                            style={styles.indicator}
                            key={item.id}
                            height={5}
                          />
                        ) : item.status === "awaiting confirmation" ? (
                          <IndicatorGreySvg
                            style={styles.indicator}
                            key={item.id}
                            height={5}
                          />
                        ) : item.call === "in call" ? (
                          <IndicatorFilledSvg
                            style={styles.indicator}
                            key={item.id}
                            height={5}
                          />
                        ) : (
                          <IndicatorOutlinedSvg
                            style={styles.indicator}
                            key={item.id}
                            height={5}
                          />
                        )
                      ) : (
                        true
                      )
                    })}
                  </View>
                  <Text
                    style={
                      !day.isSame(calendarDate, "month")
                        ? [styles.dayText, { color: "#A8A8A8" }]
                        : day.isSame(chosenDay)
                        ? [styles.dayText, { color: "#FFF" }]
                        : moment().isSame(day, "day")
                        ? [styles.dayText, { color: "#00A3FF" }]
                        : day.isoWeekday() > 5
                        ? [styles.dayText, { color: "#DC8D8D" }]
                        : styles.dayText
                    }
                  >
                    {day.format("D")}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {chosenDay &&
            chosenDay.isBetween(
              week[0].clone().subtract(1, "day"),
              week[6].clone().add(1, "day")
            ) &&
            chosenDay.isSame(calendarDate, "month") &&
            bookings.some((e) =>
              moment(e.date, "DD-MM-YYYY").isSame(chosenDay)
            ) ? (
              <View style={styles.expandWindow}>
                {bookings.map((item, index) => {
                  return moment(item.date, "DD-MM-YYYY").isSame(chosenDay) ? (
                    <CalendarCard
                      navigation={navigation}
                      key={index}
                      booking={item}
                    />
                  ) : (
                    true
                  )
                })}
              </View>
            ) : (
              true
            )}
          </View>
        ))}
      </View>
    </View>
  )
}

const CalendarMonth = ({ navigation }) => {
  const [chosenDay, setChosenDay] = useState()
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Kim Potapov",
      date: "12-08-2022",
      startTime: "12:00",
      endTime: "13:30",
      call: "in call",
      status: "accepted",
    },
    {
      id: 2,
      name: "Kim Potapov",
      date: "12-08-2022",
      startTime: "12:00",
      endTime: "13:30",
      call: "in call",
      status: "accepted",
    },
    {
      id: 3,
      name: "Kim Potapov",
      date: "12-08-2022",
      startTime: "12:00",
      endTime: "13:30",
      call: "in call",
      status: "accepted",
    },
    {
      id: 4,
      name: "Kim Potapov",
      date: "12-08-2022",
      startTime: "12:00",
      endTime: "13:30",
      call: "in call",
      status: "accepted",
    },
    {
      id: 5,
      name: "Kim Potapov",
      date: "12-08-2022",
      startTime: "12:00",
      endTime: "13:30",
      call: "in call",
      status: "accepted",
    },
    {
      id: 6,
      name: "Kim Potapov",
      date: "12-08-2022",
      startTime: "12:00",
      endTime: "13:30",
      call: "out call",
      status: "accepted",
    },
    {
      id: 7,
      name: "Suzanne Wilson",
      date: "12-08-2022",
      startTime: "15:00",
      endTime: "16:00",
      call: "out call",
      status: "accepted",
    },
    {
      id: 8,
      name: "Stanley Gardner",
      date: "12-08-2022",
      startTime: "17:00",
      endTime: "18:30",
      call: "out call",
      status: "accepted",
    },
    {
      id: 9,
      name: "Kim Potapov",
      date: "25-08-2022",
      startTime: "12:00",
      endTime: "13:30",
      call: "in call",
      status: "awaiting confirmation",
    },
    {
      id: 10,
      name: "Suzanne Wilson",
      date: "25-08-2022",
      startTime: "15:00",
      endTime: "16:00",
      call: "in call",
      status: "awaiting confirmation",
    },
    {
      id: 12,
      name: "Kim Potapov",
      date: "08-09-2022",
      startTime: "12:00",
      endTime: "13:30",
      call: "in call",
      status: "accepted",
    },
    {
      id: 13,
      name: "Suzanne Wilson",
      date: "08-09-2022",
      startTime: "15:00",
      endTime: "16:00",
      call: "in call",
      status: "accepted",
    },
    {
      id: 14,
      name: "Stanley Gardner",
      date: "08-09-2022",
      startTime: "17:00",
      endTime: "18:30",
      call: "out call",
      status: "accepted",
    },
  ])

  moment.updateLocale("en", { week: { dow: 1 } })
  return (
    <View>
      <Month
        chosenDay={chosenDay}
        setChosenDay={setChosenDay}
        calendarDate={moment()}
        bookings={bookings}
        navigation={navigation}
      />
      <Month
        chosenDay={chosenDay}
        setChosenDay={setChosenDay}
        calendarDate={moment().add(1, "month")}
        bookings={bookings}
        navigation={navigation}
      />
      {/* <Month
        chosenDay={chosenDay}
        setChosenDay={setChosenDay}
        calendarDate={moment().add(2, "month")}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  monthContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  monthHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  monthName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#454545",
  },
  gridContainer: {
    paddingVertical: 20,
  },
  weekNames: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  weekName: {
    fontSize: 18,
    color: "#A8A8A8",
    flex: 1,
    textAlign: "center",
  },
  weekRow: {
    flexDirection: "row",
  },
  weekDay: {
    flex: 1,
    alignItems: "center",
    aspectRatio: 1 / 1,
    justifyContent: "center",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "transparent",
  },
  dayText: {
    fontWeight: "700",
    color: "#454545",
  },
  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 2,
    flexWrap: "wrap",
  },
  indicator: { marginVertical: 1 },
  expandWindow: {},
})

export default CalendarMonth
