import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

 export default class HeaderImage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 45, height: 45}}
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
    paddingRight: 10
  },
});