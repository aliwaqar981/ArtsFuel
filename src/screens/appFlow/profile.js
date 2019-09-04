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
    {
        key: 10,
        image: require('../../assets/images/image5.jpg'),
        
    },
    {
        key: 11,
        image: require('../../assets/images/image4.jpeg'),
        
    },
    {
        key: 12,
        image: require('../../assets/images/image6.jpeg'),
        
    },
    {
        key: 13,
        image: require('../../assets/images/image6.jpeg'),
        
    },
    {
        key: 14,
        image: require('../../assets/images/image5.jpg'),
        
    },
    {
        key: 15,
        image: require('../../assets/images/image4.jpeg'),
        
    },
]


class Profile extends Component{

    state={
        isLoggedIn:false
    }

    _list(item){
        return(
            <View>
                <Image source={item.image} style={{width:wp(28), height:wp(28), marginHorizontal:wp(1.5), marginVertical:hp(1), borderRadius:4}}/>
            </View>
        )
    }


    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                {this.state.isLoggedIn?[
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', paddingHorizontal:wp(4), marginTop:hp(2)}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                            <Image source={require('../../assets/icons/backArrow.png')} style={{marginLeft:wp(3)}} resizeMode='contain'/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{color:'rgb(196,35,44)',fontFamily:'Roboto-Regular',fontSize:13,marginLeft:wp(3)}}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                ]:[
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', paddingHorizontal:wp(4), marginTop:hp(2)}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditProfileScreen')}>
                            <Text style={{color:'#969696',fontFamily:'Roboto-Regular',fontSize:13,marginLeft:wp(3),}}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('UploadWorkScreen')}>
                            <Text style={{color:'rgb(196,35,44)',fontFamily:'Roboto-Regular',fontSize:13,marginLeft:wp(3)}}>Upload Work</Text>
                        </TouchableOpacity>
                    </View>
                ]}
                

                <View style={{alignSelf:'center', marginTop:hp(1)}}>
                    <Image style={{width:wp(30),height:wp(30), borderRadius:wp(15)}} source={require('../../assets/person.png')} resizeMode='cover'/>
                    <TouchableOpacity style={styles.checkIcon}>
                        <View style={{backgroundColor:'rgb(196,35,44)', height:wp(5),width:wp(5),borderRadius:wp(10),justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../../assets/icons/checked.png')} style={{width:wp(3),height:wp(3)}} resizeMode='contain'/>   
                       </View>  
                    </TouchableOpacity>
                </View>
                
                <View style={{alignSelf:'center', marginTop:hp(2)}}>
                    <Text style={styles.profilName}>Emmanuel Torres</Text>
                    <Text style={styles.profileDes}>Painting, Abstract, Modern Art, Contemporary Art</Text>
                </View>

                <TouchableOpacity style={styles.hireButton} onPress={()=>this.props.navigation.navigate('ExploreScreen')}>
                    <Text style={{color:'black',fontFamily:'Roboto-Regular',fontSize:10, fontWeight:'bold'}}>For Hire: $099/project</Text>
                </TouchableOpacity>

                <View style={{width:wp(100), height:0.5, backgroundColor:'#969696', marginTop:hp(3)}}/>

                <FlatList
                    data={image_Data}
                    numColumns={3}
                    renderItem={({item})=>this._list(item)}
                    style={{alignSelf:'center', marginTop:hp(2)}}
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
    },
    checkIcon:{
        width:wp(6),height:wp(6),
        borderRadius:wp(12),
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:10,
        bottom:-5
    }
})

export default Profile