import React from 'react';
import { View, Text, Image } from 'react-native';
import Item from './Item.js';
import ItemSection from './ItemSection.js';

const CarDetail = ({ brand }) => {
  const { headerContainer, headerText, imageStyle } = styles;
  return (
    <Item>
      <ItemSection>
        <View style={headerContainer}>
          <Text style={headerText}>{brand.brand}</Text>
          <Text style={headerText}>{brand.model[0].name}</Text>
        </View>
      </ItemSection>
      <ItemSection>
        <Image 
          source={{ uri: brand.model[0].image }} 
          style={imageStyle}
        />
      </ItemSection>
    </Item>
  )
}

const styles = {
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: 0
  } 
}

export default CarDetail