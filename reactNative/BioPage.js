'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <Text 
                	style={[styles.view1Navbar5]}>
                	Cooper's Bio
                </Text>
            </View>
            <View style={[styles.view2]}>
                <Image
                	source={{uri: 'https://scontent-lga1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/390469_103735846412710_468610899_n.jpg?oh=c08c11408e17d55d11c05431a3f9efdb&oe=5683D084'}} resizeMode='cover' 
                	style={[styles.view2Image6]}>
                </Image>
            </View>
            <View style={[styles.view3]}>
                <Text 
                	style={[styles.view3Text7]}>
                	
                
                
                
                
                
                
                
                Cooper is a 4 year old Golden Retriever. He attended Lehigh University, where he received a Masters in Sticks. He enjoys swimming, carrying sticks, chewing bones, tennis balls, and playing outside.
                </Text>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view2:{
      }, 
      view3:{
      }, 
      view1Navbar5:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 32,
          paddingBottom: 26,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 21,
          textAlign: 'center',
          width: 375,
          height: NaN,
      }, 
      view2Image6:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: 313.75,
      }, 
      view3Text7:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 13,
          textAlign: 'center',
          width: 375,
          height: 137.5,
      }, 
      view4Tabbarios8:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 27,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
      }, 
})



