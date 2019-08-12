import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../../helpers/Responsive'


export default class Form extends Component{

    SubmitHandler = () => {
        this.props.nav.navigate('HomeScreen')
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                    placeholder="Email"
                    placeholderTextColor="#fff" >
                </TextInput>

                <TextInput style={styles.inputBox} 
                    placeholder="Email"
                    placeholderTextColor="#fff" >
                </TextInput>
            
                <TouchableOpacity style={styles.button} onPress={this.SubmitHandler}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },

    inputBox : {
        width:wp(80),
        backgroundColor : 'rgb(226,233,238)',
        borderRadius : 25,
        paddingHorizontal : 16,
        fontSize : 16,
        color : '#fff',
        marginTop:hp(3)
        },


    button:{
        width:wp(80),
        backgroundColor : 'rgb(196,35,44)',
        borderRadius : 25,
        paddingVertical : 12,
        marginVertical : 16,
        alignItems:"center",
        marginTop:hp(5)
    },
    buttonText : {
        fontSize:16,
        fontWeight:'500',
        color:'#fff'
    }
});