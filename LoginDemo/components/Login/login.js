import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image
} from 'react-native';
import LoginForm from './loginForm.js'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/cctocat.png')}
          />
          <Text style={styles.title}>
            A demo login using React Native.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  logo:{
    width: 100,
    height: 100
  },
  title:{
    color: '#fff',
    marginTop : 1,
    width: 320,
    textAlign: 'center'
  }
});
