import React, { Component } from 'react';
import { FlatList ,SwipeRow,View,Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback,} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Swipeout from 'react-native-swipeout'


var flatListData=[
    {
        key:'1',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        foodDescription:'this is cup of tea'
    },
    {
        key:'2',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        foodDescription:'this is cup of tea'
    },
    {
        key:'3',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        foodDescription:'this is cup of tea'
    },
    {
        key:'4',
        name:'helo',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        foodDescription:'this is cup of tea'
    }
]



/////// swope button
// const swipeBtns = [
//     {
//       component: (
//         // <View
//         //     style={{
//         //       flex: 1,
//         //       alignItems: 'center',
//         //       justifyContent: 'center',
//         //       flexDirection: 'column',
//         //     }}
//         // >
//         //{/* </View> */}
//       ),
    //   backgroundColor: 'white',
    //   underlayColor: 'white',
//       onPress: () => {
//         console.log("Delete Item");
//       },
//     },
//   ];


export class FlatListItem extends Component {

    constructor(props){
        super(props)
        this.state={
            activeRowKey:null
        }
    }

    

    render(){
        const swipeSetting={
            autoClose:true,
            onClose:(secId,rowId,direction)=>{
                if(this.state.activeRowKey!=null){
                    this.setState({activeRowKey:null})
                }
            },
            onClose:(secId,rowId,direction)=>{
                
            },
            right:[
                {
                    onPress:()=>{
                        this.setState({activeRowKey:this.props.item.key})
                    },
                    backgroundColor: 'white',
                    underlayColor: 'white',
                    justifyContent:'center',
                    alignItems:'center',
                    component:
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <TouchableOpacity style={{width:wp(8),height:wp(8),borderRadius:wp(4),backgroundColor:'#F6F6F6',marginTop:wp(5),justifyContent:'center',marginRight:wp(2)}}>
                            <Image source={require('../../assets/icons/warning.png')} style={{width:wp(3),height:wp(3),alignSelf:'center'}}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width:wp(8),height:wp(8),borderRadius:wp(4),backgroundColor:'#F6F6F6',marginTop:wp(5),justifyContent:'center'}}>
                            <Image source={require('../../assets/icons/del.png')} style={{width:wp(3),height:wp(3),alignSelf:'center'}}/>
                        </TouchableOpacity>
                    </View>
                }
            ],
            rowId:this.props.index,
            sectionId:1
        };

        

        return(
            <Swipeout {...swipeSetting}>
                <View>
                    <TouchableOpacity style={styles.row} onPress={()=>this.props.nav.navigate('ChatScreen')}>
                        <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(14),height:wp(14),borderRadius:wp(7),marginLeft:wp(5)}} resizeMode='cover'/>

                        <View style={{marginLeft:wp(2)}}>
                            <Text style={styles.itemNameText}>Ancestor Guitar</Text>
                            <Text style={styles.priceText}>$1,200.00</Text>                        
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{width:'100%',height:100}}>
                    <Text>HElo world</Text>
                </View> */}
            </Swipeout>
        )
    }
}

const styles=StyleSheet.create({
    row:{
        height:wp(20),
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
    itemNameText:{
        fontFamily:'Roboto-Regular',
        color:'#000000',
        fontSize:14,
        marginLeft:wp(3),
        fontWeight:'bold'
    },
    priceText:{
        color:'#969696',
        fontFamily:'Roboto-Regular',
        fontSize:13,
        width:wp(70),
        marginLeft:wp(3),
        overflow:'hidden'
    }
})


export default class Messages extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                data={flatListData}
                renderItem={(item,index)=>
                    <FlatListItem item={item} index={index} nav={this.props.navigation}>

                    </FlatListItem>
                }>

                </FlatList>
            </View>
        )
    }
}

//   constructor(props) {
//     super(props)
//     this.state = { data: [{ key: 1, value: 'one' }, { key: 2, value: 'two' }, { key: 3, value: 'three' }, { key: 4, value: 'four' }, { key: 5, value: 'five' }] }
//   }

