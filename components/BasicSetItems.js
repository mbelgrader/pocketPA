import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const appleboxes = require("../assets/images/set/appleboxes.jpg");

class BasicSetItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.space}>
          <Image source={appleboxes} style={styles.image} />
          <View>
            <Text style={styles.bold}>Apple boxes:</Text>
            <Text style={styles.text}>
              Apple boxes have numerous uses from lifting props, to making
              actors taller, to seats for the crew. They come in full, half,
              quarter and pancake sizes.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  space: {
    backgroundColor: "white",
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    // borderTopWidth: .5,
    // borderBottomWidth: .5,
    shadowOpacity: 0.75,
    shadowRadius: 2,
    shadowColor: "#181818",
    // shadowColor: '#0084ff',
    shadowOffset: { height: 2, width: 0 }
    // backgroundColor: ''
  },
  bold: {
    fontWeight: "bold",
    marginBottom: 5
    // padding: 10
  },
  text: {
    padding: 10
  },
  image: {
    width: 100,
    height: 100
  }
});

export default BasicSetItems;
