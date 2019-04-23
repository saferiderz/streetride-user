import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { KeyboardAvoidingView } from "react-native";

export default class CreateAccountScreen extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Text style={styles.subheaderText}>Create an Account</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="First Name"
              placeholderTextColor="#000080"
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Last Name"
              placeholderTextColor="#000080"
            />
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
            <TouchableOpacity
              style={styles.buttonNavy}
              onPress={() => this.props.navigation.navigate("ViewIssues")}
            >
              <Text style={styles.buttonTextSubmit}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Go Back to Login Screen</Text>
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
    // marginBottom: 25
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 100,
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
    textAlign: "center",
    justifyContent: "center",
    marginTop: 5
  },
  headerText: {
    marginBottom: 20,
    marginTop: 70,
    color: "rgba(0,0,0,0.9)",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },
  subheaderText: {
    marginBottom: 10,
    marginTop: 20,
    paddingTop: 80,
    color: "#000080",
    fontSize: 25,
    textAlign: "center"
  }
});
