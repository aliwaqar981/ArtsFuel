import React,{Component} from 'react'
import {Animated, StyleSheet, TextInput, View, Text, Image, TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'

export default class EditProfile extends Component{

    state={
        name:''
    }
      render(){
        return(
            <View style={styles.container}>
                {/* <TextInput style={styles.inputBox} 
                    placeholder="Email"
                    placeholderTextColor="#fff" 
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}>
                </TextInput> */}
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
                    <Text style={styles.buttonText}>Follow</Text>
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
    // input:{
    //     paddingHorizontal:10,       
    //     fontSize:16,
    //     fontWeight:'bold',
    //     width:wp(80),
    //     alignSelf:'center',
    //     borderWidth:2,
    //     borderRadius:25,
    //     borderColor:'rgb(196,35,44)',
    //     marginTop:hp(2)
    // },
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
    
})