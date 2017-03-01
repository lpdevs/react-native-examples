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
  View,
  TouchableOpacity
} from 'react-native';

export default class TouchOpacity extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1,
    }
  }

  clickMe() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{this.clickMe()}}>
            <View style={styles.button}>
              <Text style={styles.text}>Click me</Text>
              <Text style={styles.number}>{this.state.number}</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width: 100,
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: 'yellow'
  },
  number:{
    color: 'white',
    fontSize: 20,
  }
});

AppRegistry.registerComponent('TouchOpacity', () => TouchOpacity);
