import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { AppRegistry, Text, View } from 'react-native';

var styles = StyleSheet.create({
    TestText:
    {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
    },
    HomeView: 
    {
        flex: 1,
        flexDirection: 'column',
    },
    Button:
    {
        height: 30,
        backgroundColor: '#303030',
        marginBottom: 10,
    },
    ButtonText:
    {
        color: 'white',
        textAlign: 'center',
        fontSize:  20,
    },
    ListHeader:
    {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
      },
      ListItem:
      {
        padding: 10,
        fontSize: 14,
        backgroundColor: '#fefefe',
      },
});
module.exports = styles;