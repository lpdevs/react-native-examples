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
  TextInput
} from 'react-native';

export default class TextInputDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "Hello"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'grey', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text> {this.state.text} </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 50
  }
});

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
