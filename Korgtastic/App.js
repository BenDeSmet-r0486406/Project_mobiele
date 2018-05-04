import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js'

const Navigation = StackNavigator({
  Home:{screen: HomeScreen},
});
export default Navigation
