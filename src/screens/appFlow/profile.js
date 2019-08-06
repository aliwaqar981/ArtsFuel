import React, {Component} from 'react'
import {View, Text,SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'


 image_Data = [
    {
        key: 1,
        image: require('../../assets/images/image1.jpg'),
        
    },
    {
        key: 2,
        image: require('../../assets/images/image2.jpeg'),
        
    },
    {
        key: 3,
        image: require('../../assets/images/image3.jpeg'),
        
    },
    {
        key: 4,
        image: require('../../assets/images/image4.jpeg'),
        
    },
    {
        key: 5,
        image: require('../../assets/images/image5.jpg'),
        
    },
    {
        key: 6,
        image: require('../../assets/images/image6.jpeg'),
        
    },
    {
        key: 7,
        image: require('../../assets/images/image4.jpeg'),
        
    },
    {
        key: 8,
        image: require('../../assets/images/image5.jpg'),
        
    },
    {
        key: 9,
        image: require('../../assets/images/image6.jpeg'),
        
    },
]


class Profile extends Component{

    _list(item){
        return(
            <View>
                <Image source={require('../../assets/images/image2.jpeg')} style={{width:wp(28), height:wp(28), marginHorizontal:wp(1.5), marginVertical:hp(1), borderRadius:4}}/>
            </View>
        )
    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', paddingHorizontal:wp(4), marginTop:hp(2)}}>
                <Text style={{color:'#969696',fontFamily:'Roboto-Regular',fontSize:13,marginLeft:wp(3),}}>Edit Profile</Text>
                    <Text style={{color:'red',fontFamily:'Roboto-Regular',fontSize:13,marginLeft:wp(3)}}>Upload Work</Text>
                </View>

                <View style={{alignSelf:'center', marginTop:hp(1)}}>
                    <Image style={{width:wp(30),height:wp(30), borderRadius:wp(15)}} source={require('../../assets/person.png')} resizeMode='cover'/>
                </View>
                
                <View style={{alignSelf:'center', marginTop:hp(2)}}>
                    <Text style={styles.profilName}>Emmanuel Torres</Text>
                    <Text style={styles.profileDes}>Painting, Abstract, Modern Art, Contemporary Art</Text>
                </View>

                <TouchableOpacity style={styles.hireButton}>
                    <Text style={{color:'black',fontFamily:'Roboto-Regular',fontSize:10, fontWeight:'bold'}}>For Hire: $099/project</Text>
                </TouchableOpacity>

                <View style={{width:wp(100), height:0.5, backgroundColor:'#969696', marginTop:hp(3)}}/>

                <FlatList
                    data={image_Data}
                    numColumns={3}
                    renderItem={(item)=>this._list(item)}
                    style={{alignSelf:'center', marginTop:hp(3)}}
                />

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    profilName:{
        color:'black',
        fontFamily:'Roboto-Regular',
        fontSize:20,
        fontWeight:'bold'
    },
    profileDes:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:10,
        textAlign:'center',
        marginTop:hp(1),
        width:wp(40),
        alignSelf:'center'
    },
    hireButton:{
        borderWidth:0.3,
        borderColor:'#969696',
        borderRadius:2,
        marginTop:hp(3),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal:wp(2),
        paddingVertical:wp(1.5),
        //shadow elevation
        
        // shadowColor: '#8f8f8f',
        // shadowOffset: { width:0, height:2},
        // shadowOpacity: 0.5,
        // elevation: 2,
        // shadowRadius:2
    }
})

export default Profile