import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class BasicSetItems extends Component {
  constructor(props) {
    super(props);
  }

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

export default BasicSetItems;
