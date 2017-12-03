import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native'
import { StackNavigator } from 'react-navigation';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
    this.handleSubmit.bind(this);
  }

  componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
}
handleSubmit(e) {
    e.preventDefault();
    var self = this;
    fetch('http://10.249.127.255:5000', {
        method: 'POST',
        data: {
          number: this.state.number,
          long: this.state.longitude,
          lat: this.state.latitude,
        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.bodytext}>Finding a Companion...</Text>
        <Text style = {styles.bodytext}>Latitude: {this.state.latitude}</Text>
        <Text style = {styles.bodytext}>Longitude: {this.state.longitude}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5bc0de',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodytext: {
    color: '#fff',
    fontSize: 25,
  },
});