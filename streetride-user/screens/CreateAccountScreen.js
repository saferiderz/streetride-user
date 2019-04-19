import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Logo from "../components/Logo";
import CreateAccountForm from "../components/CreateAccountForm";

export default class CreateAccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Logo/> */}
        <CreateAccountForm/>
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