import React, {Component,Fragment} from 'react';
import {
  TouchableOpacity,
  Image
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
import EditProfile from '../src/screens/appFlow/editProfile'
import UploadWork from '../src/screens/appFlow/uploadWork'




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
    EditProfileScreen:{
      screen:EditProfile,
      navigationOptions:({ navigation, screenProps }) => ({
        title: 'Edit Profile',
        headerTitleStyle:{
          fontFamily:'Roboto-Bold',
          color:'#000000',
          fontSize:16,
          fontWeight:'bold'
        },
        headerLeft: <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:10,padding:5}}>
                          <Image source={require('../src/assets/icons/backArrow.png')}/>
                    </TouchableOpacity>,
      })
    },

    EditProfileScreen:{
      screen:EditProfile,
      navigationOptions:({ navigation, screenProps }) => ({
        title: 'Edit Profile',
        headerTitleStyle:{
          fontFamily:'Roboto-Bold',
          color:'#000000',
          fontSize:16,
          fontWeight:'bold'
        },
        headerLeft: <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:10,padding:5}}>
                          <Image source={require('../src/assets/icons/backArrow.png')}/>
                    </TouchableOpacity>,
      })
    },
    UploadWorkScreen:{
      screen:UploadWork,
      navigationOptions:({ navigation, screenProps }) => ({
        title: 'Upload Work',
        headerTitleStyle:{
          fontFamily:'Roboto-Bold',
          color:'#000000',
          fontSize:16,
          fontWeight:'bold'
        },
        headerLeft: <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:10,padding:5}}>
                          <Image source={require('../src/assets/icons/backArrow.png')}/>
                    </TouchableOpacity>,
      })
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