//   removeItem(key) {
//     let data = this.state.data
//     data = data.filter((item) => item.key !== key)
//     this.setState({ data })
//   }

//   render() {
//     return (
      

//           <FlatList
//             data={this.state.data}
//             renderItem={({ item }) => <SwipeRow
//               leftOpenValue={75}
//               rightOpenValue={-75}
//               left={
//                 <View  >
//                   <Text>Oye</Text> 
//                 </View>
//               }
//               body={
//                 <View>
//                   <Text style={{ paddingLeft: 15 }}>{item.value}</Text>
//                 </View>
//               }
//               right={
//                 <View >
//                   <Text>helo</Text>
//                 </View>
//               }
//             />}
//           />
//     );
//   }
// }

// import React, {Component} from 'react'
// import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform,ImageBackground,SwipeableListView,TouchableHighlight} from 'react-native'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
// import { GiftedChat } from 'react-native-gifted-chat'
// import { SwipeListView } from 'react-native-swipe-list-view';
// import {SwipeableFlatList,} from 'react-native-swipeable-flat-list';



// class Messages extends Component{


//     render() {
//         const data = [
//             { key: 1, label: 'Label 1', leftLabel: 'Left 1', rightLabel: 'Right 1' },
//             { key: 2, label: 'Label 2', leftLabel: 'Left 2', rightLabel: 'Right 2' },
//             { key: 3, label: 'Label 3', leftLabel: 'Left 3', rightLabel: 'Right 3' },
//             { key: 4, label: 'Label 4', leftLabel: 'Left 4', rightLabel: 'Right 4' },
//             { key: 5, label: 'Label 5', leftLabel: 'Left 5', rightLabel: 'Right 5' },
//         ];
//         return (
//             <SwipeableFlatList
//             swipeRightThreshold={20}
//                 data={data}
//                 swipeRightThreshold={200}
//                 renderItem={({ item }) => (
                    // <View style={styles.row}>
                    //     <Image source={require('../../assets/images/image1.jpg')} style={{width:wp(14),height:wp(14),borderRadius:wp(7)}} resizeMode='cover'/>

                    //     <View>
                    //     <Text style={styles.itemNameText}>Ancestor Guitar hbjhgsdafhdsahfgasdgjhgh ggjhgjhgj</Text>
                    //     <Text style={styles.priceText}>$1,200.00</Text>                        
                    //     </View>
                    // </View>
//                 )}
                
//                 // renderItem={({ item }) => (
//                 //     <Text style={{ height: 48 ,backgroundColor:'red'}}>{item.label}</Text>
//                 // )}
//                 renderLeft={({ item }) => (
//                     <Text style={{ width: 100 }}>{item.leftLabel}</Text>
//                 )}
//                 renderRight={({ item }) => (
//                     <Text style={{ width: 100,backgroundColor:'green' }}>{item.rightLabel}</Text>
//                 )}
//                 backgroundColor={'white'}
//             />
//         )
//     }

//     // constructor(props) {
//     //     super(props);
//     //     // this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//     //     this.state = {
//     //       basic: true,
//     //       listViewData: Array(20).fill('').map((_, i) => `item #${i}`),
//     //     };
//     //   }
    
//     //   deleteRow(secId, rowId, rowMap) {
//     //     rowMap[`${secId}${rowId}`].closeRow();
//     //     const newData = [...this.state.listViewData];
//     //     newData.splice(rowId, 1);
//     //     this.setState({ listViewData: newData });
//     //   }
    
//     //   render() {
//     //     return (
//     //       <View style={styles.container}>
    
