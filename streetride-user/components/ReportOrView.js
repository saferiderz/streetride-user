import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

function ReportOrView (props) {
   
        return (
            <View>
                <TouchableOpacity name={props.name} onPress={props.onPress}>
                    <View style={styles.iconContainer} >
                        <Image style={styles.iconImage} source={props.source} />
                        <Text style={styles.iconText}>{props.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


export default ReportOrView

const styles = StyleSheet.create({
    iconContainer: {
        width: 50,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    iconText: {
        textAlign: 'center'
    },
    iconImage: {
        width: 50,
        height: 50,
    },
    buttonTextLogin: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 5
      },
      buttonLogin: {
        backgroundColor: "#000080",
        borderRadius: 25,
        width: 200,
        height: 35,
        color: "#ffffff"
        // marginBottom: 10,
      },

});