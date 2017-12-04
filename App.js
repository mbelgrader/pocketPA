import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, BackAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Walkie from './components/Walkie';
import SetEtiquette from './components/SetEtiquette';
import Lingo from './components/Lingo';
import BasicSetItems from './components/BasicSetItems';

const App = StackNavigator({
  Home: { screen: Home },
  Walkie: { screen: Walkie },
  SetEtiquette: { screen: SetEtiquette },
  Lingo: { screen: Lingo },
  BasicSetItems: { screen: BasicSetItems },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
