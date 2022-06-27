import React from "react"
import { StyleSheet, View, Image, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"

const Completed = () => {
  return (
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
        <Image
          style={{ marginHorizontal: 3 }}
          source={require("./../content/star.png")}
        ></Image>
        <Image
          style={{ marginHorizontal: 3 }}
          source={require("./../content/star.png")}
        ></Image>
        <Image
          style={{ marginHorizontal: 3 }}
          source={require("./../content/star.png")}
        ></Image>
        <Image
          style={{ marginHorizontal: 3 }}
          source={require("./../content/star.png")}
        ></Image>
        <Image
          style={{ marginHorizontal: 3 }}
          source={require("./../content/star.png")}
        ></Image>
      </View>
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
        <Image
          source={require("./../content/time.png")}
          style={{ resizeMode: "contain", height: "auto" }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#454545" }}>
          Awaiting confirmation
        </Text>
      </View>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>May be amended</Text>
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
      <Text style={{ fontSize: 16, fontWeight: "500", color: "#454545" }}>
        Cancelation in 24 hours or more full refund
      </Text>
      <Image
        source={require("./../content/check-small.png")}
        style={{ resizeMode: "contain", height: "auto" }}
      ></Image>
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
      <Text style={{ fontSize: 16, fontWeight: "500", color: "#454545" }}>
        Cancelation in 24 hours or less no refund
      </Text>
      <Image
        source={require("./../content/check-small.png")}
        style={{ resizeMode: "contain", height: "auto" }}
      ></Image>
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

const BookingComponent = ({ status }) => {
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
        <View style={styles.infoSection}>
          <Image
            source={require("./../content/profile-photo.png")}
            style={styles.photo}
          />
          <View style={styles.infoText}>
            <Text style={{ color: "#454545", fontSize: 22, fontWeight: "700" }}>
              Kim Potapov
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#454545", fontSize: 22 }}>13 June</Text>
              <Text
                style={{
                  color: "#454545",
                  fontSize: 16,
                  paddingLeft: 10,
                  marginBottom: -4,
                }}
              >
                15:00 - 16:30
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
              <Text style={{ fontSize: 16, color: "#454545" }}>
                at the therapist
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
        <View style={styles.priceSection}>
          <View>
            <View style={styles.procedure}>
              <Text style={styles.procedureText}>ck massage</Text>
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
            <Text style={{ color: "#454545", fontSize: 32, fontWeight: "700" }}>
              130 €
            </Text>
          </View>
        </View>
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
})

export default BookingComponent
