import React from 'react';
import { 
  StyleSheet,
  View,
} from 'react-native';
import ReportOrView from "../components/ReportOrView";



 export default class ReportOrViewScreen extends React.Component {

handleButton = () => {
    console.log('you pressed me')
}

  render() {
    return (
      <View style={styles.container}>
        <ReportOrView onPress={this.handleButton} label="whatever"/> 
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