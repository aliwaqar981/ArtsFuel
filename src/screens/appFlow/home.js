import React, {Component} from 'react'
import {View, Text, TouchableOpacity, ScrollView,TextInput,FlatList, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import MasonryList from "react-native-masonry-list"



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



///////////////////////////////////////////////////////////////////////////////////////////////
//****************************** List Header Text Container *********************************//
///////////////////////////////////////////////////////////////////////////////////////////////

const ListHeader=(props)=>{
    return(
        <View style={{flexDirection:'row',width:wp(92),alignSelf:'center',justifyContent:'space-between',marginTop:hp(4)}}>
            <Text style={styles.headingText}>{props.headerName}</Text>
            <TouchableOpacity>
                <Text style={styles.profileNameText}>{props.viewText}</Text>
            </TouchableOpacity>
        </View>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////
//******************************** Artists To Follow List ***********************************//
///////////////////////////////////////////////////////////////////////////////////////////////

const ToFollowList=()=>{
    return(
        <View style={styles.cardContainer1}>
            <Image source={require('../../assets/images/image8.jpg')} style={{width:wp(66),height:wp(60),marginLeft:wp(2),marginTop:wp(2)}} resizeMode={'cover'}/>
            <View style={styles.CardRowContent}>
                <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(10),height:wp(10),borderRadius:wp(5)}} resizeMode='cover'/>

                <View style={{marginLeft:wp(2)}}>
                    <Text style={styles.itemNameText}>One Sunny Afternoon</Text>
                    <Text style={styles.profileNameText}>Jon Garza</Text>                        
                </View>
            </View>

            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>

        </View>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////
//******************************** Followed Artist's List ***********************************//
///////////////////////////////////////////////////////////////////////////////////////////////

class FollowedList extends Component{
    state={
        saved:false
    }
    render(){
    return(
        <TouchableOpacity style={styles.cardContainer2} onPress={()=>this.props.nav.navigate('CartScreen')}>
            <Image source={require('../../assets/images/image7.jpeg')} style={{width:wp(66),height:wp(44),marginLeft:wp(2),marginTop:wp(2)}} resizeMode={'cover'}/>
            
            <View style={styles.CardRowContent}>
                <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(10),height:wp(10),borderRadius:wp(5)}} resizeMode='cover'/>

                <View style={{marginLeft:wp(2)}}>
                    <Text style={styles.itemNameText}>One Sunny Afternoon</Text>
                    <Text style={styles.profileNameText}>Jon Garza</Text>                        
                </View>
            </View>
            <TouchableOpacity onPress={()=>this.setState(prevState => ({saved: !prevState.saved}))} style={styles.favouritIcon}>
                {this.state.saved?
                    [
                        <Image source={require('../../assets/icons/fireRed.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    ]:
                    [
                        <Image source={require('../../assets/icons/fireGrey.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    ]
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////
//********************************* Upcoming Events Part ************************************//
///////////////////////////////////////////////////////////////////////////////////////////////

const UpcomingList=()=>{
    return(
        <View style={styles.cardContainer3}>
            <Image source={require('../../assets/images/image8.jpg')} style={{width:wp(70),height:wp(44)}} resizeMode={'cover'}/>

            <View style={{marginTop:hp(1),overflow:'hidden'}}>
                <Text style={styles.descriptionText}>Contemporary Art Exibit 2019</Text>
                <Text style={styles.itemNameText}>One Sunny Afternoon</Text>
                <Text style={styles.profileNameText}>Jon Garza</Text>                        
            </View>

            <TouchableOpacity style={styles.ticketsButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////
//************************************ Articles List ****************************************//
///////////////////////////////////////////////////////////////////////////////////////////////

const ArticleList=()=>{
    return(
        <View style={styles.cardContainer4}>
            <Image source={require('../../assets/images/image7.jpeg')} style={{width:wp(40),height:wp(30)}} resizeMode={'cover'}/>

            <View style={{alignSelf:'center',overflow:'hidden',marginLeft:wp(4)}}>
                <Text style={{color:'black',fontFamily:'Roboto-Regular',fontSize:12}}>One Sunny Afternoon</Text>
                <Text style={{width:wp(45),color:'black',fontFamily:'Roboto-Regular',fontSize:14,fontWeight:'bold'}}>Contemporary Art Exibit 2019  is being held in NY</Text>
            </View>
        </View>
    )
}


//********************************************************************************************//
//********************************************************************************************//
//----------------------------- Main Home Screen Component -----------------------------------//
//********************************************************************************************//
//********************************************************************************************//
class Home extends Component{
    render(){
        return(
        <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
            <ScrollView style={{paddingBottom:hp(5)}}>


                {/* Header Image + Search Box */}
                <ImageBackground source={require('../../assets/images/header.jpg')} style={{width:wp(100),height:wp(60)}} resizeMode={'cover'}>

                    <Image source={require('../../assets/images/logo.png')} style={{width:wp(8),height:wp(8),marginTop:hp(4),alignSelf:'center'}} resizeMode={'contain'}/>
                    <Text style={{fontFamily:'RobotoCondensed-Bold',fontSize:24,color:'#ffffff', width:wp(70),overflow:'hidden',marginLeft:wp(10),marginTop:hp(2),fontWeight:'bold',}}>Create, Connect, and Collaborate.</Text>
                    <View style={styles.searchCard}>
                        <Image
                        source={require("../../assets/icons/search.png")}
                        resizeMode="contain"
                        style={{
                            height: wp("5"),
                            width: wp("5"),
                            borderRightWidth: 3,
                            borderColor: "#D5D5E0",
                            marginLeft:wp(4),
                        }}
                        />

                        <TextInput 
                            style={{width:wp(60),marginLeft:wp(2)}}
                            placeholder='Search for artists or events'
                            placeholderTextColor='grey'
                        />
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('FacebookTabBar')}>
                            <Image source={require('../../assets/icons/Microphone.png')} style={{width:wp(5),height:wp(5),alignSelf:'flex-end',marginLeft:wp(6)}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                
                {/* Artists to Follow Part */}
                <ListHeader headerName={'Artists to follow'} viewText={'View more'}/>
                <FlatList
                style={{marginLeft:wp(2),marginRight:wp(2)}}
                horizontal
                data={flatListData}
                renderItem={(item,index)=>
                    <ToFollowList/>
                }>
                </FlatList>


                {/* Followed Artists Part */}
                <ListHeader headerName={'From people you follow'} viewText={'View more'}/>
                <FlatList
                style={{marginLeft:wp(2),marginRight:wp(2)}}
                horizontal
                data={flatListData}
                renderItem={({item,index})=>
                    <FollowedList nav={this.props.navigation}/>
                }>
                </FlatList>

                {/* Explore Atr Works Part */}
                <ListHeader headerName={'Explore artworks'} viewText={'View all'}/>
                <MasonryList
                    backgroundColor={'#F6F6F6'}
                    spacing={4}
                    renderIndividualFooter={()=>
                        <View style={{flexDirection:'row',marginLeft:wp(2)}}>
                            <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(10),height:wp(10),borderRadius:wp(5)}} resizeMode='cover'/>
                            <View style={{marginLeft:wp(2)}}>
                                <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                                <Text style={styles.priceText}>$1,200.00</Text>
                            </View>
                        </View>
                    }
                    images={[
                        // Can be used with different image object fieldnames.
                        // Ex. source, source.uri, uri, URI, url, URL
                        
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" ,
                        dimensions: { width: 1080, height: 1420 },
                        },
                        
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                            // Optional: Adding a dimensions field with
                            // the actual width and height for REMOTE IMAGES
                            // will help improve performance.
                            dimensions: { width: 1080, height: 1820 },
                            containerWidth:wp(35)
                        },

                        { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                            // Optional: Does not require an id for each
                            // image object, but is for best practices.
                            id: "blpccx4cn" ,
                            dimensions: { width: 1080, height: 1420 },

                        },

                        { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg",
                            dimensions: { width: 1080, height: 1820 },
                            containerWidth:wp(35)
                        },

                        { URI: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg",
                            id: "blpccx4cn" ,
                            dimensions: { width: 1080, height: 1420 },
                        },
                    ]}
                    >
                </MasonryList>
                <TouchableOpacity style={{width:wp(88),height:wp(10),borderWidth:0.5,marginBottom:hp(2),borderColor:'#969696', marginTop:hp(1),alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                    <Text style={[styles.priceText,{fontWeight:'bold'}]}>Load more</Text>
                </TouchableOpacity>


                {/* Upcoming List Part */}
                <ListHeader headerName={'Upcoming events'} viewText={'View more'}/>
                <FlatList
                    style={{marginLeft:wp(2),marginRight:wp(2)}}
                    horizontal
                    data={flatListData}
                    renderItem={(item,index)=>
                    <UpcomingList/>
                }>
                </FlatList>

                {/* Articles List */}
                <ListHeader headerName={'Articles'} viewText={'View more'}/>
                <FlatList
                    style={{marginLeft:wp(2),marginRight:wp(2)}}
                    data={flatListData}
                    renderItem={(item,index)=>
                    <ArticleList/>
                }>
                </FlatList>


            </ScrollView> 
        </View>
        )
    }
}

const styles=StyleSheet.create({
    shadowContainer:{
        shadowColor: '#c5c4c4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 2,
        marginLeft:wp(2),
        backgroundColor:'#ffffff',
    },
    cardContainer1:{
        marginTop:hp(2),
        width:wp(70),
        shadowColor: '#c5c4c4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation:2,
        marginLeft:wp(2),
        backgroundColor:'#ffffff',
        //height:wp(80),
        marginBottom:hp(2),
        paddingBottom:wp(2)

    },
    cardContainer2:{
        marginTop:hp(2),
        width:wp(70),
        shadowColor: '#c5c4c4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation:2,
        marginLeft:wp(2),
        backgroundColor:'#ffffff',
        //height:wp(60),
        marginBottom:hp(2),
        paddingBottom:wp(2)
    },
    cardContainer3:{
        marginTop:hp(2),
        width:wp(70),
        marginLeft:wp(2),
        marginRight:wp(4),
        //height:wp(60),
        marginBottom:hp(2),
        paddingBottom:wp(2)
    },
    cardContainer4:{
        marginTop:hp(2),
        width:wp(90),
        alignSelf:'center',
        //height:wp(60),
        paddingBottom:wp(2),
        flexDirection:'row'
    },
    searchCard:{
        height: wp("12"),
        width: wp("88"),
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: hp(2),
        alignItems: "center",
        borderRadius:25,
        flexDirection: "row",
    },
    CardRowContent:{
        width:wp(66),
        //height:wp(20),
        marginTop:hp(1),
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff',
        marginLeft:wp(2)
    },
    headingText:{
        color:'black',
        fontFamily:'Roboto-Regular',
        fontSize:16,
        fontWeight:'bold'
    },
    profileNameText:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:13
    },
    itemNameText:{
        color:'black',
        fontFamily:'Roboto-Regular',
        fontSize:13,
        fontWeight:'bold'
    },
    priceText:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:13,
        //marginLeft:wp(3),
    },
    descriptionText:{
        width:wp(70),
        color:'black',
        fontFamily:'Roboto-Regular',
        fontSize:14,
        fontWeight:'bold'
    },
    followButton:{
        width:wp(66),
        backgroundColor : 'rgb(196,35,44)',
        borderRadius : 25,
        paddingVertical : 8,
        //marginVertical : 16,
        alignItems:"center",
        alignSelf:'center',
        marginTop:hp(1.5)
    },
    buttonText : {
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        fontFamily:'Roboto-Regular'
    },
    ticketsButton : {
        width:wp(70),
        backgroundColor : 'rgb(196,35,44)',
        borderRadius : 4,
        paddingVertical : 8,
        //marginVertical : 16,
        alignItems:"center",
        alignSelf:'center',
        marginTop:hp(1.5)
    },
    favouritIcon:{
        width:wp(8),height:wp(8),
        borderRadius:wp(16),
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: '#8f8f8f',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.5,
        elevation: 2,
        shadowRadius:2,
        position:'absolute',
        right:15,
        top:15
    }
})

export default Home