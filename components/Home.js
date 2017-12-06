import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Image } from 'react-native';

const walkie = require("../assets/images/walkie3.jpg");
const lighting = require("../assets/images/lighting6.png");
const camera = require("../assets/images/camera10.jpg");
const departments = require("../assets/images/departments.jpg");
const set_items = require("../assets/images/set_items3.jpg");
const set_etiquette = require("../assets/images/set_etiquette.jpg");
const lingo = require("../assets/images/lingo3.jpg");

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={ styles.space }>
          <Image source={walkie} style={styles.image} />
          <Button title="Walkie" onPress={() => navigate('Walkie') } />
        </View>
        <View style={ styles.space }>
          <Image source={lingo} style={styles.image} />
          <Button title="Lingo" onPress={() => navigate('Lingo') } />
        </View>
        <View style={ styles.space }>
          <Image source={set_etiquette} style={styles.image} />
          <Button title="Set Etiquette" onPress={() => navigate('SetEtiquette') } />
        </View>
        <View style={ styles.space }>
          <Image source={set_items} style={styles.image} />
          <Button title="Basic Set Items" onPress={() => navigate('BasicSetItems') } />
        </View>
        <View style={ styles.space }>
          <Image source={camera} style={styles.image} />
          <Button title="Camera" onPress={() => navigate('Camera') } />
        </View>
        <View style={ styles.space }>
          <Image source={lighting} style={styles.image} />
          <Button title="Lighting" onPress={() => navigate('Lighting') } />
        </View>
        <View style={ styles.space }>
          <Image source={departments} style={styles.image} />
          <Button title="Departments" onPress={() => navigate('Crew') } />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  space: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: 40,
    // justifyContent: 'space-around',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    // marginBottom: 10,
    // borderTopWidth: .5,
    // borderBottomWidth: .5,
    shadowOpacity: 0.75,
    shadowRadius: 2,
    shadowColor: '#181818',
    // shadowColor: '#0084ff',
    shadowOffset: { height: 2, width: 0 },
    // backgroundColor: ''
  },
  image: {
    height: 80,
    width: 80,
    marginRight: 40
  }
});

export default Home;
