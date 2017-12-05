import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class WardrobeDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Makeup & Wardrobe',
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

export default WardrobeDept;


const JOBS = {
  "Costume Designer": "The costume designer makes decisions on which wardrobes and costumes actors will wear based on the script requirements and character portrayals. Costume designers create or choose various clothing patterns, designs, colors, sizes and accessories for each wardrobe used during production. On larger movies, the costume designer has several assistants helping to organize, disperse and maintain all the costumes used by the cast.",

  "Hair Stylist": "This person is responsible for styling and maintaining the talent’s hair throughout filming. The hair stylist is usually equipped with all of the appropriate supplies needed for the hair styling process. The hair dresser works in conjunction with the make-up artist to attain the best possible look for the actors and actresses.",

  "Makeup Artist": "The makeup artist’s main task is to apply and create a variety of looks on the actors and actresses skin surfaces with makeup, from current trends to classic or period pieces. The makeup artist creates a look according to the director’s desires, often inspired by the characterizations in a story.",

  "Special FX Makeup": "The prosthetics or special effects makeup person uses a variety of techniques for applying and gluing different materials such as latex, gelatin and other colorations which are used on the face or skin of an actor. Gore and blood, burns, creatures and aging special effects are the more commonly used prosthetic makeup techniques.",

  "Wardrobe Stylist": "The wardrobe stylist works closely with the costume designer, and assists with preparing everything related to the actors clothing, costumes and wardrobe. Common tasks of the wardrobe assistant are maintaining and styling for all the wardrobes worn by the various actors. They also assist in helping to organize, disperse and account for all the costumes used on set.",
}
