import React, { Component } from 'react';
import { Text, View, StyleSheet, Navigator, StatusBar, BackAndroid } from 'react-native';

import Home from './components/Home';


class App extends Component {
  constructor() {
    super();
  }

  configureScene() {
    return {
      gestures: null,
      defaultTransitionVelocity: null,
      springFriction: null,
      springTension: 1000,
      animationInterpolators: {
        into: r => r.opacity = 1,
        out: r => r.opacity = 1,
      }
    };
  }


  renderScene(route, navigator) {
    switch (route.name) {
      case 'Home':
        return (<Home navigator={navigator} />);
      case 'Walkie':
        return (<Walkie navigator={navigator} />);
      case 'SetEtiquette':
        return (<SetEtiquette navigator={navigator} />);
      case 'Lingo':
        return (<Lingo navigator={navigator} />);
      case 'BasicSetItems':
        return (<BasicSetItems navigator={navigator} />);
    }
  }

  render() {
    // StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>
        <Navigator
          style={{ flex: 1 }}
          initialRoute={{ name: 'Home' }}
          renderScene={ this.renderScene }
          configureScene={ this.configureScene }
          navigationBar={ <NavBarContainer navigator={ navigator } /> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
