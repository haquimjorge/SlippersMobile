import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarouselShoes from "../components/CarouselShoes";

const Home = (props) => {
  let heroImage = require("../assets/07.jpg");
  let subHeroImage = require("../assets/01.jpg")
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={heroImage}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.textBannerContainer}>
              <Text style={styles.textBanner}>FREE</Text>
              <Text style={styles.textBanner}>SHIPING!</Text>
            </View>
          </ImageBackground>
        </View>
        <CarouselShoes/>
        <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Shop")
              }
            >
              <Text style={styles.callToAction}>SHOP NOW!</Text>

            </TouchableOpacity>
        <View style={styles.container}>
          <ImageBackground
            source={subHeroImage}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.preBannerContainer}>
            <Text style={styles.preBanner}>MUROEXE</Text>
              <Text style={styles.preBanner}>UNISEX</Text>
              <Text style={styles.preBanner}>SHOES!</Text>
            </View>
            <View style={styles.subBannerContainer}>
            <Text style={styles.textSubBanner}>$160</Text>
              <Text style={styles.textSubBanner}>UNISEX</Text>
              <Text style={styles.textSubBanner}>SHOES!</Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
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
  textBannerContainer: {
    flex: 1,
    height: 700,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  textBanner: {
    color: "white",
    fontSize: 60,
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: "left",
    textShadowColor: "#ffffff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10
  },
  subBannerContainer: {
      flex: 1,
      height: 700,
      justifyContent: "flex-end",
      alignItems: "flex-end"
  },
  textSubBanner: {
    color: "white",
    fontSize: 40,
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: "left",
    textShadowColor: "#ffffff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10
  },
  preBannerContainer:{
    flex: 1,
    height: 700,
    width: 250,
  },
  preBanner: {
    color: "grey",
    fontSize: 50,
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: "right",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "rgba(53,53,73,0.7)",
    padding: 10
  },
  callToAction: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 30,
    fontSize: 30,
    borderRadius: 15,
    alignSelf: "center",
    color: "white",
    marginBottom: 20
  }
});

export default Home;
