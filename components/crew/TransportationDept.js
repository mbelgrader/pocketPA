import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class TransportationDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Transportation',
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

export default TransportationDept;


const JOBS = {
  "Captains / Gang Boss": "The transportation coordinator, or gang boss, organizes and provides a variety of vehicles and transportation for all crew, equipment and actors to and from the filming locations. The transportation coordinator/captain deploys the appropriate vehicles and drivers at the proper times to keep the production on schedule and on budget. They also work closely with the locations manager in attaining the proper parking permits and parking locations for all vehicles.",

  "Transportation Driver": "The transportation driver works under the supervision of the transportation captain. Transportation drivers physically drive and operate all provided production vehicles to and from the filming locations. This includes the transport of all crew, equipment and actors safely to and from the film set while staying on schedule. Types of production vehicles may include cube trucks, passenger vans, stake beds, flatbeds, limos, cars or any other needed production vehicle."
}
