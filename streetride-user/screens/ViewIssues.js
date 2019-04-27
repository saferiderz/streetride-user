import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { MapView } from 'expo';

// export const getCurrentLocation = () => {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e), { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
//     });
// };

defaultRegion = {
    latitude: 42.1255,
    longitude: -79.3227,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    userLoc: false,
    // latitude: 33.7526, // Atlanta...
    // longitude: -84.400,

};

// region = {};

// getCurrentLocation()
// .then(position => {
//     if(position) {
//             region = {
//                 latitute: position.coords.latitude,
//                 longitude: position.coords.longitude,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421,
//             }
//         }
//     });


// region = {
//     latitude: position.coords.latitude,
//     longitude: position.coords.longitude,
//     latitudeDelta: 0.003,
//     longitudeDelta: 0.003, 
// }

export default class ViewIssues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: defaultRegion,
        };
    }

    static navigationOptions = {
        header: null,
    };

    
    
    // componentDidMount() {
    //     return getCurrentLocation()
    //     .then(position => {
    //         if(position) {
    //             this.setState({
    //                 region: {
    //                     latitute: position.coords.latitude,
    //                     longitude: position.coords.longitude,
    //                     latitudeDelta: 0.0922,
    //                     longitudeDelta: 0.0421,
    //                 },
    //                 positionLoaded: true,
    //             });
    //         }
    //     });
    // }
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
    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(
    //       position => {
    //         this.setState({
    //           latitude: position.coords.latitude,
    //           longitude: position.coords.longitude,
    //           error: null
    //         });
    //       },
    //       error => this.setState({ error: error.message }),
    //       { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    //     );
    //   }

    render() {
      return (
          <>
         { this.state.region.userLoc && 
        <MapView
            style = {{ flex: 1 }}
            showsUserLocation = { true }
            initialRegion= {
                this.state.region
            }
        />
         }
        {/* <View style={styles.container}>
            <Text>View Issues</Text>
            <Text>{ this.state.region.latitude }</Text>
            <Text>{ this.state.latitude }</Text>
            <Text>{ this.state.region.longitude }</Text>
        </View> */}
        </>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        marginBottom: 10,
        marginTop: 30,
        color: 'rgba(0,0,0,0.9)',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subheaderText: {
        marginBottom: 10,
        marginTop: 10,
        color: 'rgba(0,0,0,0.9)',
        fontSize: 25,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        textAlign: 'center',
        marginTop: 5
    }
});