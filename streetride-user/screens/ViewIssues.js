import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import Slider from '@react-native-community/slider';


import MapView from 'react-native-maps';

defaultRegion = {
  latitude: 42.1255,
  longitude: -79.3227,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
  userLoc: false
};

export default class ViewIssues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: defaultRegion,
      isLoading: true,
      markers: []
    };
  }

  static navigationOptions = {
    header: null
  };

  getPinColor(issueType) {
    switch(issueType) {
      case 'Car In Bike Lane':
        return '#0000cc'
      case 'Close Call':
        return '#00aa00'
      case 'Closed Path':
        return '#cc0000'
      case 'Dockless Vehicle Blocking Path':
        return '#eeeeee'
      case 'Hazard':
        return '#ffff00'
      case 'Malfunctioning Signal':
        return '#ff00ff'
      case 'Pothole':
        return '#ffaa00'
      case 'General Safety Concern':
        return '#ccccaa'
      default:
        return "#000000"
    }
  }
  // Fetch the issues data from the backend API
  fetchMarkerData() {
    fetch("https://streetride.herokuapp.com/api/issues")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          markers: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Start fetching marker data prior to the component mounting to speed up load time
  componentWillMount() {
    this.fetchMarkerData();
  }

  // After the component mounts, set the initial map screen to center on the user's current location
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let userRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        userLoc: true,
        error: null
      };
      this.setState({ region: userRegion });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0b409c" />
        </View>
      );
    }

    return (
      <MapView
        style={{ flex: 1 }}
        provider="google"
        showsUserLocation={true}
        initialRegion={this.state.region}
      >
        {this.state.markers.map(newMarkers => (
          <MapView.Marker
            key={newMarkers.id}
            coordinate={{
              latitude: (newMarkers.lat === null ? parseFloat("0.0") : parseFloat(newMarkers.lat)),
              longitude: (newMarkers.lon === null ? parseFloat("0.0") : parseFloat(newMarkers.lon))
            }}
            title={newMarkers.issueType}
            description={newMarkers.updatedAt.toString().split("T")[0]}
            pinColor={this.getPinColor(newMarkers.issueType)}
          />
        ))}

      </MapView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
