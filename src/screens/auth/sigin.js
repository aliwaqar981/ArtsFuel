import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Logo from './components/Logo'
import Form from './components/Form'
import { signIn, getCurrentUserId, connectFirebase } from "../../backend/firebase/auth";

export default class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          loader: false,
          focusPasswordInput: false,
          disableBtn:false,
        };
        this.onLoginFunc = this.onLoginFunc.bind(this);
        this.focusPasswordInput = React.createRef();
      }

    componentDidMount() {
        connectFirebase();
      }


    async onLoginFunc() {
        if (this.state.email == "" || this.state.password == "") {
          alert("Email and password fields cannot be empty");
        } else {
          this.setState({ loader: true, disableBtn:true });
          let callback = await signIn(this.state.email, this.state.password);
          this.setState({ loader: false });
          if (callback) {
            let userId = await getCurrentUserId();
            this.props.navigation.navigate("HomeScreen");
          }
        }
      }


    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.containerLogo}>
                    <Image
                        style={{width: 70, height: 70}}
                        source={require('../../assets/icons/logo.jpeg')}
                    />
                    <Text style={styles.logoDesign}>Welcome to Arts Fuel</Text>
                </View>

                <View style={styles.containerForm}>
                    <View>
                        <TextInput style={styles.inputBox} 
                            placeholder="Email"
                            placeholderTextColor="#fff" 
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}>
                        </TextInput>

                        <TextInput style={styles.inputBox} 
                            placeholder="Password"
                            placeholderTextColor="#fff" 
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}>
                        </TextInput>
                    </View>
                
                    <TouchableOpacity style={styles.button} disabled={this.state.disableBtn} onPress={this.onLoginFunc}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    {this.state.loader ? (
                        <ActivityIndicator size="large" color='rgb(196,35,44)' />
                    ) : null}
                </View>

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
    containerLogo:{
        //flexGrow:1,
        //justifyContent:'f',
        marginTop:100,
        alignItems: 'center',
        marginVertical: 16,
    },
    logoDesign : {
        marginVertical: 15,
        marginBottom: 40,
        fontSize: 20,
        color: 'rgba(196,35,44,0.7)'
    },
    container : {
        flex: 1,
        alignItems: "center",
        backgroundColor:'#ffffff'
        //justifyContent: 'center',
    },

    containerForm : {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: "center",
        //justifyContent: 'center',
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
    },
    
    signupText:{
        color:'rgba(196,35,44,0.7)',
        fontSize:16,
    },
    signupTextCont:{
        alignContent: "center",
        //justifyContent:"flex-end",
        marginVertical:16
    },
});

