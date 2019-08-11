import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView,Platform,FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'

// import ScrollableTabView, {DefaultTabBar,ScrollableTabBar,TabBar } from 'react-native-scrollable-tab-view';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import MasonryList from "react-native-masonry-list"




const TabIcon=({selected, title})=>{
    return(
        <Text style={{color:selected?'red':'black'}}>{title}</Text>
    );
}

const favList_Data = [
    {
        key: 1,
        type: 'Ancestor Guitar',
        price:'200$',
        image: '../../../assets/guitar.jpeg',
        
    },
    {
        key: 2,
        type: 'Ancestor Guitar 2',
        price:'250$',
        image: '../../../assets/person.png',
        
    },
    {
        key: 3,
        type: 'Ancestor Guitar 2',
        price:'250$',
        image: '../../../assets/person.png',
        
    },
    {
        key: 4,
        type: 'Ancestor Guitar 2',
        price:'250$',
        image: '../../../assets/person.png',
        
    },
    {
        key: 5,
        type: 'Ancestor Guitar 2',
        price:'250$',
        image: '../../../assets/person.png',
        
    },
]

Arr2 = [],
Arr3 = [];

for (var i=0;i<favList_Data.length;i++){
if ((i+2)%2==0) {
    Arr3.push(favList_Data[i]);
}
else {
    Arr2.push(favList_Data[i]);
}
}

export const tab=()=>{
    return(
        <View style={{width :wp(10)}}>
            <Text>Helo</Text>
        </View>
    )
}

// export const ScrollTab=()=>{
//     return(
        
//     )
// }




class Favourite extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                {/* <ScrollableTabView
                    style={{shadowColor: '#8f8f8f',justifyContent:'flex-start',tabStyle:{width:wp(15)},
                    shadowOffset: { width:0, height:2},
                    shadowOpacity: 0.5,
                    elevation: 2,
                    shadowRadius:2,}} */}
                    {/* //tabStyle={styles.tabStyles} */}
                    {/* tabBarActiveTextColor='#F51E5B'
                    tabBarInactiveTextColor='#8F8F8F' */}
                   {/* // tabStyle={{width:wp(15)}}
                    // tabBarTextStyle={{width:wp(20)}} */}
                    {/* tabBarUnderlineStyle={{backgroundColor:'#F51E5B',}}
                    renderTabBar={() => <DefaultTabBar />}
                > */}
                    {/* <Text tabLabel='hi'>Hello world</Text> */}
                    {/* <Text tabLabel='Tab #1' nav={this.props.navigation}>My</Text>
                    <Saved tabLabel='Tab #2' nav={this.props.navigation}>favorite</Saved>
                    
                </ScrollableTabView> */}


                    <ScrollableTabView

                        renderTabBar={() => (
                            
                        <ScrollableTabBar
                            style={styles.scrollStyle}
                            tabStyle={styles.tabStyle}
                            
                        >
                        

                            <Text style={{width:200, backgroundColor:'red'}}>Helo world</Text>
                        </ScrollableTabBar>
                        
                        )}
                        
                        tabBarTextStyle={styles.tabBarTextStyle}
                        tabBarInactiveTextColor={'#969696'}
                        tabBarActiveTextColor={'black'}
                        tabBarUnderlineStyle={styles.underlineStyle}
                        initialPage={0}
                    >

                        <Saved key={'1'} tabLabel={'Saved(22)'} style={{flex:1}} nav={this.props.navigation}/>
                        <View key={'2'} tabLabel={'Purchased(4)'} style={{flex:1}}/>
                        {/* <View key={'3'} tabLabel={' '} TabIcon={<Image source={require('../../assets/icons/equal.png')} style={{width:wp(5),height:wp(5)}}/>}/> */}
                    </ScrollableTabView>


            </SafeAreaView>
        )
    }
}

class Saved extends Component{

    //////////// short height list item //////////
    _listItemShort(item){
        return(
            <View style={styles.shortListContainer}>
                <Image source={require('../../assets/guitar3.jpeg')} style={{width:wp(40),height:hp(30),margin:wp(1)}} resizeMode='cover'/>
                <View style={{flexDirection:"row", alignItems:'center',marginVertical:hp(2)}}>
                    <View>
                        <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                        <Text style={styles.priceText}>$1,200.00</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#eed9b4',width:wp(8),height:wp(8),borderRadius:4}}></TouchableOpacity>
                </View>
            </View>
        )
    }

    //////////// Long height list item //////////
    _listItemLong(item){
        return(
            <View style={styles.longListContainer}>
                    <Image source={require('../../assets/guitar3.jpeg')} style={{width:wp(40),height:hp(34),margin:wp(1)}} resizeMode='cover'/>
                    <View style={{flexDirection:"row", alignItems:'center',marginVertical:hp(2)}}>
                        <View>
                            <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                            <Text style={styles.priceText}>$1,200.00</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.nav.navigate('CartScreen')} style={{backgroundColor:'#eed9b4',width:wp(8),height:wp(8),borderRadius:4,marginRight:wp(2)}}></TouchableOpacity>
                    </View>
            </View>
        )
    }

    render(){
        return(
            
            <MasonryList
      // renderItem={(item)=><myComp/>}
      renderIndividualFooter={()=>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp(1)}}>
                <View>
                    <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                    <Text style={styles.priceText}>$1,200.00</Text>
                </View>
                <TouchableOpacity onPress={()=>this.props.nav.navigate('CartScreen')} style={{backgroundColor:'#eed9b4',width:wp(8),height:wp(8),borderRadius:4,marginRight:wp(2)}}></TouchableOpacity>
            </View>
      }
    //images={[]}
    images={[
        // Can be used with different image object fieldnames.
        // Ex. source, source.uri, uri, URI, url, URL
        
        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" ,
        dimensions: { width: 1080, height: 1420 },

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
            containerWidth:wp(35)
           },
        { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
            // Optional: Does not require an id for each
            // image object, but is for best practices.
            id: "blpccx4cn" ,
            dimensions: { width: 1080, height: 1420 },

        },
        { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg",
            // Optional: Adding a dimensions field with
            // the actual width and height for REMOTE IMAGES
            // will help improve performance.
            dimensions: { width: 1080, height: 1820 },
            containerWidth:wp(35)
           },
           { URI: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg",
            // Optional: Does not require an id for each
            // image object, but is for best practices.
            id: "blpccx4cn" ,
            dimensions: { width: 1080, height: 1420 },

        },
    ]}
>
</MasonryList>
        )
    }
}

const styles=StyleSheet.create({
    // tabStyles:{
    //     width:wp(20),
    //     backgroundColor:'blue'
    // },
    tabStyle: {
        width:150
      },
     scrollStyle: {
       backgroundColor: 'white',
       //paddingLeft: 10,
       //paddingRight: 10,
       // justifyContent: 'center',
     },
     tabBarTextStyle: {
       fontSize: 14,
       fontWeight: 'bold',
     },
     underlineStyle: {
       height: 3,
       backgroundColor: '#c4232c',
       borderRadius: 3,
       width: 80,
     },
    shortListContainer:{
        backgroundColor:'#ffffff',
        width:wp(42),
        marginTop:hp(2),
        marginLeft:wp(5),
        shadowColor: '#8f8f8f',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.5,
        elevation: 2,
        shadowRadius:2,
    },
    longListContainer:{
        backgroundColor:'#ffffff',
        width:wp(42),
        marginTop:hp(2),
        shadowColor: '#8f8f8f',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.5,
        elevation: 2,
        shadowRadius:2
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
    }
})

export default Favourite