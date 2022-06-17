import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ApplicationProvider, Button, Input } from "@ui-kitten/components"
import * as eva from "@eva-design/eva"
import Login from "./Components/login"
import Signup from "./Components/signup"
import { default as theme } from "./custom-theme.json"

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
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  )
}
