import React from 'react';
import { View, Text } from 'react-native';
import Item from './Item.js';
import ItemSection from './ItemSection.js';

const CarDetail = (props) => {

  return (
    <Item>
      <ItemSection>
        <Text>{props.brand.model[0].name}</Text>
      </ItemSection>
    </Item>
  )
}



export default CarDetail