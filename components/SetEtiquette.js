import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

class SetEtiquette extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Set Etiquette"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {Object.keys(SET).map((term, idx) => {
          return (
            <View style={styles.space} key={idx}>
              <Text style={styles.bold}>{term}</Text>
              <Text style={styles.text}>{SET[term]}</Text>
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
    backgroundColor: "white",
  },
  space: {
    // backgroundColor: "white",
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

export default SetEtiquette;

const SET = {
  Always:
    "Always follow up. Always double check. Always try your hardest. Always ask questions. Always be respectful.",
  Brevity: "When busy, be brief. Say only what’s needed.",
  "Copy That":
    "Overheard on the walkies: 'Can you grab the ND9 from the cart when you get a chance?'… 'OK.' … 'OK what?!'" +
    "Saying 'copy' while on a walkie talkie is the best way to confirm you’ve received and understand a message. Even better is to repeat part of the command (i.e. 'Copy, ND9 on its way').",
  Driving:
    "When driving other crew and/or equipment, be gentle and aware of all laws, but get there as quickly as you legally can.",
  Electricity:
    "Assuming outlets are free to use is how batteries get unplugged and breakers get tripped. Before you plug anything into an outlet, ask an electrician if it’s OK.",
  Food:
    "While waiting in line for your lunch break, let your superiors go in front of you. When making stops at the craft services table, offer to bring stuff back for other crew.",
  Gear:
    "Unless it’s your department’s gear or they’ve tasked you to help, don’t touch it. Seriously — if it’s not yours, don’t touch it.",
  "Hot Points!":
    "Yell this whenever carrying something long and pointy around corners or through doorways (i.e. dolly track, camera sticks, C-stands)",
  Introductions:
    "On your first day of a shoot, take the time to introduce yourself to anyone and everyone — including talent, if the situation permits. It makes working with them a lot more friendly and fun.",
  Jokes:
    "Pranks, in moderation, have their place on set and so do jokes, but be careful about who you tell them to. Have some tact — avoid overtly offensive jokes.",
  "Keep Yourself Busy":
    "Standing around will make you look useless, confused, lost, and also lazy. There’s always something to be done. If you don’t believe me, start with this list of 27 things to do to keep you busy on set.",
  Lingo:
    "Stingers, C-47’s, sticks, babies, high-hats, Gary Coleman, video village, apple box, sharps, and horseback. Unsure what any of that means? It helps to learn film production slang to be able to communicate effectively.",
  Mistakes:
    "Unintentional mess-ups are not just a normal part of film production, but of everyday life. If mistakes never happened, line producers would celebrate saving the 10% contingency funds they build into every budget. When you mess up, apologize and find a solution. It’s never worth dwelling on.",
  "Ninja-like":
    "The less noticeable you are while doing your job, the better. Most crew positions mean being invisible — if you’ve done you’re job right, it’s hard to notice you did anything at all.",
  Opinions:
    "Unless you’re asked, you don’t have one. And even when you are asked, always reply first with, 'Well, what do you think?'",
  Phones:
    "Smartphones are an important piece of the toolkit for many on set, but they also still have that annoying problem all cell phones have — noise. Turning off your phone is best, but silence it at least — even vibrate makes noise.",
  "Quiet on set!":
    "When shooting sound, be super silent during takes. Even between setups, minimize how much noise you make so as not to annoy anybody.",
  Radios:
    "Once your done pretending that you’re a GI Commando, learn how to use a walkie talkie appropriately and use it sparingly.",
  Safety:
    "Films, movies, and videos are never more important than your life. If you ever feel unsafe, alert somebody immediately and don’t be afraid to stand firm on the issue.",
  Talent:
    "If you know who they are without ever meeting them, don’t talk to them unless you have to or they approach you. Otherwise, talk to them as you would any other crew member being acutely aware whether or not they are busy.",
  Understanding:
    "From The Production Assistant's Pocket Handbook: " +
    "A seasoned First Camera Assistant nicknamed 'J-gor' once told me what the universal response to any human utterance was. He had heard it from a famous Dolly Grip, and felt it necessary to pass it on to me seeing as it was my first job as a P.A. " +
    "The response is, 'I Understand'. By varying the speed and tone 'I Understand' works as a response in situations ranging from, 'what a sunny day' or 'here’s a million dollars', to 'my feet hurt' and 'get a C-stand'. Test it out for yourself. I haven’t found any other two words that cover as many situations. " +
    "Do you understand now?",
  "Video Village":
    "The monitor where the director, producer, and script supervisor stand can get very crowded very quick. The harsh truth is that, besides your curiosity to watch the take, you probably don’t need to be there — so don’t be.",
  "Water Bottles":
    "At some point, you’ll be asked/tasked/demanded to go grab bottles of water for crew. Make sure if they are wet you use a paper towel or cloth to dry them. Bonus points if you hand each crew member their bottle of water with their initials already in Sharpie on the cap.",
  "XXL (Extra Extra Large)":
    "Moderation is best left at home on film sets. You simply don’t have the time to play Goldilocks and test whether you need more or less or if it’s just right. When in doubt, always grab double of what you think you need — it never hurts to have extras.",
  Yellow:
    "Bright shirts may bring out the color in your eye, but vivid clothing also can affect the lighting of a scene. Avoid wearing certain colors like white, yellow, and light grays that can unintentionally bounce light into a scene.",
  Zero:
    "Despite all your fears to the contrary, you step on set with just as fresh a start as anyone else. When Day 1 rolls around, introductions are made, ground rules laid out, and experience irrelevant. At this point, it’s all about this one job."
};
