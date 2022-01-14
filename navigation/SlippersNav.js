import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import Home from "../screens/Home";

const SlippersNav = createNativeStackNavigator();

const Navigator = (props) => {
  console.log(props);
  let logoImage = require("../assets/logo3.png");
  return (
    <SlippersNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
      }}
    >
      <SlippersNav.Screen
        name="Home"
        component={Home}
        options={{
          title: "slippers",
          headerRight: () => (
            <Button
              onPress={() => props.navigation.openDrawer()}
              title="Menu"
              color="black"
            />
          ),
        }}
      />
    </SlippersNav.Navigator>
  );
};

export default Navigator;
