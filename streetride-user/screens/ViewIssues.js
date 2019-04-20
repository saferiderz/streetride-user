import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import LinksScreen from '../screens/LinksScreen'


import { Icons } from '../components/IconsObject'
import IssueIcons from '../components/IssueIcons'

class ViewIssues extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.headerText}>View Issues</Text>
                    {/* <Text style={styles.subheaderText}>Issue Type</Text>
                    <View style={styles.contentContainer}>
                        <IssueIcons name={Icons.close.name} icon={Icons.close.uri} />
                        <IssueIcons name={Icons.debris.name} icon={Icons.debris.uri} />
                        <IssueIcons name={Icons.hazard.name} icon={Icons.hazard.uri} />
                    </View>
                    <View style={styles.contentContainer}>
                        <IssueIcons name={Icons.traffic.name} icon={Icons.traffic.uri} />
                        <IssueIcons name={Icons.pothole.name} icon={Icons.pothole.uri} />
                        <IssueIcons name={Icons.closed.name} icon={Icons.closed.uri} />
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <View style={styles.contentContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                this.props.navigation.navigate("View")
              }}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View> */}

                </ScrollView>
            </View>
        );
    }

}

const AppNavigator = createStackNavigator({
  Report: {
    screen: ViewIssues,
  },
  View: {
    screen: ViewIssues,
  }
}, {
  initialRouteName: "Report",
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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