import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

export default class Customer extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name} - {this.props.birth}</Text>
      </View>
    );
  }
}

/* !!! IMPORTANT */
Customer.propType = {
  name: React.PropTypes.string,
  date: React.PropTypes.string
}

var styles = StyleSheet.create({
  container:{
    backgroundColor: 'green',
  },
  text:{
    color: 'pink',
  }
});
