import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'

import ImageSlider from 'react-native-image-slider';
// import { SliderBox } from 'react-native-image-slider-box';



class Cart extends Component{
    render(){
        

        return(
            <View style={{flex:1}}>
                <View style={{height:hp(35)}}>
                    <ImageSlider images={[
                        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    ]}/>
                </View>

                <View style={{flexDirection: 'row', marginLeft:wp(10), marginTop:hp(4)}}>
                    <Image style={{width:wp(16),height:wp(16), borderRadius:wp(8),}} source={require('../../assets/person.png')} resizeMode='cover'/>
                    
                    <View style={{marginLeft:wp(5),marginTop:hp(1)}}>
                        <Text style={{color:'black',fontWeight:'bold',fontFamily:'Roboto-Regular',fontSize:13}}>Stella Curtis</Text>
                        <Text style={styles.smallGreyText}>New York</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginLeft:wp(12), marginTop:hp(4),}}>
                    <View style={{width:wp(16)}}>
                        <Text style={[styles.smallGreyText,{marginTop:hp(1)}]}>Price:</Text>
                        <Text style={[styles.smallGreyText,{marginTop:hp(1)}]}>Style:</Text>
                        <Text style={[styles.smallGreyText,{marginTop:hp(1)}]}>Size:</Text>
                    </View>

                    <View style={{marginLeft:wp(5)}}>
                        <Text style={[styles.smallBlackText,{marginTop:hp(1)}]}>$ 55,00.00</Text>
                        <Text style={[styles.smallBlackText,{marginTop:hp(1)}]}>Fine Art</Text>
                        <Text style={[styles.smallBlackText,{marginTop:hp(1)}]}>39.4 W x 39.4 H x1.2 in</Text>
                    </View>
                </View>

                <View style={{marginLeft:wp(5), marginTop:hp(4),width: wp(84), alignSelf:'center'}}>
                    <Text style={[styles.smallBlackText]}>So many of us are demotivated to achieve anything. Such people are enthuistic about anything. they want to work towards any goal. Nothing motivates them to work</Text>
                </View>

                <TouchableOpacity style={styles.buyButton}>
                    <Text style={{color:'white',fontFamily:'Roboto-Regular',fontSize:16,fontWeight:'300'}}>Fine Art</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    smallGreyText:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:13
    },
    smallBlackText:{
        color:'black',
        fontFamily:'Roboto-Regular',
        fontSize:13,
        fontWeight:'300'
    },
    buyButton:{
        width:wp(100),
        height:wp(14),
        position:"absolute",
        bottom:0,
        backgroundColor:'#EED9B4',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Cart