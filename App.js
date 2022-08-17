import { useState } from "react"
import { LogBox, Platform, StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ApplicationProvider } from "@ui-kitten/components"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as eva from "@eva-design/eva"
import Login from "./Components/Screens/login/login"
import Signup from "./Components/Screens/login/signup"
import PasswordRecovery from "./Components/Screens/login/passRecovery"
import { default as themeClient } from "./custom-theme.json"
import { default as themeTherapist } from "./custom-theme-therapist.json"
import ConfirmCode from "./Components/Screens/login/confirmationCode"
import SetNewPass from "./Components/Screens/login/setNewPass"
import NewPassSaved from "./Components/Screens/login/newPassSaved"
import HomeNavigator from "./Components/Navigators/homeNavigator"
import HomeTherapistNavigator from "./Components/Navigators/homeTherapistNavigator"
import HomeSvg from "./content/home.svg"
import ProfileSvg from "./content/profile.svg"
import MessagesSvg from "./content/messages.svg"
import NewBookingNavigator from "./Components/Navigators/newBookingNavigator"
import MessagesNavigator from "./Components/Navigators/messagesNavigator"
import ProfileNavigator from "./Components/Navigators/profileNavigator"
import CalendarNavigator from "./Components/Navigators/calendarNavigator"
import MessagesTherapistNavigator from "./Components/Navigators/messagesTherapistNavigator"
import ProfileTherapistNavigator from "./Components/Navigators/profileTherapistNavigator"
import Cart from "./Components/Screens/cart"
import BookingInfo from "./Components/Screens/bookingInfo"
import ConfirmCancelation from "./Components/Screens/confirmCancelation"

LogBox.ignoreAllLogs() //Ignore all log notifications

export default function App() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const [isNotification, setIsNotification] = useState(true)
  const [user, setUser] = useState({ role: "therapist" })
  const theme = user.role === "therapist" ? themeTherapist : themeClient

  const notificationStyle = {
    tabBarIcon: (tab) => (
      <MessagesSvg
        fill={theme["color-primary-500"]}
        height={30}
        opacity={tab.focused ? 1 : 0.5}
        style={{
          height: 30,
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
            borderRightWidth: route.name === "Profile Navigator" ? 0 : 1,
            borderColor: theme["color-success-500"],
          },
        })}
      >
        <Tab.Screen
          name="Home Navigator"
          children={({ navigation, route }) => (
            <HomeNavigator route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <HomeSvg
                fill={theme["color-primary-500"]}
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
                      fill={theme["color-primary-500"]}
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
          name="Profile Navigator"
          children={({ navigation, route }) => (
            <ProfileNavigator route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <ProfileSvg
                fill={theme["color-primary-500"]}
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
        <Tab.Screen
          name="Cart"
          children={({ navigation, route }) => (
            <Cart route={route} navigation={navigation} />
          )}
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    )
  }
  function MainTherapist() {
    return (
      <Tab.Navigator
        initialRouteName="Calendar Navigator"
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
            borderRightWidth: route.name === "Profile Navigator" ? 0 : 1,
            borderColor: theme["color-success-500"],
          },
        })}
      >
        <Tab.Screen
          name="Home Navigator"
          children={({ navigation, route }) => (
            <HomeTherapistNavigator route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <HomeSvg
                fill={theme["color-primary-500"]}
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
            <MessagesTherapistNavigator route={route} navigation={navigation} />
          )}
          options={
            isNotification
              ? notificationStyle
              : {
                  tabBarIcon: (tab) => (
                    <HomeSvg
                      fill={theme["color-primary-500"]}
                      height={30}
                      opacity={tab.focused ? 1 : 0.5}
                      style={{
                        height: 30,
                        resizeMode: "contain",
                      }}
                    />
                  ),
                }
          }
        />

        <Tab.Screen
          name="Profile Navigator"
          children={({ navigation, route }) => (
            <ProfileTherapistNavigator route={route} navigation={navigation} />
          )}
          options={{
            tabBarIcon: (tab) => (
              <ProfileSvg
                fill={theme["color-primary-500"]}
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
          name="Calendar Navigator"
          children={({ navigation, route }) => (
            <CalendarNavigator route={route} navigation={navigation} />
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
        <Stack.Navigator initialRouteName="Main Therapist">
          <Stack.Screen
            name="Login"
            children={({ navigation, route }) => (
              <Login setUser={setUser} navigation={navigation} route={route} />
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
            name="Main Therapist"
            component={MainTherapist}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Booking Information"
            children={({ route, navigation }) => (
              <BookingInfo
                route={route}
                navigation={navigation}
                role={user.role}
              />
            )}
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
