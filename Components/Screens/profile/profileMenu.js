import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import LayoutMore from "../../Layouts/LayoutMore"
import { LinearGradient } from "expo-linear-gradient"
import ArrowForwardSvg from "../../../content/arrow-forward.svg"
import LayoutTherapist from "../../Layouts/LayoutTherapist"
import { useTheme } from "@ui-kitten/components"

const ProfileMenu = ({ navigation, role }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const theme = useTheme()

  const menuList = (
    <View style={{ flex: 1, paddingTop: headerHeight }}>
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
    </View>
  )

  return role === "therapist" ? (
    <LayoutTherapist
      title=" "
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      {menuList}
    </LayoutTherapist>
  ) : (
    <LayoutMore
      title=" "
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
})

export default ProfileMenu
