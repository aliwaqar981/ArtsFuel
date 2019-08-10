import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import { GiftedChat,Bubble,InputToolbar,Send,Actions,Composer,Avatar } from 'react-native-gifted-chat'


class chat extends Component{

state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}        
        
          renderBubble={(props) => 
              <Bubble
                {...props}
                textStyle={{
                  right: {
                    color: 'black',
                  },
                  left:{
                    color:'#969696'
                  }
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: '#ffffff',
                    borderTopLeftRadius:0,
                    borderBottomLeftRadius:6,
                    borderBottomRightRadius:6,
                    borderTopRightRadius:6,
                    borderWidth:0.5,
                    borderColor:'#969696'
                  },
                  right:{
                    backgroundColor: '#969696',
                    borderBottomRightRadius:0,
                    borderBottomLeftRadius:6,
                    borderTopLeftRadius:6,
                    borderTopRightRadius:6
                  }
                }}
              />
          }
          // renderSend={(props)=>
          //   <TouchableOpacity onPress={props.onSend}>
          //     <Image source={require('../../assets/icons/send.png')} style={{width:wp(5),height:wp(5)}}/>
          //   </TouchableOpacity>
          //   }

          
          
          renderInputToolbar={(props)=>
    
               <InputToolbar {...props} containerStyle={{justifyContent:'center'}}>
                 <Image {...props} source={require('../../assets/icons/send.png')} style={{width:wp(7),height:wp(7),marginRight:wp(3)}}/> 
               </InputToolbar>
            
          }
          alwaysShowSend={true}
        user={{
          _id: 1,
        }}
        onPressActionButton={(props)=> {
          return (
              <Avatar
                  {...props}
              >
                  <View style={{marginRight: 10, marginBottom: 5, backgrounColor:'red'}}>
                      <Image source={require('../../assets/icons/send.png')} style={{width:wp(7),height:wp(7)}} resizeMode={'center'}/>
                  </View>
              </Avatar>
          );
      }}
      />
    )
  }
}

export default chat