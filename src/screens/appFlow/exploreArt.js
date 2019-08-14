import React, {Component} from 'react'
import {View, Text, TouchableOpacity,FlatList, TextInput, StyleSheet, Image, Platform,ImageBackground,SafeAreaView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Header1 from '../../helpers/header1'


var flatListData=[
    {
        key:'1',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
    },
    {
        key:'2',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
    },
    {
        key:'3',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
    },
    {
        key:'4',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
    }
]

class Explore extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header1 nav={this.props.navigation}/>
                <View style={{backgroundColor:'#F6F6F6',width:wp(100),height:1}}/>


                <FlatList
                data={flatListData}
                renderItem={(item,index)=>
                    <View style={styles.cardContainer}>
                        <Image source={require('../../assets/images/image6.jpeg')} style={{width:wp(88),height:wp(55),alignSelf:'center'}} resizeMode={'cover'}/>
                        <TouchableOpacity style={styles.CardRowContent} onPress={()=>this.props.nav.navigate('ChatScreen')}>
                            <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(10),height:wp(10),borderRadius:wp(5)}} resizeMode='cover'/>

                            <View style={{marginLeft:wp(2)}}>
                                <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                                <Text style={styles.priceText}>$1,200.00</Text>                        
                            </View>
                        </TouchableOpacity>
                    </View>
                }>

                </FlatList>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    cardContainer:{
        width:wp(92),
        padding:wp(2),
        shadowColor: '#c5c4c4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,
        marginHorizontal:wp(4),
        backgroundColor:'#ffffff',
        marginTop:hp(2)
        
    },
    CardRowContent:{
        width:wp(88),
        //height:wp(20),
        marginTop:hp(1),
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
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

export default Explore