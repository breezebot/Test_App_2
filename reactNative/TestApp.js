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
                	style={[styles.view1Navbar6]}>
                	Top Dog Pictures of the Day
                </Text>
            </View>
            <View style={[styles.view2]}>
                <ScrollView 
                dataSource={['http://www.oldyelladogranch.com/puppies.jpg', 'http://ak-hdl.buzzfed.com/static/enhanced/webdr02/2013/4/18/0/enhanced-buzz-11179-1366259657-8.jpg', 'https://scontent-lga1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/1069194_2523046039889_1801474618_n.jpg?oh=e3a4cf4b3483c78a114e709cfdcac9cc&amp;oe=567D3E03', 'http://editorial.designtaxi.com/news-dogs280314/1.jpg', 'http://www.sellcell.com/blog/wp-content/uploads/2014/03/dog-apps.jpg']}
                style={[styles.view2Scrollview7]}>
                </ScrollView>
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
          height: 165,
      }, 
      view4Tabbarios5:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 23,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
      }, 
      view1Navbar6:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          width: 375,
          height: NaN,
      }, 
      view2Scrollview7:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: 307.5,
      }, 
})



