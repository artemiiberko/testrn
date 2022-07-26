import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import { Button, RadioGroup, Radio } from "@ui-kitten/components"
import LayoutMin from "../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../content/arrow-back.svg"
import MasterCardSvg from "./../../content/mastercard.svg"
import VisaSvg from "./../../content/visa.svg"
import CardChooseSvg from "./../../content/cardchoose.svg"

const PaymentInfo = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [screenHeight, setScreenHeight] = useState()
  const [radioIndex, setRadioIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      type: "visa",
      digits: "5422 0087 0022 0071",
      expireDate: "08/24",
      cvv: "998",
    },
    {
      type: "mastercard",
      digits: "4752 1234 1234 5632",
      expireDate: "07/24",
      cvv: "997",
    },
    {
      type: "mastercard",
      digits: "4752 1234 1234 5632",
      expireDate: "07/24",
      cvv: "997",
    },
  ])

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
                <Text style={styles.headerText}>Payment Information</Text>
              </View>
              <View style={styles.backHeaderRight}>
                <Button
                  onPress={() => navigation.navigate("Payment Edit", { cards })}
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
                <RadioGroup
                  selectedIndex={radioIndex}
                  onChange={(index) => setRadioIndex(index)}
                  style={styles.selectContainer}
                >
                  {cards.map((item, index) => (
                    <Radio style={{ alignItems: "flex-start" }}>
                      {() => (
                        <View style={styles.cardContainer}>
                          <View style={styles.cardHeader}>
                            <View>
                              {item.type === "mastercard" ? (
                                <MasterCardSvg height={22} />
                              ) : (
                                <VisaSvg height={22} />
                              )}
                              {index === radioIndex ? (
                                <View
                                  style={{
                                    position: "absolute",
                                    top: -10,
                                    right: -5,
                                    backgroundColor: "#ddfafa",
                                    borderRadius: 20,
                                    borderColor: "#ddfafa",
                                    borderWidth: 2,
                                  }}
                                >
                                  <CardChooseSvg />
                                </View>
                              ) : (
                                true
                              )}
                            </View>
                            <Text
                              style={{
                                fontSize: 22,
                                color: "#A8A8A8",
                                paddingLeft: 5,
                              }}
                            >
                              {item.type === "mastercard"
                                ? "Master Card"
                                : "Visa"}
                            </Text>
                          </View>
                          <Text
                            style={{
                              color: "#222222",
                              fontSize: 22,
                              paddingVertical: 5,
                            }}
                          >
                            {`${item.digits.substring(
                              0,
                              4
                            )} **** **** ${item.digits.substring(15, 19)}`}
                          </Text>
                        </View>
                      )}
                    </Radio>
                  ))}
                </RadioGroup>
                <Button
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 20,
                  }}
                >
                  Add card
                </Button>
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
  selectContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardContainer: { paddingLeft: 10, paddingBottom: 30 },
  cardHeader: { flexDirection: "row", alignItems: "center" },
})

export default PaymentInfo
