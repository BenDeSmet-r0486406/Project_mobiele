import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TouchableHighlight, Image } from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = () => ({
        header: null
    });

    constructor(props) {
		super(props);
        this.state = 
        {}
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <Image source={require('../img/logo.png')}
                    style={styles.logoImage}
                    resizeMode='contain' />
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate("Players", {players: []})}
                    underlayColor="#2980b9">
                    <Text style={styles.buttonText}>CREATE GAME</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate("Questions")}
                    underlayColor="#2980b9">
                    <Text style={styles.buttonText}>VIEW QUESTIONS</Text>
                </TouchableHighlight>
            </View>
        );
    }
}