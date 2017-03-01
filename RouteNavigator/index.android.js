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
  Navigator,
  TouchableOpacity
} from 'react-native';

class RouteNavigator extends Component {
  renderScene(route, navigator){
      switch (route.name) {
        case 'red': return (<RedScreen clickForward={()=>{
                                          navigator.push({
                                            name: 'yellow',
                                            passProps: {abc:'lam', def:'123456'}
                                          });
                                        }}/>);
        case 'yellow': return (<YellowScreen  clickBack={()=>{
                                                navigator.pop({ name: 'red'});
                                              }}
                                              user = {route.passProps.abc}
                                              code = {route.passProps.def}
                                        />);
      }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'red'}}
        renderScene ={this.renderScene}
      />
    );
  }
}

class RedScreen extends Component{
  render(){
    return(
      <View style={{backgroundColor:'red', flex: 1}}>
        <TouchableOpacity onPress={this.props.clickForward}>
          <Text style={{marginTop: 100, color:'yellow'}}>Go to yellow screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class YellowScreen extends Component{
  render(){
    return(
      <View style={{backgroundColor:'yellow', flex: 1}}>
        <TouchableOpacity onPress={this.props.clickBack}>
          <Text style={{marginTop: 100, color:'red'}}>{this.props.user} - {this.props.code}</Text>
          <Text style={{marginTop: 100, color:'red'}}>Back to red screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('RouteNavigator', () => RouteNavigator);
