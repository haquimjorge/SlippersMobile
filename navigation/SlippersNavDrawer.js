import {
  createDrawerNavigator,
  CustomDrawerContent,
} from "@react-navigation/drawer";
import SlippersNavStack from "./SlippersNav";
import Shop from "../screens/Shop";
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp";
import Shoe from "../screens/Shoe"

const SlippersNav = createDrawerNavigator();

const Navigator = (props) => {
  console.log(props);
  return (
    <SlippersNav.Navigator>
      <SlippersNav.Screen
        name="Home"
        component={SlippersNavStack}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <SlippersNav.Screen name="Shop" component={Shop} />
      <SlippersNav.Screen name="Sign In" component={SignIn} />
      <SlippersNav.Screen name="Sign Up" component={SignUp} />
      <SlippersNav.Screen name="Shoe" component={Shoe} />
    </SlippersNav.Navigator>
  );
};

export default Navigator;
