import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardShoes from "../components/CardShoes";
import shoeActions from "../redux/actions/shoeActions";
import { connect } from "react-redux";

function valuetext(value) {
  return `$${value}`;
}

const Shop = (props) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState([0, 300]);
  const [checked, setChecked] = useState([
    { type: "gender", value: [] },
    { type: "color", value: [] },
    { type: "season", value: [] },
    { type: "text", value: "" },
    { type: "price", value: value },
  ]);
  const checkedRef = useRef(checked);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.shoes, props.filteredShoes]);

  useEffect(() => {
    if (!props.shoes) props.getShoes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(props.cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cart]);

  // const handleChange = (e) => {
  //   const searchValue = e.target.value;
  //   setSearch(searchValue)
  //   const list = checked
  //   let newData = list.filter(element => element.type === 'text')
  //   const index = list.indexOf(newData[0])

  //   list[index].value = searchValue
  //   checkedRef.current = [...list]
  //   setChecked([...list])

  //   props.filterShoes(props.shoes, checkedRef.current)

  // }

  // const handleCheck = (e, data) => {
  //   const list = checked
  //   let newData = list.filter(element => element.type === data.type)
  //   const index = list.indexOf(newData[0])

  //   if (e.target.checked) {
  //     list[index].value = [...newData[0].value, data.value]
  //     checkedRef.current = [...list]
  //     setChecked([...list])
  //   }
  //   else {
  //     if (list.length > 0) {
  //       const valueIndex = newData[0].value.indexOf(data.value)
  //       if (valueIndex > -1) newData[0].value.splice(valueIndex, 1)
  //       checkedRef.current = [...list]
  //       setChecked([...list])

  //     }
  //   }

  //   props.filterShoes(props.shoes, checkedRef.current)

  // }

  // const handleSlider = (e, newValue) => {
  //   setValue(newValue)
  //   const list = checked
  //   let newData = list.filter(element => element.type === 'price')
  //   const index = list.indexOf(newData[0])

  //   list[index].value = newValue
  //   checkedRef.current = [...list]
  //   setChecked([...list])
  //   props.filterShoes(props.shoes, checkedRef.current)
  //   //console.log(checkedRef.current)
  // }

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titleShop}>slippers</Text>
          <Text style={styles.subTitleShop}>Our shoes!</Text>
          <CardShoes
            shoes={
              props.filteredShoes
                ? props.filteredShoes
                : props.shoes
                ? props.shoes
                : []
            }
          />
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

const mapDispatchToProps = {
  getShoes: shoeActions.getShoes,
  filterShoes: shoeActions.filterShoes,
};
const mapStateToProps = (state) => {
  return {
    cart: state.userReducer.cart,
    shoes: state.shoeReducer.shoes,
    filteredShoes: state.shoeReducer.filteredShoes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
