import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import { Button, useTheme } from "@ui-kitten/components"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../../content/arrow-back.svg"
import LayoutTherapist from "./../../../Layouts/LayoutTherapist"

const PersonalData = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [screenHeight, setScreenHeight] = useState()
  const [personalData, setPersonalData] = useState({
    id: 1,
    firstName: "Ivan",
    lastName: "Pushkin",
    rating: "4,8",
    email: "personal@example.com",
    bookings: "207",
    reviews: "58",
    services: [
      "Osteopathy",
      "Physiotherapie",
      "Deep-tissue massage",
      "Pregnancy massage",
    ],
    addresses: [
      "38 Creighton Rd, London N17 8NW United Kingdom",
      "24 Academia Way, London N17 8HE, United Kingdom",
    ],
    info: "Cras nec fermentum erat, in aliquam lorem. Suspendisse potenti. Mauris nec ligula massa. Aliquam feugiat nulla ut vestibulum venenatis. Vestibulum dapibus pulvinar sem eget porta. Nulla facilisi. Donec rutrum lacus eu mauris pretium, sed egestas sapien luctus. Aliquam semper, nisl id semper condimentum, nisl risus auctor sapien, vitae tincidunt leo.",
  })
  const theme = useTheme()

  return (
    <LayoutTherapist
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
                <Text style={styles.headerText}>Personal Data</Text>
              </View>
              <View style={styles.backHeaderRight}>
                <View
                  style={{
                    backgroundColor: theme["color-primary-500"],
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#FFF" }}>
                    {personalData.rating}
                  </Text>
                </View>
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
                <View style={styles.mainSection}>
                  <View style={styles.mainInfo}>
                    <Image
                      source={require("./../../../../content/profile-photo.png")}
                      style={styles.photo}
                    />
                    <View style={styles.info}>
                      <Text style={[styles.text, { color: "#454545" }]}>
                        {personalData.firstName}
                      </Text>
                      <Text style={[styles.text, { color: "#454545" }]}>
                        {personalData.lastName}
                      </Text>
                      <Text style={styles.text}>
                        Bookings:<Text style={{ color: "#454545" }}> 207</Text>
                      </Text>
                      <Text style={styles.text}>
                        Reviews:<Text style={{ color: "#454545" }}> 58</Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <LinearGradient
                  colors={[
                    theme["color-primary-500"],
                    theme["color-primary-100"],
                  ]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={styles.secondSection}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        paddingLeft: 10,
                        color: "#454545",
                      }}
                    >
                      {personalData.email}
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  colors={[
                    theme["color-primary-500"],
                    theme["color-primary-100"],
                  ]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={styles.secondSection}>
                  <View style={styles.itemsSection}>
                    {personalData.services
                      ? personalData.services.map((i) => (
                          <View key={i} style={styles.itemContainer}>
                            <Text style={styles.itemText}>
                              <Text style={{ color: "#454545" }}>{i}</Text>
                            </Text>
                          </View>
                        ))
                      : true}
                  </View>
                </View>
                <LinearGradient
                  colors={[
                    theme["color-primary-500"],
                    theme["color-primary-100"],
                  ]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={{ padding: 20 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        color: "#454545",
                        fontWeight: "500",
                        paddingBottom: 10,
                      }}
                    >
                      Address
                    </Text>
                    <Button size="small">Edit</Button>
                  </View>
                  {personalData.addresses.map((i, index) => (
                    <View key={i} style={{ paddingBottom: 10 }}>
                      <Text
                        style={{
                          fontWeight: "700",
                          fontSize: 14,
                          color: "#454545",
                        }}
                      >
                        Address {index + 1}
                      </Text>
                      <Text style={{ color: "#454545", fontSize: 18 }}>
                        {i}
                      </Text>
                    </View>
                  ))}
                  <Text
                    style={{
                      fontSize: 24,
                      color: "#454545",
                      fontWeight: "500",
                      paddingVertical: 10,
                    }}
                  >
                    Bio
                  </Text>
                  <Text style={{ fontSize: 18, color: "#454545" }}>
                    {personalData.info}
                  </Text>
                </View>
              </View>
            </ScrollView>
          </BlurView>
        </LinearGradient>
      </View>
    </LayoutTherapist>
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
  backHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  mainSection: {
    padding: 20,
  },
  mainInfo: {
    flexDirection: "row",
  },
  photo: {
    width: "30%",
    resizeMode: "cover",
    borderRadius: 100,
    aspectRatio: 1 / 1,
    alignSelf: "center",
  },
  info: {
    width: "70%",
    justifyContent: "space-between",
    paddingLeft: 30,
  },
  text: {
    fontSize: 18,
    color: "#A8A8A8",
    paddingBottom: 5,
  },
  itemsSection: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: -5,
    paddingVertical: 5,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    marginHorizontal: 4,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#454545",
  },
  secondSection: {
    padding: 20,
  },
})

export default PersonalData
