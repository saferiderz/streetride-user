import React from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
import { Icons } from "../components/IconsObject"

import { MapView } from "expo";

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

  getIconType(issueType) {
    switch(issueType) {
      case 'Car In Bike Lane':
        return Icons.CarInBikeLane.uri
      case 'Close Call':
        return Icons.CloseCall.uri
      case 'Closed Path':
        return Icons.ClosedPath.uri
      case 'Dockless Vehicle Blocking Path':
        return Icons.DocklessVehicleBlockingPath.uri
      case 'Hazard':
        return Icons.Hazard.uri
      case 'Malfunctioning Signal':
        return Icons.MalfunctioningSignal.uri
      case 'Pothole':
        return Icons.Pothole.uri
      case 'General Safety Concern':
        return Icons.GeneralSafetyConcern.uri
      default:
        return Icons.GeneralSafetyConcern.uri
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
           // pinColor={this.getPinColor(newMarkers.issueType)}
          >
          <Image source={this.getIconType(newMarkers.issueType)} style={{width:25, height:25}}/>
          </MapView.Marker>
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
