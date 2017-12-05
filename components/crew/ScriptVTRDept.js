import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

class ScriptVTRDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Script & VTR"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {Object.keys(JOBS).map((term, idx) => {
          return (
            <View style={styles.space} key={idx}>
              <Text style={styles.bold}>{term}</Text>
              <Text style={styles.text}>{JOBS[term]}</Text>
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
    backgroundColor: "white"
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
    shadowColor: "#181818",
    // shadowColor: '#0084ff',
    shadowOffset: { height: 2, width: 0 }
    // backgroundColor: ''
  },
  bold: {
    fontWeight: "bold",
    marginBottom: 5
  }
});

export default ScriptVTRDept;

const JOBS = {
  "Script Supervisor / Continuity":
    "The script supervisor works closely with the director by taking detailed notes concerning what has been shot, needs to be shot, and also notes any deviations from take to take. He/she also makes sure that the dialogue corresponds with the script. The script supervisor also takes logging notes that are essential in the post production editing process, such as locating shots and finding the best takes. Many times the script supervisor assumes the role of" +
    "continuity, ensuring the consistency between scenes and shots.",

  "Teleprompter Operator":
    "The teleprompter is a device that mounts to the front of the camera and contains a scrolling text for the actor to read while looking into the lens. This technique is also used by newscasters. The teleprompter operator helps set up the teleprompter on the camera as well as the computer that provides the scrolling text program. This person is usually given the script ahead of time so that they can enter it into their computer before arriving on set.",

  "Video Assist Operator":
    "The video assist person operates the VTR (Video Tape Recorder) during production. Most film cameras include a video tap that allows the VTR to record and instantly playback what was just filmed. Since you can’t review 35mm film without it getting processed in the laboratory first, this can be an especially useful tool on set. Video assist is the term used to describe this record and playback process. Reviewing the footage instantly allows the director to confirm" +
    "performances, camera focus, framing, choreography and other elements for accuracy."
};
