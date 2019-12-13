import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity>
        <Text>Click Me</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'gainsboro'
  }
};
export default Button;