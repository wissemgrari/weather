import { View } from 'react-native';
import React from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import Icon from '../Svgs/Icon';

const GetStarted = () => {
  return (
    <View className='flex-[1] items-center justify-center space-y-14'>
      <View className='flex-row justify-center w-full'>
        <Icon width={200} height={200} />
      </View>
      <View className='justify-center w-full px-8 my-5'>
        <Text fontWeight='medium' _className='text-2xl text-center mb-4'>
          Discover the Weather in Your City
        </Text>
        <Text _className='opacity-70 text-center'>
          Get to know your weather maps and radar percipitaion forecast.
        </Text>
      </View>
      <View className='w-full px-5'>
        <Button title='Get Started' />
      </View>
    </View>
  );
};

export default GetStarted;
