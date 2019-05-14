import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

export default class LogoutScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.subheaderText}>Sure you want to logout?</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.buttonNavy}
            onPress={() => {
              AsyncStorage.clear();
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonTextReport}>Yes</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>or</Text>
          <TouchableOpacity
            style={styles.buttonGray}
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            <Text style={styles.buttonTextView}>No</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 80,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    width: 300,
    height: 50,
    marginBottom: 10,
    backgroundColor: "#dcdcdc",
    borderRadius: 25,
    paddingHorizontal: 16,
    textAlign: "center"
  },
  button: {
    color: "#ffffff",
    marginTop: 5
  },
  buttonNavy: {
    backgroundColor: "#0b409c",
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#dcdcdc",
    width: 150,
    height: 150,
    color: "#ffffff",
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonGray: {
    backgroundColor: "#dcdcdc",
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#0b409c",
    width: 150,
    height: 150,
    color: "#ffffff",
    marginTop: 3,
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black"
  },
  buttonTextReport: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 5
  },
  buttonTextView: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0b409c",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 5
  },
  headerText: {
    marginBottom: 50,
    marginTop: 10,
    color: "rgba(0,0,0,0.9)",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },
  subheaderText: {
    marginTop: 20,
    paddingTop: 50,
    color: "#0b409c",
    fontSize: 25,
    textAlign: "center"
  },
  orText: {
    color: "#0b409c",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 0
  }
});
