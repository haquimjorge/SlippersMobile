import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/SlippersNavDrawer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";

const globalStore = createStore(mainReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <>
      <Provider store={globalStore}>
        <StatusBar barStyle="light-content" backgroundColor="#11151f" />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}
