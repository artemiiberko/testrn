import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import { Button } from "@ui-kitten/components"
import LayoutMin from "../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../content/arrow-back.svg"

const PersonalData = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [screenHeight, setScreenHeight] = useState()
  const [personalData, setPersonalData] = useState({
    name: "Ivan",
    lastname: "Pushkin",
    dateofbirth: "12.03.1985",
    email: "personal@example.com",
    addresses: [
      {
        name: "Address 1",
        country: "United Kingdom",
        postcode: "N17 8NW",
        city: "London",
        street: "38 Creighton Rd",
      },
      {
        name: "Address 2",
        country: "United Kingdom",
        postcode: "N17 8HE",
        city: "London",
        street: "24 Academia Way",
      },
    ],
  })

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
          colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.1)"]}
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
                  accessoryLeft={() => <ArrowBackSvg />}
                  onPress={() => {
                    navigation.goBack()
                  }}
                />
                <Text style={styles.headerText}>Personal Data</Text>
              </View>
              <View style={styles.backHeaderRight}>
                <Button
                  onPress={() =>
                    navigation.navigate("Personal data edit", { personalData })
                  }
                  size="small"
                >
                  Edit
                </Button>
              </View>
            </View>
            <LinearGradient
              colors={["#00ABB9FF", "#00ABB900"]}
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
                      source={require("./../../content/profile-photo.png")}
                      style={styles.photo}
                    />
                    <View style={styles.info}>
                      <Text style={styles.text}>{personalData.name}</Text>
                      <Text style={styles.text}>{personalData.lastname}</Text>
                      <Text style={styles.text}>
                        {personalData.dateofbirth}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.text}>{personalData.email}</Text>
                </View>
                <LinearGradient
                  colors={["#00ABB9FF", "#00ABB900"]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={styles.addressSection}>
                  <Text style={styles.addressSectionHeader}>Address</Text>
                  {personalData.addresses.map((i) => (
                    <View style={styles.addressItem}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "500",
                          color: "#454545",
                        }}
                      >
                        {i.name}
                      </Text>
                      <Text style={{ fontSize: 14, color: "#454545" }}>
                        {`${i.street}, ${i.city} ${i.postcode} ${i.country}`}
                      </Text>
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
    backgroundColor: "#e7f4f6",
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
    fontSize: 20,
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
    paddingBottom: 30,
  },
  photo: {
    width: "30%",
    resizeMode: "cover",
    borderRadius: 100,
    aspectRatio: 1 / 1,
    alignSelf: "center",
  },
  info: {
    justifyContent: "space-between",
    paddingLeft: 30,
  },
  text: {
    fontSize: 18,
    color: "#454545",
  },
  addressSection: {
    padding: 20,
  },
  addressSectionHeader: {
    paddingBottom: 20,
    fontSize: 20,
    color: "#454545",
  },
  addressItem: {
    paddingBottom: 20,
  },
})

export default PersonalData
