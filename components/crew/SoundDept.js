import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class SoundDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title:  'Sound',
  };

  render() {
    return (
      <ScrollView style={ styles.container }>
        { Object.keys(JOBS).map((term, idx) => {
            return (
              <View style={ styles.space } key={ idx }>
                <Text style={ styles.bold }>{ term }</Text>
                <Text style={ styles.text }>{ JOBS[term] }</Text>
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
    paddingTop: 10,
    backgroundColor: 'white',
  },
  space: {
    // backgroundColor: 'white',
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

export default SoundDept;


const JOBS = {
  "Boom Operator / Utility": "This person is responsible for properly positioning the microphone boom pole during the actual filming. The boom operator is the assistant to the sound mixer. Many times the boom operator is required to hold the boom pole for several minutes at a time, which can be physically demanding. The boom operator must also be able to follow the actors movements while staying clear of the camera and lights. This makes it a challenging job for achieving the best possible", audio.

  "Sound Mixer": "The sound mixer for film is head of the sound department and is responsible for leveling, monitoring and recording of audio during production. The sound mixer decides which microphones to use as well as placements of the microphones. This person can also mix the various sound tracks and audio signals in real time. A film sound mixer supervises the boom operator and/or sound utility person.",
}
