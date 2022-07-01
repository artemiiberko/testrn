import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, ButtonGroup } from "@ui-kitten/components"
import SalderiaCleanSvg from "./../content/saluderia-clean.svg"
import FilterSvg from "./../content/filter.svg"
import DeleteCrossSvg from "./../content/deletecross.svg"

const NewBooking = ({ navigation }) => {
  const [filterList, setFilterList] = useState([
    "General massage",
    "Therapeutic back massage",
  ])
  const [timeButtonGroup, setTimeButtonGroup] = useState(1)
  const [placeButtonGroup, setPlaceButtonGroup] = useState(2)

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <LinearGradient
        colors={["rgba(0, 171, 185, 0)", "rgba(0, 171, 185, 0.35)"]}
        style={styles.linearGradient}
      >
        <LinearGradient
          colors={[
            "rgba(228, 244, 245, 1)",
            "rgba(228, 244, 245, 1)",
            "rgba(228, 244, 245, 0.5)",
          ]}
          style={styles.blurContainer}
        >
          <SafeAreaView>
            <View style={styles.blurContainerTop}>
              <SalderiaCleanSvg style={styles.logo} width="50%" />
            </View>
            <View style={styles.blurContainerBottom}>
              <Text
                style={{ color: "#00ABB9", fontSize: 28, fontWeight: "700" }}
              >
                Bookings
              </Text>
              <Text
                style={{ color: "#454545", fontSize: 28, fontWeight: "700" }}
              >
                0 €
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
        <ScrollView style={{ flex: 1, width: "100%", paddingTop: 185 }}>
          <View style={styles.filterSection}>
            <Button
              style={styles.button}
              size="medium"
              accessoryRight={() => (
                <FilterSvg
                  height="16px"
                  style={{ marginLeft: 10, resizeMode: "contain" }}
                />
              )}
              onPress={() => {
                console.log("filter")
                navigation.navigate("Therapy Filter")
              }}
            >
              {() => <Text style={styles.buttonText}>Therapy</Text>}
            </Button>
            <View style={styles.filterItemsContainer}>
              <View style={styles.filterItem}>
                <Text style={styles.filterItemText}>General massage</Text>
                <Button
                  style={styles.deleteButton}
                  size="medium"
                  accessoryRight={() => (
                    <DeleteCrossSvg
                      height="16px"
                      style={{ resizeMode: "contain" }}
                    />
                  )}
                  onPress={() => {
                    console.log("delete filter")
                  }}
                ></Button>
              </View>
              <View style={styles.filterItem}>
                <Text style={styles.filterItemText}>
                  Therapeutic back massage
                </Text>
                <Button
                  style={styles.deleteButton}
                  size="medium"
                  accessoryRight={() => (
                    <DeleteCrossSvg
                      height="16px"
                      style={{ resizeMode: "contain" }}
                    />
                  )}
                  onPress={() => {
                    console.log("delete filter")
                  }}
                ></Button>
              </View>
            </View>
          </View>
          <LinearGradient
            colors={["#00ABB9FF", "#00ABB900"]}
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 1 }}
          />
          <View style={styles.timePlaceSection}>
            <View style={styles.timeWhereContainer}>
              <Text style={styles.timeWhereText}>Длительность</Text>
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
                      1 час
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
                      1,5 часа
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
                      2 часа
                    </Text>
                  )}
                </Button>
              </ButtonGroup>
            </View>
            <View style={styles.timeWhereContainer}>
              <Text style={styles.timeWhereText}>Место</Text>
              <ButtonGroup style={styles.buttonGroup} appearance="outline">
                <Button
                  style={
                    placeButtonGroup === 1
                      ? styles.selectedButton
                      : styles.unseletedButton
                  }
                  onPress={() => setPlaceButtonGroup(1)}
                >
                  {() => (
                    <Text
                      style={
                        placeButtonGroup === 1
                          ? styles.selectedButtonGroupText
                          : styles.unselectedButtonGroupText
                      }
                    >
                      к себе
                    </Text>
                  )}
                </Button>
                <Button
                  style={
                    placeButtonGroup === 2
                      ? styles.selectedButton
                      : styles.unseletedButton
                  }
                  onPress={() => setPlaceButtonGroup(2)}
                >
                  {() => (
                    <Text
                      style={
                        placeButtonGroup === 2
                          ? styles.selectedButtonGroupText
                          : styles.unselectedButtonGroupText
                      }
                    >
                      к терапевту
                    </Text>
                  )}
                </Button>
              </ButtonGroup>
            </View>
          </View>
          <LinearGradient
            colors={["#00ABB9FF", "#00ABB900"]}
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 1 }}
          />
        </ScrollView>
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
  },
  blurContainer: {
    width: "100%",
    height: 185,
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
  filterSection: {
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
  },
  button: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  filterItemsContainer: {
    paddingVertical: 15,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A8A8A8",
    marginVertical: 5,
    borderRadius: 4,
  },
  filterItemText: { paddingLeft: 15, color: "#A8A8A8", fontSize: 18 },
  deleteButton: { backgroundColor: "transparent", borderWidth: 0 },
  timePlaceSection: {
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  timeWhereContainer: {
    marginBottom: 15,
  },
  timeWhereText: {
    fontSize: 18,
    color: "#454545",
    paddingBottom: 8,
    fontWeight: "500",
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
export default NewBooking
