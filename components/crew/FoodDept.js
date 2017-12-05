import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class FoodDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Food',
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

export default FoodDept;


const JOBS = {
  "Assistant Food Stylist": "The assistant food stylist assists the lead food stylist in the preparations and arrangements of the food. This person usually has an extensive background in cooking, recipe development, and the ability to assist in achieving creative solutions for making the food look the most attractive.",

  "Craft Service": "Craft Services are the various snacks and beverages that are provided to the film crew throughout the day. This is separate from catering. The person in charge of craft service sets up and maintains a station near production that provides these snacks and beverages. The craft service person is given a budget prior to attaining all the refreshments.",

  "Food Stylist": "The food stylist will prepare and arrange food in an appealing way to be used in photographs, commercials or movies. This person usually has an extensive background in cooking, recipe development, and the ability to achieve creative solutions for making the food look its most attractive.",
}
