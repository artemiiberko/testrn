import React, { useState } from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, RadioGroup, Radio, useTheme } from "@ui-kitten/components"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutMore from "../../Layouts/LayoutMore"

const FilterTherapy = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [cardHeight, setCardHeight] = useState({})
  const [scrollHeight, setScrollHeight] = useState({})
  const [firstRadioIndex, setFirstRadioIndex] = useState(0)
  const [secondRadioIndex, setSecondRadioIndex] = useState(0)
  const theme = useTheme()

  return (
    <LayoutMore
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
      button={false}
      white={true}
    >
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
          <BlurView intensity={50}>
            <View
              style={[
                styles.backHeader,
                {
                  backgroundColor:
                    scrollHeight + 70 > cardHeight
                      ? "#e9f5f6FA"
                      : "transparent",
                },
              ]}
            >
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
                  accessoryLeft={() => (
                    <ArrowBackSvg fill={theme["color-primary-500"]} />
                  )}
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
                  Therapy
                </Text>
              </View>
              <LinearGradient
                colors={["#00ABB9FF", "#00ABB900"]}
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ height: 1 }}
              />
            </View>

            <ScrollView
              scrollEnabled={scrollHeight + 70 > cardHeight ? true : false}
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
                <View style={styles.firstSection}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: "#454545",
                    }}
                  >
                    Massage
                  </Text>
                  <RadioGroup
                    selectedIndex={firstRadioIndex}
                    onChange={(index) => setFirstRadioIndex(index)}
                  >
                    <Radio>
                      {() => (
                        <Text style={styles.firstRadioText}>Classical</Text>
                      )}
                    </Radio>
                    <Radio>
                      {() => <Text style={styles.firstRadioText}>Medical</Text>}
                    </Radio>
                    <Radio>
                      {() => (
                        <Text style={styles.firstRadioText}>Deep-tissue</Text>
                      )}
                    </Radio>
                    <Radio>
                      {() => (
                        <Text style={styles.firstRadioText}>Sweedish</Text>
                      )}
                    </Radio>
                  </RadioGroup>
                </View>
                <LinearGradient
                  colors={["#00ABB9FF", "#00ABB900"]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={styles.secondSection}>
                  <RadioGroup
                    selectedIndex={secondRadioIndex}
                    onChange={(index) => setSecondRadioIndex(index)}
                  >
                    <Radio>
                      {() => (
                        <Text style={styles.secondRadioText}>Osteopathy</Text>
                      )}
                    </Radio>
                    <Radio>
                      {() => (
                        <Text style={styles.secondRadioText}>
                          Physiotherapie
                        </Text>
                      )}
                    </Radio>
                    <Radio>
                      {() => (
                        <Text style={styles.secondRadioText}>Acupuncture</Text>
                      )}
                    </Radio>
                  </RadioGroup>
                </View>
                <LinearGradient
                  colors={["#00ABB9FF", "#00ABB900"]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <Button
                  style={{
                    width: "50%",
                    alignSelf: "center",
                    margin: 20,
                  }}
                  size="medium"
                  onPress={() => {
                    console.log("confirm")
                    navigation.goBack()
                  }}
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
            </ScrollView>
          </BlurView>
        </LinearGradient>
      </View>
    </LayoutMore>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
  },
  blurContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    paddingHorizontal: 30,
    position: "absolute",
    zIndex: 1,
  },
  blurContainerTop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "65%",
    alignItems: "center",
  },
  blurContainerBottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "35%",
  },
  logo: {
    marginTop: -15,
    width: "50%",
    resizeMode: "contain",
  },
  card: {
    backgroundColor: "#e5f6fb",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  backHeader: {
    justifyContent: "flex-start",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  firstSection: {
    paddingHorizontal: 60,
    paddingVertical: 20,
  },
  firstRadioText: {
    fontSize: 20,
    paddingLeft: 8,
    color: "#454545",
  },
  secondSection: {
    paddingHorizontal: 60,
    paddingVertical: 20,
  },
  secondRadioText: {
    fontSize: 20,
    paddingLeft: 8,
    fontWeight: "700",
    color: "#454545",
    padding: 10,
  },
})
export default FilterTherapy
