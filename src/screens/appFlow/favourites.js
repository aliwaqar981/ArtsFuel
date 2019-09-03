import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView,Platform,FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Explore from '../appFlow/exploreArt'

// import ScrollableTabView, {DefaultTabBar,ScrollableTabBar,TabBar } from 'react-native-scrollable-tab-view';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import MasonryList from "react-native-masonry-list"
import FacebookTabBar from './fbtabs'



const TabIcon=({selected, title})=>{
    return(
        <Text style={{color:selected?'red':'black'}}>{title}</Text>
    );
}


class Favourite extends Component{
    state={
        selectMasonryView:false
    }
    handleParent=(select)=>{
        this.setState({selectMasonryView:select})
    }
    render(){
        let SavedView
        let PurchasedView
        if(this.state.selectMasonryView){
            SavedView=<Explore key={'1'} tabLabel={'Saved(22)'} iconSrc={require('../../assets/icons/fireGrey.png')} nav={this.props.navigation}/>
            PurchasedView=<Explore key={'2'} tabLabel={'Purchased(4)'} iconSrc={require('../../assets/icons/shopping-basket.png')}/>    
        }else{
            SavedView=<Saved key={'1'} tabLabel={'Saved(22)'} iconSrc={require('../../assets/icons/fireGrey.png')} nav={this.props.navigation}/>
            PurchasedView=<Purchased key={'2'} tabLabel={'Purchased(4)'} iconSrc={require('../../assets/icons/shopping-basket.png')}/>    
        }
        return(
            <SafeAreaView style={{flex:1}}>
                <ScrollableTabView

                    renderTabBar={(props) => (
                    <FacebookTabBar
                        style={styles.scrollStyle}
                        tabStyle={styles.tabStyle}   
                        nav={this.props.navigation}
                        handleParent={this.handleParent}
                    >
                    </FacebookTabBar>
                        // <Text style={{width:200, backgroundColor:'red',position:'absolute'}}>Helo world</Text> 
                    
                    )}
                    
                    tabBarTextStyle={styles.tabBarTextStyle}
                    tabBarInactiveTextColor={'#969696'}
                    tabBarActiveTextColor={'black'}
                    tabBarUnderlineStyle={styles.underlineStyle}
                    initialPage={0}
                    
                >
                    {/* {this.state.selectMasonryView?[
                    ]:[
                        <Saved key={'1'} tabLabel={'Saved(22)'} iconSrc={require('../../assets/icons/fireGrey.png')} nav={this.props.navigation}/>
                        <Purchased key={'2'} tabLabel={'Purchased(4)'} iconSrc={require('../../assets/icons/shopping-basket.png')}/>
                    ]
                    } */}
                    {SavedView}
                    {PurchasedView}

                </ScrollableTabView>
            </SafeAreaView>
        )
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////
//********************************* Saved Scrollable Tab ************************************//
///////////////////////////////////////////////////////////////////////////////////////////////

class Saved extends Component{

    state={
        savedId:0
    }

    render(){
        return(
            <View style={{flex:1}}>
            <MasonryList
                spacing={5}
                backgroundColor={'#F6F6F6'}
                onPressImage={(item,index)=>this.setState({savedId:item.id})}
                renderIndividualHeader={(item,index)=>
                    <TouchableOpacity onPress={()=>{item.saved==0?item.saved=1:item.saved=0,this.setState({savedId:item.id})}} style={styles.favouritIcon}>
                            {item.saved==1?
                                [
                                    <Image source={require('../../assets/icons/fireRed.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                                ]:
                                [
                                    <Image source={require('../../assets/icons/fireGrey.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                                ]
                            }
                        </TouchableOpacity>
                }
                renderIndividualFooter={()=>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginBottom:hp(1.5)}}>
                        <View >
                            <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                            <Text style={styles.priceText}>$1,200.00</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.nav.navigate('CartScreen')} style={{backgroundColor:'#eed9b4',width:wp(8),height:wp(8),borderRadius:4,marginRight:wp(2), justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../../assets/icons/cart3.png')} style={{width:wp(4),height:wp(4)}}/>
                        </TouchableOpacity>
                        
                    </View>
                }
                    images={[
                        // Can be used with different image object fieldnames.
                        // Ex. source, source.uri, uri, URI, url, URL
                        
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" ,
                        dimensions: { width: 1080, height: 1420 },
                        id:101,
                        saved:1

                    },
                    
                        // { source: require("yourApp/image.png"), 
                        //     // IMPORTANT: It is REQUIRED for LOCAL IMAGES
                        //     // to include a dimensions field with the
                        //     // actual width and height of the image or
                        //     // it will throw an error.
                        // },
                        
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                            // Optional: Adding a dimensions field with
                            // the actual width and height for REMOTE IMAGES
                            // will help improve performance.
                            dimensions: { width: 1080, height: 1820 },
                            id:102,
                            saved:0,
                            containerWidth:wp(35)
                        },
                        { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                            // Optional: Does not require an id for each
                            // image object, but is for best practices.
                            id: 103 ,
                            saved:1,
                            dimensions: { width: 1080, height: 1420 },

                        },
                        { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg",
                            dimensions: { width: 1080, height: 1820 },
                            id:104,
                            saved:0,
                            containerWidth:wp(35)
                        },
                        { URI: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg",
                            id: 105,
                            saved:0,
                            dimensions: { width: 1080, height: 1420 },

                        },
                    ]}
                >
            </MasonryList>
            </View>
        )
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////
//********************************* Purchased Scrollable Tab ************************************//
///////////////////////////////////////////////////////////////////////////////////////////////

class Purchased extends Component{

    render(){
        return(
            <View style={{flex:1}}>
            <MasonryList
                spacing={5}
                backgroundColor={'#F6F6F6'}
                renderIndividualFooter={()=>
                    <View style={{flexDirection:'row',alignItems:'center', marginBottom:hp(1.5)}}>
                        <View>
                            <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                            <Text style={styles.priceText}>$1,200.00</Text>
                        </View>
                        {/* <TouchableOpacity onPress={()=>this.props.nav.navigate('CartScreen')} style={{backgroundColor:'#eed9b4',width:wp(8),height:wp(8),borderRadius:4,marginRight:wp(2), justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../../assets/icons/cart3.png')} style={{width:wp(4),height:wp(4)}}/>
                        </TouchableOpacity> */}
                    </View>
                }
                    images={[
                        
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" ,
                        dimensions: { width: 1080, height: 1420 },

                    },
                        
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                            dimensions: { width: 1080, height: 1820 },
                            containerWidth:wp(35)
                        },
                        { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
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
            </View>
        )
    }
}


const styles=StyleSheet.create({
    // tabStyles:{
    //     width:wp(20),
    //     backgroundColor:'blue'
    // },
    tabStyle: {
        //width:160,
        backgroundColor:'blue',
      },
     scrollStyle: {
       backgroundColor: 'white',
       justifyContent:'center',
       alignItems:'center',
       width:wp(95),
       //height:20
     },
     tabBarTextStyle: {
       fontSize: 14,
       fontWeight: 'bold',
       backgroundColor:'yellow',
       width:wp(30),
       //position:'absolute',top:-10
       //alignSelf:'center'
       //marginLeft:wp(6)
     },
     underlineStyle: {
       height: 3,
       backgroundColor: '#c4232c',
       borderRadius: 3,
       width: wp(30),position:'absolute',left:0
       //alignSelf:'flex-start'
     },
    itemNameText:{
        fontFamily:'Roboto-Italic',
        color:'#000000',
        fontSize:14,
        marginLeft:wp(3),
    },
    priceText:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:13,
        marginLeft:wp(3),
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
        top:15,
        zIndex:10
    }
})

export default Favourite