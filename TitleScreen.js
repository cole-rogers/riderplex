import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native'
import { StackNavigator } from 'react-navigation';

class TitleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.large}>RiderPlex</Text>
          <TextInput
            style={{height: 40, color: "#fff", fontSize: 40, width: '70%', alignItems: 'center'}}
            placeholder="Phone Number"
            onChangeText={(number) => this.setState({number})}   />
        </View>
        <View style={styles.bodycontainer}>
          <Text style={styles.bodytext}>Find a Friend</Text>
          <Text style={styles.bodytext}>To Share the Fare</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
            <Image style={styles.button} source={require('./img/button.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    paddingTop: '50%',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#5bc0de',
  },
  large: {
    color: '#fff',
    fontSize: 50
  },
  bodycontainer: {
    paddingTop: '10%',
    alignItems: 'center',
  },
  bodytext: {
    fontSize: 25,
  },
  button: {
    width: 150,
    height: 150,
    marginTop: 50,
  }
});

export default TitleScreen;
