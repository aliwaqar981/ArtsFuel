import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from './Responsive'

export default class Header extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:wp(15),alignItems:'center',}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this.props.nav.pop()}>
                        <Image source={require('../assets/icons/backArrow.png')} style={{width:wp(4),height:wp(4),marginLeft:wp(4)}} resizeMode='contain'/>
                    </TouchableOpacity>
                    <Image source={require('../assets/images/image1.jpg')} style={{width:wp(8),height:wp(8),borderRadius:wp(4), marginLeft:wp(5)}} resizeMode='cover'/>

                    <View style={{marginLeft:wp(2)}}>
                        <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                        <Text style={styles.priceText}>Online 10 mins ago</Text>                        
                    </View>
                </View>

                <TouchableOpacity style={{width:wp(16),height:wp(9), borderRadius:15, backgroundColor : 'rgb(196,35,44)', alignItems:'center',justifyContent:'center', marginRight:wp(4)}}>
                    <Text style={{fontFamily:'RobotoCondensed-Bold',fontSize:12,color:'#ffffff',fontWeight:'bold'}}>Hire</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    itemNameText:{
        fontFamily:'Roboto-Bold',
        color:'#000000',
        fontSize:12,
        fontWeight:'bold'
    },
    priceText:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:11,
    }
})
