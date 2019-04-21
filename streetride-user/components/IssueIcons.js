import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

function IssueIcons(props) {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.iconContainer}>
                    <Image style={styles.iconImage} source={props.icon} />
                    <Text style={styles.iconText}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default IssueIcons;

const styles = StyleSheet.create({
    iconContainer: {
        width: 50,
        height: 'auto',
        flexBasis: 20
    },
    iconText: {
        textAlign: 'center'
    },
    iconImage: {
        width: 50,
        height: 50,
    }

});
