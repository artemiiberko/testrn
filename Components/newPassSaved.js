import React from "react"
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@ui-kitten/components"
import SaluderiaSvg from "./../content/saluderia.svg"
import DoneSvg from "./../content/done.svg"
import ArrowBackSvg from "./../content/arrow-back.svg"

const NewPassSaved = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.35)"]}
        style={styles.linearGradient}
      >
        <Image
          style={styles.backgroundimg}
          source={require("./../content/backimg.png")}
        />
        <Image style={styles.backgroundimg} />
        <SafeAreaView>
          <SaluderiaSvg />
        </SafeAreaView>
        <LinearGradient
          colors={["rgba(240, 290, 260, 1)", "rgba(70, 125, 200, 1)"]}
          style={styles.formbodyContainer}
        >
          <Image
            style={{
              position: "absolute",
              bottom: -65,
              resizeMode: "contain",
              height: "93%",
              alignSelf: "center",
              opacity: 0.4,
            }}
            blurRadius={20}
            source={require("./../content/backimg.png")}
          />
          <View style={styles.formbody}>
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
                fontSize: 26,
                color: "#454545",
              }}
            >
              Password Recovery
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: "#A8A8A8",
                marginTop: 40,
                alignSelf: "center",
              }}
            >
              New password saved
            </Text>
            <View style={styles.inputContainer}>
              <DoneSvg style={styles.doneimg} />
            </View>
            <Button
              style={styles.button}
              size="medium"
              onPress={() => navigation.navigate("Login")}
            >
              {() => <Text style={styles.buttonText}>Sign-in</Text>}
            </Button>
          </View>
        </LinearGradient>
        <Text style={{ padding: 20, color: "grey" }}>Powered by Bookly</Text>
      </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backgroundimg: {
    height: "70%",
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
  },
  formbodyContainer: {
    width: "90%",
    borderRadius: 25,
    height: "75%",
    overflow: "hidden",
  },
  formbody: {
    width: "100%",
    padding: 20,
    height: "100%",
    alignItems: "center",
  },
  inputContainer: {
    width: "85%",
    marginVertical: 10,
  },
  button: {
    width: "60%",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
    margin: 7,
  },
  doneimg: {
    alignSelf: "center",
    margin: 50,
  },
})
export default NewPassSaved
