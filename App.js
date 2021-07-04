import React, { Component } from 'react';
import { Button, View, Text,Alert } from 'react-native';


class RedButton extends Component {
  render(){
    return(
      <Button color={this.props.color} title="Click Me" onPress={this.displayAlert}/>
    )
  }

  displayAlert=()=>{
    alert("Dont Disturb Me!");
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <RedButton color="#212121"/>
        <Text>My First React Component</Text>
      </View>
    );
  }
}