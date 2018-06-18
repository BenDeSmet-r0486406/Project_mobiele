import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js'
import GameScreen from './screens/GameScreen'
import QuestionsScreen from './screens/QuestionsScreen.js'
import ScoreScreen from './screens/ScoreScreen';
import PlayersScreen from './screens/PlayersScreen.js';
import EndScreen from './screens/EndScreen.js';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const Navigation = createStackNavigator({
  Home:{screen: HomeScreen},
  End:{screen: EndScreen},
  Game:{screen: GameScreen},
  Questions:{screen: QuestionsScreen},
  Scoreboard:{screen: ScoreScreen},
  Players:{screen: PlayersScreen},
});

export default Navigation