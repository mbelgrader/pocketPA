import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class FXDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Stunts & FX',
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

export default FXDept;


const JOBS = {
  "Pyro Technician / Explosives": "Sometimes also known as the armorer, this person is primarily responsible for the handling, maintenance and care of all firearms, weapons and pyrotechnics that are used during filming. This includes all live-action explosives and and battle scene pyro effects. Pyro technicians are usually trained and certified to handle these dangerous props and explosives.",

  "Special Effects Coordinator": "The special effects coordinator designs and supervises the various effects needed for filming through the use of mechanical and/or optical illusion techniques. The special effects coordinator provides the visual elements needed such as recreating weather elements or assisting with props that break, shatter, collapse, burn, smoke or explode. They also provide the special mechanical rigging that allows you to fly an actor.",

  "Special Effects Technician": "A special effects technician works under the special effects coordinator and assists in physically creating the visual elements needed like weather elements, or assisting with props that break, shatter, collapse, burn, smoke or explode. They also help build the special mechanical rigging that allows you to fly an actor.",

  "Stunt Coordinator": "The stunt coordinator manages and coordinates all the dangerous action sequences in a movie that require a stuntman or stunt performer. The stunt coordinator always follows the appropriate safety regulations during filming to ensure the safety of every stunt performer. Types of stunts may include jumping, flipping, diving, free-falling, crashing cars, catching fire, underwater stunts and other dangerous action sequences where stunt doubles are needed.",
}
