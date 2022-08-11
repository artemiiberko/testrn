import React, { useState, useEffect } from "react"
import { StyleSheet, View, Image, Text, ScrollView } from "react-native"
import { Button, useTheme } from "@ui-kitten/components"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../content/arrow-back.svg"
import RoadSvg from "./../../content/road.svg"
import MessagesSvg from "./../../content/messages.svg"
import LayoutMin from "./../Layouts/LayoutMin"

const Cart = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [cardHeight, setCardHeight] = useState({})
  const [scrollHeight, setScrollHeight] = useState({})
  const [bookingObjects, setBookingObjects] = useState([
    {
      name: "Kim Potapov",
      date: "13 June",
      starttime: "15:00",
      endtime: "16:30",
      where: "at the therapist",
      price: 130,
    },
    {
      name: "Kim Potapov",
      date: "14 June",
      starttime: "12:00",
      endtime: "13:30",
      where: "at the therapist",
      price: 150,
    },
  ])
  const theme = useTheme()

  return (
    <LayoutMin cart setHeaderHeight={setHeaderHeight} navigation={navigation}>
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: headerHeight,
          marginBottom: Platform.OS === "ios" ? 90 : 60,
        }}
      >
        <LinearGradient
          colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.1)"]}
          style={styles.card}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            setCardHeight(height)
          }}
        >
          <BlurView intensity={100}>
            <View
              style={[
                styles.backHeader,
                {
                  backgroundColor:
                    scrollHeight + 70 > cardHeight
                      ? "#e0f1f3FA"
                      : "transparent",
                },
              ]}
            >
              <View style={styles.backHeaderContainer}>
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
                  <Text style={styles.headerText}>
                    Bascket {bookingObjects.length}
                  </Text>
                </View>
                <View style={styles.backHeaderRight}>
                  <Text
                    style={{
                      color: "#454545",
                      fontSize: 24,
                      fontWeight: "700",
                    }}
                  >
                    {bookingObjects.reduce((a, b) => a + b.price, 0)} €
                  </Text>
                </View>
              </View>
              <LinearGradient
                colors={["#00ABB9FF", "#00ABB900"]}
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ height: 1 }}
              />
            </View>
            <ScrollView
              scrollEnabled={scrollHeight + 70 > cardHeight}
              contentContainerStyle={{
                paddingTop: 70,
              }}
            >
              <View
                onLayout={(event) => {
                  const { height } = event.nativeEvent.layout
                  setScrollHeight(height)
                }}
              >
                {bookingObjects.map((item, index) => (
                  <View key={index}>
                    <Text
                      style={{
                        color: "#454545",
                        fontSize: 20,
                        fontWeight: "700",
                        padding: 20,
                      }}
                    >
                      Kim's booking
                    </Text>
                    <View style={styles.infoSection}>
                      <Image
                        source={require("./../../content/profile-photo.png")}
                        style={styles.photo}
                      />
                      <View style={styles.infoTextSection}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={styles.dateText}>{item.date}</Text>
                          <Text style={styles.timeText}>
                            {item.starttime} - {item.endtime}
                          </Text>
                        </View>
                        <View style={styles.whereContainer}>
                          <Text style={styles.whereText}>{item.where}</Text>
                        </View>
                      </View>
                      <Button
                        style={{
                          position: "absolute",
                          top: 20,
                          right: 0,
                          backgroundColor: "#00ABB90D",
                          borderTopLeftRadius: 15,
                          borderBottomLeftRadius: 15,
                          paddingHorizontal: 5,
                        }}
                        appearance="ghost"
                        accessoryLeft={() => <MessagesSvg height={30} />}
                        onPress={() => {
                          navigation.navigate("Messages Navigator")
                        }}
                      />
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
                        <Text style={styles.priceText}>{item.price} €</Text>
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
                        source={require("./../../content/adress.jpg")}
                        style={{
                          resizeMode: "cover",
                          height: 200,
                          marginTop: 50,
                        }}
                      />
                      <RoadSvg
                        style={{ position: "absolute", bottom: 10, right: 10 }}
                      />
                    </View>
                    <LinearGradient
                      colors={["#00ABB9FF", "#00ABB900"]}
                      start={{ x: -1, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{ height: 1 }}
                    />
                    <View style={styles.buttonsContainer}>
                      <Button
                        style={{}}
                        size="medium"
                        status="danger"
                        onPress={() => console.log("cancel")}
                      >
                        {() => (
                          <Text
                            style={{
                              fontSize: 18,
                              color: "white",
                              fontWeight: "400",
                            }}
                          >
                            Cancel
                          </Text>
                        )}
                      </Button>
                      <Button
                        style={{ width: "50%" }}
                        size="medium"
                        onPress={() => console.log("confirm")}
                      >
                        {() => (
                          <Text
                            style={{
                              fontSize: 18,
                              color: "white",
                              fontWeight: "500",
                            }}
                          >
                            Confirm
                          </Text>
                        )}
                      </Button>
                    </View>
                    <LinearGradient
                      colors={["#00ABB9FF", "#00ABB900"]}
                      start={{ x: -1, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{ height: 1 }}
                    />
                  </View>
                ))}
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
    maxHeight: "95%",
  },
  backHeader: {
    justifyContent: "flex-start",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  backHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#00ABB9",
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
    fontWeight: "500",
  },
  adressSub: {
    fontSize: 16,
    alignSelf: "center",
    color: "#454545",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 30,
  },
})

export default Cart
