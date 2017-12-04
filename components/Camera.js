import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

const steadicam = require("../assets/images/camera/steadicam.png");
const jib = require("../assets/images/camera/jib2.jpg");

class Camera extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Camera"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.space}>
          <Image source={steadicam} style={styles.image} />
          <View>
            <Text style={styles.bold}>Steadicam:</Text>
            <Text style={styles.text}>
              Steadicam is a brand of camera stabilizer mounts for motion
              picture cameras invented by Garrett Brown and introduced in 1975
              by Cinema Products Corporation. It mechanically isolates the
              operators movement, allowing for a smooth shot, even when the
              camera moves over an irregular surface.
            </Text>
          </View>
        </View>

        <View style={styles.space}>
          <Image source={jib} style={styles.image} />
          <View>
            <Text style={styles.bold}>Crane (Jib Arm):</Text>
            <Text style={styles.text}>
              In cinematography, a jib is a boom device with a camera on one
              end, and a counterweight and camera controls on the other. It
              operates like a see-saw, but with the balance point located close
              to the counterweight, so that the camera end of the arm can move
              through an extended arc.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  space: {
    // backgroundColor: "white",
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
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
    // padding: 10
  },
  text: {
    padding: 10
  },
  image: {
    width: 150,
    height: 100
  }
});

export default Camera;
