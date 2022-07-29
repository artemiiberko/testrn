import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, RadioGroup, Radio, Input } from "@ui-kitten/components"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import LayoutMore from "../../Layouts/LayoutMore"

const FilterTherapist = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [cardHeight, setCardHeight] = useState({})
  const [scrollHeight, setScrollHeight] = useState({})
  const [firstRadioIndex, setFirstRadioIndex] = useState(0)
  const [secondRadioIndex, setSecondRadioIndex] = useState(0)
  const [favorite, setFavorite] = useState("")

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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "none"}
          style={{ flex: 1 }}
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
                    Therapist
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
                      Gender
                    </Text>
                    <RadioGroup
                      selectedIndex={firstRadioIndex}
                      onChange={(index) => setFirstRadioIndex(index)}
                    >
                      <Radio>
                        {() => <Text style={styles.firstRadioText}>Male</Text>}
                      </Radio>
                      <Radio>
                        {() => (
                          <Text style={styles.firstRadioText}>Female</Text>
                        )}
                      </Radio>
                      <Radio>
                        {() => <Text style={styles.firstRadioText}>All</Text>}
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
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        color: "#454545",
                      }}
                    >
                      Sort by
                    </Text>
                    <RadioGroup
                      selectedIndex={secondRadioIndex}
                      onChange={(index) => setSecondRadioIndex(index)}
                    >
                      <Radio>
                        {() => (
                          <Text style={styles.secondRadioText}>Rating</Text>
                        )}
                      </Radio>
                      <Radio>
                        {() => (
                          <Text style={styles.secondRadioText}>Distance</Text>
                        )}
                      </Radio>
                    </RadioGroup>
                  </View>
                  <View style={styles.thirdSection}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        color: "#454545",
                      }}
                    >
                      My favorites
                    </Text>
                    <Input
                      style={styles.input}
                      textStyle={{ fontSize: 18 }}
                      size="large"
                      color="rgba(69, 69, 69, 1)"
                      value={favorite}
                      onChangeText={(nextValue) => {
                        setFavorite(nextValue)
                      }}
                      placeholder="Name"
                    />
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
        </KeyboardAvoidingView>
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
    backgroundColor: "#e7f4f6",
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
    color: "#454545",
  },
  thirdSection: {
    paddingHorizontal: 60,
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "#A8A8A8",
    flexGrow: 1,
    marginVertical: 10,
  },
})
export default FilterTherapist
