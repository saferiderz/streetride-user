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

import { Icons } from '../components/IconsObject'
import IssueIcons from '../components/IssueIcons'

export default class ReportIssues extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.headerText}>Report an Issue</Text>
                    <Text style={styles.subheaderText}>Issue Type</Text>
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
                        <TouchableOpacity style={styles.button}>
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
        backgroundColor: 'rgb(242,247,255)'
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
    textInput: {
        paddingTop: 30,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 30,
        marginLeft: 30,
        borderRadius: 10
    },
    iconTextContainer: {
        width: 50,
        height: 'auto',
    },
    iconText: {
        textAlign: 'center'
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(11,63,156)',
        padding: 10,
        borderRadius: 25,
        color: 'white'
    },
    buttonText: {
        marginBottom: 5,
        marginTop: 5,
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        flexBasis: 3
    }

});
