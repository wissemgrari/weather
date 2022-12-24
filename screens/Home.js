import React from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import Text from '../components/Text';
import Cloudy from '../Svgs/Cloudy';
import Rainy from '../Svgs/Rainy';
import { Entypo, Feather } from '@expo/vector-icons';

const Home = ({ data }) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 20,
      }}
    >
      <View className='flex-row items-center justify-between px-4 py-3 mb-10 rounded-full bg-lightBlue'>
        <TextInput
          className='w-[90%] text-xl text-[#ADCAEB]'
          placeholder='Search...'
          placeholderTextColor='#ADCAEB'
          cursorColor='#ADCAEB'
        />
        <TouchableOpacity>
          <Feather name='search' size={34} color='#ADCAEB' />
        </TouchableOpacity>
      </View>
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
    </ScrollView>
  );
};

export default Home;
