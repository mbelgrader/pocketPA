import React, { Component } from 'react';
import { Text, View, StyleSheet, Navigator, TouchableOpacity,
          ScrollView } from 'react-native';

class BasicSetItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
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

export default BasicSetItems;
