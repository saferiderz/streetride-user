import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    Alert
} from 'react-native';

function ReportOrView(props){
        return (
            <Button
            style={styles.buttonLogin}
                onPress={props.onPress}
                title={"Click me"}
                color={"red"}
            />
        )

}

export default ReportOrView

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        // marginBottom: 25
    },
    inputContainer: {
        marginBottom: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: 300,
        height: 50,
        marginBottom: 10,
        backgroundColor: "#dcdcdc",
        borderRadius: 25,
        paddingHorizontal: 16,
        textAlign: 'center',
        // fontWeight: "500"
    },
    buttonLogin: {
        backgroundColor: "#000080",
        borderRadius: 25,
        width: 200,
        height: 35,
        color: "#ffffff"
        // marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "black"
    },
    buttonTextLogin: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 5
    }
});