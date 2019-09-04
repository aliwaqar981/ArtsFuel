import React,{Component} from 'react'
import {Animated, StyleSheet, TextInput, View, Text, Image, TouchableOpacity,CameraRoll} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'

import ImagePicker from 'react-native-image-picker';



export default class EditProfile extends Component{

    state={
        name:'',
        avatarSource:null
    }

    chooseImage=()=>{
        const options = {
            title: 'Select Avatar',
            //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
    }
    
    
      render(){
        
        return(
            <View style={styles.container}>

                <View style={{alignSelf:'center', marginTop:hp(1)}}>
                    <Image style={{width:wp(30),height:wp(30), borderRadius:wp(15)}} source={this.state.avatarSource == null ? require('../../assets/person.png') :  this.state.avatarSource } resizeMode='cover'/>
                    <TouchableOpacity style={styles.editImage} onPress={this.chooseImage}>
                        <View style={{backgroundColor:'rgb(196,35,44)', height:wp(5),width:wp(5),borderRadius:wp(10),justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../../assets/icons/editPen.png')} style={{width:wp(3),height:wp(3)}} resizeMode='contain'/>   
                       </View>  
                    </TouchableOpacity>
                </View>


                <TextInput 
                    style={styles.inputBox}
                    placeholder='Full Name'
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />

                <TextInput 
                    style={styles.inputBox}
                    placeholder='Description'
                    multiline={true}
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />
                <TextInput 
                    style={styles.inputBox}
                    placeholder='Tags'
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />
                <TextInput 
                    style={styles.inputBox}
                    placeholder='Location'
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />
                <TextInput 
                    style={styles.inputBox}
                    placeholder='Rate'
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />

                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        )
        }    
    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:hp(4)
    },
    inputBox : {
        width:wp(80),
        backgroundColor : 'rgb(226,233,238)',
        borderRadius : 25,
        paddingHorizontal : 16,
        paddingVertical:10,        
        fontSize : 16,
        marginTop:hp(3)
    },
    followButton:{
        width:wp(80),
        backgroundColor : 'rgb(196,35,44)',
        borderRadius : 25,
        paddingVertical : 12,
        marginVertical : 16,
        alignItems:"center",
        marginTop:hp(5)
    },
    buttonText : {
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        fontFamily:'Roboto-Regular'
    },
    editImage:{
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