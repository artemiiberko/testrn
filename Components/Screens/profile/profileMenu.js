import React, { useState } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native"
import { StackActions } from "@react-navigation/native"
import LayoutMore from "../../Layouts/LayoutMore"
import { LinearGradient } from "expo-linear-gradient"
import ArrowForwardSvg from "../../../content/arrow-forward.svg"
import LayoutTherapist from "../../Layouts/LayoutTherapist"
import { Button, useTheme } from "@ui-kitten/components"

const ProfileMenu = ({ navigation, role, setUser }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [status, setStatus] = useState("active")
  const theme = useTheme()

  const menuList = (
    <ScrollView
      style={{ flex: 1, width: "100%" }}
      contentContainerStyle={
        headerHeight
          ? {
              paddingBottom: Platform.OS === "ios" ? 90 : 60,
              flexGrow: 1,
              paddingTop: headerHeight,
            }
          : {}
      }
    >
      {role === "therapist" ? (
        <View style={styles.statusContainer}>
          <Text style={{ fontSize: 22, fontWeight: "700", color: "#454545" }}>
            Status
          </Text>
          <View style={styles.buttonGroup}>
            <Button
              style={
                status === "active"
                  ? [styles.buttonActive, { backgroundColor: "#00A3FF" }]
                  : styles.buttonActive
              }
              onPress={() => setStatus("active")}
            >
              {() => (
                <Text
                  style={
                    status === "active"
                      ? styles.buttonGroupText
                      : [styles.buttonGroupText, { color: "#00A3FF" }]
                  }
                >
                  Active
                </Text>
              )}
            </Button>
            <Button
              status="danger"
              style={
                status === "inactive"
                  ? [styles.buttonInactive, { backgroundColor: "#DC8D8D" }]
                  : styles.buttonInactive
              }
              onPress={() => setStatus("inactive")}
            >
              {() => (
                <Text
                  style={
                    status === "inactive"
                      ? styles.buttonGroupText
                      : [styles.buttonGroupText, { color: "#DC8D8D" }]
                  }
                >
                  Inactive
                </Text>
              )}
            </Button>
          </View>
        </View>
      ) : (
        true
      )}

      <LinearGradient
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Personal data")}
        style={styles.menuItem}
        activeOpacity={0.5}
      >
        <Text style={styles.menuItemText}>Personal data</Text>
        <ArrowForwardSvg fill={theme["color-primary-500"]} height={20} />
      </TouchableOpacity>
      <LinearGradient
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />
      <TouchableOpacity
        onPress={() =>
          role === " therapist"
            ? navigation.navigate("Payment Information Therapist")
            : navigation.navigate("Payment Information")
        }
        style={styles.menuItem}
        activeOpacity={0.5}
      >
        <Text style={styles.menuItemText}>Payment Information</Text>
        <ArrowForwardSvg fill={theme["color-primary-500"]} height={20} />
      </TouchableOpacity>
      <LinearGradient
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Invoice")}
        style={styles.menuItem}
        activeOpacity={0.5}
      >
        <Text style={styles.menuItemText}>Invoice</Text>
        <ArrowForwardSvg fill={theme["color-primary-500"]} height={20} />
      </TouchableOpacity>
      <LinearGradient
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />
      {role === "therapist" ? (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Bookings History")}
            style={styles.menuItem}
            activeOpacity={0.5}
          >
            <Text style={styles.menuItemText}>Bookings History</Text>
            <ArrowForwardSvg fill={theme["color-primary-500"]} height={20} />
          </TouchableOpacity>
          <LinearGradient
            colors={[theme["color-primary-500"], theme["color-primary-100"]]}
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 1 }}
          />
        </View>
      ) : (
        true
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        style={styles.menuItem}
        activeOpacity={0.5}
      >
        <Text style={styles.menuItemText}>Settings</Text>
        <ArrowForwardSvg fill={theme["color-primary-500"]} height={20} />
      </TouchableOpacity>
      <LinearGradient
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Help Menu")}
        style={styles.menuItem}
        activeOpacity={0.5}
      >
        <Text style={styles.menuItemText}>Help</Text>
        <ArrowForwardSvg fill={theme["color-primary-500"]} height={20} />
      </TouchableOpacity>
      <LinearGradient
        colors={[theme["color-primary-500"], theme["color-primary-100"]]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1 }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Button
          onPress={() => {
            navigation.dispatch(StackActions.replace("Login"))
            setUser({})
          }}
          status="danger"
          size="large"
          style={{ alignSelf: "center" }}
        >
          Logout
        </Button>
      </View>
    </ScrollView>
  )

  return role === "therapist" ? (
    <LayoutTherapist
      title="Profile"
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      {menuList}
    </LayoutTherapist>
  ) : (
    <LayoutMore
      title="Profile"
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      {menuList}
    </LayoutMore>
  )
}

const styles = StyleSheet.create({
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
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 6,
    width: "50%",
  },
  buttonActive: {
    backgroundColor: "transparent",
    maxHeight: "100%",
    flex: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  buttonInactive: {
    backgroundColor: "transparent",
    maxHeight: "100%",
    flex: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    paddingHorizontal: 0,
  },
  buttonGroupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
})

export default ProfileMenu
