import { useState } from "react"
import { LogBox, Image } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ApplicationProvider } from "@ui-kitten/components"
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs"
import * as eva from "@eva-design/eva"
import Login from "./Components/login"
import Signup from "./Components/signup"
import PasswordRecovery from "./Components/passRecovery"
import { default as theme } from "./custom-theme.json"
import ConfirmCode from "./Components/confirmationCode"
import SetNewPass from "./Components/setNewPass"
import NewPassSaved from "./Components/newPassSaved"
import Home from "./Components/home"
import { LinearGradient } from "expo-linear-gradient"

LogBox.ignoreAllLogs() //Ignore all log notifications

export default function App() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const [isNotification, setIsNotification] = useState(true)

  const notificationStyle = {
    tabBarIcon: (tab) => (
      <Image
        style={{
          opacity: tab.focused ? 1 : 0.5,
          height: 30,
          resizeMode: "contain",
        }}
        source={require("./content/messages.png")}
      />
    ),
    tabBarBadgeStyle: {
      minWidth: 14,
      minHeight: 14,
      maxWidth: 14,
      maxHeight: 14,
      borderRadius: 7,
      backgroundColor: "#00FF29",
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
            height: 90,
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
              <Image
                style={{
                  opacity: tab.focused ? 1 : 0.5,
                  height: 30,
                  resizeMode: "contain",
                }}
                source={require("./content/home.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Booking"
          children={({ navigation, route }) => (
            <Home route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <Image
                style={{
                  opacity: tab.focused ? 1 : 0.5,
                  height: 30,
                  resizeMode: "contain",
                }}
                source={require("./content/booking.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          children={({ navigation, route }) => (
            <Home route={route} navigation={navigation} />
          )}
          options={
            isNotification
              ? notificationStyle
              : {
                  tabBarIcon: (tab) => (
                    <Image
                      style={{
                        opacity: tab.focused ? 1 : 0.5,
                        height: 30,
                        resizeMode: "contain",
                      }}
                      source={require("./content/messages.png")}
                    />
                  ),
                }
          }
        />
        <Tab.Screen
          name="Settings"
          children={({ navigation, route }) => (
            <Home route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <Image
                style={{
                  opacity: tab.focused ? 1 : 0.5,
                  height: 30,
                  resizeMode: "contain",
                }}
                source={require("./content/settings.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          children={({ navigation, route }) => (
            <Home route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <Image
                style={{
                  opacity: tab.focused ? 1 : 0.5,
                  height: 30,
                  resizeMode: "contain",
                }}
                source={require("./content/profile.png")}
              />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  )
}
