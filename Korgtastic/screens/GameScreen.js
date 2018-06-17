import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View,TextInput,ScrollView,TouchableHighlight,Image, ImageBackground} from 'react-native';
import CustomButton from '../components/CustomButton.js';

export default class GameScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Korgtastic',
        headerTintColor: '#ffffff',
        headerStyle:
            {
                backgroundColor: '#000000',
            },

    });

    constructor(props) {
		super(props);
        this.state = 
        {}
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.ScoreBoardView}>
                    <Text>Scoreboard</Text>
                </View>
                <View style={styles.QuestionView}>
                    <Text style={styles.QuestionText}>question goes here</Text>
                </View>
                <View style={styles.ButtonsView}>
                    <CustomButton
                        navigation={this.props.navigation}
                        text='Doen'
                        color='#2ecc71' />
                    <CustomButton
                        navigation={this.props.navigation}
                        text='Weigeren'
                        color='#e74c3c' />
                </View>
            </View>
        );
    }
}