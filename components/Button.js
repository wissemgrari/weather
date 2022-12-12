import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from './Text';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className='bg-primary flex-row items-center justify-center py-3 px-10 rounded-lg'
      onPress={onPress}
    >
      <Text fontWeight='medium'>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
