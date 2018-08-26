import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TouchableHighlight, Image, AsyncStorage } from 'react-native';
import opdrachtenData from '../opdrachten/opdrachten.json';

export default class HomeScreen extends React.Component {

    static navigationOptions = () => ({
        header: null
    });

    constructor(props) {
		super(props);
        this.state = 
        {}
    }

    componentDidMount = async () => {
        try{
            let opdrachtjes = await AsyncStorage.getItem('opdrachten');
            if(opdrachtjes == null){
                AsyncStorage.setItem('opdrachten', JSON.stringify(opdrachtenData));
            }else{
                let parsed = JSON.parse(opdrachtjes);
            }
        }
        catch (error){
            AsyncStorage.setItem('opdrachten', JSON.stringify(opdrachtenData));
        }
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
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate("AddQuestion")}
                    underlayColor="#2980b9">
                    <Text style={styles.buttonText}>ADD QUESTION</Text>
                </TouchableHighlight>
            </View>
        );
    }
}