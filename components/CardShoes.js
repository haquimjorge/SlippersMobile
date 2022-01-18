import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const CardShoes = ({shoes, navigation}) => {
  
  console.log("shoes", {shoes})
  console.log(navigation)
  let cartImage = require("../assets/carrito-de-compras.png");
  let eyeImage = require("../assets/eye-read.png");


  return (
    <View style={styles.container}>
      <ScrollView>
        {shoes && shoes.map((shoe) => {
          return (
            <View key={shoe._id} style={styles.cardContainer}>
              <View style={styles.borderCard}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Shoe",{shoeId : shoe._id})}>
                <ImageBackground
                  style={styles.shoeImage}
                  resizeMode="cover"
                  source={{uri : shoe.image}}
                ></ImageBackground>
                </TouchableOpacity>
              </View>
              <Text style={styles.shoeName}>{shoe.name}</Text>
              <Text style={styles.shoePrice}>{shoe.price}</Text>

              <View style={styles.shoeDataContainer}>
                <View style={styles.infoCart}>
                  <Text style={{fontWeight: "bold"}}>MORE INFO</Text>
                  <Image source={eyeImage} style={styles.iconsLogos}/>
                </View>
                
                <View style={styles.infoCart}>
                  <Text style={{fontWeight: "bold"}}>ADD TO CART</Text>
                  <Image source={cartImage} style={styles.iconsLogos}/>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  cardContainer: {
    width: 350,
    marginBottom: 10,
  },
  shoeImage: {
    flex: 1,
    height: 350,
    width: "100%",
  },
  borderCard: {
    borderBottomColor: "black",
    borderBottomWidth: 3,
  },
  shoeName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  shoePrice: {
    fontSize: 15,
  },
  iconsLogos: {
      width: 35,
      height: 35
  },
  shoeDataContainer: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10
  },
  infoCart: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

export default CardShoes;
