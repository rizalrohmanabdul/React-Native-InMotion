import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";

export default class Header extends Component {
  render() {
    return (
      <View style={component.header}>
        <View style={component.itemsHeader}>
          <Text style={component.items}>Github Users</Text>
          <TouchableOpacity style={component.menu}>
            <Icons name="bars" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const component = StyleSheet.create({
  header: {
    position: "relative",
    paddingTop: 20,
    width: "100%",
    elevation: 5,
    backgroundColor: "#4893EC"
  },
  itemsHeader: {
    height: 45,
    justifyContent: "center",
    flexDirection: "row"
  },
  items: {
    fontSize: 24,
    fontWeight: "200",
    fontFamily: "sans-serif-condensed",
    paddingLeft: 25,
    flex: 1,
    color: '#fff'
  },
  menu: {
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-end",
    paddingRight: 20
  }
});
