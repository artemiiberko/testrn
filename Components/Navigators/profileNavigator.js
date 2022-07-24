import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Messages from "../Screens/messages"
import ProfileMenu from "../Screens/profileMenu"
import PersonalData from "../Screens/personalData"
import PaymentInfo from "./../Screens/paymentInfo"
import Invoice from "./../Screens/invoice"
import SettingsMenu from "./../Screens/settingsMenu"
import Help from "./../Screens/help"
import PersonalDataEdit from "./../Screens/personalDataEdit"
import PaymentEdit from "./../Screens/paymentInfoEdit"
import SettingsAccountDelete from "./../Screens/settingsAccountDelete"
import SettingsChangePassword from "./../Screens/settingsChangePass"
import SettingsNotification from "./../Screens/settingsNotification"

const ProfileNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        children={({ navigation }) => <ProfileMenu navigation={navigation} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Personal data"
        children={({ navigation, route }) => (
          <PersonalData navigation={navigation} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Personal data edit"
        children={({ navigation, route }) => (
          <PersonalDataEdit navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment Information"
        children={({ navigation, route }) => (
          <PaymentInfo navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment Edit"
        children={({ navigation, route }) => (
          <PaymentEdit navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Invoice"
        children={({ navigation, route }) => (
          <Invoice navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        children={({ navigation, route }) => (
          <SettingsMenu navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings Account Delete"
        children={({ navigation, route }) => (
          <SettingsAccountDelete navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings Change Pass"
        children={({ navigation, route }) => (
          <SettingsChangePassword navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings Notification"
        children={({ navigation, route }) => (
          <SettingsNotification navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Help"
        children={({ navigation, route }) => (
          <Help navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
