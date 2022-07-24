import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import LayoutMore from "../Layouts/LayoutMore"
import { LinearGradient } from "expo-linear-gradient"

const PaymentEdit = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()

  return (
    <LayoutMore
      title=" "
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      <View style={{ flex: 1, paddingTop: headerHeight }}>
        <Text>Payment Edit</Text>
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

export default PaymentEdit
