import { AppRegistry } from "react-native"
import App from "./App"
import { name as appName } from "./app.json"
import axios from "axios"

AppRegistry.registerComponent(appName, () => App)

axios.defaults.headers.common["referer"] = "https://dev.saluderia.com/"
