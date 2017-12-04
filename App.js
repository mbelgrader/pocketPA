import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, BackAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Walkie from './components/Walkie';
import SetEtiquette from './components/SetEtiquette';
import Lingo from './components/Lingo';
import BasicSetItems from './components/BasicSetItems';
import Camera from './components/Camera';
import Lighting from './components/Lighting';

const App = StackNavigator({
  Home: { screen: Home },
  Walkie: { screen: Walkie },
  SetEtiquette: { screen: SetEtiquette },
  Lingo: { screen: Lingo },
  BasicSetItems: { screen: BasicSetItems },
  Camera: { screen: Camera },
  Lighting: { screen: Lighting },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
