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
      Icons[this.state.longPress].description,
      [
        {
          text: "Submit",
          onPress: () => { { this.props.navigation.navigate("ReportOrView") }; this.fetchData(); this.setState({ issueType: "" }) },
        },
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => { this.setState({ issueType: "" }) }
        }
      ],
      { cancelable: false }
    )
  }

  fetchData = () => {
    const data = {
      issueType: this.state.issueType,
      lat: this.state.latitude,
      lon: this.state.longitude
    };
    console.log(data);
    fetch("http://streetride.herokuapp.com/api/issues/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response)
      .then(response => {
        // return responseJson.result;
      })
      .catch(error => {
        console.error(error);
      });
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

      this.fetchData()

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
          <Text style={{ textAlign: 'center' }}>Hold you finger down on an issue for more information</Text>
          <View style={styles.contentContainer}>
            <IssueIcons
              name={Icons.CarInBikeLane.name}
              icon={Icons.CarInBikeLane.uri}
              onPress={() => this.setState({ issueType: 'Car In Bike Lane' })}
              onLongPress={() => { this.setState({ longPress: 'CarInBikeLane', issueType: 'CarInBikeLane' }), this.explainIssue() }}
            />
            <IssueIcons
              name={Icons.CloseCall.name}
              icon={Icons.CloseCall.uri}
              onPress={() => this.setState({ issueType: 'Close Call' })}
              onLongPress={() => { this.setState({ longPress: 'CloseCall', issueType: 'CloseCall' }), this.explainIssue() }} />
          </View>
          <View style={styles.contentContainer}>

            <IssueIcons
              name={Icons.ClosedPath.name}
              icon={Icons.ClosedPath.uri}
              onPress={() => this.setState({ issueType: 'Closed Path' })}
              onLongPress={() => { this.setState({ longPress: 'ClosedPath', issueType: 'ClosedPath' }), this.explainIssue() }} />
            <IssueIcons
              name={Icons.DocklessVehicleBlockingPath.name}
              icon={Icons.DocklessVehicleBlockingPath.uri}
              onPress={() => this.setState({ issueType: 'Dockless Vehicle Blocking Path' })}
              onLongPress={() => { this.setState({ longPress: 'DocklessVehicleBlockingPath', issueType: 'DocklessVehicleBlockingPath' }), this.explainIssue() }} />
          </View>
          <View style={styles.contentContainer}>

            <IssueIcons
              name={Icons.Hazard.name}
              icon={Icons.Hazard.uri}
              onPress={() => this.setState({ issueType: 'Hazard' })}
              onLongPress={() => { this.setState({ longPress: 'Hazard', issueType: 'Hazard' }), this.explainIssue() }} />
            <IssueIcons
              name={Icons.MalfunctioningSignal.name}
              icon={Icons.MalfunctioningSignal.uri}
              onPress={() => this.setState({ issueType: 'Malfunctioning Signal' })}
              onLongPress={() => { this.setState({ longPress: 'MalfunctioningSignal', issueType: 'MalfunctioningSignal' }), this.explainIssue() }} />
          </View>
          <View style={styles.contentContainer}>
            <IssueIcons
              name={Icons.Pothole.name}
              icon={Icons.Pothole.uri}
              onPress={() => this.setState({ issueType: 'Pothole' })}
              onLongPress={() => { this.setState({ longPress: 'Pothole', issueType: 'Pothole' }), this.explainIssue() }} />
            <IssueIcons
              name={Icons.GeneralSafetyConcern.name}
              icon={Icons.GeneralSafetyConcern.uri}
              onPress={() => this.setState({ issueType: 'General Safety Concern' })}
              onLongPress={() => { this.setState({ longPress: 'GeneralSafetyConcern', issueType: 'GeneralSafetyConcern' }), this.explainIssue() }} />
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
    justifyContent: "space-around",
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
