import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'


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
  


class Favourite extends Component{

    //////////// short height list item //////////
    _listItemShort(item){
        return(
            <View style={styles.shortListContainer}>
                <Image source={require('../../assets/guitar3.jpeg')} style={{width:wp(40),height:hp(30),margin:wp(1)}} resizeMode='cover'/>
                <View style={{flexDirection:"row", alignItems:'center',justifyContent:'space-between',marginVertical:hp(2)}}>
                    <View>
                        <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                        <Text style={styles.priceText}>$1,200.00</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#eed9b4',width:wp(8),height:wp(8),borderRadius:4,marginRight:wp(2)}}></TouchableOpacity>
                </View>
            </View>
        )
    }

    //////////// Long height list item //////////
    _listItemLong(item){
        return(
            <View style={styles.longListContainer}>
                    <Image source={require('../../assets/guitar3.jpeg')} style={{width:wp(40),height:hp(34),margin:wp(1)}} resizeMode='cover'/>
                    <View style={{flexDirection:"row", alignItems:'center',justifyContent:'space-between',marginVertical:hp(2)}}>
                        <View>
                            <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                            <Text style={styles.priceText}>$1,200.00</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#eed9b4',width:wp(8),height:wp(8),borderRadius:4,marginRight:wp(2)}}></TouchableOpacity>
                    </View>
            </View>
        )
    }

    render(){
        return(
            <View style={{flex:1, padding:wp(5),backgroundColor:'red',flexDirection:'row'}}>
                <FlatList
                data={Arr2}
                renderItem={(item)=>this._listItemShort(item)}
                style={{
                    marginBottom:hp(5),}}
                />
                <FlatList
                data={Arr3}
                    //extraData={this.state}
                    //keyExtractor={this._keyExtractor}
                    //renderItem={this._renderItem}
                //numColumns={2}
                renderItem={(item)=>this._listItemLong(item)}
                //renderItem={({ item ,index}) => index%2==0?this._listItemShort(item):this._listItemLong(item)}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    shortListContainer:{
        backgroundColor:'#ffffff',
        marginTop:hp(2),
        marginRight:wp(5),
        shadowColor: '#8f8f8f',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.5,
        elevation: 2,
        shadowRadius:2,
    },
    longListContainer:{
        backgroundColor:'#ffffff',
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