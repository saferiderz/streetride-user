import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";

import { Icons } from "../components/IconsObject";
import IssueIcons from "../components/IssueIcons";

export default class ReportIssues extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    issueType: "",
    latitude: null,
    longitude: null,
    error: null,
    longPress: ''
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    );
  }

  explainIssue = () => {
    Alert.alert(
      "Explanation",
      Icons[this.state.longPress].description ,
      [
        {
          text: "Submit",
          onPress: () => { { this.props.navigation.navigate("ReportOrView") }; this.setState({ issueType: "" }) }
               // TODO:
      // Add code to send data to database here
        },
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {this.setState({issueType: ""})}
        }
      ],
      { cancelable: false }
    )
  }

  handleSubmit = () => {
    if (this.state.issueType === "") {
      Alert.alert(
        "Select Issue",
        "Please select an issue before submitting",
        [
          {
            text: "OK",
          },
          {
            text: "Cancel",
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    } else {
      // TODO:
      // Add code to send data to database here

      Alert.alert(
        "Issue Selected",
        "You have successfully submitted a new issue: " + this.state.issueType,
        [
          {
            text: "OK",
            onPress: () => { { this.props.navigation.navigate("ReportOrView") }; this.setState({ issueType: "" }) }
          }
        ],
        { cancelable: false }
      );
    }
    if (this.state.error) {
      Alert.alert("Error:", this.state.error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.subheaderText}>Select an Issue Type</Text>
          <View style={styles.contentContainer}>
            <IssueIcons
              name={Icons.debris.name}
              icon={Icons.debris.uri}
              key={Icons.debris.name}
              description={Icons.debris.description}
              onPress={() => this.setState({ issueType: 'debris' })}
              onLongPress={() => {this.setState({ longPress: 'debris', issueType: 'debris'}), this.explainIssue() }}
            />
            <IssueIcons
              name={Icons.close.name}
              icon={Icons.close.uri}
              key={Icons.close.name}
              onPress={() => this.setState({ issueType: 'close' })}
              onLongPress={() => {this.setState({ longPress: 'close', issueType: 'close'}), this.explainIssue() }}            />

            <IssueIcons
              name={Icons.hazard.name}
              icon={Icons.hazard.uri}
              key={Icons.hazard.name}
              onPress={() => this.setState({ issueType: 'hazard' })}
              onLongPress={() => {this.setState({ longPress: 'hazard', issueType: 'hazard'}), this.explainIssue() }}            />
          </View>
          <View style={styles.contentContainer}>
            <IssueIcons
              name={Icons.traffic.name}
              icon={Icons.traffic.uri}
              key={Icons.traffic.name}
              onPress={() => this.setState({ issueType: 'traffic' })}
              onLongPress={() => {this.setState({ longPress: 'traffic', issueType: 'traffic'}), this.explainIssue() }}            />
            <IssueIcons
              name={Icons.closed.name}
              icon={Icons.closed.uri}
              key={Icons.closed.name}
              onPress={() => this.setState({ issueType: 'closed' })}
              onLongPress={() => {this.setState({ longPress: 'closed', issueType: 'closed'}), this.explainIssue() }}            />
            <IssueIcons
              name={Icons.pothole.name}
              icon={Icons.pothole.uri}
              key={Icons.pothole.name}
              onPress={() => this.setState({ issueType: 'pothole' })}
              onLongPress={() => {this.setState({ longPress: 'pothole', issueType: 'pothole'}), this.explainIssue() }}            />
          </View>
          <View style={{ marginTop: 20 }} />
          <View style={styles.contentContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.handleSubmit();
              }}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  subheaderText: {
    marginBottom: 10,
    marginTop: 20,
    color: "#0b409c",
    fontSize: 25,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  button: {
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
    color: "white",
    textAlign: "center",
    marginTop: 5
  }
});
