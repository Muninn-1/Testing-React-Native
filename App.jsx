import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';

// Navigator
import MainNavigator from './navigators/MainNavigator';

// Images
import IMAGES from 'images/index';

export default () => {
  const [FontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'OldeEnglish': require('fonts/OldeEnglish.ttf'),
      'Blacklist': require('fonts/The_Blacklist.ttf'),
      'SketchGothic': require('fonts/Sketch_Gothic_School.ttf'),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, [])

  const SCREEN_PROPS = {
    IMAGES
  };

  return (
    <>
    {FontsLoaded && <MainNavigator screenProps={SCREEN_PROPS} />}
    </>
  );
};