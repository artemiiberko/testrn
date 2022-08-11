import React, { useState } from "react"
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button, useTheme, ButtonGroup } from "@ui-kitten/components"
import SalderiaCleanSvg from "./../../content/saluderia-clean.svg"
import CalendarSvg from "./../../content/calendar.svg"

const LayoutTherapist = ({
  navigation,
  children,
  setHeaderHeight,
  button = true,
  white = false,
  title,
  setShowNew,
}) => {
  const theme = useTheme()
  const [filterGroup, setFilterGroup] = useState(2)
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={
          white
            ? ["transparent", "#00A3FF26", "transparent"]
            : [theme["color-primary-100"], theme["color-success-500"]]
        }
        style={styles.linearGradient}
        start={white ? { x: -1, y: 0 } : { x: 0.5, y: 0 }}
        end={white ? { x: 1, y: 1.5 } : { x: 0.5, y: 1 }}
      >
        <LinearGradient
          colors={[
            "rgba(228, 244, 245, 1)",
            "rgba(228, 244, 245, 1)",
            "rgba(228, 244, 245, 0.5)",
          ]}
          style={styles.blurContainer}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            setHeaderHeight(height)
          }}
        >
          <SafeAreaView>
            <View style={styles.blurContainerTop}>
              <SalderiaCleanSvg
                fill={theme["color-primary-500"]}
                style={styles.logo}
                width="50%"
              />
              {button ? (
                <Button
                  style={styles.button}
                  size="medium"
                  onPress={() => {
                    navigation.navigate("Calendar Navigator")
                  }}
                >
                  {() => <CalendarSvg height={25} />}
                </Button>
              ) : (
                true
              )}
            </View>
            {title ? (
              <View style={styles.blurContainerBottom}>
                <Text
                  style={{
                    color: theme["color-primary-500"],
                    fontSize: 28,
                    fontWeight: "700",
                  }}
                >
                  {title}
                </Text>
              </View>
            ) : (
              <View style={styles.blurContainerBottom}>
                <Text
                  style={{
                    color: theme["color-primary-500"],
                    fontSize: 28,
                    fontWeight: "700",
                  }}
                >
                  Bookings
                </Text>
                <ButtonGroup
                  size="small"
                  style={styles.buttonGroup}
                  appearance="outline"
                >
                  <Button
                    style={
                      filterGroup === 1
                        ? styles.selectedButton
                        : styles.unseletedButton
                    }
                    onPress={() => (setFilterGroup(1), setShowNew(true))}
                  >
                    {() => (
                      <Text
                        style={
                          filterGroup === 1
                            ? styles.selectedButtonGroupText
                            : styles.unselectedButtonGroupText
                        }
                      >
                        New 3
                      </Text>
                    )}
                  </Button>
                  <Button
                    style={
                      filterGroup === 2
                        ? styles.selectedButton
                        : styles.unseletedButton
                    }
                    onPress={() => (setFilterGroup(2), setShowNew(false))}
                  >
                    {() => (
                      <Text
                        style={
                          filterGroup === 2
                            ? styles.selectedButtonGroupText
                            : styles.unselectedButtonGroupText
                        }
                      >
                        Total 7
                      </Text>
                    )}
                  </Button>
                </ButtonGroup>
              </View>
            )}
          </SafeAreaView>
        </LinearGradient>
        {children}
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
  button: {},
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  buttonGroup: {
    backgroundColor: "transparent",
    borderRadius: 6,
  },
  selectedButton: {
    backgroundColor: "#00A3FF",
    maxHeight: "100%",
  },
  unseletedButton: {
    backgroundColor: "transparent",
    maxHeight: "100%",
  },
  selectedButtonGroupText: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 0,
    fontWeight: "500",
  },
  unselectedButtonGroupText: {
    color: "#00A3FF",
    fontSize: 16,
    paddingHorizontal: 0,
    fontWeight: "500",
  },
})
export default LayoutTherapist
