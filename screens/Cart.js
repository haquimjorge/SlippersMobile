import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";
import Shop from "./Shop";

const Cart = (props) => {
  // console.log(props.cart)

  //   console.log(props)

  useEffect(() => {
    console.log(props);
  }, [props.cart]);

  const deleteImg = require("../assets/deletecross.png");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.yourCart}>Your Cart</Text>
        <View>
          {props.cart &&
            props.cart.map((shoe) => {
              return (
                <View style={styles.cardCartShoe}>
                  <ImageBackground
                    style={styles.cartShoeImg}
                    resizeMode="cover"
                    source={{ uri: shoe.image }}
                  ></ImageBackground>
                  <View style={styles.shoeCartInfo}>
                    <Text style={styles.shoeText}>Name: {shoe.name}</Text>
                    <Text style={styles.shoeText}>
                      Unity Price: $ {shoe.price}
                    </Text>
                    <Text style={styles.shoeText}>
                      Unities Price: $ {shoe.price * shoe.quantity}
                    </Text>
                    <Text style={styles.shoeText}>
                      Quantity: {shoe.quantity}
                    </Text>
                  </View>
                  <View style={styles.deleteProduct}>
                      <TouchableOpacity
                      onPress={() => props.addToCart(props.cart, false, shoe)}
                      >
                    <ImageBackground
                      style={styles.deleteImga}
                      resizeMode="cover"
                      source={deleteImg}
                    ></ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalPurchase}>
          Total Purchase: $
          {props.cart &&
            props.cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cartShoeImg: {
    width: 100,
    height: 100,
  },
  cardCartShoe: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
  },
  shoeCartInfo: {
    flexDirection: "column",
    marginLeft: 30,
  },
  yourCart: {
    fontSize: 30,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
  },
  shoeText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  totalPurchase: {
    fontSize: 30,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  totalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  deleteImga: {
    width: 30,
    height: 30,
  },
  deleteProduct: {
      flex: 1,
      alignItems: "flex-end",
      width: "100%",
      marginRight: 15
  }
});

const mapDispatchToProps = {
  addToCart: userActions.addToCart,
};

const mapStateToProps = (state) => {
  return {
    cart: state.userReducer.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
