import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  Pressable,
} from "react-native"
import { Button, Input } from "@ui-kitten/components"
import LayoutMin from "../../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import MasterCardSvg from "./../../../content/mastercard.svg"
import VisaSvg from "./../../../content/visa.svg"
import TrashSvg from "./../../../content/trash.svg"

const PaymentEdit = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [errorText, setErrorText] = useState("")
  const [cards, setCards] = useState(route.params.cards)

  return (
    <LayoutMin
      title=" "
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalview}>
            <Text style={{ color: "#FF4B2B", fontSize: 22 }}>{errorText}</Text>
          </View>
        </Pressable>
      </Modal>
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: headerHeight,
          marginBottom: Platform.OS === "ios" ? 90 : 60,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
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
            <BlurView intensity={100}>
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
                <View style={styles.backHeaderContainer}>
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
                      onPress={() => console.log(cardHeight)}
                      size="small"
                    >
                      Save
                    </Button>
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
                  <View style={styles.selectContainer}>
                    {cards.map((item, index) => (
                      <View key={index} style={styles.cardContainer}>
                        <View style={styles.cardHeader}>
                          <View style={styles.cardHeaderContainer}>
                            <View>
                              {item.type === "mastercard" ? (
                                <MasterCardSvg height={22} />
                              ) : (
                                <VisaSvg height={22} />
                              )}
                            </View>
                            <Text style={styles.cardType}>
                              {item.type === "mastercard"
                                ? "Master Card"
                                : "Visa"}
                            </Text>
                          </View>
                          <Button
                            style={styles.deleteButton}
                            status="danger"
                            onPress={() => {
                              if (cards.length > 1) {
                                let newCards = [...cards]
                                newCards = newCards.filter(
                                  (item, indexx) => indexx !== index
                                )
                                setCards(newCards)
                              } else {
                                setErrorText("You must have at least one card!")
                                setModalVisible(true)
                              }
                            }}
                          >
                            <TrashSvg height={20} />
                          </Button>
                        </View>
                        <Input
                          style={styles.input}
                          textStyle={{ fontSize: 18 }}
                          size="medium"
                          color="#222222"
                          value={cards[index].digits}
                          onChangeText={(nextValue) => {
                            let newCard = cards[index]
                            newCard.digits = nextValue.split(" ").join("")
                            if (newCard.digits.length > 0) {
                              newCard.digits = newCard.digits
                                .match(new RegExp(".{1,4}", "g"))
                                .join(" ")
                            }
                            let newCards = [...cards]
                            newCards[index] = newCard
                            setCards(newCards)
                          }}
                          placeholder="Card number"
                          keyboardType="number-pad"
                          maxLength={19}
                        />
                        <View style={styles.bottominputs}>
                          <Input
                            style={[
                              styles.bottominput,
                              {
                                width: 90,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                              },
                            ]}
                            textStyle={{ fontSize: 18, textAlign: "center" }}
                            size="medium"
                            color="#222222"
                            value={cards[index].expireDate}
                            onChangeText={(nextValue) => {
                              let newCard = cards[index]
                              newCard.expireDate = nextValue.split("/").join("")
                              if (newCard.expireDate.length > 0) {
                                newCard.expireDate = newCard.expireDate
                                  .match(new RegExp(".{1,2}", "g"))
                                  .join("/")
                              }
                              let newCards = [...cards]
                              newCards[index] = newCard
                              setCards(newCards)
                            }}
                            placeholder="Exp"
                            keyboardType="number-pad"
                            maxLength={5}
                          />
                          <Input
                            style={[
                              styles.bottominput,
                              {
                                width: 70,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                marginLeft: -1,
                              },
                            ]}
                            textStyle={{ fontSize: 18, textAlign: "center" }}
                            size="medium"
                            color="#222222"
                            value={cards[index].cvv}
                            onChangeText={(nextValue) => {
                              let newCard = cards[index]
                              newCard.cvv = nextValue
                              let newCards = [...cards]
                              newCards[index] = newCard
                              setCards(newCards)
                            }}
                            placeholder="CVV"
                            keyboardType="number-pad"
                            maxLength={3}
                          />
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </ScrollView>
            </BlurView>
          </LinearGradient>
        </KeyboardAvoidingView>
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
    fontSize: 18,
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
  cardContainer: {
    paddingLeft: 10,
    paddingBottom: 30,
    maxWidth: 250,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardType: {
    fontSize: 22,
    color: "#A8A8A8",
    paddingLeft: 5,
  },
  deleteButton: {
    alignSelf: "flex-end",
    paddingHorizontal: 0,
    marginHorizontal: 10,
  },
  input: {
    width: 230,
    paddingVertical: 20,
    backgroundColor: "transparent",
    borderColor: "#A8A8A8",
    borderRadius: 3,
  },
  bottominputs: {
    flexDirection: "row",
  },
  bottominput: {
    width: 220,
    backgroundColor: "transparent",
    borderColor: "#A8A8A8",
    paddingBottom: 20,
    borderRadius: 3,
  },
  modalview: {
    width: "90%",
    justifyContent: "space-between",
    backgroundColor: "#ebb1b8",
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: "15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default PaymentEdit
