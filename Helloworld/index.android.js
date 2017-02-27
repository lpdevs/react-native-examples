/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Step 1: Import library
import React, { Component } from 'react';
import {
  AppRegistry, View, Text
} from 'react-native';

// Step 2: Code for class {Component}
class Helloworld extends Component {
  render(){
    return(
      <View>
        <Text>
          Hello React Native Android!
        </Text>
      </View>
    );
  }
}

// Step 3: Register main class {Component}
AppRegistry.registerComponent('Helloworld', () => Helloworld);
