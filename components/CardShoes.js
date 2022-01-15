import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const CardShoes = () => {
  let cartImage = require("../assets/carrito-de-compras.png");
  let eyeImage = require("../assets/eye-read.png");

  const arrayShoes = [
    {
      name: "DOBLE MONK MAIPU",
      color: "BLACK",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/c9d2b90e-1322-4b8b-abfe-aaba2f3ade3b-aad24c48f6fc70efef16314641731526-320-0.jpg",
      },
      price: "$160",
    },
    {
      name: "MOCASIN BIGAND",
      color: "GREEN",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/c001642mocasin-bigand-verde-militar-b518a7d6f9596d00e016306215799739-320-0.jpg",
      },
      price: "$170",
    },
    {
      name: "BORCEGO HUMBOLDT",
      color: "BROWN",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/d0fa9c6b-d459-4653-8898-005ce58d0207-81191736717aefc0b616314641963411-320-0.jpg",
      },
      price: "$200",
    },
    {
      name: "CASTEX",
      color: "BLACK",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/081ddb2b-257b-4145-8dd1-d7a40792be65-c1eac204abe79eb80616190381701708-320-0.jpg",
      },
      price: "$180",
    },
    {
      name: "VICTORY",
      color: "BLACK",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/081ddb2b-257b-4145-8dd1-d7a40792be65-c1eac204abe79eb80616190381701708-320-0.jpg",
      },
      price: "$160",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {arrayShoes.map((shoe) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.borderCard}>
                <ImageBackground
                  style={styles.shoeImage}
                  resizeMode="cover"
                  source={shoe.photo}
                ></ImageBackground>
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
