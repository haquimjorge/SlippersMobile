import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
} from "react-native";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const SignIn = (props) => {
  // console.log("mis props", props);
  let signImage = require("../assets/sign-in.jpg");
  let logoImage = require("../assets/logo3.png");
  let loggedImage = require("../assets/logged.jpg");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = async () => {
    if (form.email === "" || form.password === "") {
      ToastAndroid.showWithGravityAndOffset(
        "⚠️ All fields must be completed",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        35,
        60
      );
    } else {
      props.signInUser(form);
    }
  };

  if (props.user !== null) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={loggedImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.loggedContainer}>
            <Text style={styles.textBack}>Welcome Back!</Text>
            <Text style={styles.textUser}>{props.user.name}</Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Home")
              }
            >
              <Text style={styles.callToAction}>BACK TO HOME</Text>

            </TouchableOpacity>
          </View>

          
        </ImageBackground>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={signImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.formContainer}>
            <Image source={logoImage} style={styles.logoImg} />
            <Text style={styles.signTitle}>Sign In</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"white"}
                onChange={(e) =>
                  setForm({ ...form, email: e.nativeEvent.text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"white"}
                onChange={(e) =>
                  setForm({ ...form, password: e.nativeEvent.text })
                }
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={handleChange}
            >
              <Text style={styles.textButton}>Sign In!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 730,
  },
  signTitle: {
    textAlign: "center",
    color: "white",
    textShadowColor: "#ffffff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 30,
    backgroundColor: "black",
    padding: 10,
    width: "100%",
    marginTop: -20,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    height: 50,
    width: 250,
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    marginTop: 5,
    borderRadius: 15,
    textAlign: "center",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    margin: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    width: 200,
    height: 200,
    marginTop: -100,
    width: "100%",
    borderRadius: 15,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#e5c400",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: "center",
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  loggedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    
  },
  textBack: {
    fontSize: 50,
    color: "white",
    textShadowColor: "#ffffff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
    width: "100%",
    textAlign: "center"
  },
  textUser: {
    fontSize: 45,
    color: "white",
    textShadowColor: "#ffffff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
    width: "100%",
    textAlign: "center"
  },
  callToAction: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 30,
    fontSize: 30,
    borderRadius: 15,
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  signInUser: userActions.signInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
