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
import SelectDropdown from "react-native-select-dropdown";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const SignUp = (props) => {
  console.log("PROPS SIGN UP", props);
  let signImage = require("../assets/sign-in.jpg");
  let logoImage = require("../assets/logo3.png");

  const genders = ["Male", "Female"];

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    image: "",
  });

  const handleChange = async () => {
    if (
      form.email === "" ||
      form.password === "" ||
      form.name === "" ||
      form.lastName === "" ||
      form.image === "" ||
      form.gender === ""
    ) {
      ToastAndroid.showWithGravityAndOffset(
        "⚠️ All fields must be completed",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        35,
        60
      );
    } else {
      props.signUp(form)
    }
  };

  if (props.user !== null) {
    return (
      <View style={styles.container}>
        <Text>hola</Text>
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
            <Text style={styles.signTitle}>Sign Up</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={"white"}
                onChange={(e) => setForm({ ...form, name: e.nativeEvent.text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor={"white"}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.nativeEvent.text })
                }
              />
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
              <TextInput
                style={styles.input}
                placeholder="Profile image"
                placeholderTextColor={"white"}
                onChange={(e) =>
                  setForm({ ...form, image: e.nativeEvent.text })
                }
              />
              <SelectDropdown
                data={genders}
                defaultButtonText={"Select your gender"}
                buttonStyle={styles.dropDownBtn}
                buttonTextStyle={styles.btnTexSty}
                onSelect={(selectedItem) => {
                  setForm({ ...form, gender: selectedItem });
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={handleChange}
            >
              <Text style={styles.textButton}>Sign Up!</Text>
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
    marginBottom: 5,
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
  dropDownBtn: {
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.7)",
    marginTop: 10,
    height: 50,
    width: 250,
  },
  btnTexSty: {
    color: "white",
    fontSize: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    error: state.userReducer.error,
    success: state.userReducer.success,
    message: state.userReducer.message,
  };
};
const mapDispatchToProps = {
  signUp: userActions.signUpUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
