import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const dimensions = Dimensions.get("screen");

const CarouselShoes = () => {
  const arrayShoes = [
    {
      name: "DOBLE MONK MAIPU",
      color: "BLACK",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/c9d2b90e-1322-4b8b-abfe-aaba2f3ade3b-aad24c48f6fc70efef16314641731526-320-0.jpg",
      },
    },
    {
      name: "MOCASIN BIGAND",
      color: "GREEN",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/c001642mocasin-bigand-verde-militar-b518a7d6f9596d00e016306215799739-320-0.jpg",
      },
    },
    {
      name: "BORCEGO HUMBOLDT",
      color: "BROWN",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/d0fa9c6b-d459-4653-8898-005ce58d0207-81191736717aefc0b616314641963411-320-0.jpg",
      },
    },
    {
      name: "CASTEX",
      color: "BLACK",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/081ddb2b-257b-4145-8dd1-d7a40792be65-c1eac204abe79eb80616190381701708-320-0.jpg",
      },
    },
    {
      name: "VICTORY",
      color: "BLACK",
      photo: {
        uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/090/848/products/081ddb2b-257b-4145-8dd1-d7a40792be65-c1eac204abe79eb80616190381701708-320-0.jpg",
      },
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselContainer}>
        <View style={styles.cardCarouselContianer}>
          <ImageBackground style={styles.cityImage} source={item.photo}>
            <Text style={styles.shoeName}>{item.name}</Text>
          </ImageBackground>
        </View>
      </View>
    );
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        data={arrayShoes}
        loop={true}
        autoplay={true}
        layout={"default"}
        renderItem={renderItem}
        sliderWidth={900}
        itemWidth={450}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  cardCarouselContianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
  },
  shoeName: {
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    textAlign: "left",
    color: "white",
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
    padding: 10,
  },
  cityImage: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.4,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
});

export default CarouselShoes;
