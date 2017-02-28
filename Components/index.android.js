/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Lampv from './components/lampv.js';

class Components extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Lampv></Lampv>
      </View>
    );
  }
}

export default class Square extends Component{
  render(){
    return (
      <View style={styles.square}></View>
    );
  }
}

const styles = StyleSheet.create({
  square:{
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    borderWidth: 1,
  },
});

AppRegistry.registerComponent('Components', () => Components);
