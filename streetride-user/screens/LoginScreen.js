import React from 'react';
import { 
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
// import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import ViewIssues from '../screens/ViewIssues'


 class LoginScreen extends React.Component {
  render() {
    return (
      <ScrollView>
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
            <TouchableOpacity style={styles.buttonNavy} onPress={() => {
                this.props.navigation.navigate("View")
              }}>
              <Text style={styles.buttonTextSubmit}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              // title="Create Account"
              onPress={() => {
                this.props.navigation.navigate("CreateAccount")
              }}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                this.props.navigation.navigate("View")
              }}>
              <Text style={styles.buttonText}>Guest</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>    
    )
  }
}

class CreateAccount extends React.Component {
  render() {
    return (
      
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Text style={styles.headerText}>Create an Account</Text>
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
            placeholder="Username"
            placeholderTextColor="#000080"
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true} placeholderTextColor="#000080"
          />
          <TouchableOpacity style={styles.buttonNavy} onPress={() => {
                this.props.navigation.navigate("View")
              }}>
            <Text style={styles.buttonTextSubmit}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("Login")
            }}
          >
            <Text style={styles.buttonText}>Go Back to Login Screen</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
    )
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  CreateAccount: {
    screen: CreateAccount,
  },
  View: {
    screen: ViewIssues,
  }
}, {
  initialRouteName: "Login",
});

export default createAppContainer(AppNavigator);

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
  button: {
    color: "#ffffff"
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
    marginBottom: 10,
    marginTop: 30,
    color: 'rgba(0,0,0,0.9)',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
},
});