import React, {Component} from 'react'
import { Image,} from 'react-native'
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
  import Icon from 'react-native-ionicons'


import Home from '../src/screens/appFlow/home'
import MapSearch from '../src/screens/appFlow/map'
import Favourite from '../src/screens/appFlow/favourites'
import Messages from '../src/screens/appFlow/messages'
import Profile from '../src/screens/appFlow/profile'



  const Tabs=createBottomTabNavigator({
    HomeTab: {
        screen:Home ,
        navigationOptions:{
            title:'Home',
            tabBarOptions:{
                activeTintColor:'black'
            },
            tabBarIcon: ({ focused}) => (
                <Icon name="ios-home" size={20} color={focused?'black':'grey'}/>),
            
        }
    },

    MapTab: {
        screen:MapSearch,
        navigationOptions:{
            title:'Map',
            tabBarOptions:{
                activeTintColor:'black'
            },
            tabBarIcon: ({ focused}) => (
                <Icon name="ios-map" size={20} color={focused?'black':'grey'}/>),         
        }
    },

    FavouriteTab: {
        screen:Favourite,
        navigationOptions:{
            title:'Favourite',
            tabBarOptions:{
                activeTintColor:'black'
            },
            tabBarIcon: ({ focused}) => (
                <Icon name="ios-flame" size={20} color={focused?'black':'grey'}/>),         
        }
    },

    MessagesTab: {
        screen:Messages,
        navigationOptions:{
            title:'Messages',
            tabBarOptions:{
                activeTintColor:'black'
            },
            tabBarIcon: ({ focused}) => (
                <Icon name="ios-text" size={20} color={focused?'black':'grey'}/>),         
        }
    },

    ProfileTab: {
        screen:Profile,
        navigationOptions:{
            title:'Profile',
            tabBarOptions:{
                activeTintColor:'black'
            },
            tabBarIcon: ({ focused}) => (
                <Icon name="ios-person" size={20} color={focused?'black':'grey'}/>),         
        }
    },

  },
//   {
//     NavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'HomeTab') {
//         iconName = `ios-home${focused ? '' : '-outline'}`;

//         } else if (routeName === 'MapTab') {
//           iconName = `ios-map${focused ? '' : '-outline'}`;

//         }

//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Icon name={iconName} size={25}  activeTintColor={'red'} color={'red'} inactiveTintColor={'red'}/>;

//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   }
  )

  export default createAppContainer(Tabs);