//     //         <View style={styles.standalone}>
//     //           <SwipeRow leftOpenValue={75} rightOpenValue={-75}>
//     //             <View style={styles.standaloneRowBack}>
//     //               <Text style={styles.backTextWhite}>Left</Text>
//     //               <Text style={styles.backTextWhite}>Right</Text>
//     //             </View>
//     //             <View style={styles.standaloneRowFront}>
//     //               <Text>I am a standalone SwipeRow</Text>
//     //             </View>
//     //           </SwipeRow>
//     //         </View>
    
//     //         <View style={styles.controls}>
//     //           <View style={styles.switchContainer}>
//     //             <TouchableOpacity
//     //               style={[
//     //                 styles.switch,
//     //                 { backgroundColor: this.state.basic ? 'grey' : 'white' },
//     //               ]}
//     //               onPress={_ => this.setState({ basic: true })}>
//     //               <Text>Basic</Text>
//     //             </TouchableOpacity>
    
//     //             <TouchableOpacity
//     //               style={[
//     //                 styles.switch,
//     //                 { backgroundColor: this.state.basic ? 'white' : 'grey' },
//     //               ]}
//     //               onPress={_ => this.setState({ basic: false })}>
//     //               <Text>Advanced</Text>
//     //             </TouchableOpacity>
    
//     //           </View>
//     //           {!this.state.basic && <Text>(per row behavior)</Text>}
//     //         </View>
    
//     //         {this.state.basic &&
//     //           <SwipeListView
//     //             dataSource={this.ds.cloneWithRows(this.state.listViewData)}
//     //             renderRow={data => (
//     //               <TouchableHighlight
//     //                 onPress={_ => console.log('You touched me')}
//     //                 style={styles.rowFront}
//     //                 underlayColor={'#AAA'}>
//     //                 <View>
//     //                   <Text>I am {data} in a SwipeListView</Text>
//     //                 </View>
//     //               </TouchableHighlight>
//     //             )}
//     //             renderHiddenRow={(data, secId, rowId, rowMap) => (
//     //               <View style={styles.rowBack}>
//     //                 <Text>Left</Text>
//     //                 <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
//     //                   <Text style={styles.backTextWhite}>Right</Text>
//     //                 </View>
//     //                 <TouchableOpacity
//     //                   style={[styles.backRightBtn, styles.backRightBtnRight]}
//     //                   onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
//     //                   <Text style={styles.backTextWhite}>Delete</Text>
//     //                 </TouchableOpacity>
//     //               </View>
//     //             )}
//     //             leftOpenValue={75}
//     //             rightOpenValue={-150}
//     //           />}
    
//     //         {!this.state.basic &&
//     //           <SwipeListView
//     //             dataSource={this.ds.cloneWithRows(this.state.listViewData)}
//     //             renderRow={(data, secId, rowId, rowMap) => (
//     //               <SwipeRow
//     //                 disableLeftSwipe={parseInt(rowId) % 2 === 0}
//     //                 leftOpenValue={20 + Math.random() * 150}
//     //                 rightOpenValue={-150}>
//     //                 <View style={styles.rowBack}>
//     //                   <Text>Left</Text>
//     //                   <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
//     //                     <Text style={styles.backTextWhite}>Right</Text>
//     //                   </View>
//     //                   <TouchableOpacity
//     //                     style={[styles.backRightBtn, styles.backRightBtnRight]}
//     //                     onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
//     //                     <Text style={styles.backTextWhite}>Delete</Text>
//     //                   </TouchableOpacity>
//     //                 </View>
//     //                 <TouchableHighlight
//     //                   onPress={_ => console.log('You touched me')}
//     //                   style={styles.rowFront}
//     //                   underlayColor={'#AAA'}>
//     //                   <View>
//     //                     <Text>I am {data} in a SwipeListView</Text>
//     //                   </View>
//     //                 </TouchableHighlight>
//     //               </SwipeRow>
//     //             )}
//     //           />}
    
//     //       </View>
//     //     );
//     //   }
//     // }
    
