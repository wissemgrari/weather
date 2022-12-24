import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from './Text';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className='flex-row items-center justify-center px-10 py-4 rounded-lg bg-primary '
      onPress={onPress}
    >
      <Text fontWeight='medium'>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
