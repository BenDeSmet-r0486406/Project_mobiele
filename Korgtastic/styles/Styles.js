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
        paddingTop : 35,
        paddingBottom : 5,
        flexDirection : 'row',
        backgroundColor: '#333',
        padding: 10,
    },
    scoreBoardText: {
        flex: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    scoreBoardNameText: {
        flex: 9,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
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

    /* PLAYERSSCREEN */

    addPlayerButtonIcon:
    {
        fontSize: 36,
        color: '#999',
        alignSelf: 'center',
    },
    playerInput:
    {
        height: 50,
        fontSize: 22,
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