import React from 'react';
import { 
  StyleSheet,
  View,
} from 'react-native';
import LoginForm from "../components/LoginForm";

 export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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