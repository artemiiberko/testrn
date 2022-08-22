import React, { useState } from "react"
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import {
  Input,
  CheckBox,
  Button,
  ButtonGroup,
  useTheme,
} from "@ui-kitten/components"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import TimeSvg from "./../../content/time.svg"
import StarSvg from "./../../content/star.svg"
import StarFilledSvg from "./../../content/star-filled.svg"
import SmallCheckSvg from "./../../content/small-check.svg"

const Completed = () => {
  const [star, setStar] = useState()
  const [comment, setComment] = useState()
  const [isOpenChat, setIsOpenChat] = useState(true)
  const theme = useTheme()

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
              key={index}
              activeOpacity={0.5}
              onPress={() => {
                index + 1 === star ? setStar(0) : setStar(index + 1)
              }}
            >
              {star > index ? (
                <StarFilledSvg
                  fill={theme["color-primary-500"]}
                  height={20}
                  width={20}
                  style={{
                    marginHorizontal: 3,
                  }}
                />
              ) : (
                <StarSvg
                  style={{
                    marginHorizontal: 3,
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {star > 0 ? (
        <View>
          <LinearGradient
            colors={[theme["color-primary-500"], theme["color-primary-100"]]}
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 1 }}
          />
          <View style={{ padding: 20 }}>
            <Input
              style={{
                borderColor: theme["color-primary-500"],
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
const AwaitingConfirmation = ({ role }) => {
  const theme = useTheme()
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TimeSvg fill={theme["color-primary-500"]} height={25} />
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#454545" }}>
          Awaiting confirmation
        </Text>
      </View>
      {role === "client" ? (
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{ fontSize: 16, fontWeight: "500", maxWidth: "40%" }}
        >
          May be amended
        </Text>
      ) : (
        <Button size="small" onPress={() => console.log("confirm")}>
          {() => (
            <Text
              style={{
                color: "#FFF",
                fontWeight: "500",
                fontSize: 16,
                paddingHorizontal: 5,
              }}
            >
              Confirm
            </Text>
          )}
        </Button>
      )}
    </View>
  )
}
const ToCheckIn = () => {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <Button size="large" onPress={() => console.log("check-in")}>
        Check-in
      </Button>
    </View>
  )
}
const ToCheckOut = ({ finishedat }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#454545" }}>
          Finished at: <Text style={{ fontWeight: "700" }}>{finishedat}</Text>
        </Text>
      </View>

      <Button size="large" onPress={() => console.log("check-out")}>
        Check-out
      </Button>
    </View>
  )
}
const CanceledByTherapist = ({ role }) => {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500" }}>
        {role === "therapist" ? "Canceled by you" : "Canceled by therapist"}
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
const CanceledByClient = ({ role }) => {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500" }}>
        {role === "client" ? "Canceled by you" : "Canceled by client"}
      </Text>
    </View>
  )
}
const InProgressExt = ({ remaining, navigation, id }) => {
  const [timeButtonGroup, setTimeButtonGroup] = useState(1)
  const theme = useTheme()
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
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
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
                ? { backgroundColor: theme["color-primary-500"] }
                : { backgroundColor: "transparent" }
            }
            onPress={() => setTimeButtonGroup(1)}
          >
            {() => (
              <Text
                style={
                  timeButtonGroup === 1
                    ? [styles.buttonGroupText, { color: "#FFF" }]
                    : [
                        styles.buttonGroupText,
                        { color: theme["color-primary-500"] },
                      ]
                }
              >
                15 min
              </Text>
            )}
          </Button>
          <Button
            style={
              timeButtonGroup === 2
                ? { backgroundColor: theme["color-primary-500"] }
                : { backgroundColor: "transparent" }
            }
            onPress={() => setTimeButtonGroup(2)}
          >
            {() => (
              <Text
                style={
                  timeButtonGroup === 2
                    ? [styles.buttonGroupText, { color: "#FFF" }]
                    : [
                        styles.buttonGroupText,
                        { color: theme["color-primary-500"] },
                      ]
                }
              >
                30 min
              </Text>
            )}
          </Button>
          <Button
            style={
              timeButtonGroup === 3
                ? { backgroundColor: theme["color-primary-500"] }
                : { backgroundColor: "transparent" }
            }
            onPress={() => setTimeButtonGroup(3)}
          >
            {() => (
              <Text
                style={
                  timeButtonGroup === 3
                    ? [styles.buttonGroupText, { color: "#FFF" }]
                    : [
                        styles.buttonGroupText,
                        { color: theme["color-primary-500"] },
                      ]
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
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
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
  const theme = useTheme()
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
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
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
  role,
  finishedat,
}) => {
  const theme = useTheme()
  return (
    <LinearGradient
      colors={
        status === "canceled by client" || status === "canceled by therapist"
          ? ["#D3DADB", "#D3DADB"]
          : [theme["color-primary-100"], theme["color-warning-600"]]
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
                  backgroundColor:
                    where === "in call" ? theme["color-success-500"] : "#fff",
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
            colors={[theme["color-primary-500"], theme["color-primary-100"]]}
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
          colors={[theme["color-primary-500"], theme["color-primary-100"]]}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: 1 }}
        />
        {status === "canceled by client" ? (
          <CanceledByClient role={role} />
        ) : (
          true
        )}
        {status === "completed" ? <Completed /> : true}
        {status === "awaiting confirmation" ? (
          <AwaitingConfirmation role={role} />
        ) : (
          true
        )}
        {status === "to check-in" ? <ToCheckIn /> : true}
        {status === "to check-out" ? (
          <ToCheckOut finishedat={finishedat} />
        ) : (
          true
        )}
        {status === "canceled by therapist" ? (
          <CanceledByTherapist role={role} />
        ) : (
          true
        )}
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
    backgroundColor: "#e5f6fb",
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
  buttonGroupText: {
    fontSize: 16,
    paddingHorizontal: 5,
    fontWeight: "500",
  },
})

export default BookingComponent
