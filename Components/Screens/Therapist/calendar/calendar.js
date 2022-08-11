import React, { useState } from "react"
import { View, Text } from "react-native"
import LayoutTherapist from "../../../Layouts/LayoutTherapist"

const HomeTherapist = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  return (
    <LayoutTherapist
      title=" "
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>CALENDAR</Text>
      </View>
    </LayoutTherapist>
  )
}
export default HomeTherapist
