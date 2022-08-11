import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProfileMenu from "../Screens/profile/profileMenu"
import PersonalData from "../Screens/profile/personalData"
import PaymentInfo from "./../Screens/profile/paymentInfo"
import Invoice from "./../Screens/profile/invoice"
import SettingsMenu from "./../Screens/profile/settingsMenu"
import HelpMenu from "./../Screens/profile/helpMenu"
import HelpSuspendisse from "../Screens/profile/helpSuspendisse"
import PersonalDataEdit from "./../Screens/profile/personalDataEdit"
import PaymentEdit from "./../Screens/profile/paymentInfoEdit"
import SettingsAccountDelete from "./../Screens/profile/settingsAccountDelete"
import SettingsChangePassword from "./../Screens/profile/settingsChangePass"
import SettingsNewPassword from "./../Screens/profile/settingsNewPass"
import SettingsNotification from "./../Screens/profile/settingsNotification"

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
        name="Settings New Pass"
        children={({ navigation, route }) => (
          <SettingsNewPassword navigation={navigation} route={route} />
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
        name="Help Menu"
        children={({ navigation, route }) => (
          <HelpMenu navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Help Suspendisse"
        children={({ navigation, route }) => (
          <HelpSuspendisse navigation={navigation} route={route} />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
