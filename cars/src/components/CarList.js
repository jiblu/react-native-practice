import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";

class CarList extends Component {
  state = {
    carList: []
  };

  componentDidMount() {
    axios.get('https://givecars.herokuapp.com')
      .then(response => {
        this.setState({carList: response.data})
      })
      .catch(() => {
        console.log(`error`)
      })
  }

  renderList = () => {
      return this.state.carList.map((brand) => {
        return <Text>{brand.model[0].name}</Text>
      });
  }
  render() {
    return (
      <View>
        {this.renderList()}
      </View>
    );
  }
};

export default CarList;