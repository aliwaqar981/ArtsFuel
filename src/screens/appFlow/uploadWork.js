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
                    style={styles.inputBox}
                    placeholder='Name'
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
                    placeholder='Cost'
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

                <TouchableOpacity style={styles.uploadButton}>
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
    inputBox : {
        width:wp(80),
        backgroundColor : 'rgb(226,233,238)',
        borderRadius : 25,
        paddingHorizontal : 16,
        paddingVertical:10,        
        fontSize : 16,
        marginTop:hp(3)
    },
    uploadButton:{
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
    
})