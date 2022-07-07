import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import SaluderiaSvg from "./../content/saluderia.svg"

const LayoutLogin = ({
  scrollHeight,
  modal = false,
  scroller = false,
  children,
  setModalVisible,
  modalVisible,
}) => {
  const [cardHeight, setCardHeight] = useState({})
  return (
    <View style={styles.container}>
      {modal !== false ? (
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
              <Text style={{ color: "#FF4B2B", fontSize: 22 }}>{modal}</Text>
            </View>
          </Pressable>
        </Modal>
      ) : (
        true
      )}

      <LinearGradient
        colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.35)"]}
        style={styles.linearGradient}
      >
        <Image
          style={styles.backgroundimg}
          source={require("./../content/backimg.png")}
        />
        <SafeAreaView>
          <SaluderiaSvg />
        </SafeAreaView>
        <LinearGradient
          colors={["rgba(240, 290, 260, 1)", "rgba(70, 125, 200, 1)"]}
          style={styles.formbodyContainer}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            scroller ? setCardHeight(height) : true
          }}
        >
          <Image
            style={{
              position: "absolute",
              bottom: "-11.5%",
              resizeMode: "contain",
              height: "93.4%",
              alignSelf: "center",
              opacity: 0.4,
            }}
            blurRadius={20}
            source={require("./../content/backimg.png")}
          />

          {scroller ? (
            <ScrollView
              contentContainerStyle={styles.formbodyscroller}
              scrollEnabled={scrollHeight > cardHeight ? true : false}
            >
              {children}
            </ScrollView>
          ) : (
            <View style={styles.formbody}>{children}</View>
          )}
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
  formbodyscroller: {
    width: "100%",
    padding: 20,
  },
  formbody: {
    width: "100%",
    padding: 20,
    height: "100%",
    alignItems: "center",
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
export default LayoutLogin
