import React, {Component,Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createStackNavigator,createAppContainer,createSwitchNavigator,DrawerNavigator } from 'react-navigation';


import Signup from '../src/screens/auth/signup'
import Signin from '../src/screens/auth/sigin'
import Home from '../src/screens/appFlow/home'
import Tabs from './BottomTab'

const AuthStack = createSwitchNavigator({
    SignupScreen: Signup ,
    SigninScreen: Signin ,
  },
  {
    initialRouteName: 'SigninScreen',
  });
  
  const AppStack = createStackNavigator({
    HomeScreen:{
        screen:Tabs,
        navigationOptions:{
            header:null
        }
    },
    
    // DashboardScreen: {
    //     screen: Dashboard,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    // PasswordResetScreen:{
    //     screen: PasswordReset,
    //     navigationOptions:{
    //         title:'Password'
    //     }
    // },
    // SuccessAnimation:{
    //     screen:SuccessAnimation,
    //     navigationOptions:{
    //         header:null
    //     }
    // }
    
  });
  
  // BottomTabNavigatorConfig
  

  
  export default createAppContainer(createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'Auth',
    }
  ))