import React, { useState } from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import { Input, CheckBox, Button, ButtonGroup } from "@ui-kitten/components"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import TimeSvg from "./../../content/time.svg"
import StarSvg from "./../../content/star.svg"
import SmallCheckSvg from "./../../content/small-check.svg"

const Completed = () => {
  const [star, setStar] = useState()
  const [comment, setComment] = useState()
  const [isOpenChat, setIsOpenChat] = useState(true)
  return (
    <View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#454545" }}>
          Completed
        </Text>
        <View style={{ flexDirection: "row" }}>
          {[...Array(5)].map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                index + 1 === star ? setStar(0) : setStar(index + 1)
              }}
            >
              <StarSvg
                style={{
                  marginHorizontal: 3,
                  backgroundColor: star > index ? "#00ABB9" : "transparent",
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {star > 0 ? (
        <View>
          <LinearGradient
            colors={["#00ABB9FF", "#00ABB900"]}
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 1 }}
          />
          <View style={{ padding: 20 }}>
            <Input
              style={{
                borderColor: "#00ABB9",
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "transparent",
              }}
              placeholderTextColor="#454545"
              textStyle={{ fontSize: 18, fontWeight: "600" }}
              size="large"
              color="rgba(69, 69, 69, 1)"
              value={comment}
              onChangeText={(nextValue) => {
                setComment(nextValue)
              }}
              placeholder="Leave a coment"
              multiline
              height={70}
              blurOnSubmit
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 20,
                justifyContent: "space-between",
              }}
            >
              <CheckBox
                checked={isOpenChat}
                onChange={(nextChecked) => {
                  setIsOpenChat(nextChecked)
                }}
              >
                {() => (
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: "#454545",
                      fontWeight: "700",
                    }}
                  >
                    Allow open chat
                  </Text>
                )}
              </CheckBox>
              <Button
                style={{ alignSelf: "center" }}
                size="medium"
                onPress={() => {
                  console.log("complete")
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
                    Complete
                  </Text>
                )}
              </Button>
            </View>
          </View>
        </View>
      ) : (
        true
      )}
    </View>
  )
}
const AwaitingConfirmation = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TimeSvg
          height="100%"
          style={{ resizeMode: "contain", height: "auto" }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#454545" }}>
          Awaiting confirmation
        </Text>
      </View>
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={{ fontSize: 16, fontWeight: "500", maxWidth: "40%" }}
      >
        May be amended
      </Text>
    </View>
  )
}
const CanceledByTherapist = () => {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500" }}>
        Canceled by therapist
      </Text>
    </View>
  )
}
const FullRefund = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#454545",
          maxWidth: "90%",
        }}
      >
        Cancelation in 24 hours or more full refund
      </Text>
      <SmallCheckSvg height="100%" style={{ resizeMode: "contain" }} />
    </View>
  )
}
const NoRefund = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#454545",
          maxWidth: "90%",
        }}
      >
        Cancelation in 24 hours or less no refund
      </Text>
      <SmallCheckSvg height="100%" style={{ resizeMode: "contain" }} />
    </View>
  )
}
const CanceledByYou = () => {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Canceled by you</Text>
    </View>
  )
}
const InProgressExt = ({ remaining, navigation, id }) => {
  const [timeButtonGroup, setTimeButtonGroup] = useState(1)
  return (
    <View>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#454545" }}>
          In progress. Remaining:{" "}
          <Text style={{ fontWeight: "700" }}>{remaining}</Text>
        </Text>
      </View>
      <LinearGradient
        colors={["#00ABB9FF", "#00ABB900"]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 15,
        }}
      >
        <ButtonGroup style={styles.buttonGroup} appearance="outline">
          <Button
            style={
              timeButtonGroup === 1
                ? styles.selectedButton
                : styles.unseletedButton
            }
            onPress={() => setTimeButtonGroup(1)}
          >
            {() => (
              <Text
                style={
                  timeButtonGroup === 1
                    ? styles.selectedButtonGroupText
                    : styles.unselectedButtonGroupText
                }
              >
                15 min
              </Text>
            )}
          </Button>
          <Button
            style={
              timeButtonGroup === 2
                ? styles.selectedButton
                : styles.unseletedButton
            }
            onPress={() => setTimeButtonGroup(2)}
          >
            {() => (
              <Text
                style={
                  timeButtonGroup === 2
                    ? styles.selectedButtonGroupText
                    : styles.unselectedButtonGroupText
                }
              >
                30 min
              </Text>
            )}
          </Button>
          <Button
            style={
              timeButtonGroup === 3
                ? styles.selectedButton
                : styles.unseletedButton
            }
            onPress={() => setTimeButtonGroup(3)}
          >
            {() => (
              <Text
                style={
                  timeButtonGroup === 3
                    ? styles.selectedButtonGroupText
                    : styles.unselectedButtonGroupText
                }
              >
                1 h
              </Text>
            )}
          </Button>
        </ButtonGroup>
        <Button
          size="medium"
          style={{ paddingHorizontal: 0 }}
          onPress={() => console.log("extend")}
        >
          Extand
        </Button>
      </View>
      <LinearGradient
        colors={["#00ABB9FF", "#00ABB900"]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />
      <Button
        status="danger"
        style={{ alignSelf: "flex-start", margin: 15 }}
        onPress={() => navigation.navigate("Terminate", { id })}
      >
        Terminate
      </Button>
    </View>
  )
}
const InProgressNoext = ({ remaining }) => {
  return (
    <View>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#454545" }}>
          In progress. Remaining:{" "}
          <Text style={{ fontWeight: "700" }}>{remaining}</Text>
        </Text>
      </View>
      <LinearGradient
        colors={["#00ABB9FF", "#00ABB900"]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Sorry, extension not possible
        </Text>
      </View>
    </View>
  )
}

const BookingComponent = ({
  status,
  name,
  date,
  starttime,
  endtime,
  where,
  price,
  id,
  navigation,
  remaining,
}) => {
  return (
    <LinearGradient
      colors={
        status === "canceled by you" || status === "canceled by therapist"
          ? ["#D3DADB", "#D3DADB"]
          : ["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.1)"]
      }
      style={styles.card}
    >
      <BlurView intensity={100} style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            console.log(remaining)
            navigation.navigate("Booking Information", {
              id: id,
            })
          }}
        >
          <View style={styles.infoSection}>
            <Image
              source={require("./../../content/profile-photo.png")}
              style={styles.photo}
            />
            <View style={styles.infoText}>
              <Text
                style={{ color: "#454545", fontSize: 22, fontWeight: "700" }}
              >
                {name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#454545", fontSize: 22 }}>{date}</Text>
                <Text
                  style={{
                    color: "#454545",
                    fontSize: 16,
                    paddingLeft: 10,
                    marginBottom: -4,
                  }}
                >
                  {starttime} - {endtime}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 25,
                  padding: 3,
                  paddingHorizontal: 10,
                  alignSelf: "flex-start",
                }}
              >
                <Text style={{ fontSize: 16, color: "#454545" }}>{where}</Text>
              </View>
            </View>
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
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#454545", fontSize: 32, fontWeight: "700" }}
              >
                {price} €
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <LinearGradient
          colors={["#00ABB9FF", "#00ABB900"]}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: 1 }}
        />
        {status === "canceled by you" ? <CanceledByYou /> : true}
        {status === "completed" ? <Completed /> : true}
        {status === "awaiting confirmation" ? <AwaitingConfirmation /> : true}
        {status === "canceled by therapist" ? <CanceledByTherapist /> : true}
        {status === "full refund" ? <FullRefund /> : true}
        {status === "no refund" ? <NoRefund /> : true}
        {status === "in progress-ext" ? (
          <InProgressExt
            remaining={remaining}
            navigation={navigation}
            id={id}
          />
        ) : (
          true
        )}
        {status === "in progress-noext" ? (
          <InProgressNoext remaining={remaining} />
        ) : (
          true
        )}
      </BlurView>
    </LinearGradient>
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
  infoText: {
    justifyContent: "space-between",
    paddingLeft: 10,
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
  buttonGroup: {
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    borderRadius: 6,
  },
  selectedButton: {
    backgroundColor: "#00ABB9",
  },
  unseletedButton: { backgroundColor: "transparent" },
  selectedButtonGroupText: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 5,
    fontWeight: "500",
  },
  unselectedButtonGroupText: {
    color: "#00ABB9",
    fontSize: 16,
    paddingHorizontal: 5,
    fontWeight: "500",
  },
})

export default BookingComponent
