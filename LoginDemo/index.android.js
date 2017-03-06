/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Login from './components/Login/login.js'

export default class LoginDemo extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('LoginDemo', () => LoginDemo);
