'use strict';

var React = require('react-native');
var TestApp2 = require('./TestApp2.js');
var TestApp = require('./TestApp.js');
var BioPage = require('./BioPage.js');
var SearchPage = require('./SearchPage.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'favorites'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view4Tabbarios5]}
        >
        <TabBarIOS.Item 
        systemIcon='favorites'
        selected={this.state.selectedTab === 'favorites'}
        onPress={() => {
          this.setState({
            selectedTab: 'favorites',
          });
        }}>
        <TestApp />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='most-recent'
        selected={this.state.selectedTab === 'most-recent'}
        onPress={() => {
          this.setState({
            selectedTab: 'most-recent',
          });
        }}>
        <BioPage />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='search'
        selected={this.state.selectedTab === 'search'}
        onPress={() => {
          this.setState({
            selectedTab: 'search',
          });
        }}>
        <SearchPage />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    view4Tabbarios5:{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 23,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
    }, 
});
