import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={{width: 70, height: 70}}
                    source={require('../../../assets/icons/logo.jpeg')}
                />
                <Text style={styles.logoDesign}>Welcome to Arts Fuel</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems: 'center',
        marginVertical: 16
    },
    logoDesign : {
        marginVertical: 15,
        marginBottom: 40,
        fontSize: 20,
        color: 'rgba(196,35,44,0.7)'
    }


});