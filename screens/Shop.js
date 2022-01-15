import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardShoes from "../components/CardShoes";

const Shop = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titleShop}>slippers</Text>
          <Text style={styles.subTitleShop}>Our shoes!</Text>
          <CardShoes/>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleShop: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  subTitleShop: {
    fontSize: 35,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    marginTop: 10,
    padding: 15,
  },
});

export default Shop;
