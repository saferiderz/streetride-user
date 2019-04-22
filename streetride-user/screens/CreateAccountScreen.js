import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CreateAccountForm from "../components/CreateAccountForm";

export default class CreateAccountScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Text style={styles.headerText}>Create an Account</Text>
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
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});