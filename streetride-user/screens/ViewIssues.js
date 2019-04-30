import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { MapView } from 'expo';

defaultRegion = {
    latitude: 42.1255,
    longitude: -79.3227,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    userLoc: false,
    // latitude: 33.7526, // Atlanta...
    // longitude: -84.400,

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
    componentWillMount() {
      this.fetchMarkerData();   
    }
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

// render() {
//   <MapView
//     style={{ flex: 1 }}
//     region={{
//       latitude: 40.76727216,
//       longitude: -73.99392888,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
// >
    //     {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
    //  const coords = {
    //      latitude: marker.latitude,
    //      longitude: marker.longitude,
    //  };

//      const metadata = `Status: ${marker.statusValue}`;

//      return (
//          <MapView.Marker
            // key={index}
            // coordinate={coords}
            // title={marker.stationName}
            // description={metadata}
//          />
//      );
//   })}
// </MapView>
// }
    render() {
  
    if (this.state.isLoading) {
      return(<Text>Loading...</Text>)
    }

    

    return(
      <>
      <MapView
        style = {{ flex: 1 }}
        provider="google"
        showsUserLocation = { true }
        initialRegion= {
          this.state.region
        }
      >

      <MapView.Marker
        // const pinColor = "#ff0000"
        key={1}
        coordinate={{latitude: 33.7756222,
            longitude: -84.3984737}}
            title={"Georgia Tech"}
            description={"The best university in Georgia"}
            pinColor={"#0000ff"}
        // coordinate = {coords}
        // title = {this.state.markers.marker.stationName}
        // key={index}
        // coordinate={coords}
        // title={marker.stationName}
      />
      </MapView>
      <>
      <Text>{this.state.markers[0].latitude}</Text>
      </>
      </>
    );
    

         

    //          {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
    //  const coords = {
    //      latitude: marker.latitude,
    //      longitude: marker.longitude,
    //  };
    //  return (
    //     <MapView.Marker
        // const pinColor = "#ff0000"
        // key={1}
        // coordinate={{latitude: 33.7756222,
        //     longitude: -84.3984737}}
        //     title={"Georgia Tech"}
        //     description={"The best university in Georgia"}
        //     pinColor={"#0000ff"}
        // key={index}
        // coordinate={coords}
        // title={marker.stationName}
        //description={metadata}
        //  />
    //  );
        //      })}
        // </MapView>
        
   
    
    
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    marginBottom: 10,
    marginTop: 30,
    color: "rgba(0,0,0,0.9)",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },
  subheaderText: {
    marginBottom: 10,
    marginTop: 10,
    color: "rgba(0,0,0,0.9)",
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
    backgroundColor: "#000080",
    borderRadius: 25,
    width: 200,
    height: 35,
    color: "#ffffff"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    marginTop: 5
  }
});
