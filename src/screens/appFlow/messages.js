import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import { GiftedChat } from 'react-native-gifted-chat'


class Messages extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                    <Text>go to chat</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Messages