import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Logo from "../components/Logo";

export default class LoginScreen extends Component {
  state = {
    username: "",
    password: ""
  };

  // user input validation for login
  handleLogin = () => {
    if (this.state.username === "" || this.state.password === "") {
      Alert.alert("Enter Username & Password");
    } else if (this.state.username.length < 5) {
      Alert.alert("Invalid Username/Password");
    } else if (this.state.password.length < 8) {
      Alert.alert("Invalid Username/Password")
    } else {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    // Post route to the backend
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    let api;
    if (__DEV__) {
      api = "https://streetride-dev.herokuapp.com/api/issues"
    } else {
      api = "https://streetride.herokuapp.com/api/issues"
    }
    fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response =>response.json())
      .then(response => {
        if (response.isLoggedIn) {
          let userData = {
            token: response.token,
            userId: response.userId,
            userName: response.userName,
            isLoggedIn: response.isLoggedIn
          }
          this.storeItem("@MySuperStore:_streetRide_userData", userData);
          this.props.navigation.navigate("Dashboard");
        } else {
          Alert.alert(
            'Access Denied',
            'The username or password was incorrect.',
            [
              {text: 'Try Again', onPress: () => {}}  // Empty function that is a noop because onPress is waiting for a promise. 
            ],
            {cancelable: false},
          );
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  async componentDidMount() {
    let userData = await AsyncStorage.getItem("@MySuperStore:_streetRide_userData");
    userDataJSON = JSON.parse(userData);
    if (userData != null) {
      userDataJSON = JSON.parse(userData);
      if (userDataJSON.isLoggedIn) {
        this.props.navigation.navigate("Dashboard");
      }
    }
  }
  
  async storeItem(key, item) {
    try {
      let jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.log(error.message);
    }
  }

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
                this.handleLogin();
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
              onPress={() => {
                this.setState({ 
                  username: "Guest",
                  password: "lkjhgfds99" 
                });
                // The timeout is not ideal, but it works
                // setState is asynchronus and doesn't update before
                // handleSubmit is called. The recommended solution is to use a callback,
                // however, that didn't actually work, hence this dirty hack
                setTimeout(() => {
                  this.handleSubmit()
                }, 100)
              }}
            >
              <Text style={styles.buttonText}>Guest</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.privacyPolicy}
          onPress={() => this.props.navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.privacyText}>Privacy Policy</Text>
        </TouchableOpacity>
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
    marginTop: 80,
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
    marginBottom: 50,
    marginTop: 10,
    color: "rgba(0,0,0,0.9)",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },
  privacyPolicy: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    color: "black"
  },
  privacyText: {
    fontSize: 14,
    color: "black",
    textDecorationLine: "underline"
  }
});
