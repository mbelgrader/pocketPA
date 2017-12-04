import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

class Lingo extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Lingo',
  };

  render() {
    return (
      <ScrollView style={ styles.container }>
        { Object.keys(LINGO).map((term, idx) => {
            return (
              <View style={ styles.space } key={ idx }>
                <Text style={ styles.bold }>{ term }</Text>
                <Text style={ styles.text }>{ LINGO[term] }</Text>
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

export default Lingo;


const LINGO = {
  "Above-the-Line": "Producers, Directors, Actors, Screenwriters and all the people who have 'creative' input.",
  "A.D.": "Short for Assistant Director. If you’re a set P.A., he or she will probably be your boss. For more info go here.",
  "Apple Box": "A wooden box used for many different things.  Sizes include;  full apple, half apple, quarter apple, and pancake.",
  "Base Camp": "Sometimes located away from set. This is where the trailers, parking, and meals are usually located.",
  "Below the Line": "Everyone not 'Above-the-Line'. This is the crew and makes up most of the production.  (Interesting Note: I think the budget for 'Below-the-Line' and 'Above-the-Line' usually evens out to about the same. Which is depressing).",
  "Bogies": "Unwanted people in the shot, usually pedestrians, are called 'Bogies'.",
  "C-47 or Bullet": "A wooden clothes pin.",
  "Camera Op or C.O.": "Short for Camera Operator – For more info go here.",
  "Crafty": "Nickname for the craft services table.  This is where all the snacks and drinks are.",
  "Crossing": "It’s polite to say this to the Camera Op if you’re crossing his frame.",
  "Cube Trucks": "Large white trucks with lifts that look like cubes. Each department usually has their own. E.g. The Production Cube.",
  "Day for Night": "When planning on shooting a night scene, during the day on stage.",
  "D.P.": "Short for Director of Photography orÂ Cinematographer.  For more info go here.",
  "Honeywagon": "Portable trailer with bathrooms and dressing rooms.",
  "Hot Points": "If someone yells this, move out of their way. They are probably carrying something pointy and/or sharp.",
  "Genny": "Short for the generator which supplies power.  Usually on a truck.",
  "Lanyard": "The thing around your neck that says you’re part of the production, and have permission to be on set.",
  "Last Looks": "Usually yelled by the A.D. to Hair, Make-up, and Wardrobe to hurry the eff up with the talent.  Shooting NOW!",
  "Layout Board": "Large strips of cardboard or other type board used to protect floors on location.  Sometimes people use carpeted mats as well.",
  "Locations": "Short for Locations Managers. See more here.",
  "Lockdown": "Term for standing around making sure people don’t walk onto set during takes",
  "Abby Singer": "Aka 'The Abby' — Term from the second to last shot of the day.",
  "Martini Shot": "Aka 'Martini' – Term for the last shot of the day.",
  "Pass Van": "Short for Passenger Van.  These vans drive people where they need to go.",
  "Pictures Up": "A warning that they’re ready, and the camera is about to start rolling.",
  "Pop-Up": "Short for the Pop-Up tents all around set.  Usually, each department will have one to shade people and equipment.",
  "Production or the P.O.": "Short for the Production Office. This is where you will find the Production Manager and the Coordinators for various departments…usually.  Also where you fill out paperwork and time cards… etc.",
  "Props": "Any item on set that is touched by an actor, in accordance with what is written in the script.  Otherwise it is a set decoration.",
  "Rolling": "When footage is actually being shot.",
  "Settle in": "See 'Pictures Up.'",
  "Show": "Whether it be TV or a Feature, everything is called a 'Show'.",
  "Talent": "Actors, Models, Musicians — People being filmed on camera.",
  "Transpo": "Short for transportation.  These are the guys who drive everything.",
  "Travelling": "If someone is outside of the location, or walking to set, they are 'traveling'.",
  "Video Village": "A camp of monitors and chairs.  This is where the video feed from the camera goes so that producers, directors, and other above-the-line people can watch what is being shot.",
  "Hot Brick": "Term used for a charged walkie battery.",
  "Cold Brick": "Term used for a dead/dying walkie battery.",
}
