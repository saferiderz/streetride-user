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
        <ReportOrView onPress={this.handleButton} source={require("../assets/images/map.png")} name="View Issues"/> 
        <ReportOrView onPress={this.handleButton} source={require("../assets/images/submit.png")} name="Submit Issues"/> 
      </View>
    )
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems:'center'

  },
  contentContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: "space-around"
},
});
