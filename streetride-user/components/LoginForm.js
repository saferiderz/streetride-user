import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import Logo from "./Logo";

 export default class LoginForm extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Logo/>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Username"
            placeholderTextColor="#000080"
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#000080"
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonTextLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Guest</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

     )
  }
}

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
  buttonLogin: {
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
  buttonTextLogin: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5
  }
});