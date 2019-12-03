import React, { Component } from "react";
import { Text, View } from "react-native";

class CarList extends Component {
  componentDidMount() {
    console.log('console from car list component')
  }
  render() {
    return (
      <View>
        <Text>Car List</Text>
      </View>
    );
  }
};

export default CarList;