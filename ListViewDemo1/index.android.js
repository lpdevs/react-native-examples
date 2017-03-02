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

export default class ListViewDemo1 extends Component {

  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
  }

  render() {
    return (
      <View>
        <ListView
          dataSource = {
            this.ds.cloneWithRows([
              {name:'Android Programming', teacher:'David'},
              {name:'C/C++ Programming', teacher:'Alex'},
              {name:'Python Programming', teacher:'Ana'}
            ])
          }

          renderRow = {(rowData)=>{
            return (
              <Text>{rowData.name} - {rowData.teacher}</Text>
            )
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('ListViewDemo1', () => ListViewDemo1);
