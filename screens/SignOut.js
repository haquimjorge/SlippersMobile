import React, {useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const SignOut = (props) => {

    useEffect(() => {
        // props.getOneShoe(props.route.params.shoeId);
        props.logOut()
      }, []);


  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
      >
          
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  signInUser: userActions.signInUser,
  logOut: userActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
