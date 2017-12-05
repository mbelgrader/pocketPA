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
import Crew from './components/Crew';

import ArtDept from './components/crew/ArtDept';
import CameraDept from './components/crew/CameraDept';
import FoodDept from './components/crew/FoodDept';
import LightingDept from './components/crew/LightingDept';
import LocationsDept from './components/crew/LocationsDept';
import WardrobeDept from './components/crew/WardrobeDept';
import ProductionDept from './components/crew/ProductionDept';
import ScriptVTRDept from './components/crew/ScriptVTRDept';
import SoundDept from './components/crew/SoundDept';
import FXDept from './components/crew/FXDept';
import TransportationDept from './components/crew/TransportationDept';

const App = StackNavigator({
  Home: { screen: Home },
  Walkie: { screen: Walkie },
  SetEtiquette: { screen: SetEtiquette },
  Lingo: { screen: Lingo },
  BasicSetItems: { screen: BasicSetItems },
  Camera: { screen: Camera },
  Lighting: { screen: Lighting },
  Crew: { screen: Crew },
  ArtDept: { screen: ArtDept },
  CameraDept: { screen: CameraDept },
  LightingDept: { screen: LightingDept },
  LocationsDept: { screen: LocationsDept },
  WardrobeDept: { screen: WardrobeDept },
  ProductionDept: { screen: ProductionDept },
  ScriptVTRDept: { screen: ScriptVTRDept },
  SoundDept: { screen: SoundDept },
  FXDept: { screen: FXDept },
  TransportationDept: { screen: TransportationDept },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
