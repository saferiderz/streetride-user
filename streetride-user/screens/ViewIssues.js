import React from "react";
import {
  Text
} from "react-native";

import { MapView } from 'expo';

defaultRegion = {
    latitude: 42.1255,
    longitude: -79.3227,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    userLoc: false,
};

export default class ViewIssues extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          region: defaultRegion,
          isLoading: true,
          markers: [],
      };
  }

  static navigationOptions = {
      header: null,
  };

  // Fetch the issues data from the backend API
  fetchMarkerData() {
    fetch('https://feeds.citibikenyc.com/stations/stations.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          isLoading: false,
          markers: responseJson.stationBeanList, 
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Start fetching marker data prior to the component mounting to speed up load time
  componentWillMount() {
    this.fetchMarkerData();   
  }

  // After the component mounts, set the initial map screen to center on the user's current location
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
      let userRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        userLoc: true,
        error: null
      }
      this.setState({region: userRegion});
    });
  }

  render() {
    if (this.state.isLoading) {
      return(<Text>Loading...</Text>)
    }

    return(
      <MapView
        style = {{ flex: 1 }}
        provider="google"
        showsUserLocation = { true }
        initialRegion= {
          this.state.region
        }
      >

        {this.state.markers.map(newMarkers => (
          <MapView.Marker
            key={newMarkers.id}
            coordinate={{
              latitude: newMarkers.latitude,
              longitude: newMarkers.longitude 
            }}
            title={newMarkers.stationName}
            description={newMarkers.statusValue}
            pinColor={(
              newMarkers.statusKey === 1 ? "#00ff00" : "#ff0000"
            )}
          />
        ))}
      </MapView>
    );
  }
}
