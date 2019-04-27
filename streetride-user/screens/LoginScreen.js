import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import ValidationComponent from 'react-native-form-validator';
import Logo from "../components/Logo";

export default class LoginScreen extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {
    // Post route to the backend
    const data = {
      username: this.state.username,
      password: this.state.password
    };

    // Following is commented out for now, waiting on backend
    // Note to the team - the code below is generally how we'll have the
    // front end pass information to the backend, the route/endpoints will change
    // as will the data object, but after this is tested and running, we should
    // be able to roll pretty quickly.

    fetch("http://192.168.1.254:9000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response)
      .then(response => {
        // return responseJson.result;
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Logo />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Email"
              placeholderTextColor="#000080"
              onChangeText={username => this.setState({ username })}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#000080"
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity
              style={styles.buttonNavy}
              onPress={() => {
                // this.handleSubmit();
                this.props.navigation.navigate("Dashboard");
              }}
            >
              <Text style={styles.buttonTextSubmit}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("CreateAccount")}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Dashboard")}
            >
              <Text style={styles.buttonText}>Guest</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 60,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    width: 300,
    height: 50,
    marginBottom: 10,
    backgroundColor: "#dcdcdc",
    borderRadius: 25,
    paddingHorizontal: 16,
    textAlign: "center"
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
    color: "#ffffff",
    borderWidth: 3,
    borderColor: "#dcdcdc"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000080"
  },
  buttonTextSubmit: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 5
  },
  headerText: {
    marginBottom: 50,
    marginTop: 10,
    color: "rgba(0,0,0,0.9)",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  }
});
