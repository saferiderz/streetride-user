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
    email: "",
    username: "",
    password: ""
  };

  validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // user input validation for creating account
  handleCreateAccount = () => {
    if (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === ""
    ) {
      Alert.alert("Please Complete Each Field");
    } else if (!this.validateEmail(this.state.email)) {
      Alert.alert("Invalid Email Address");
    } else if (this.state.username.length < 5) {
      Alert.alert("Invalid Username/Password");
    } else if (this.state.password.length < 8) {
      Alert.alert("Invalid Username/Password");
    } else {
      const data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      };

      fetch("https://streetride.herokuapp.com/api/users/create", {
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
              placeholder="Email"
              placeholderTextColor="#0b409c"
              onChangeText={email => this.setState({ email })}
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
