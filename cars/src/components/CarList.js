import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import CarDetail from './CarDetail.js';

class CarList extends Component {
  state = {
    carList: []
  };

  componentDidMount = () => {
    axios.get('https://givecars.herokuapp.com')
      .then(response => {
        this.setState({carList: response.data})
      })
      .catch(() => {
        console.log(`error`)
      })
  }

  renderList = () => {
      return this.state.carList.map((brand, i) => {
        return <CarDetail key={brand.model[0].name} brand={brand} />;
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