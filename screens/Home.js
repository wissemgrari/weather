import React from 'react';
import { View } from 'react-native';
import Text from '../components/Text';
import Cloudy from '../Svgs/Cloudy';
import Rainy from '../Svgs/Rainy';
import { Entypo } from '@expo/vector-icons';

const Home = () => {
  return (
    <View className='flex-[1] px-2 py-10'>
      <View className='flex-row'>
        <Entypo name='location-pin' size={32} color='white' />
        <Text fontWeight='medium' _className='text-3xl'>
          El Guettar
        </Text>
      </View>
      <View className='items-center justify-center flex-1'>
        <View className='mb-5'>
          <Cloudy width={180} height={180} />
        </View>
        <View>
          <Text fontWeight='medium' _className='text-2xl'>
            Its Cloudy
          </Text>
          <View className='relative'>
            <Text fontWeight='medium' _className='text-[80px]'>
              29
            </Text>
            <Text
              fontWeight='medium'
              _className='absolute top-[0] right-[0] text-[50px]'
              color='#0095FF'
            >
              °
            </Text>
          </View>
        </View>
        <View className='flex-row justify-center w-full px-2 py-4 mt-5 rounded-xl space-x-14 bg-lightBlue'>
          <View className='items-center'>
            <Rainy width={50} height={50} />
            <Text _className='text-base my-1'>23km/h</Text>
            <Text _className='opacity-70'>Rainy</Text>
          </View>
          <View className='items-center'>
            <Rainy width={50} height={50} />
            <Text _className='text-base my-1'>23km/h</Text>
            <Text _className='opacity-70'>Rainy</Text>
          </View>
          <View className='items-center'>
            <Rainy width={50} height={50} />
            <Text _className='text-base my-1'>23km/h</Text>
            <Text _className='opacity-70'>Rainy</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
