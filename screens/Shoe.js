import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { connect } from "react-redux";
import shoeActions from "../redux/actions/shoeActions";
import userActions from "../redux/actions/userActions";

const Shoe = (props) => {
  console.log(props);
  useEffect(() => {
    props.getOneShoe(props.route.params.shoeId);
  }, []);

  useEffect(() => {
    console.log("RERENDER");
    props.getOneShoe(props.route.params.shoeId);
  }, [props.route.params]);

  const [form, setForm] = useState({
    color: "",
    size: ""
  });

  // console.log(props.oneShoe);
  // useEffect(() => {
  //   console.log(props.cart);
  // }, [props.cart]);
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.shoeImageContainer}>
            <ImageBackground
              style={styles.shoeImage}
              resizeMode="cover"
              source={{ uri: props.oneShoe.image }}
            ></ImageBackground>
            <View style={styles.borderShoe}></View>
          </View>
          <View style={styles.shoeDescContainer}>
            {/* <Text style={styles.shoeDesc}>
              {props.oneShoe.subcategory[0]?.name}
            </Text>
            <Text style={styles.shoeDesc}>{props.oneShoe.category?.name}</Text> */}
            <Text style={styles.shoeTitle}>
              {props.oneShoe.name ? props.oneShoe.name : "No hay zapato"}
            </Text>
            <Text style={styles.shoePrice}>$ {props.oneShoe.price}</Text>
            <Text style={styles.shoeDesc}>{props.oneShoe.description}</Text>
            {/* <Text style={styles.shoeDescription}>
              Color: {props.oneShoe.color}
            </Text> */}
            <Text style={styles.shoeDescription}>
              Season: {props.oneShoe.season}
            </Text>
            <Text style={styles.shoeDescription}>
              Gender: {props.oneShoe.gender}
            </Text>
            <Text style={styles.shoeDescription}>
              Stock: {props.oneShoe.generalStock}
            </Text>
            <View style={styles.selectContainer}>
            <SelectDropdown
                data={props.oneShoe.variations.map((v) => v.color)}
                defaultButtonText={"Choose your color"}
                buttonStyle={styles.dropDownBtn}
                buttonTextStyle={styles.btnTexSty}
                onSelect={(selectedItem) => {
                  setForm({ ...form, color: selectedItem });
                }}
                buttonStyle={styles.selectForm}
              />
              <SelectDropdown
                data={props.oneShoe.variations.map((v) => v.size)}
                defaultButtonText={"Choose your size"}
                buttonStyle={styles.dropDownBtn}
                buttonTextStyle={styles.btnTexSty}
                onSelect={(selectedItem) => {
                  setForm({ ...form, size: selectedItem });
                }}
                buttonStyle={styles.selectForm}
              />
              </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  shoeImage: {
    flex: 1,
    height: 350,
    width: 350,
  },
  shoeImageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  shoeTitle: {
    fontSize: 50,
    fontWeight: "bold",
  },
  shoeDescription: {
    fontSize: 17,
  },
  shoeDescContainer: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  borderShoe: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "95%",
  },
  shoePrice: {
    fontSize: 30,
    fontWeight: "bold",
  },
  shoeDesc: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  selectContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  selectForm: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
  }
});

const mapDispatchToProps = {
  getOneShoe: shoeActions.getOneShoe,
  addToCart: userActions.addToCart,
};

const mapStateToProps = (state) => {
  return {
    oneShoe: state.shoeReducer.oneShoe,
    cart: state.userReducer.cart,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shoe);
