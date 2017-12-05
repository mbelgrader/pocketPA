import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

class CameraDept extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Camera"
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

export default CameraDept;

const JOBS = {
  "Camera Assistant (1st AC)":
    "The 1st AC is the chief assistant to the camera operator. The 1st assistant camera person is in charge of measuring and pulling focus during filming. The 1st AC also threads the film through the camera when a new magazine is loaded. This person also helps setup and build the camera, as well as maintain and clean the camera and lenses.",

  "Camera Assistant (2nd AC)":
    "The 2nd AC is also known as the loader. The 2nd assistant camera person is primarily responsible for loading and unloading the new rolls of film into the different magazines, as well as maintaining and filling out all the camera reports for the film lab. This person also runs the slate or clapper to maintain sync and the correct labeling for each and every shot.",

  "Camera Operator":
    "The camera operator physically controls and operates the camera during filming, under the direction of the D.P. (Director of Photography). The camera operator works closely with both A.C.’s as well. The camera operator controls the shot’s framing, and the camera movements as instructed by the director of photography.",

  "Camera Operator (Aerial)":
    "The aerial photographer or camera operator is qualified and equipped to film aboard aerial devices. This usually refers to small airplanes and helicopter filming, but more recently, the use of drone cameras are being widely used as well.",

  "Camera Operator (Jib Arm / Crane)":
    "This person is responsible for setting up and operating the mechanical camera crane also known as the “jib arm”. The jib arm is primarily used for large establishing shots that require substantial elevation and smooth motion.",

  "Data Wrangling":
    "This is a relatively new job position that has been created in response to the popular use of digital video formats. The data wrangler is usually responsible for organizing, labeling, downloading, duplicating and reformatting the digital storage disks for use on set and the editing room.",

  "Digital Imaging Technician":
    "This is another new job position that was created in response to the popular use of high-end digital video formats. The digital imaging technician uses various image manipulation methods to achieve the highest possible image quality during the production. This person usually manages the transferring and storage of the image data as well.",

  "Director of Photography":
    "The director of photography (D.P.) is in charge of the overall visual look of the film, as seen through the camera. They recommend which cameras and lenses to use for the production. They design the shot’s framing, and the camera movements in conjunction with the director. They are also in charge of the camera crew, lighting design and collaborating with the gaffer.",

  "Photographer / Production Stills":
    "This person takes still photographs and essentially documents the behind-the-scenes making of the production. Often, this person photographs images used for marketing purposes such as movie posters and DVD box art.",

  "Steadicam Owner / Operator":
    "The steadicam is a camera mounting device that utilizes a mechanical arm attached to a body harness to provide extremely smooth hand-held shots. The steadicam operator is responsible for setting up and operating the steadicam during production. Most steadicam operators are very physically fit due to the amount of strength and endurance needed to operate the steadicam.",

  Videographer:
    "This person creates the video that essentially documents the behind-the-scenes making of the movie. This video isn’t normally used in the final version of the film. It’s only used for the purposes of documentation."
};
