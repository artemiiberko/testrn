import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { Button, useTheme } from "@ui-kitten/components"
import LayoutMin from "../../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import ArrowForwardSvg from "../../../content/arrow-forward.svg"

const SettingsMenu = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [screenHeight, setScreenHeight] = useState()
  const theme = useTheme()

  return (
    <LayoutMin
      title=" "
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      <View
        style={{ flex: 1, paddingTop: headerHeight }}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout
          setScreenHeight(height)
        }}
      >
        <LinearGradient
          colors={[theme["color-primary-100"], theme["color-warning-600"]]}
          style={[
            styles.card,
            {
              maxHeight:
                Platform.OS === "ios"
                  ? screenHeight && headerHeight
                    ? screenHeight - headerHeight - 90 - 20
                    : "100%"
                  : screenHeight && headerHeight
                  ? screenHeight - headerHeight - 60 - 20
                  : "100%",
            },
          ]}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            setCardHeight(height)
          }}
        >
          <BlurView intensity={100}>
            <View style={styles.backHeader}>
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
                <Text style={styles.headerText}>Settings</Text>
              </View>
            </View>
            <LinearGradient
              colors={[theme["color-primary-500"], theme["color-primary-100"]]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            <ScrollView
              scrollEnabled={scrollHeight + 35 > cardHeight ? true : false}
            >
              <View
                onLayout={(event) => {
                  const { height } = event.nativeEvent.layout
                  setScrollHeight(height)
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Settings Change Pass")}
                  style={styles.menuItem}
                  activeOpacity={0.5}
                >
                  <Text style={styles.menuItemText}>Password</Text>
                  <ArrowForwardSvg
                    fill={theme["color-primary-500"]}
                    height={20}
                  />
                </TouchableOpacity>
                <LinearGradient
                  colors={[
                    theme["color-primary-500"],
                    theme["color-primary-100"],
                  ]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("Settings Notification")}
                  style={styles.menuItem}
                  activeOpacity={0.5}
                >
                  <Text style={styles.menuItemText}>Notification</Text>
                  <ArrowForwardSvg
                    fill={theme["color-primary-500"]}
                    height={20}
                  />
                </TouchableOpacity>
                <LinearGradient
                  colors={[
                    theme["color-primary-500"],
                    theme["color-primary-100"],
                  ]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("Settings Account Delete")}
                  style={styles.menuItem}
                  activeOpacity={0.5}
                >
                  <Text style={styles.menuItemText}>Account deleting</Text>
                  <ArrowForwardSvg
                    fill={theme["color-primary-500"]}
                    height={20}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </BlurView>
        </LinearGradient>
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
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: "500",
  },
})

export default SettingsMenu