//     // const styles = StyleSheet.create({
//     //   container: {
//     //     backgroundColor: 'white',
//     //     flex: 1,
//     //   },
//     //   standalone: {
//     //     marginTop: 30,
//     //     marginBottom: 30,
//     //   },
//     //   standaloneRowFront: {
//     //     alignItems: 'center',
//     //     backgroundColor: '#CCC',
//     //     justifyContent: 'center',
//     //     height: 50,
//     //   },
//     //   standaloneRowBack: {
//     //     alignItems: 'center',
//     //     backgroundColor: '#8BC645',
//     //     flex: 1,
//     //     flexDirection: 'row',
//     //     justifyContent: 'space-between',
//     //     padding: 15,
//     //   },
//     //   backTextWhite: {
//     //     color: '#FFF',
//     //   },
//     //   rowFront: {
//     //     alignItems: 'center',
//     //     backgroundColor: '#CCC',
//     //     borderBottomColor: 'black',
//     //     borderBottomWidth: 1,
//     //     justifyContent: 'center',
//     //     height: 50,
//     //   },
//     //   rowBack: {
//     //     alignItems: 'center',
//     //     backgroundColor: '#DDD',
//     //     flex: 1,
//     //     flexDirection: 'row',
//     //     justifyContent: 'space-between',
//     //     paddingLeft: 15,
//     //   },
//     //   backRightBtn: {
//     //     alignItems: 'center',
//     //     bottom: 0,
//     //     justifyContent: 'center',
//     //     position: 'absolute',
//     //     top: 0,
//     //     width: 75,
//     //   },
//     //   backRightBtnLeft: {
//     //     backgroundColor: 'blue',
//     //     right: 75,
//     //   },
//     //   backRightBtnRight: {
//     //     backgroundColor: 'red',
//     //     right: 0,
//     //   },
//     //   controls: {
//     //     alignItems: 'center',
//     //     marginBottom: 30,
//     //   },
//     //   switchContainer: {
//     //     flexDirection: 'row',
//     //     justifyContent: 'center',
//     //     marginBottom: 5,
//     //   },
//     //   switch: {
//     //     alignItems: 'center',
//     //     borderWidth: 1,
//     //     borderColor: 'black',
//     //     paddingVertical: 10,
//     //     width: 100,
//     //   },
//     // });

//     // constructor(props) {
//     //     super(props);
//     //     this.ds = new DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//     //     this.state = {
//     //       basic: true,
//     //       listViewData: Array(20).fill('').map((_, i) => `item #${i}`),
//     //     };
//     //   }

//     //   deleteRow(secId, rowId, rowMap) {
//     //     rowMap[`${secId}${rowId}`].closeRow();
//     //     const newData = [...this.state.listViewData];
//     //     newData.splice(rowId, 1);
//     //     this.setState({ listViewData: newData });
//     //   }


//     // render(){
//     //     return(
//     //         <SwipeListView
//     //         disableRightSwipe={true}
//     //         data={this.state.listViewData}
//     //         renderItem={ (data, rowMap) => (
//     //             <View style={styles.rowFront}>
//     //                 <Text>I am {data.item} in a SwipeListView</Text>
//     //             </View>
//     //         )}
//     //         renderHiddenItem={ (data, rowMap) => (
//     //             <View style={styles.rowBack}>
//     //                 <Text>Left</Text>
//     //                 <Text>Right</Text>
//     //             </View>
//     //         )}s
//     //         //leftOpenValue={75}
//     //         rightOpenValue={-75}
//     //     />
//     //     )
//     // }
// }

// const styles=StyleSheet.create({
//     row:{
//         //sswidth:wp(100),
//         width:wp(70),
//         height:wp(20),
//         marginLeft:wp(5),
//         flexDirection:'row',
//         marginTop:hp(1),
//         alignItems:'center',
//         backgroundColor:'blue'
        
