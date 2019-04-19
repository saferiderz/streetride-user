import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class ReportIssues extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.headerText}>Submit an Issue</Text>
                    <Text style={styles.subheaderText}>Issue Type</Text>

                    <View style={styles.contentContainer}>
                        <TouchableOpacity>
                            <View style={styles.iconTextContainer}>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/close.png')} />
                                <Text style={styles.iconText}>Close Call</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.iconTextContainer}>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/debris.png')} />
                                <Text style={styles.iconText}>Debris</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.iconTextContainer}>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/caution.png')} />
                                <Text style={styles.iconText}>Hazard</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentContainer}>
                        <TouchableOpacity>
                            <View style={styles.iconTextContainer}>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/traffic.png')} />
                                <Text style={styles.iconText}>Traffic</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.iconTextContainer}>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/blocked.png')} />
                                <Text style={styles.iconText}>Path Closed</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.iconTextContainer}>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/images/cone.png')} />
                                <Text style={styles.iconText}>Pothole</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <Text style={styles.subheaderText}>Location of Issue</Text>
                    <View style={styles.contentContainer}>

                        <View style={styles.iconTextContainer}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/current.png')} />
                            <Text style={styles.iconText}>Current Location</Text>
                        </View>
                        <View style={styles.iconTextContainer}>
                            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/pin.png')} />
                            <Text style={styles.iconText}>Drop a Pin</Text>
                        </View>
                    </View>
                    <Text style={styles.subheaderText}>Or</Text>

                    <Text style={styles.subheaderText}>Enter Street Address</Text>

                    <TextInput style={styles.textInput} />

                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        backgroundColor: '#fff',
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
        backgroundColor: '#DDDDDD',
        padding: 10
    }

});
