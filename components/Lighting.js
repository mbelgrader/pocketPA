import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

const silk = require("../assets/images/light/silk.jpg");
const flag = require("../assets/images/light/flags.png");
const c_stand = require("../assets/images/light/c-stand.jpg");
const sandbag = require("../assets/images/light/sandbag_stand.jpg");

class Lighting extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Lighting"
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.space}>
          <Image source={flag} style={styles.image} />
          <View>
            <Text style={styles.bold}>Flag:</Text>
            <Text style={styles.text}>
              Flags, (or cutters) are used to block or cut the light. You might
              use one to keep a light from shining into the camera lens, or to
              shadow a wall or another part of the scene.
            </Text>
            <Text style={styles.text}>
              Flags are distinguished from larger light-cutting tools such as
              overhead rigs or butterflies in that they can be mounted on
              individual C-stands, as opposed to being affixed to collapsible
              frames.
            </Text>
          </View>
        </View>

        <View style={styles.space}>
          <Image source={silk} style={styles.image} />
          <View>
            <Text style={styles.bold}>Silk:</Text>
            <Text style={styles.text}>
              A silk is similar to a flag, but the black fabric is replaced with
              silk to diffuse rather than block light. Most of the time it is
              used to create a larger light source that throws softer edged
              shadows.
            </Text>
            <Text style={styles.text}>
              But it can work as a flag, but one that makes a brighter shadow.
              It will cut more light than a net, and will also bounce more light
              into the scene.
            </Text>
          </View>
        </View>

        <View style={styles.space}>
          <Image source={c_stand} style={styles.image} />
          <View>
            <Text style={styles.bold}>"C" Stands (or Century stand):</Text>
            <Text style={styles.text}>
              The most essential piece of grip gear. It is primarily used to
              position light modifiers, such as silks, nets, or flags, in front
              of light sources.
            </Text>
          </View>
        </View>

        <View style={styles.space}>
          <Image source={sandbag} style={styles.image} />
          <View>
            <Text style={styles.bold}>Sandbag:</Text>
            <Text style={styles.text}>
              An indispensable part of video and film production because they
              have so many uses. Primarily, they are used to add weight to
              objects like light stands and grip gear to prevent them from
              falling over.
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
    width: 100,
    height: 100
  }
});

export default Lighting;
