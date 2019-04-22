// import React from 'react';
// import { Platform } from 'react-native';
// import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator  } from 'react-navigation';

// // import TabBarIcon from '../components/TabBarIcon';
// import LoginScreen from '../screens/LoginScreen';
// import ViewIssues from '../screens/ViewIssues';
// import ReportIssues from '../screens/ReportIssues';
// // import LinksScreen from '../screens/LinksScreen';

// const AppSwitchNavigator = createSwitchNavigator({
//   Login:{screeen:LoginScreen}
// });

// const AppContainer = createAppContainer(AppSwitchNavigator)

// export default AppContainer;

// // const LoginStack = createStackNavigator(
// //   {Login: LoginScreen}, {headerMode: 'none'}
// // );

// // LoginStack.navigationOptions = {
// //   tabBarLabel: 'Login',
// //   tabBarIcon: ({ focused }) => (
// //     <TabBarIcon
// //       focused={focused}
// //       name={Platform.OS === 'ios' ? 'ios-funnel' : 'md-funnel'}
// //     />
// //   ),
// // };

// // const ViewIssuesStack = createStackNavigator({
// //   View: ViewIssues,
// // });

// // ViewIssuesStack.navigationOptions = {
// //   tabBarLabel: 'View Issues',
// //   tabBarIcon: ({ focused }) => (
// //     <TabBarIcon
// //       focused={focused}
// //       name={Platform.OS === 'ios' ? 'ios-warning' : 'md-warning'}
// //     />
// //   ),
// // };

// // const ReportIssuesStack = createStackNavigator({
// //   Report: ReportIssues,
// // });

// // ReportIssuesStack.navigationOptions = {
// //   tabBarLabel: 'Report Issues',
// //   tabBarIcon: ({ focused }) => (
// //     <TabBarIcon
// //       focused={focused}
// //       name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
// //     />
// //   ),
// // };

// // export default createBottomTabNavigator({
// //   LoginStack,
// //   ViewIssuesStack,
// //   ReportIssuesStack,
// // });