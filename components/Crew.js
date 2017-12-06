import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';

class Crew extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Departments',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={ styles.space }>
          <Button title="Art Department" onPress={() => navigate('ArtDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Camera Department" onPress={() => navigate('CameraDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Food Department" onPress={() => navigate('FoodDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Lighting & Grip Department" onPress={() => navigate('LightingDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Locations Department" onPress={() => navigate('LocationsDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Makeup & Wardrobe Department" onPress={() => navigate('WardrobeDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Production Department" onPress={() => navigate('ProductionDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Script & VTR Department" onPress={() => navigate('ScriptVTRDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Sound Department" onPress={() => navigate('SoundDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Stunts & FX Department" onPress={() => navigate('FXDept') } />
        </View>
        <View style={ styles.space }>
          <Button title="Transportation Department" onPress={() => navigate('TransportationDept') } />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  space: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    // borderTopWidth: .5,
    // borderBottomWidth: .5,
    shadowOpacity: 0.75,
    shadowRadius: 2,
    shadowColor: '#181818',
    // shadowColor: '#0084ff',
    shadowOffset: { height: 2, width: 0 },
    // backgroundColor: ''
  }
});

export default Crew;
