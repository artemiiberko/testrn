import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Modal,
  Pressable,
} from "react-native"
import { Button, Input, useTheme } from "@ui-kitten/components"
import LayoutMin from "../../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import TrashSvg from "./../../../content/trash.svg"

const PersonalDataEdit = ({ navigation, route }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [errorText, setErrorText] = useState("")
  const [name, setName] = useState(route.params.personalData.name)
  const [lastName, setLastName] = useState(route.params.personalData.lastname)
  const [dateOfBirth, setDateOfBirth] = useState(
    route.params.personalData.dateofbirth
  )
  const [email, setEmail] = useState(route.params.personalData.email)
  const [addresses, setAddresses] = useState(
    route.params.personalData.addresses
  )
  const [selectedAddress, setSelectedAddress] = useState(0)
  const theme = useTheme()

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
                    <Button size="small" onPress={() => console.log("save")}>
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
                  <View style={styles.mainSection}>
                    <View style={styles.mainInfo}>
                      <Image
                        source={require("./../../../content/profile-photo.png")}
                        style={styles.photo}
                      />
                      <View style={styles.info}>
                        <Input
                          style={styles.input}
                          textStyle={{ fontSize: 18 }}
                          size="medium"
                          color="rgba(69, 69, 69, 1)"
                          value={name}
                          onChangeText={(nextValue) => {
                            setName(nextValue)
                          }}
                          placeholder="First Name"
                          textContentType="givenName"
                        />
                        <Input
                          style={styles.input}
                          textStyle={{ fontSize: 18 }}
                          size="medium"
                          color="rgba(69, 69, 69, 1)"
                          value={lastName}
                          onChangeText={(nextValue) => {
                            setLastName(nextValue)
                          }}
                          placeholder="Last Name"
                          textContentType="familyName"
                        />
                        <Input
                          style={styles.input}
                          textStyle={{ fontSize: 18 }}
                          size="medium"
                          color="rgba(69, 69, 69, 1)"
                          value={dateOfBirth}
                          keyboardType="number-pad"
                          onChangeText={(nextValue) => {
                            let controlledValue = nextValue
                            nextValue.length === 3 && nextValue[2] !== "."
                              ? (controlledValue =
                                  controlledValue.slice(0, 2) +
                                  "." +
                                  controlledValue.slice(2, 3))
                              : nextValue.length === 6 && nextValue[5] !== "."
                              ? (controlledValue =
                                  controlledValue.slice(0, 5) +
                                  "." +
                                  controlledValue.slice(5, 6))
                              : false
                            setDateOfBirth(controlledValue)
                          }}
                          maxLength={10}
                          placeholder="Date of Birth"
                        />
                      </View>
                    </View>
                    <Input
                      style={styles.input}
                      textStyle={{ fontSize: 18 }}
                      size="medium"
                      color="rgba(69, 69, 69, 1)"
                      value={email}
                      onChangeText={(nextValue) => {
                        setEmail(nextValue)
                      }}
                      placeholder="Email"
                      autoCapitalize="none"
                      textContentType="emailAddress"
                      keyboardType="email-address"
                    />
                  </View>
                  <LinearGradient
                    colors={["#00ABB9FF", "#00ABB900"]}
                    start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ height: 1 }}
                  />
                  <View style={styles.addressSection}>
                    <View style={styles.addressSectionHeader}>
                      <Text style={styles.addressSectionHeaderText}>
                        Address
                      </Text>
                      <Button
                        size="small"
                        onPress={() =>
                          addresses.length < 5
                            ? setAddresses((prev) => [...prev, {}])
                            : true
                        }
                      >
                        Add address
                      </Button>
                    </View>
                    <View style={styles.addressButtons}>
                      {addresses.map((item, index) => (
                        <Button
                          key={index}
                          status={
                            selectedAddress === index ? "primary" : "warning"
                          }
                          onPress={() => {
                            setSelectedAddress(index)
                          }}
                          style={styles.addressButton}
                        >
                          {index + 1}
                        </Button>
                      ))}
                    </View>
                    <View style={styles.addressInputs}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={{ flexBasis: "50%" }}>
                          <Input
                            style={[styles.input, { marginRight: 5 }]}
                            textStyle={{ fontSize: 18 }}
                            size="medium"
                            color="rgba(69, 69, 69, 1)"
                            value={addresses[selectedAddress].name}
                            onChangeText={(nextValue) => {
                              let newAddress = addresses[selectedAddress]
                              newAddress.name = nextValue
                              let newAddresses = [...addresses]
                              newAddresses[selectedAddress] = newAddress
                              setAddresses(newAddresses)
                            }}
                            placeholder="Address name"
                          />
                          <Input
                            style={[styles.input, { marginRight: 5 }]}
                            textStyle={{ fontSize: 18 }}
                            size="medium"
                            color="rgba(69, 69, 69, 1)"
                            value={addresses[selectedAddress].country}
                            onChangeText={(nextValue) => {
                              let newAddress = addresses[selectedAddress]
                              newAddress.country = nextValue
                              let newAddresses = [...addresses]
                              newAddresses[selectedAddress] = newAddress
                              setAddresses(newAddresses)
                            }}
                            placeholder="Country"
                            textContentType="countryName"
                          />
                          <Input
                            style={[styles.input, { marginRight: 5 }]}
                            textStyle={{ fontSize: 18 }}
                            size="medium"
                            color="rgba(69, 69, 69, 1)"
                            value={addresses[selectedAddress].postcode}
                            onChangeText={(nextValue) => {
                              let newAddress = addresses[selectedAddress]
                              newAddress.postcode = nextValue
                              let newAddresses = [...addresses]
                              newAddresses[selectedAddress] = newAddress
                              setAddresses(newAddresses)
                            }}
                            placeholder="Post code"
                            textContentType="postalCode"
                          />
                        </View>
                        <View style={styles.rightInputsContainer}>
                          <Button
                            style={styles.deleteButton}
                            status="danger"
                            onPress={() => {
                              if (addresses.length > 1) {
                                let newAddresses = [...addresses]
                                newAddresses = newAddresses.filter(
                                  (item, index) => index !== selectedAddress
                                )
                                setAddresses(newAddresses)
                                setSelectedAddress(0)
                              } else {
                                setErrorText(
                                  "You must have at least one address!"
                                )
                                setModalVisible(true)
                              }
                            }}
                          >
                            <TrashSvg height={20} />
                          </Button>
                          <Input
                            style={[styles.input, { marginLeft: 5 }]}
                            textStyle={{ fontSize: 18 }}
                            size="medium"
                            color="rgba(69, 69, 69, 1)"
                            value={addresses[selectedAddress].city}
                            onChangeText={(nextValue) => {
                              let newAddress = addresses[selectedAddress]
                              newAddress.city = nextValue
                              let newAddresses = [...addresses]
                              newAddresses[selectedAddress] = newAddress
                              setAddresses(newAddresses)
                            }}
                            placeholder="City"
                            textContentType="addressCity"
                          />
                        </View>
                      </View>
                      <View style={{ paddingBottom: 40 }}>
                        <Input
                          style={styles.input}
                          textStyle={{ fontSize: 18 }}
                          size="medium"
                          color="rgba(69, 69, 69, 1)"
                          value={addresses[selectedAddress].street}
                          onChangeText={(nextValue) => {
                            let newAddress = addresses[selectedAddress]
                            newAddress.street = nextValue
                            let newAddresses = [...addresses]
                            newAddresses[selectedAddress] = newAddress
                            setAddresses(newAddresses)
                          }}
                          placeholder="Street"
                          textContentType="fullStreetAddress"
                        />
                      </View>
                    </View>
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
    justifyContent: "space-between",
    paddingLeft: 30,
    flexGrow: 1,
  },
  input: {
    backgroundColor: "#6D6D6D26",
    paddingVertical: 5,
  },
  addressSection: {
    padding: 20,
  },
  addressSectionHeader: {
    flexDirection: "row",
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  addressSectionHeaderText: {
    fontSize: 20,
    color: "#454545",
  },
  addressButtons: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  addressButton: {
    paddingHorizontal: 0,
    marginRight: 10,
    borderColor: "transparent",
  },
  rightInputsContainer: {
    flexBasis: "50%",
    justifyContent: "space-between",
  },
  deleteButton: {
    alignSelf: "flex-end",
    paddingHorizontal: 0,
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

export default PersonalDataEdit
