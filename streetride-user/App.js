import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
// import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import ViewIssues from './screens/ViewIssues';
import ReportIssues from './screens/ReportIssues';


class App extends Component {
  render() {
    return(
      <AppContainer style={styles.container} />
    )
  }
}

export default App;


const AppTabNavigator = createBottomTabNavigator({
  View:{screen:ViewIssues,},
  Report:{screen:ReportIssues}
},{
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: routeName + ' Issues',
      headerLayoutPreset: 'center'
    };
  }
});

const AppStackNavigator = createStackNavigator(
  {AppTabNavigator:AppTabNavigator},
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

// swipe right from right edge of screen to expose drawer
const AppDrawerNavigator = createDrawerNavigator({
  View:{screen:AppStackNavigator},
  Report:{screen:AppStackNavigator},
})

const AppSwitchNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  CreateAccount:{screen:CreateAccountScreen},
  ViewIssues:{screen:AppDrawerNavigator},
  ReportIssues:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});