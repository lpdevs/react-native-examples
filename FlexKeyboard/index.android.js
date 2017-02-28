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
  Image
} from 'react-native';

export default class FlexKeyboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.number}>1</Text>
            <Text style={[styles.string, styles.hidden]}>1</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>2</Text>
            <Text style={styles.string}>ABC</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>3</Text>
            <Text style={styles.string}>DEF</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.number}>4</Text>
            <Text style={styles.string}>GHI</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>5</Text>
            <Text style={styles.string}>JKL</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>6</Text>
            <Text style={styles.string}>MNO</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.number}>7</Text>
            <Text style={styles.string}>PQRS</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>8</Text>
            <Text style={styles.string}>TUV</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>9</Text>
            <Text style={styles.string}>WXYZ</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.column, styles.column_other]}>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>0</Text>
            <Text style={styles.string}></Text>
          </View>
          <View style={[styles.column,styles.column_other]}>
            <Image source={require('./img/delet.png')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  column:{
    flex: 1,
    borderRightColor: 'grey',
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column_other:{
    backgroundColor: 'grey',
  },
  number:{
    fontSize: 50,
    color: 'black',
  },
  string:{

  },
  hidden:{
    color: 'white',
  },
});

AppRegistry.registerComponent('FlexKeyboard', () => FlexKeyboard);
