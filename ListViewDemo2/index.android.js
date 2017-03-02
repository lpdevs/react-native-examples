/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView
} from 'react-native';

var DATA = [
    {name: 'Android', teacher : 'Messi'},
    {name: 'IOS', teacher: 'Ronaldo'},
    {name: 'BlackBerry', teacher: 'Tevez'}
];

export default class ListViewDemo2 extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
    this.state = {
      dataSource : ds.cloneWithRows(DATA)
    };
  }

  makeRow(property){
    return(
      <View>
        <Text> {property.name} </Text>
        <Text> {property.teacher} </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{padding : 50}}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.makeRow}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('ListViewDemo2', () => ListViewDemo2);
