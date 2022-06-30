import React, { useEffect } from "react"
import { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@ui-kitten/components"
import SalderiaCleanSvg from "./../content/saluderia-clean.svg"
import { BlurView } from "expo-blur"
import SmallCheckSvg from "./../content/small-check.svg"
import ArrowBackSvg from "./../content/arrow-back.svg"
import RoadSvg from "./../content/road.svg"

const BookingInfo = ({ navigation, route }) => {
  const [bookingObject, setBookingObject] = useState({})

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
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <LinearGradient
        colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.35)"]}
        style={styles.linearGradient}
      >
        <LinearGradient
          colors={[
            "rgba(228, 244, 245, 1)",
            "rgba(228, 244, 245, 1)",
            "rgba(228, 244, 245, 0.5)",
          ]}
          style={styles.blurContainer}
        >
          <SafeAreaView>
            <View style={styles.blurContainerTop}>
              <SalderiaCleanSvg style={styles.logo} width="50%" />
              <Button
                style={styles.button}
                size="medium"
                onPress={() => {
                  console.log("new booking")
                }}
              >
                {() => <Text style={styles.buttonText}>New booking</Text>}
              </Button>
            </View>
          </SafeAreaView>
        </LinearGradient>
        <View
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <LinearGradient
            colors={
              bookingObject.status === "canceled by you" ||
              bookingObject.status === "canceled by therapist"
                ? ["#D3DADB", "#D3DADB"]
                : ["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.1)"]
            }
            style={styles.card}
          >
            <BlurView intensity={100} style={{ flex: 1 }}>
              <View style={styles.backHeader}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={styles.backButton}
                    appearance="ghost"
                    size="giant"
                    accessoryLeft={() => <ArrowBackSvg />}
                    onPress={() => {
                      navigation.goBack()
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: "#454545",
                    }}
                  >
                    Kim's booking
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingRight: 20,
                  }}
                >
                  <Text
                    style={{ color: "#454545", fontSize: 16, paddingRight: 10 }}
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
                <View style={styles.infoText}>
                  <Text
                    style={{
                      color: "#454545",
                      fontSize: 22,
                      fontWeight: "700",
                    }}
                  >
                    {bookingObject.name}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "#454545", fontSize: 22 }}>
                      {bookingObject.date}
                    </Text>
                    <Text
                      style={{
                        color: "#454545",
                        fontSize: 16,
                        paddingLeft: 10,
                        marginBottom: -4,
                      }}
                    >
                      {bookingObject.starttime} - {bookingObject.endtime}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 25,
                      padding: 3,
                      paddingHorizontal: 10,
                      alignSelf: "flex-start",
                    }}
                  >
                    <Text style={{ fontSize: 16, color: "#454545" }}>
                      {bookingObject.where}
                    </Text>
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
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#454545",
                      fontSize: 32,
                      fontWeight: "700",
                    }}
                  >
                    {bookingObject.price} €
                  </Text>
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
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        alignSelf: "center",
                        color: "#454545",
                      }}
                    >
                      Adress
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        alignSelf: "center",
                        color: "#454545",
                      }}
                    >
                      ~ 45 min a way
                    </Text>
                  </View>
                  <Text
                    style={{
                      alignSelf: "center",
                      color: "#454545",
                      fontSize: 16,
                    }}
                  >
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
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{ width: "50%" }}
                  size="medium"
                  status="danger"
                  onPress={() =>
                    navigation.navigate("Confirm Cancelation", {
                      id: route.params.id,
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
            </BlurView>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  blurContainer: {
    width: "100%",
    height: 140,
    justifyContent: "center",
    paddingHorizontal: 30,
    position: "absolute",
    zIndex: 1,
  },
  blurContainerTop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },
  logo: {
    marginTop: -15,
    width: "50%",
    resizeMode: "contain",
  },
  button: {
    width: "40%",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#e7f4f6",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 140,
    flex: 1,
  },
  backHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  infoText: {
    justifyContent: "space-between",
    paddingLeft: 10,
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
})
export default BookingInfo
