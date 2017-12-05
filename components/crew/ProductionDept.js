import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class ProductionDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Production',
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

export default ProductionDept;


const JOBS = {
  "Assistant Director / 1st AD": "The 1st assistant director works with both the production manager and the director to make the shooting schedule efficient as possible. The 1st A.D. breaks the script down into a shooting schedule and also helps manage the scheduling of talent, crew and equipment needed for each shooting day. This person sometimes helps direct the background extras in a scene.",

  "Assistant Director / 2nd AD": "The 2nd A.D. works directly with the 1st A.D. to accomplish their duties. The call sheets for each shooting day are created by the 2nd assistant director. The 2nd A.D. also helps manage the scheduling of talent, crew and equipment that is needed for each day. This person also assists in directing the background extras in a movie scene.",

  "Director": "The director is the leading creative artist on a movie set. The director works directly with the actors on their performances and has final creative control on almost every aspect of the the film. The director plays a large role in casting, script revisions, shot composing and even editing. Usually, the director is hired by the producer of the film.",

  "Line Producer": "The line producer supervises the entire budget of the movie. Expenses may include celebrity salaries as well as daily costs like location and equipment rentals. The production manager reports to the line producer the current expenses and needs of the production on an ongoing basis.",

  "Producer": "The producer helps organize the entire production. This person helps develop the script into a workable project. They assist with the hiring of actors and key crew members, while keeping track of finances throughout the production. The producer oversees script progress and often assists in creating final distribution plans for the movie.",

  "Production Assistant": "Many individuals start their careers in the film industry as a production assistant. A production assistant usually does any general duty or minor task that the production heads may need. Basic duties may include dispersing walkie-talkies, setting up pop-up tents and tables, running basic errands as needed or attaining any other last-minute item that the production might need. It is essential that the P.A. has their own transportation to perform these various errands.",

  "Production Coordinator": "A production coordinator is responsible for coordinating the “behind the scenes” logistics, which can include renting equipment, hiring crew members, and coordinating talent. In addition, this crew member may handle the paperwork needed to organize the production. For this reason, the production coordinator is an important crew member in ensuring a production’s goals are on budget and on time.",

  "Production Designer": "The production designer works with the director and is primarily responsible for the design and overall visual “look” and “feel” of a movie. This includes the use of costumes, landscapes, props and other visual scenery that could reflect the movie script.",

  "Production Manager": "The production manager works closely with the production coordinator. This person helps supervise the organization and distribution of the production budget, crew & equipment scheduling, salaries, day rates, and other office related paperwork. This person reports budget needs to the line producer, while trying to keep the production under budget on a day to day basis.",

  "Production Secretary": "The production secretary is the assistant to the production manager. This person assists with the paperwork for the crew & equipment scheduling, timecards & invoicing, crew deal memo’s and other related office materials. The production secretary usually helps complete most of the paperwork needed to properly finish the production.",
}
