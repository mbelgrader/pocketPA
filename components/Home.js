import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,
          ScrollView, Button } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
  };

  redirect(name) {
    this.props.navigator.push({ name: name });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={ styles.space }>
          <Button title="Walkie" onPress={() => navigate('Walkie') } />
        </View>
        <View style={ styles.space }>
          <Button title="Set Etiquette" onPress={() => navigate('SetEtiquette') } />
        </View>
        <View style={ styles.space }>
          <Button title="Lingo" onPress={() => navigate('Lingo') } />
        </View>
        <View style={ styles.space }>
          <Button title="Basic Set Items" onPress={() => navigate('BasicSetItems') } />
        </View>
        <View style={ styles.space }>
          <Button title="Camera" onPress={() => navigate('Camera') } />
        </View>
        <View style={ styles.space }>
          <Button title="Lighting" onPress={() => navigate('Lighting') } />
        </View>
      </View>
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
    marginTop: 20,
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

export default Home;
