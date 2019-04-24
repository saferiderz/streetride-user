import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";
import { AppLoading, Asset, Font } from "expo";

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
// import TabBarIcon from "./components/TabBarIcon";
import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import ViewIssues from "./screens/ViewIssues";
import ReportIssues from "./screens/ReportIssues";
import ReportOrView from "./screens/ReportOrView";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppContainer />
        </View>
      );
    }
  }
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

// stacknavigator for report issues screen that is a parent to the ReportOrView screen
const ReportStack = createStackNavigator({
  Report: {
    screen: ReportIssues,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, marginRight: 50 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  },
  ReportOrView: {
    screen: ReportOrView,
    navigationOptions: ({}) => {
      return {
        header: null,
      };
    }
  }
});

const AppTabNavigator = createBottomTabNavigator(
  {
    View: {
      screen: ViewIssues,
      navigationOptions: () => ({
        tabBarLabel: "View Issues",
        tabBarOptions: { activeTintColor: "#000080" },
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("./assets/images/eye.png")}
            style={{ width: 25, height: 25 }}
            focused={focused}
          />
        )
      })
    },
    Report: {
      screen: ReportStack,
      navigationOptions: () => ({
        tabBarLabel: "Report Issues",
        tabBarOptions: { activeTintColor: "#000080" },
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("./assets/images/submit.png")}
            style={{ width: 20, height: 20 }}
            focused={focused}
          />
        )
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        // header: null,
        headerTitle: routeName + " Issues",
        headerLayoutPreset: "center"
      };
    }
  }
);

const AppStackNavigator = createStackNavigator(
  { AppTabNavigator: AppTabNavigator },
  // {headerLayoutPreset:'center'},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, marginRight: 50 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

// swipe right from left edge of screen to expose drawer
const AppDrawerNavigator = createDrawerNavigator({
  Menu: {
    screen: AppStackNavigator,
    navigationOptions: () => ({
      title: ""
    })
  },
  View: {
    screen: ViewIssues,
    navigationOptions: () => ({
      title: "View Issues"
    })
  },
  Report: {
    screen: ReportOrView,
    navigationOptions: () => ({
      title: "Report Issues"
    })
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  CreateAccount: { screen: CreateAccountScreen },
  ViewIssues: { screen: AppDrawerNavigator },
  ReportIssues: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
