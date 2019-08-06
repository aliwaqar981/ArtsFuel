import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import MapView from "react-native-maps";


class MapSearch extends Component{
    state={
        currentLongitude:37.78825,
        currentLongitude:-122.4324
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <MapView
       //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{ height: "100%", width: "100%" }}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
         
         {/* Search Bar */}

          {/* <Text>{this.props.getphotographer.getphotographer.users[0].full_name}</Text> */}
          <View
            style={{
              height: wp("12"),
              width: wp("92"),
              backgroundColor: "#fff",
              alignSelf: "center",
              marginTop: wp("8"),
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              flexDirection: "row",
              position: "absolute",
              top: wp("10"),
              zIndex: 10,
              shadowColor: '#8f8f8f',
              shadowOffset: { width:0, height:2},
              shadowOpacity: 0.5,
              elevation: 2,
              shadowRadius:2
            }}
          >
            <TextInput>
              <TouchableOpacity
                onPress={this.drawer1}
                style={{ marginLeft: wp("3") }}
              >
                <Image
                  source={require("../../assets/SearchIcon.png")}
                  resizeMode="contain"
                  style={{
                    height: wp("5"),
                    width: wp("5"),
                    borderRightWidth: 3,
                    borderColor: "#D5D5E0"
                  }}
                />
              </TouchableOpacity>
            </TextInput>

              
              

          </View>

         {/* Search Bar */}



<MapView.Marker
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324
                }}
                title={"marker.title"}
                description={"marker.description"}
                animation={true}
              >
                <Image
                  source={require("../../assets/LocationIcon.png")}
                  resizeMode={"contain"}
                  style={{ width: wp(5), height: wp(5) }}
                />
                {/* <MapView.Circle
                key = { (this.state.currentLongitude + this.state.currentLongitude).toString() }
                center = { this.state.LATLNG }
                radius = { 10000 }
                strokeWidth = { 1 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' } */}
                {/* // onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) } */}
                        

              </MapView.Marker>

              {/* User Card */}
              

     </MapView>

                <View style={styles.mapCard}>
                  <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(30),height:wp(32),borderRadius:6}} resizeMode='cover'/>
                  
                  <View style={{marginLeft:wp(6) }}>
                    <Text style={styles.profilName}>CONTAMPORARY ART EXIBIT 2019</Text>
                    <Text style={[styles.profileDes,{color:'black', fontWeight:'400', marginTop:wp(2)}]}>South Blakemouth, NYC</Text>
                    <Text style={styles.profileDes}>june 26-29, 2019</Text>

                    <TouchableOpacity style={styles.buyButton}>
                    <Text style={{color:'white',fontFamily:'Roboto-Regular',fontSize:14, fontWeight:'bold'}}>Buy Tickets</Text>
                </TouchableOpacity>
                </View>
                </View>


            </View>
        )
    }
}

const styles=StyleSheet.create({
    mapCard:{
        width:wp(90),
        position:'absolute',
        bottom:20,
        backgroundColor:'#ffffff',
        paddingVertical:wp(4),
        paddingHorizontal:wp(4),
        flexDirection:'row', 
        borderRadius:4,  
        // shadowColor: '#8f8f8f',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.5,
        elevation: 2,
        shadowRadius:2,
        marginLeft:wp(5)
    },
    profilName:{
        width:wp(35),
        color:'black',
        fontFamily:'Roboto-Regular',
        fontSize:14,
        fontWeight:'bold'
    },
    profileDes:{
        color:'#969696',
        width:wp(40),
        fontFamily:'Roboto-Regular',
        fontSize:12,
        //textAlign:'center',
        width:wp(40),
        //alignSelf:'center'
    },
    buyButton:{
        borderRadius:4,
        marginTop:hp(3),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c4232c',
        paddingVertical:wp(2),
        width:wp(45),

        // shadow elevation
        // shadowColor: '#8f8f8f',
        // shadowOffset: { width:0, height:2},
        // shadowOpacity: 0.5,
        // elevation: 2,
        // shadowRadius:2
    }
})

export default MapSearch