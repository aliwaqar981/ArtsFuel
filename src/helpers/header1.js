import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from './Responsive'

export default class Header1 extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:wp(15),alignItems:'center',}}>
                <TouchableOpacity onPress={()=>this.props.nav.pop()}>
                    <Image source={require('../assets/icons/backArrow.png')} style={{marginLeft:wp(4)}} resizeMode='contain'/>
                </TouchableOpacity>

                <Text style={styles.itemNameText}>Explore artworks</Text>
 
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center', marginRight:wp(2)}}>
                        <Image source={require('../assets/icons/doubleDashActive.png')} style={{marginLeft:wp(4)}} resizeMode='contain'/>                
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.props.nav.navigate('Favourite')} style={{alignItems:'center',justifyContent:'center', marginRight:wp(6)}}>
                        <Image source={require('../assets/icons/grid.png')} style={{marginLeft:wp(4)}} resizeMode='contain'/>                
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    itemNameText:{
        fontFamily:'Roboto-Bold',
        color:'#000000',
        fontSize:16,
        fontWeight:'bold'
    },
    priceText:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:11,
    }
})
