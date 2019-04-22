import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
// import CreateAccountScreen from './CreateAccountScreen';
import Logo from "../components/Logo";

export default class LoginScreen extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Logo/>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Email"
              placeholderTextColor="#000080"
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#000080"
            />
            <TouchableOpacity style={styles.buttonNavy} onPress={() => this.props.navigation.navigate('ViewIssues')}>
              <Text style={styles.buttonTextSubmit}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CreateAccount')}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ViewIssues')}>
              <Text style={styles.buttonText}>Guest</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>    
    )
  }
}

// const AppNavigator = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//   },
//   CreateAccount: {
//     screen: CreateAccount,
//   },
//   View: {
//     screen: ViewIssues,
//   }
// }, {
//   initialRouteName: "Login",
// });

// export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    // marginBottom: 25
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 60,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: 300,
    height: 50,
    marginBottom: 10,
    backgroundColor: "#dcdcdc",
    borderRadius: 25,
    paddingHorizontal: 16,
    textAlign: 'center',
    // fontWeight: "500"
  },
  button: {
    color: "#ffffff",
    marginTop: 5
  },
  buttonNavy: {
    backgroundColor: "#000080",
    borderRadius: 25,
    width: 200,
    height: 35,
    color: "#ffffff"
    // marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black"
  },
  buttonTextSubmit: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  headerText: {
    marginBottom: 50,
    marginTop: 10,
    color: 'rgba(0,0,0,0.9)',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
},
});