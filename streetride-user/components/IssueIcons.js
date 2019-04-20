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
            <TouchableOpacity>
                <View style={styles.iconTextContainer}>
                    <Image style={{ width: 50, height: 50 }} source={props.icon} />
                    <Text style={styles.iconText}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default IssueIcons;

const styles = StyleSheet.create({
    iconTextContainer: {
        width: 50,
        height: 'auto',
    },
    iconText: {
        textAlign: 'center'
    },

});
