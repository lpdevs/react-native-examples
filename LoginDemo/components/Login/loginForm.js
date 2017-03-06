/* @flow */

import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeholder="username or email"
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType="go"
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10
  },
  buttonText:{
    textAlign: 'center',
    color : 'white',
    fontWeight: '700'
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    marginBottom: 10
  }
});