//     },
//     rowFront:{
//         width:wp(100),
//         height:wp(15),
//         backgroundColor:'blue'
//     },
//     rowBack:{
//         width:wp(20),
//         height:wp(15),
//         backgroundColor:'red'
//     },
    // itemNameText:{
    //     fontFamily:'Roboto-Regular',
    //     color:'#000000',
    //     fontSize:14,
    //     marginLeft:wp(3),
    //     fontWeight:'bold'
    // },
    // priceText:{
    //     color:'#969696',
    //     fontFamily:'Roboto-Regular',
    //     fontSize:13,
    //     width:wp(60),
    //     backgroundColor:'red',
    //     marginLeft:wp(3),
    // }
// })

// export default Messages



// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////


// // import * as React from 'react';
// // import { View, Text, TextInput,
// //  FooterTab, Button, TouchableOpacity, ScrollView, StyleSheet,
// //  ActivityIndicator, Header, FlatList } from 'react-native';
// //  import { Table, Row, Rows } from 'react-native-table-component';
// // import { createStackNavigator } from 'react-navigation';
// // import { SearchBar } from 'react-native-elements';

// // import { Constants } from 'expo';

// // // You can import from local files
// // import AssetExample from './components/AssetExample';

// // // or any pure javascript modules available in npm
// // import { Card } from 'react-native-paper';
// // import Swipeout from 'react-native-swipeout';


// // export default class App extends React.Component {

// // constructor() {
// //    super();
// //    this.state = {
// //      AbcSdata: null,
// //      loading: true,
// //      search: '',
// //      tableData: [], qrData: '', selectedPriority: '',
// //      selectedIssue: '', selectedReason: '', selectedTriedRestart: '',
// //      selectedPowerLED: '', selectedBurning: '', selectedNoise: '',
// //      rowID:'',
// //      activeRow: null
// //    };
// //    this.setDate = this.setDate.bind(this);
// //  }

// // swipeBtns = [{
// //  text: 'Delete',
// //  type: 'delete',
// //  backgroundColor: 'red',
// //  underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
// //  onPress: () => { 
// //    console.log("Deleting Row with Id ", this.state.activeRow);
// //    this.deleteNote(this.state.activeRow);
// //  }
// // }];

// // removeItem = (items, i) =>
// //  items.slice(0, i).concat(items.slice(i + 1, items.length));

// // deleteNote = (rowIndex) => {

// //  //add your custome logic to delete the array element with index.
// //  // this will temporary delete from the state.
// //  let filteredData = this.removeItem(this.state.AbcSdata,rowIndex);
// //  this.setState({AbcSdata: [] },()=> {
// //    this.setState({AbcSdata: filteredData },()=> {console.log("Row deleted.", rowIndex)});
// //  });
// // };

// //  setDate(newDate) {
// //  }


// //  _loadInitialState = async () => {
// //    const { navigation } = this.props;
// //    const qdata = navigation.getParam('data', 'NA').split(',');
// //    var len = qdata.length;
// //    const tData = [];
// //    console.log(len);
// //    for (let i = 0; i < len; i++) {
// //      var data = qdata[i].split(':');
// //      const entry = []
// //      entry.push(`${data[0]}`);
// //      entry.push(`${data[1]}`);
// //      tData.push(entry);
// //    }
// //    this.setState({ tableData: tData });

// //    console.log(this.state.tableData);
// //    this.setState({ loading: true });

// //  }

// //  componentDidMount() {
// //    //this._loadInitialState().done();
// //    this.createViewGroup();
// //  }

// //  createViewGroup = async () => {
// //    try {
// //      const response = await fetch(
// //        '/Dsenze/userapi/sensor/viewsensor',
// //        {
// //          method: 'POST',
// //          headers: {
// //            Accept: 'application/json',
// //            'Content-Type': 'application/json',
// //          },
// //          body: JSON.stringify({
// //            "password": 'admin',
// //            "username": 'admin',
// //            "startlimit": "0",
// //            "valuelimit": "10",
// //          }),
// //        }
// //      );

// //      const responseJson = await response.json();

