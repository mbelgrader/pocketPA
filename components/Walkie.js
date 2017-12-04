import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class Walkie extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Walkie',
  };


  render() {
    return (
      <ScrollView style={ styles.container }>
        { Object.keys(WALKIE_TERMS).map((term, idx) => {
            return (
              <View style={ styles.space } key={ idx }>
                <Text style={ styles.bold }>{ term }</Text>
                <Text style={ styles.text }>{ WALKIE_TERMS[term] }</Text>
              </View>
            );
          })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  space: {
    backgroundColor: 'white',
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
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default Walkie;


const WALKIE_TERMS = {
  "(name) to (name)": "Term used when requesting someones attention",
  "Go for (name)": "Term used when acknowledging a request: \"Go for John\”",
  "Copy/Copy That": "Term used to indicate that you understand the instructions, or tasks you’ve been given. Make sure to respond EVERY TIME, that way people know you actually heard them.",
  "10-1": "Term used when someone is in the restroom: 'Going 10-1' or, 'Where is Kati?', '10-1'.",
  "What’s your 20?": "Term used when attempting to locate someone: 'John, what’s your 20?'",
  "Flying In": "Term used when bringing someone, or something, to the set. The someone/something 'flies in'.",
  "Does anyone have eyes on (name)": "Term used when trying to find someone who doesn’t have a walkie."
}
