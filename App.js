import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, StyleSheet, StatusBar as SB } from 'react-native';
import * as Font from 'expo-font';
import GetStarted from './screens/GetStarted';
import { StatusBar } from 'expo-status-bar';
import Button from './components/Button';
import Home from './screens/Home';
import { API_URL, API_KEY, API_HOST } from '@env';
import Search from './components/Search';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [data, setData] = useState(null);

  const options = {
    method: 'GET',
    url: API_URL,
    params: { location: 'Gafsa', format: 'json', u: 'c' },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  };
  const fetchWeather = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    async function getFonts() {
      try {
        // Pre-load fonts
        await Font.loadAsync({
          'Poppins-regular': require('./assets/fonts/Poppins-regular.ttf'),
          'Poppins-medium': require('./assets/fonts/Poppins-medium.ttf'),
          'Poppins-bold': require('./assets/fonts/Poppins-bold.ttf'),
        });
      } catch (e) {
        console.log(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    getFonts();
    // fetchWeather();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='flex-1 bg-darkBlue' style={styles.container}>
      <Search />
      {/* <GetStarted /> */}
      {/* <Home data={data} /> */}
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: SB.currentHeight,
  },
});
