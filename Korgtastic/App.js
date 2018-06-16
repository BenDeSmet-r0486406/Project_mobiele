import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js'
import GameScreen from './screens/GameScreen'
import QuestionsScreen from './screens/QuestionsScreen.js'

const Navigation = StackNavigator({
  Home:{screen: HomeScreen},
  Game:{screen: GameScreen},
  Questions:{screen: QuestionsScreen},
});

export default Navigation
