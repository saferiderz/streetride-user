import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

class AuthLoadingScreen extends Component {

  // constructor() {
  //   super()
  //   this.loadApp()
  // }
  
  // loadApp = async() => {
  //   const userToken = await AsyncStorage.getItem('userToken')

  //   this.props.navigation.navigate(userToken?'App':'Auth') //App & Auth = routes
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthLoadingScreen</Text>
      </View>
    )
  }
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});