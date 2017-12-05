import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class LocationsDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Locations',
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

export default LocationsDept;


const JOBS = {
  "Location Manager": "This person is in charge of attaining all the legal permits and other clearances needed to gain proper permission for filming in a particular location. The location manager also takes care of attaining and processing any other location permit fees as well. On some smaller shoots, the location manager assists in coordinating the parking of vehicles.",

  "Location Scout": "Quite often the location scout is one of the first crew members to be contacted on a production. The location scout assists in finding the various filming locations according to the producer and director’s desires. Location scouts often have a large database of location photographs to show before traveling to the actual location for filming.",
}
