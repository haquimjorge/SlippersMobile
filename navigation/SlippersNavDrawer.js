import {
  createDrawerNavigator,
  CustomDrawerContent,
} from "@react-navigation/drawer";
import SlippersNavStack from "./SlippersNav";

const SlippersNav = createDrawerNavigator();

const Navigator = (props) => {
  console.log(props);
  return (
    <SlippersNav.Navigator>
      <SlippersNav.Screen
        name="Home"
        component={SlippersNavStack}
        options={{
          title: "Slippers",
          headerShown: false,
        }}
      />
    </SlippersNav.Navigator>
  );
};

export default Navigator;
