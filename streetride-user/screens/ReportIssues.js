import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert, TextInput
} from 'react-native';

import { Icons } from '../components/IconsObject'
import IssueIcons from '../components/IssueIcons'

export default class ReportIssues extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        issueType: '',
        location: ''
    }

    // placeholder for now. Gives me some type of node module number when clicking on an issue
    // will try to use this in place of hard coding in the future
    handleAlert(anything) {
        const iconValue = anything.target
        alert('Hello ' + typeof (iconValue) + " " + iconValue)
    }

    // TODO 
    // currently a place holder that gives an alert with the issue type. Will adjust to 
    // also grab location when geolocator is ready to 
    handleSubmit = () => {
        if (this.state.issueType === '') {
            alert('Please select an issue before submitting')
        } else {
            alert(this.state.issueType)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.headerText} >Report an Issue</Text>
                    <Text style={styles.subheaderText}>Issue Type</Text>
                    <View style={styles.contentContainer}>
                        <IssueIcons name={Icons.close.name} icon={Icons.close.uri} key={Icons.close.name} onPress={() => this.setState({ issueType: 'close call' })} />
                        <IssueIcons name={Icons.debris.name} icon={Icons.debris.uri} key={Icons.debris.name} onPress={() => this.setState({ issueType: 'debris' })} />
                        <IssueIcons name={Icons.hazard.name} icon={Icons.hazard.uri} key={Icons.hazard.name} onPress={() => this.setState({ issueType: 'hazard' })} />
                    </View>
                    <View style={styles.contentContainer}>
                        <IssueIcons name={Icons.traffic.name} icon={Icons.traffic.uri} key={Icons.traffic.name} onPress={() => this.setState({ issueType: 'traffic' })} />
                        <IssueIcons name={Icons.pothole.name} icon={Icons.pothole.uri} key={Icons.pothole.name} onPress={() => this.setState({ issueType: 'pothole' })} />
                        <IssueIcons name={Icons.closed.name} icon={Icons.closed.uri} key={Icons.closed.name} onPress={() => this.setState({ issueType: 'path closed' })} />
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <View style={styles.contentContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
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