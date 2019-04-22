import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 275, height: 275}}
          source={(require("../assets/images/streetride_logo.png"))}
        />
      </View>
    )
  }
}

 const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 50
  },
});