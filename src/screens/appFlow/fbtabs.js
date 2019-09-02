  
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'



class FacebookTabBar extends React.Component {
  icons = [];

  constructor(props) {
    super(props);
    this.icons = [];
    //this.lb=[];
  }

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue.bind(this));
  }

  setAnimationValue({ value, }) {
    this.icons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
      // lb.setNativeProps({
      //   style: {
      //     color: this.iconColor(progress),
      //   },
      // });
      
    });
  }

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  render() {
    console.log('tabs:',this.props.style)

    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image
            source={this.props.tabs[i].iconSrc}
            style={{width:15,height:15,marginRight:4, marginTop:10}}
            name={tab}
            size={15}
            color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { this.icons[i] = icon; }}
          />
          <Text style={{marginTop:10}}>{this.props.tabs[i].tabLabel}</Text>
          </View>
          {this.props.activeTab===i?[
            <View style={{height:5,width:wp(20),backgroundColor:'red',marginTop:10}}></View>
          ]:[
            <View style={{height:5,width:wp(20),backgroundColor:'#ffffff',marginTop:10}}></View>
          ]}
          
        </TouchableOpacity>;
      })}
      <TouchableOpacity onPress={()=>this.props.nav.navigate('ExploreScreen')} style={{marginLeft:20, marginBottom:5}}>
          <Image source={require('../../assets/icons/doubleDash.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:20, marginBottom:5}}>
          <Image source={require('../../assets/icons/gridActive.png')}/>
      </TouchableOpacity>
    </View>;
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingBottom: 10,
  },
  tabs: {
    height: 55,
    //width:wp(90),
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});

export default FacebookTabBar;