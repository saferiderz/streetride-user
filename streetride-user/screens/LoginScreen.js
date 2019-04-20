import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
// import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

 export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Logo/> */}
        <LoginForm/>
      </View>
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