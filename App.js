import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TitleScreen from './TitleScreen';
import MainScreen from './MainScreen';

const App = StackNavigator({
  Title: {screen: TitleScreen},
  Main: {screen: MainScreen},
});

export default App;
