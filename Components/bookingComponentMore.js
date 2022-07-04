import React, { useEffect, useState } from "react"
import { StyleSheet, View, Image, Text, ScrollView } from "react-native"
import { Button } from "@ui-kitten/components"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import SmallCheckSvg from "./../content/small-check.svg"
import ArrowBackSvg from "./../content/arrow-back.svg"
import RoadSvg from "./../content/road.svg"

const BookingComponentMore = ({ id, navigation }) => {
  const [bookingObject, setBookingObject] = useState({})
  const [cardHeight, setCardHeight] = useState({})
  const [scrollHeight, setScrollHeight] = useState({})

  useEffect(() => {
    console.log(id)
    /* getting object of booking by id from API - id */
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
    <LinearGradient
      colors={
        bookingObject.status === "canceled by you" ||
        bookingObject.status === "canceled by therapist"
          ? ["#D3DADB", "#D3DADB"]
          : ["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.1)"]
      }
      style={styles.card}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout
        setCardHeight(height)
      }}
    >
      <BlurView intensity={100}>
        <ScrollView scrollEnabled={scrollHeight > cardHeight ? true : false}>
          <View
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout
              setScrollHeight(height)
            }}
          >
            <View style={styles.backHeader}>
              <View style={styles.backHeaderLeft}>
                <Button
                  style={styles.backButton}
                  appearance="ghost"
                  size="giant"
                  accessoryLeft={() => <ArrowBackSvg />}
                  onPress={() => {
                    navigation.goBack()
                  }}
                />
                <Text style={styles.headerText}>Kim's booking</Text>
              </View>
              <View style={styles.backHeaderRight}>
                <Text
                  style={{
                    color: "#454545",
                    fontSize: 16,
                    paddingRight: 10,
                  }}
                >
                  Confirmed
                </Text>
                <SmallCheckSvg />
              </View>
            </View>
            <LinearGradient
              colors={["#00ABB9FF", "#00ABB900"]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            <View style={styles.infoSection}>
              <Image
                source={require("./../content/profile-photo.png")}
                style={styles.photo}
              />
              <View style={styles.infoTextSection}>
                <Text style={styles.nameText}>{bookingObject.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.dateText}>{bookingObject.date}</Text>
                  <Text style={styles.timeText}>
                    {bookingObject.starttime} - {bookingObject.endtime}
                  </Text>
                </View>
                <View style={styles.whereContainer}>
                  <Text style={styles.whereText}>{bookingObject.where}</Text>
                </View>
              </View>
            </View>
            <LinearGradient
              colors={["#00ABB9FF", "#00ABB900"]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            <View style={styles.priceSection}>
              <View>
                <View style={styles.procedure}>
                  <Text style={styles.procedureText}>
                    Therapeutic back massage
                  </Text>
                </View>
                <View style={styles.procedure}>
                  <Text style={styles.procedureText}>Neck massage</Text>
                </View>
              </View>
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceText}>{bookingObject.price} €</Text>
              </View>
            </View>
            <LinearGradient
              colors={["#00ABB9FF", "#00ABB900"]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            <View>
              <LinearGradient
                colors={["#d2f8fc", "#d2f8fc", "#d2f8fc", "#d2f8fc00"]}
                style={{
                  width: "100%",
                  height: 100,
                  position: "absolute",
                  zIndex: 1,
                }}
              >
                <View style={styles.adressHead}>
                  <Text style={styles.adressLeft}>Adress</Text>
                  <Text style={styles.adressSub}>~ 45 min a way</Text>
                </View>
                <Text style={styles.adressSub}>
                  150 London Wall, Barbican, London EC2Y 5HN
                </Text>
              </LinearGradient>
              <Image
                source={require("./../content/adress.jpg")}
                style={{ resizeMode: "cover", height: 200, marginTop: 50 }}
              />
              <RoadSvg
                style={{ position: "absolute", bottom: 10, right: 10 }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                style={{ margin: 25, width: "50%" }}
                size="medium"
                status="danger"
                onPress={() =>
                  navigation.navigate("Confirm Cancelation", {
                    id: id,
                  })
                }
              >
                {() => (
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontWeight: "500",
                    }}
                  >
                    Cancel booking
                  </Text>
                )}
              </Button>
            </View>
          </View>
        </ScrollView>
      </BlurView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e7f4f6",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
    maxHeight: "95%",
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
    fontSize: 20,
    fontWeight: "700",
    color: "#454545",
  },
  backHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  infoSection: {
    flexDirection: "row",
    padding: 15,
  },
  photo: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    borderRadius: 45,
  },
  infoTextSection: {
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  nameText: {
    color: "#454545",
    fontSize: 22,
    fontWeight: "700",
  },
  dateText: {
    color: "#454545",
    fontSize: 22,
  },
  timeText: {
    color: "#454545",
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: -4,
  },
  whereContainer: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 3,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  whereText: {
    fontSize: 16,
    color: "#454545",
  },
  priceSection: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  procedure: {
    backgroundColor: "#A8A8A8",
    borderRadius: 25,
    alignSelf: "flex-start",
    marginVertical: 5,
  },
  procedureText: {
    fontSize: 16,
    color: "#fff",
    padding: 5,
    paddingHorizontal: 10,
  },
  priceTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    color: "#454545",
    fontSize: 32,
    fontWeight: "700",
  },
  adressHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  adressLeft: {
    fontSize: 20,
    alignSelf: "center",
    color: "#454545",
  },
  adressSub: {
    fontSize: 16,
    alignSelf: "center",
    color: "#454545",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

export default BookingComponentMore
