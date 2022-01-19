import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import Home from "../screens/Home";
import Shop from "../screens/Shop";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Shoe from "../screens/Shoe"
import Cart from "../screens/Cart"
import SignOut from "../screens/SignOut";

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
      <SlippersNav.Screen name="Shop" component={Shop} />
      <SlippersNav.Screen name="Sign In" component={SignIn} />
      <SlippersNav.Screen name="Sign Up" component={SignUp} />
      <SlippersNav.Screen name="Sign Out" component={SignOut} />
      <SlippersNav.Screen name="Shoe" component={Shoe} />
      <SlippersNav.Screen name="Cart" component={Cart} />
    </SlippersNav.Navigator>
  );
};

export default Navigator;
