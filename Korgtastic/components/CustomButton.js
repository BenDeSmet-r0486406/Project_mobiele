import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View, SectionList, TouchableHighlight} from 'react-native';

export default class CustomButton extends React.Component {

    render() {
        const { navigate } = this.props.navigation;

        let buttonColor = this.props.color ? this.props.color : '#303030';
        let buttonStyle = {
            backgroundColor: buttonColor
        };
        
        return (
            <TouchableHighlight
                style={[styles.Button, buttonStyle]}
                onPress={() => navigate(this.props.navigateTo)}>
                <Text style={styles.ButtonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}