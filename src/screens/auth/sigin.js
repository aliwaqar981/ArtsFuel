import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Logo from './components/Logo'
import Form from './components/Form'

export default class Signin extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Form nav={this.props.navigation}/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignupScreen')}>
                        <Text style={[styles.signupText, {textAlign:'center',fontWeight:'bold',fontSize:20}]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        backgroundColor:'#ffffff'
        //justifyContent: 'center',
    },
    signupText:{
        color:'rgba(196,35,44,0.7)',
        fontSize:16,
    },
    signupTextCont:{
        alignContent: "center",
        //justifyContent:"flex-end",
        marginVertical:16
    }
});



// import React, {Component} from 'react'
// import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
// //import { connect } from 'react-redux';
// //import {saveUser} from '../../store/actions/authAction'


// class Signin extends Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             email: '',
//             password: '',
//         }
//     }

    // SubmitHandler = () => {
    //     this.props.navigation.navigate('HomeScreen')
    // }

//     render(){
//         return(
//         <ImageBackground source={require('../../assets/appview.png')} style={{flex:1,}} resizeMode={'cover'}>
//             <View style={styles.container}>
//                 <View style={styles.logo}>
//                     <Text style={{color:'black', fontSize:50}}>tag</Text>
//                 </View>

//                 <View style={[styles.smallInputField,{marginTop:hp(6)}]}>
//                     <Image source={require('../../assets/user.png')} style={{width:wp(4),height:wp(4),marginLeft:wp(2)}}/>
//                     <TextInput
//                         placeholder='Email' placeholderTextColor='#505f79'
//                         autoCapitalize='none'
//                         keyboardType="email-address"
//                         style={styles.smallInput}
//                         onChangeText={(value) => this.setState({ email: value })}

//                     />
//                 </View>

//                 <View style={styles.smallInputField}>
//                     <Image source={require('../../assets/unlock.png')} style={{width:wp(4),height:wp(4),marginLeft:wp(2)}} resizeMode={'contain'}/>
//                     <TextInput
//                         placeholder='Password' placeholderTextColor='#505f79'
//                         autoCapitalize='none'
//                         //keyboardType="email-address"
//                         style={styles.smallInput}
//                         onChangeText={(value) => this.setState({ password: value })}

//                     />
//                 </View>

//                 <TouchableOpacity 
//                 onPress={this.SubmitHandler}
//                 style={[Platform.OS == 'ios' ? styles.buttonRedIos : styles.buttonRedAndroid]}>
//                     <Text style={{color:'#ffffff',fontSize:15}}>LOGIN</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{marginTop:hp(2)}} onPress={()=>this.props.navigation.navigate('SignupScreen')}>
//                     <Text style={{fontSize:15,color:'#ffffff'}}>Register</Text>
//                 </TouchableOpacity>
//             </View>
//         </ImageBackground>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         alignContent: 'center',
//         justifyContent:'center',
//     },
//     logo: {
//         width:wp(30), 
//         height:wp(30), 
//         backgroundColor:'#ffffff', 
//         borderRadius:10,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     smallInputField: {
//         borderRadius:5,
//         marginTop: hp('2'),
//         backgroundColor:'#f4f5f7',
//         flexDirection:'row',
//         alignItems:'center',
//     },
//     smallInput: {
//         color: '#505f79',
//         fontSize: 15, //12
//         fontWeight: '300',
//         height: wp('12'),
//         width: wp('60'),
//         marginLeft:wp(4),
//     },
//     buttonRedIos: {
//         width: wp('70'),
//         height: wp('12'),
//         backgroundColor: '#bad049',
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center',
//         marginBottom: wp('4'),

//         borderWidth: 1,
//         borderRadius: 2,
//         borderColor: '#ddd',
//         borderBottomWidth: 0,
//         shadowColor: '#c5c4c4',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 3,
//         elevation: 1,
//         marginLeft: 5,
//         marginRight: 5,
//         marginTop: 10,
//         borderTopLeftRadius: 5,
//         borderTopRightRadius: 5,

//         borderBottomLeftRadius: 5,
//         borderBottomRightRadius: 5,

//         marginTop: hp('3')

//     },
//     buttonRedAndroid: {
//         width: wp('70'),
//         height: wp('12'),
//         backgroundColor: '#bad049',
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center',
//         marginBottom: wp('4'),

//         elevation: 3,
//         borderTopLeftRadius: 5,
//         borderTopRightRadius: 5,

//         borderBottomLeftRadius: 5,
//         borderBottomRightRadius: 5,
//         marginTop: hp('3')


//     },
// });

// // const mapStateToProps = state => {
// //     return {
// //       //places: state.places.places
// //     }
// //   }
  
// //   const mapDispatchToProps = dispatch => {
// //     return {
// //       add: (name) => {
// //         dispatch(saveUser(name))
// //       }
// //     }
// //   }
  
  
// //export default connect(mapStateToProps, mapDispatchToProps)(Signin)

// export default Signin;