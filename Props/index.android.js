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
import Customer from "./components/lampv.js";

class Props extends Component {
  render() {
    return (
      <View>
        <Person name='Pham Van Lam'></Person>
        <Person name='Tran Van Trat'></Person>
        <Customer name='Alex Sanchez' birth='1980'></Customer>
        <Customer name='Messi Niolaz' birth='1986'></Customer>
      </View>
    );
  }
}

export default class Person extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'yellow', padding: 10}}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Props', () => Props);
