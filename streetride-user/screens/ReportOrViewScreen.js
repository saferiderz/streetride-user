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
      <View style={styles.contentContainer}>
        <ReportOrView onPress={this.handleButton} source={require("../assets/images/map.png")} name="View Issues"/> 
        <ReportOrView onPress={this.handleButton} source={require("../assets/images/submit.png")} name="Submit Issues"/> 
      </View>
      </View>
    )
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around"
},
});