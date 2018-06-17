import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View, TextInput,ScrollView,TouchableHighlight,Image, ImageBackground} from 'react-native';

export default class HomeScreen extends React.Component {

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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.homeView}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate('Game')}>
                    <Text style={styles.buttonText}>Start game</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate("Questions")}>
                    <Text style={styles.buttonText}>View questions</Text>
                </TouchableHighlight>
            </View>
        );
    }
}