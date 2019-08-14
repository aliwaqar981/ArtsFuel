import React, { Component } from 'react';
import { FlatList ,SwipeRow,View,Text, Image, StyleSheet,TextInput, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback,} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Swipeout from 'react-native-swipeout'


var flatListData=[
    {
        key:'1',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        foodDescription:'this is cup of tea'
    },
    {
        key:'2',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        foodDescription:'this is cup of tea'
    },
    {
        key:'3',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        foodDescription:'this is cup of tea'
    },
    {
        key:'4',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        foodDescription:'this is cup of tea'
    }
]



/////// swope button
// const swipeBtns = [
//     {
//       component: (
//         // <View
//         //     style={{
//         //       flex: 1,
//         //       alignItems: 'center',
//         //       justifyContent: 'center',
//         //       flexDirection: 'column',
//         //     }}
//         // >
//         //{/* </View> */}
//       ),
    //   backgroundColor: 'white',
    //   underlayColor: 'white',
//       onPress: () => {
//         console.log("Delete Item");
//       },
//     },
//   ];


export class FlatListItem extends Component {

    constructor(props){
        super(props)
        this.state={
            activeRowKey:null
        }
    }

    

    render(){
        const swipeSetting={
            autoClose:true,
            onClose:(secId,rowId,direction)=>{
                if(this.state.activeRowKey!=null){
                    this.setState({activeRowKey:null})
                }
            },
            onClose:(secId,rowId,direction)=>{
                
            },
            right:[
                {
                    onPress:()=>{
                        this.setState({activeRowKey:this.props.item.key})
                    },
                    backgroundColor: 'white',
                    underlayColor: 'white',
                    justifyContent:'center',
                    alignItems:'center',
                    component:
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <TouchableOpacity style={{width:wp(8),height:wp(8),borderRadius:wp(4),backgroundColor:'#F6F6F6',marginTop:wp(5),justifyContent:'center',marginRight:wp(2)}}>
                            <Image source={require('../../assets/icons/warning.png')} style={{width:wp(3),height:wp(3),alignSelf:'center'}}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width:wp(8),height:wp(8),borderRadius:wp(4),backgroundColor:'#F6F6F6',marginTop:wp(5),justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/delete.png')} style={{width:wp(3),height:wp(3),alignSelf:'center'}}/>
                        </TouchableOpacity>
                    </View>
                }
            ],
            rowId:this.props.index,
            sectionId:1
        };

        

        return(
            <Swipeout {...swipeSetting}>
                <View>
                    <TouchableOpacity style={styles.row} onPress={()=>this.props.nav.navigate('ChatScreen')}>
                        <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(14),height:wp(14),borderRadius:wp(7),marginLeft:wp(5)}} resizeMode='cover'/>

                        <View style={{marginLeft:wp(2)}}>
                            <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                            <Text style={styles.priceText}>$1,200.00</Text>                        
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{width:'100%',height:100}}>
                    <Text>HElo world</Text>
                </View> */}
            </Swipeout>
        )
    }
}

const styles=StyleSheet.create({
    row:{
        height:wp(20),
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
    itemNameText:{
        fontFamily:'Roboto-Regular',
        color:'#000000',
        fontSize:14,
        marginLeft:wp(3),
        fontWeight:'bold'
    },
    priceText:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:13,
        width:wp(70),
        marginLeft:wp(3),
        overflow:'hidden'
    },
    searchCard:{
        height: wp("11"),
        width: wp("90"),
        backgroundColor: "#f6f6f6",
        alignSelf: "center",
        marginTop: hp(2),
        alignItems: "center",
        borderRadius:5,
        flexDirection: "row",
    },
})


export default class Messages extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{width:wp(100),flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:hp(1)}}>
                    <Text style={{fontFamily:'RobotoCondensed-Bold.ttf',fontSize:20,color:'black',fontWeight:'bold',marginLeft:wp(5)}}>Messages</Text>
                    <TouchableOpacity style={{width:wp(10),height:wp(10),borderRadius:wp(5),backgroundColor:'#F6F6F6',justifyContent:'center',alignItems:'center',marginRight:wp(5)}}>
                        <Image source={require('../../assets/icons/newMessage.png')} style={{width:wp(4),height:wp(4),}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchCard}>
                    <Image
                    source={require("../../assets/icons/search.png")}
                    resizeMode="contain"
                    style={{
                        height: wp("4"),
                        width: wp("4"),
                        borderRightWidth: 3,
                        borderColor: "#D5D5E0",
                        marginLeft:wp(4),
                    }}
                    />

                    <TextInput 
                        style={{width:wp(70),marginLeft:wp(2)}}
                        placeholder='search...'
                        placeholderTextColor='grey'
                    />
                </View>                                 
                
                <FlatList
                data={flatListData}
                style={{marginTop:hp(1)}}
                renderItem={(item,index)=>
                    <FlatListItem item={item} index={index} nav={this.props.navigation}>

                    </FlatListItem>
                }>

                </FlatList>
            </View>
        )
    }
}

