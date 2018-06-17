import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { AppRegistry, Text, View } from 'react-native';

var styles = StyleSheet.create({
    /* ALGEMEEN */
    
    Button:
    {
        backgroundColor: '#303030',
        padding: 16,
    },
    ButtonText:
    {
        color: 'white',
        textAlign: 'center',
        fontSize:  24,
    },

    /* HOMESCREEN*/
    HomeView: 
    {
        flex: 1,
        flexDirection: 'column',
    },
    TestText:
    {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        flex: 12,
    },

    /* GAMESCREEN */
    ScoreBoardView:
    {
        flex: 1,
        backgroundColor: 'lightpink',
    },
    QuestionView:
    {
        flex: 12,
        backgroundColor: 'lightblue',
        padding: 20,
    },
    QuestionText:
    {
        fontSize: 36,
        textAlign: 'center',
    },
    ButtonsView:
    {
        flex: 4,
    },

    /* QUESTIONSSCREEN */
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