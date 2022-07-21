import { useState } from "react"
import { LogBox, Platform, StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ApplicationProvider } from "@ui-kitten/components"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as eva from "@eva-design/eva"
import Login from "./Components/login"
import Signup from "./Components/signup"
import PasswordRecovery from "./Components/passRecovery"
import { default as theme } from "./custom-theme.json"
import ConfirmCode from "./Components/confirmationCode"
import SetNewPass from "./Components/setNewPass"
import NewPassSaved from "./Components/newPassSaved"
import Home from "./Components/home"
import HomeSvg from "./content/home.svg"
import ProfileSvg from "./content/profile.svg"
import MessagesSvg from "./content/messages.svg"
import BookingInfo from "./Components/bookingInfo"
import ConfirmCancelation from "./Components/confirmCancelation"
import NewBookingNavigator from "./Components/newBookingNavigator"
import Messages from "./Components/messages"
import MessagesNavigator from "./Components/messagesNavigator"

LogBox.ignoreAllLogs() //Ignore all log notifications

export default function App() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const [isNotification, setIsNotification] = useState(true)

  const notificationStyle = {
    tabBarIcon: (tab) => (
      <MessagesSvg
        opacity={tab.focused ? 1 : 0.5}
        height={30}
        style={{
          resizeMode: "contain",
        }}
      />
    ),
    tabBarBadgeStyle: {
      top: 8,
      left: 5,
      minWidth: 16,
      minHeight: 16,
      maxWidth: 16,
      maxHeight: 16,
      borderRadius: 8,
      backgroundColor: "#00FF29",
      borderWidth: 2,
      borderColor: "#EAF6F7",
    },
    tabBarBadge: "",
  }

  function Main() {
    return (
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: Platform.OS === "ios" ? 90 : 60,
            paddingHorizontal: 0,
            paddingTop: 0,
            backgroundColor: "#EAF6F7",
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {
            borderRightWidth: route.name === "Profile" ? 0 : 1,
            borderColor: "#00ABB959",
          },
        })}
      >
        <Tab.Screen
          name="Home"
          children={({ navigation, route }) => (
            <Home route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <HomeSvg
                height={30}
                opacity={tab.focused ? 1 : 0.5}
                style={{
                  height: 30,
                  resizeMode: "contain",
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Messages Navigator"
          children={({ navigation, route }) => (
            <MessagesNavigator route={route} navigation={navigation} />
          )}
          options={
            isNotification
              ? notificationStyle
              : {
                  tabBarIcon: (tab) => (
                    <MessagesSvg
                      opacity={tab.focused ? 1 : 0.5}
                      height={30}
                      style={{
                        resizeMode: "contain",
                      }}
                    />
                  ),
                }
          }
        />

        <Tab.Screen
          name="Profile"
          children={({ navigation, route }) => (
            <Home route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <ProfileSvg
                height={30}
                opacity={tab.focused ? 1 : 0.5}
                style={{
                  height: 30,
                  resizeMode: "contain",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="New Booking Navigator"
          children={({ navigation, route }) => (
            <NewBookingNavigator route={route} navigation={navigation} />
          )}
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            children={({ navigation, route }) => (
              <Login navigation={navigation} route={route} />
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            children={({ navigation, route }) => (
              <Signup navigation={navigation} route={route} />
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Password Recovery"
            children={({ navigation, route }) => (
              <PasswordRecovery navigation={navigation} route={route} />
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Confirmation Code"
            children={({ navigation, route }) => (
              <ConfirmCode navigation={navigation} route={route} />
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Set New Password"
            children={({ navigation, route }) => (
              <SetNewPass navigation={navigation} route={route} />
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="New Password Saved"
            children={({ navigation, route }) => (
              <NewPassSaved navigation={navigation} route={route} />
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Booking Information"
            component={BookingInfo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Confirm Cancelation"
            component={ConfirmCancelation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  )
}
