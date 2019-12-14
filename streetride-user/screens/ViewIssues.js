import React from "react";
import { View, ActivityIndicator, StyleSheet, Slider, Text, Modal, TouchableOpacity, Image } from "react-native";


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
      markers: [],
      sliderValue: 15,
      sliderText: '',
      modalVisible: false
    };
  }

  static navigationOptions = {
    header: null
  };

  getPinColor(issueType) {
    switch (issueType) {
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
    let api;
    if (__DEV__) {
      api = "https://streetride-dev.herokuapp.com/api/issues"
    } else {
      api = "https://streetride.herokuapp.com/api/issues"
    }
    fetch(api)
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
    if (__DEV__) {
      api = "https://streetride-dev.herokuapp.com/api/issues"
    } else {
      api = "https://streetride.herokuapp.com/api/issues"
    }
  }

  getUpdatedMarkers() {
    let days = this.state.sliderValue.toString()
    let query = "https://streetride-dev.herokuapp.com/api/issues/days/"
    let totalQuery = query + days
    fetch(totalQuery)
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

  // Dynamically change text
  changeText = (value) => {
    this.setState({
      sliderValue: value,
      sliderText: value
    })
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
        style={{ flex: 1, justifyContent: "flex-end" }}
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
        <Text>{this.state.sliderText}</Text>
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 100 }}>
              <View>
                <Slider
                  value={this.state.sliderValue}
                  onValueChange={value => this.changeText(value)}
                  minimumValue={0}
                  maximumValue={30}
                  step={1}
                  onSlidingComplete={this.getUpdatedMarkers()}
                />
                <Text>{this.state.sliderValue}</Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Image source={require('../assets/images/filter.png')} style={{ width: 30, height: 30, margin: 10, backgroundColor: "white" }} />
          </TouchableOpacity>
        </View>
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
