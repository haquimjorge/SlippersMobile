import {
  createDrawerNavigator,
  CustomDrawerContent,
} from "@react-navigation/drawer";
import SlippersNavStack from "./SlippersNav";
import Shop from "../screens/Shop";

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
    </SlippersNav.Navigator>
  );
};

export default Navigator;
