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
import Cart from '../src/screens/appFlow/cart'
import Favourites from '../src/screens/appFlow/favourites'
import Chat from '../src/screens/appFlow/chat'
import Explore from '../src/screens/appFlow/exploreArt'
import FacebookTabBar from '../src/screens/appFlow/fbtabs'


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
    Favourite:{
      screen:Favourites,
      navigationOptions:{
          header:null
      }
    },
    CartScreen:{
      screen:Cart,
      navigationOptions:{
        header:null
      }
    },
    ChatScreen:{
      screen:Chat,
      navigationOptions:{
        header:null
      }
    },
    ExploreScreen:{
      screen:Explore,
      navigationOptions:{
        header:null
      },
    },

    FacebookTabBar:{
      screen:FacebookTabBar,
      navigationOptions:{
        header:null
      }
    }
    
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