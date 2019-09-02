import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import MapView from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';


class MapSearch extends Component{
    state={
        currentLatitude:41.467910,
        currentLongitude:76.311069,

        LATLNG: {
            latitude: 31.467910,
            longitude: 74.311069
        },

        artists : [
            {
              id: 1,
              name: "Park Slope",
              latitude: "31.468302",
              longitude: "74.311632",
              circle: {
                radius: 3000,
                options: {
                  strokeColor: "#ff0000"
                }
              }
            },
            {
                id: 2,
                name: "Park Slope",
                latitude: "31.467414",
                longitude: "74.307368",
                circle: {
                  radius: 3000,
                  options: {
                    strokeColor: "#ff0000"
                  }
                }
              },
              {
                id: 3,
                name: "Park Slope",
                latitude: "31.464872",
                longitude: "74.311220",
                circle: {
                  radius: 3000,
                  options: {
                    strokeColor: "#ff0000"
                  }
                }
              },
              {
                id: 4,
                name: "Park Slope",
                latitude: "31.468873",
                longitude: "74.311878",
                circle: {
                  radius: 3000,
                  options: {
                    strokeColor: "#ff0000"
                  }
                }
              },   
          ] 
    }


    componentDidMount(){
        Geolocation.getCurrentPosition(info => {
            console.log(info)
            this.setState({
            currentLatitude:info.coords.latitude,
            currentLongitude:info.coords.longitude
        })
        });
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <MapView
       //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{ height: "100%", width: "100%" }}
       region={{
         latitude: 31.467910,
         longitude: 74.311069,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
         
       }}
     >
         
         {/* Search Bar */}

          {/* <Text>{this.props.getphotographer.getphotographer.users[0].full_name}</Text> */}
          

         {/* Search Bar */}



<MapView.Marker
                coordinate={{
                  latitude: this.state.currentLatitude,
                  longitude: this.state.currentLongitude
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
            

      

                        

              </MapView.Marker>

              <MapView.Circle
        center={{
          latitude: this.state.currentLatitude,
          longitude: this.state.currentLongitude,
        }}
        radius={200}
        strokeWidth={2}
        strokeColor={'#1a66ff'}
        fillColor={'rgba(230,238,255,0.5)'}

      />

              {/* User Card */}
              
              {this.state.artists.map(artist=>{
                  return(
                    <MapView.Marker
                    coordinate={{
                      latitude: parseFloat(artist.latitude),
                      longitude: parseFloat(artist.longitude)
                    }}
                    title={"marker.title"}
                    description={"marker.description"}
                    animation={true}
                  >
                    {/* <Image
                      source={require("../../assets/LocationIcon.png")}
                      resizeMode={"contain"}
                      style={{ width: wp(5), height: wp(5) }}
                    /> */}
                    <TouchableOpacity style={styles.artistsOnMap}>
                            <Image source={require('../../assets/person.png')} style={{width:wp(10),height:wp(10),borderRadius:wp(20)}} resizeMode='contain'/>
                    </TouchableOpacity>
    
                  </MapView.Marker>
                  )
              })
            }

     </MapView>

     {/* Search Bar */}
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
          <TouchableOpacity>
              <Image source={require('../../assets/icons/Microphone.png')} style={{width:wp(5),height:wp(5),alignSelf:'flex-end',marginLeft:wp(6)}} resizeMode={'contain'}/>
          </TouchableOpacity>
      </View>


      {/* Event Card View */}
                <View style={styles.mapCard}>
                  <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(30),height:wp(34),borderRadius:6}} resizeMode='cover'/>
                  
                  <View style={{marginLeft:wp(6) }}>
                    <Text style={styles.profilName}>CONTAMPORARY ART EXIBIT 2019</Text>
                    <Text style={{color:'#000000', fontWeight:'400', marginTop:wp(1), width:wp(40), fontFamily:'Roboto-Regular',fontSize:12}}>South Blakemouth, NYC</Text>
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
    searchCard:{
        height: wp("12"),
        width: wp("88"),
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: wp("8"),
        alignItems: "center",
        borderRadius:25,
        flexDirection: "row",
        position: "absolute",
        top: wp("10"),
        shadowColor: '#8f8f8f',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.5,
        elevation: 2,
        shadowRadius:2
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
        marginTop:hp(2),
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
    },
    artistsOnMap:{
        width:wp(12),height:wp(12),
        borderRadius:wp(24),
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: '#8f8f8f',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.5,
        elevation: 2,
        shadowRadius:2
    }
})

export default MapSearch