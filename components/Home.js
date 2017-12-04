import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,
          ScrollView, Button } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  redirect(name) {
    this.props.navigator.push({ name: name });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button title="Walkie" onPress={() => navigate('Walkie') } />
        <Button title="Set Etiquette" onPress={() => navigate('SetEtiquette') } />
        <Button title="Lingo" onPress={() => navigate('Lingo') } />
        <Button title="Basic Set Items" onPress={() => navigate('BasicSetItems') } />
        <Button title="Camera" onPress={() => navigate('Camera') } />
        <Button title="Lighting" onPress={() => navigate('Lighting') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // list: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
});

export default Home;
