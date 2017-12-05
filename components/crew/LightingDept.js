import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class LightingDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Lighting',
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

export default LightingDept;


const JOBS = {
  "Best Boy": "The best boy is the lead electrician on set and is in charge of all the other electricians, similar to how the key grip is in charge of all the grips. The best boy usually operates, adjusts and balances the electrical load on the generator where required. This person is also responsible for distributing the electrical cabling properly providing the required power to each of the lights.",

  "Electrician": "The electricians (or juicers) essentially set up and operate all the lighting instruments and cabling as instructed by the best boy or gaffer. This is a physically demanding job due to the large number of heavy lights and cabling often required. Electricians must be knowledgeable of tungsten and HMI lighting as well as changing and installing bulbs properly.",

  "Gaffer": "The gaffer is also known as the chief lighting technician. This person is primarily responsible for developing a lighting plan according to the desires of the Director of Photography. The gaffer informs the best boy and key grip on where and which lights are to be placed. The gaffer is in charge of creating the best possible lighting scenario according to the camera framing.",

  "Grip": "Grips essentially “shape the light” that is provided by the electricians. This includes creating pattern and shadow effects, coloring light, diffusing light or blocking light. While electricians set up the lights and cabling, grips provide everything else that is built around the lights to create the quality of light that the gaffer desires. They also provide a variety of special rigging, securing and safety measures on set.",

  "Key Grip": "The key grip is the lead grip on a film set and in charge of all the other grips. The key grip and best boy collaborate with the gaffer and D.P. to formulate the best tactic for accomplishing a given shot. The key grip oversees the proper camera rigging mechanisms as well as manages the light blocking and diffusing techniques.",
}
