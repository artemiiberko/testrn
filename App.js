import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ApplicationProvider, Button, Input } from "@ui-kitten/components"
import * as eva from "@eva-design/eva"
import Login from "./Components/login"
import Signup from "./Components/signup"
import PasswordRecovery from "./Components/passRecovery"
import { default as theme } from "./custom-theme.json"
import ConfirmCode from "./Components/confirmationCode"
import SetNewPass from "./Components/setNewPass"
import NewPassSaved from "./Components/newPassSaved"

export default function App() {
  const Stack = createNativeStackNavigator()

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
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  )
}
