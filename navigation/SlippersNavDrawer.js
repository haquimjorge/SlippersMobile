import {
  createDrawerNavigator,
  CustomDrawerContent,
} from "@react-navigation/drawer";
import SlippersNavStack from "./SlippersNav";
import Shop from "../screens/Shop";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Shoe from "../screens/Shoe";
import Cart from "../screens/Cart";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";
import React from "react";
import SignOut from "../screens/SignOut";

const SlippersNav = createDrawerNavigator();

const Navigator = (props) => {
  console.log("navigation", props);
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
      {!props.user ? (
        <>
          <SlippersNav.Screen name="Sign In" component={SignIn} />
          <SlippersNav.Screen name="Sign Up" component={SignUp} />
        </>
      ) : (
        <SlippersNav.Screen name="Sign Out" component={SignOut} />
      )}
      {/* <SlippersNav.Screen name="Shoe" component={Shoe} /> */}
      <SlippersNav.Screen name="Cart" component={Cart} />
    </SlippersNav.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  signInUser: userActions.signInUser,
  logOut: userActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
