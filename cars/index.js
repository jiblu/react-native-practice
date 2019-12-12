//import libraries
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header.js";
import CarList from "./src/components/CarList.js";

//create component 
const App = () => {
    return (
      <View style={{flex: 1}}>
        <Header title={'Cars'}/>
        <CarList />
      </View>
    )
};

//render component to screen
AppRegistry.registerComponent("cars", () => App);