import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import LayoutMore from "../../Layouts/LayoutMore"
import { LinearGradient } from "expo-linear-gradient"
import ArrowForwardSvg from "../../../content/arrow-forward.svg"

const ProfileMenu = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()

  return (
    <LayoutMore
      title=" "
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      <View style={{ flex: 1, paddingTop: headerHeight }}>
        <LinearGradient
          colors={["#00ABB9FF", "#00ABB900"]}
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
          <ArrowForwardSvg height={20} />
        </TouchableOpacity>
        <LinearGradient
          colors={["#00ABB9FF", "#00ABB900"]}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: 1 }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Payment Information")}
          style={styles.menuItem}
          activeOpacity={0.5}
        >
          <Text style={styles.menuItemText}>Payment Information</Text>
          <ArrowForwardSvg height={20} />
        </TouchableOpacity>
        <LinearGradient
          colors={["#00ABB9FF", "#00ABB900"]}
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
          <ArrowForwardSvg height={20} />
        </TouchableOpacity>
        <LinearGradient
          colors={["#00ABB9FF", "#00ABB900"]}
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
          <ArrowForwardSvg height={20} />
        </TouchableOpacity>
        <LinearGradient
          colors={["#00ABB9FF", "#00ABB900"]}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: 1 }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Help")}
          style={styles.menuItem}
          activeOpacity={0.5}
        >
          <Text style={styles.menuItemText}>Help</Text>
          <ArrowForwardSvg height={20} />
        </TouchableOpacity>
        <LinearGradient
          colors={["#00ABB9FF", "#00ABB900"]}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: 1 }}
        />
      </View>
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
