import React from 'react';
import { Text, View } from 'react-native';

const Item = (props) => {

  return (
      <View style={styles.viewStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  viewStyle: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'gainsboro',
    shadowColor: 'black',
    shadowOffSet: { width: 1, height: 1},
    opacity: 0.9,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
}
export default Item;