import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function IssueIcons(props) {
    return (
        <View>
            <TouchableOpacity name={props.name} description={props.description} onPress={props.onPress} onLongPress={props.onLongPress}>
                <View style={styles.iconContainer} >
                    <Image style={styles.iconImage} source={props.icon} />
                    <Text style={styles.iconText}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default IssueIcons;

const styles = StyleSheet.create({
    iconText: {
        textAlign: "center"
    },
    iconImage: {
        width: 75,
        height: 75,
    },
    iconContainer: {
        width: 125,
        height: "auto",
        flex: 1,
        alignItems: "center"
    }
});
