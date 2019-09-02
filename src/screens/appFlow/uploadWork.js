import React,{Component} from 'react'
import {Animated, StyleSheet, TextInput, View, Text, Image, TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'

export default class UploadWork extends Component{

    state={
        name:''
    }
      render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder='Name'
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Tags'
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Cost'
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Description'
                    multiline={true}
                    onChange={(text)=>this.setState({name:text})}
                    value={this.state.name}
                    // underlineColorAndroid={'rgb(196,35,44)'}
                />

                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.buttonText}>Upload</Text>
                </TouchableOpacity>
            </View>
        )
        }    
    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:hp(10)
    },
    input:{
        paddingHorizontal:10,       
        fontSize:16,
        fontWeight:'bold',
        width:wp(80),
        alignSelf:'center',
        borderWidth:2,
        borderRadius:25,
        borderColor:'rgb(196,35,44)',
        marginTop:hp(2)
    },
    followButton:{
        width:wp(50),
        backgroundColor : 'rgb(196,35,44)',
        borderRadius : 25,
        paddingVertical : 12,
        alignItems:"center",
        alignSelf:'center',
        marginTop:hp(3)
    },
    buttonText : {
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        fontFamily:'Roboto-Regular'
    },
    
})