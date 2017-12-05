import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class LocationsDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'LocationsDept',
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
  "Art Directors": "The art director works with the production designer and is responsible for the design and construction of a movie set. They are essentially assistants to the production designer and help construct the “look” and “feel” of the movie.",

  "Prop Maker": "Prop makers and sculptors construct unique and specialized set props that are too difficult to attain, or too expensive to buy. This person builds these needed props from scratch using various materials that may include styrofoam, plastics, electronics, metals, woods or glass types of materials. This person is usually skilled in a wide variety of machining, construction and sculpting techniques.",

  "Prop Master": "The prop master acquires, organizes, maintains and accounts for all the various props needed for the production. A prop is basically any set decoration piece that can be moved readily easily. This includes many items like guns, knives, books, phones, dish-ware, food, musical instruments, pets or any other item that needs to be present to fulfill the story line.",

  "Scenic Artist / Painter": "The scenic artist is in charge of designing and treating all of the set surfaces. This may include painting, plastering, coloring, texturing or applying any other sort of treatment to the set surfaces to create a look. Often times the scenic artist simulates stone, wood, lettering, metallic or brick on the various sets and scenery.",

  "Set Construction Coordinator / Builder": "The construction coordinator supervises the fabrication and physical integrity of the various sets needed as directed by the production designer and art director. This person is also in charge of budgeting and ordering the needed materials for the set designs. The construction coordinator may also be responsible for hiring the carpenters.",

  "Set Decorator / Dresser": "The set decorator makes the decisions on what furnishings and other decorations are going to be used on set. This person works closely with the art director and production designer to create the optimal visual environment for filming. This may include various items such as paintings, fabrics, and other non movable decorative set pieces.",

  "Storyboard Artist": "The storyboard artist creates a series of illustrations and sketches based on the director’s vision during pre-production. Each sketch represents a different camera set-up. These drawings usually include camera angles, characters and set design. The illustrations are then used to assist the other head departments in understanding their tasks.",
}
