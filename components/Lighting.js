import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class Lighting extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Lighting',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
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

export default Lighting;
