import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { Button, useTheme } from "@ui-kitten/components"
import LayoutMin from "../../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import PdfSvg from "./../../../content/pdf.svg"
import DownloadSvg from "./../../../content/download.svg"

const BookingsHistory = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [screenHeight, setScreenHeight] = useState()
  const [bookings, setBookings] = useState([
    [
      {
        id: 1,
        date: "19.08.22",
        time: "09:00-10:30",
        name: "Ivan Pupkin",
        type: "Osteopathy",
        price: 120,
      },
      {
        id: 2,
        date: "19.08.22",
        time: "09:00-10:30",
        name: "Ivan Pupkin",
        type: "Osteopathy",
        price: 120,
      },
      {
        id: 3,
        date: "19.08.22",
        time: "09:00-10:30",
        name: "Ivan Pupkin",
        type: "Osteopathy",
        price: 120,
      },
    ],
    [
      {
        id: 4,
        date: "18.08.22",
        time: "09:00-10:30",
        name: "Ivan Pupkin",
        type: "Osteopathy",
        price: 120,
      },
      {
        id: 5,
        date: "18.08.22",
        time: "09:00-10:30",
        name: "Ivan Pupkin",
        type: "Osteopathy",
        price: 120,
      },
      {
        id: 6,
        date: "18.08.22",
        time: "09:00-10:30",
        name: "Ivan Pupkin",
        type: "Osteopathy",
        price: 120,
      },
    ],
  ])
  const theme = useTheme()

  return (
    <LayoutMin
      title=" "
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      <View
        style={{ flex: 1, paddingTop: headerHeight }}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout
          setScreenHeight(height)
        }}
      >
        <LinearGradient
          colors={[theme["color-primary-100"], theme["color-warning-600"]]}
          style={[
            styles.card,
            {
              maxHeight:
                Platform.OS === "ios"
                  ? screenHeight && headerHeight
                    ? screenHeight - headerHeight - 90 - 20
                    : "100%"
                  : screenHeight && headerHeight
                  ? screenHeight - headerHeight - 60 - 20
                  : "100%",
            },
          ]}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            setCardHeight(height)
          }}
        >
          <BlurView intensity={100}>
            <View style={styles.backHeader}>
              <View style={styles.backHeaderLeft}>
                <Button
                  style={styles.backButton}
                  appearance="ghost"
                  size="giant"
                  accessoryLeft={() => (
                    <ArrowBackSvg fill={theme["color-primary-500"]} />
                  )}
                  onPress={() => {
                    navigation.goBack()
                  }}
                />
                <Text style={styles.headerText}>Bookings History</Text>
              </View>
            </View>
            <LinearGradient
              colors={[theme["color-primary-500"], theme["color-primary-100"]]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            <ScrollView
              scrollEnabled={scrollHeight + 35 > cardHeight ? true : false}
              contentContainerStyle={{
                paddingBottom: 50,
              }}
            >
              <View
                onLayout={(event) => {
                  const { height } = event.nativeEvent.layout
                  setScrollHeight(height)
                }}
              >
                <View style={{ paddingVertical: 5 }}>
                  {bookings.map((item, index) => (
                    <View key={index} style={styles.dayContainer}>
                      {item.map((booking, bookingIndex) => (
                        <View style={styles.booking}>
                          <View style={styles.bookingTop}>
                            <View style={styles.bookingTopLeft}>
                              <Text style={styles.text}>{booking.date}</Text>
                              <Text style={styles.text}>{booking.time}</Text>
                            </View>
                            <Text style={styles.price}>£ {booking.price}</Text>
                          </View>
                          <Text style={styles.text}>
                            {booking.name} / {booking.type}
                          </Text>
                        </View>
                      ))}
                      <LinearGradient
                        colors={[
                          theme["color-primary-500"],
                          theme["color-primary-100"],
                        ]}
                        start={{ x: -1, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ height: 1 }}
                      />
                    </View>
                  ))}
                </View>
              </View>
            </ScrollView>
          </BlurView>
        </LinearGradient>
      </View>
    </LayoutMin>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e5f6fb",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  backHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#454545",
  },
  infoText: {
    fontSize: 18,
    color: "#454545",
    paddingVertical: 5,
  },
  booking: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bookingTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bookingTopLeft: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    paddingRight: 5,
    color: "#454545",
  },
  price: {
    fontSize: 18,
    color: "#454545",
    fontWeight: "700",
  },
})

export default BookingsHistory
