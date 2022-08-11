import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Button, useTheme } from "@ui-kitten/components"
import LayoutMin from "../../../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../../content/arrow-back.svg"

const PaymentInfo = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [screenHeight, setScreenHeight] = useState()
  const [card, setCard] = useState({
    accountHolder: "Marc Twen",
    accountNumber: "5422008700220071",
    sortCode: "20-20-20",
  })
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
                <Text style={styles.headerText}>Payment Information</Text>
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
                <View style={{ padding: 20 }}>
                  <Text style={[styles.infoText, { paddingBottom: 25 }]}>
                    Account Holder: {card.accountHolder}
                  </Text>
                  <Text style={styles.infoText}>
                    Account Number: {card.accountNumber}
                  </Text>
                  <Text style={styles.infoText}>
                    Sort-code: {card.sortCode}
                  </Text>
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
})

export default PaymentInfo