// //      const { sensorData } = responseJson;


// //      this.setState({
// //        AbcSdata: sensorData,
// //        loading: false,
// //      });
// //    } catch (e) {
// //      console.error(e);
// //    }
// //  };



// //  updateSearch = search => {
// //    this.setState({ search });
// //  };
// //  keyExtractor = ({ id }) => id.toString();
// //  keyExtractor = ({ inventory }) => inventory.toString();

// // onSwipeOpen(rowId, direction) {
// //    if(typeof direction !== 'undefined'){
// //        this.setState({activeRow:rowId});
// //        console.log("Active Row",rowId);
// //    }
// // }

// //  renderItem = ({ item, index }) => (

// //    <Swipeout
// //      right={this.swipeBtns}
// //      close={(this.state.activeRow !== index)}
// //      rowID={index}
// //      sectionId= {1}
// //      autoClose = {true}
// //      onOpen = {(secId, rowId, direction) => this.onSwipeOpen(rowId, direction)}

// //    >
// //      <TouchableOpacity
// //        style={styles.item}
// //        activeOpacity={0.4}
// //        onPress={this.viewNote(item)} >

// //        <Text >Id : {item.id}</Text>
// //        <Text>Inventory : {item.inventory}</Text>
// //        <Text>SensorType : {item.sensorType}</Text>
// //        <Text>TypeName : {item.typeName}</Text>
// //      </TouchableOpacity>
// //    </Swipeout>
// //  );
// //  viewNote =(item) => {
// //     this.props.navigator.push({
// //       title: 'The Note',
// //       component: this.ViewNote,
// //       passProps: {
// //         noteText: item,
// //         noteId: this.noteId(item),
// //       }
// //     });
// //    console.log("View Note Success");
// //  }


// //  onClickListener = (viewId) => {
// //    if (viewId == 'tag') {
// //      this.props.navigation.navigate('AddSensors');
// //    }
// //  }

// //  renderSeparator = () => {
// //    return (
// //      <View
// //        style={{
// //          height: 1,
// //          width: "86%",
// //          backgroundColor: "#CED0CE",
// //        }}
// //      />
// //    );
// //  };

// //  render() {
// //    const { loading, AbcSdata } = this.state;
// //    const state = this.state;

// //    return (
// //      <ScrollView>
// //        <View style={styles.container1}>


// //          <Button full rounded
// //            style={{ fontSize: 20, color: 'green' }}
// //            styleDisabled={{ color: 'red' }}
// //            onPress={() => this.onClickListener('tag')}
// //            title="Add Sensors"
// //          >
// //            Add Sensors
// //                        </Button>

// //        </View>

// //        <View style={styles.container1}>
// //          {this.state.loading ? (
// //            <ActivityIndicator size="large" />

// //          ) :

// //            (
// //              <FlatList
// //                data={AbcSdata}
// //                renderItem={this.renderItem}
// //                keyExtractor={this.keyExtractor}
// //                extraData= {this.state.activeRow}
// //                ItemSeparatorComponent={this.renderSeparator}

// //              />
// //            )}
// //        </View>


// //        <View>
// //          <Text
// //            style={{ alignSelf: 'center', fontWeight: 'bold', color: 'black' }} >
// //            Inventory Details
// //              </Text>

// //          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff', padding: 10, paddingBottom: 10 }}>
// //            <Rows data={state.tableData} textStyle={styles.text} />
// //          </Table>
// //        </View>
// //      </ScrollView>
// //    );
// //  }
// // }

// // const styles = StyleSheet.create({
// //  container: {
// //    flex: 1,
// //    justifyContent: 'center',
// //    paddingTop: Constants.statusBarHeight,
// //    backgroundColor: '#ecf0f1',
// //    padding: 8,
// //  },
// //  paragraph: {
// //    margin: 24,
// //    fontSize: 18,
// //    fontWeight: 'bold',
// //    textAlign: 'center',
// //  },
// // });