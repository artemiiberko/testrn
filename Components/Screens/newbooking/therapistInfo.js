import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import { Button } from "@ui-kitten/components"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutMore from "./../../Layouts/LayoutMore"
import SmallCheckSvg from "./../../../content/small-check.svg"

const TherapistInfo = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [screenHeight, setScreenHeight] = useState()
  const [therapist, setTherapist] = useState({})

  useEffect(() => {
    console.log(route.params.id)
    /* getting object of therapist by id from API - route.params.id */
    setTherapist({
      id: 1,
      name: "Stanley Gardner",
      rating: "4,8",
      experience: "5 year",
      bookings: "207",
      reviews: "58",
      languages: ["English", "Deutchy", "France"],
      services: [
        "Osteopathy",
        "Physiotherapie",
        "Deep-tissue massage",
        "Pregnancy massage",
      ],
      info: "Cras nec fermentum erat, in aliquam lorem. Suspendisse potenti. Mauris nec ligula massa. Aliquam feugiat nulla ut vestibulum venenatis. Vestibulum dapibus pulvinar sem eget porta. Nulla facilisi. Donec rutrum lacus eu mauris pretium, sed egestas sapien luctus. Aliquam semper, nisl id semper condimentum, nisl risus auctor sapien, vitae tincidunt leo.",
    })
  }, [])

  return (
    <LayoutMore setHeaderHeight={setHeaderHeight} navigation={navigation}>
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
                <Text style={styles.headerText}>{therapist.name}</Text>
              </View>
              <View style={styles.backHeaderRight}>
                <View
                  style={{
                    backgroundColor: "#00ABB9",
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#FFF" }}>
                    {therapist.rating}
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
                      source={require("./../../../content/profile-photo.png")}
                      style={styles.photo}
                    />
                    <View style={styles.info}>
                      <Text style={styles.text}>
                        Experience:
                        <Text style={{ color: "#454545" }}>
                          {" "}
                          {therapist.experience}
                        </Text>
                      </Text>
                      <View style={styles.itemsSection}>
                        {therapist.languages
                          ? therapist.languages.map((i) => (
                              <View key={i} style={styles.itemContainer}>
                                <Text style={styles.itemText}>
                                  <Text style={{ color: "#454545" }}>{i}</Text>
                                </Text>
                              </View>
                            ))
                          : true}
                      </View>
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
                  colors={["#00ABB9FF", "#00ABB900"]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={styles.secondSection}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingBottom: 10,
                    }}
                  >
                    <SmallCheckSvg height={20} />
                    <Text
                      style={{
                        fontSize: 18,
                        paddingLeft: 10,
                        color: "#454545",
                      }}
                    >
                      Fully certified and insured
                    </Text>
                  </View>
                  <View style={styles.itemsSection}>
                    {therapist.services
                      ? therapist.services.map((i) => (
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
                  colors={["#00ABB9FF", "#00ABB900"]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={{ padding: 20 }}>
                  <Text style={{ fontSize: 18, color: "#454545" }}>
                    {therapist.info}
                  </Text>
                </View>
              </View>
            </ScrollView>
          </BlurView>
        </LinearGradient>
      </View>
    </LayoutMore>
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

export default TherapistInfo
