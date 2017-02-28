/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Step 1: Import libraries
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

// Step 2: Write code for class
export default class Tutorial extends Component {
  /*component life cycle
  * 1. constructor
  * 2. componentWillMount
  * 3. render
  * 4. componentDidMount
  */
  constructor(props){
    super(props);
    console.log("Hello constructor");
  }

  componentWillMount(){
    console.log("Hello componentWillMount");
  }

  render() {
    console.log("Hello render");
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          {/*<StatusBar hidden="true" />*/}
          {/*<Text style={{backgroundColor: 'yellow'}}> BACKGROUND COLOR</Text>*/}
          <Text style={styles.welcome}>
            Welcome to React Native Android!!!!
          </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
           Double tap R on your keyboard to reload,{'\n'}
           Shake or press menu button for dev menu
          </Text>
        </View>
      </View>
    );
  }

  componentDidMount(){
    console.log("Hello componentDidMount");
  }
}

// Define style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#F5FCFF',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff00ff',
  },
  container2: {
    flex: 6,
    alignItems: 'center',
    backgroundColor: '#00ffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Step 3: Register main component
AppRegistry.registerComponent('Tutorial', () => Tutorial);
