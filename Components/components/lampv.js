import React, {Component} from "react";
import {
  View, Text, StyleSheet
} from "react-native";


export default class Lampv extends Component{
  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Component practicing.</Text>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    width: 160,
    height: 160,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 30,
    color: 'white'
  }
});
