import React from 'react';
import { View } from 'react-native';

const ItemSection = (props) => {
  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  viewStyle: {
    borderBottomWidth: 1,
    borderColor: 'gainssboro',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    color: 'black' 
  }
};

export default ItemSection;