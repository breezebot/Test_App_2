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
            <View >
                <Text 
                	style={[styles.view1Navbar6]}>
                	Find a Dog Near You
                </Text>
            </View>
            <View style={[styles.view2]}>
                <MapView
                	latitude={40.7050758} longitude={-74.0091604} latitudeDelta={0.001} longitudeDelta={0.001} pitchEnabled={true} mapType={'standard'}
                	style={[styles.view2Mapview7]}>
                </MapView>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view2:{
      }, 
      view4Tabbarios5:{
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
      view1Navbar6:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 40,
          paddingBottom: 30,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 21,
          textAlign: 'center',
          width: 375,
      }, 
      view2Mapview7:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: 291.25,
      }, 
})



