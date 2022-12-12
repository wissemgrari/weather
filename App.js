import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar as SB } from 'react-native';
import * as Font from 'expo-font';
import GetStarted from './screens/GetStarted';
import { StatusBar } from 'expo-status-bar';
import Button from './components/Button';
import Home from './screens/Home';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='flex-1 bg-darkBlue' style={styles.container}>
      {/* <GetStarted /> */}
      <Home />
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
