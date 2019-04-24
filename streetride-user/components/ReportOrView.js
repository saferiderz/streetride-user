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
        width: 200,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        textAlign: 'center',
        fontSize: 20
    },
    iconImage: {
        width: 100,
        height: 100,
    }
});