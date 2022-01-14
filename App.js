import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/SlippersNavDrawer";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#11151f" />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </>
  );
}
