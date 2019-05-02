import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";
import { KeyboardAvoidingView } from "react-native";

export default class CreateAccountScreen extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  };

  // user input validation for creating account
  handleCreateAccount = () => {
    if (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.username === "" ||
      this.state.password === ""
    ) {
      Alert.alert("Please Complete Each Field");
    } else {
      this.props.navigation.navigate("Dashboard");
    }
  };

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
              placeholderTextColor="#0b409c"
              onChangeText={firstname => this.setState({ firstname })}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Last Name"
              placeholderTextColor="#0b409c"
              onChangeText={lastname => this.setState({ lastname })}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Username"
              placeholderTextColor="#0b409c"
              onChangeText={username => this.setState({ username })}
            />
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#0b409c"
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity
              style={styles.buttonNavy}
              onPress={() => {
                this.handleCreateAccount();
              }}
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
    borderRadius: 15,
    paddingHorizontal: 16,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#0b409c"
  },
  button: {
    color: "#ffffff",
    marginTop: 5
  },
  buttonNavy: {
    backgroundColor: "#0b409c",
    borderRadius: 15,
    width: 200,
    height: 35,
    color: "#ffffff",
    borderWidth: 3,
    borderColor: "#dcdcdc"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0b409c"
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
    color: "#0b409c",
    fontSize: 25,
    textAlign: "center"
  }
});