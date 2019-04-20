import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoginScreen from '../screens/LoginScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const LoginStack = createStackNavigator(
  {Home: LoginScreen}, {headerMode: 'none'}
);

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-funnel' : 'md-funnel'}
    />
  ),
};

const ViewIssueStack = createStackNavigator({
  Links: LinksScreen,
});

ViewIssueStack.navigationOptions = {
  tabBarLabel: 'View Issues',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-warning' : 'md-warning'}
    />
  ),
};

const ReportIssueStack = createStackNavigator({
  Settings: SettingsScreen,
});

ReportIssueStack.navigationOptions = {
  tabBarLabel: 'Report Issues',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  LoginStack,
  ViewIssueStack,
  ReportIssueStack,
});