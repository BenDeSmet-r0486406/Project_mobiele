import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { AppRegistry, Text, View } from 'react-native';

var styles = StyleSheet.create({
    /* ALGEMEEN */
    
    button:
    {
        backgroundColor: '#303030',
        padding: 16,
    },
    buttonText:
    {
        color: 'white',
        textAlign: 'center',
        fontSize:  24,
    },

    /* HOMESCREEN*/
    homeView: 
    {
        flex: 1,
        flexDirection: 'column',
    },

    /* GAMESCREEN */
    scoreBoardView:
    {
        backgroundColor: '#333',
        padding: 10,
    },
    scoreBoardText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        
    },
    questionView:
    {
        flex: 12,
        padding: 20,
    },
    questionText:
    {
        fontSize: 36,
        textAlign: 'center',
    },
    buttonsView:
    {
        flex: 4,
    },
    refuseButton:
    {
        backgroundColor: '#e74c3c',
        padding: 16,
    },
    acceptButton:
    {
        backgroundColor: '#2ecc71',
        padding: 16,
    },

    /* QUESTIONSSCREEN */
    listHeader:
    {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
    },
    listItem:
    {
        padding: 10,
        fontSize: 14,
        backgroundColor: '#fefefe',
    },
});
module.exports = styles;